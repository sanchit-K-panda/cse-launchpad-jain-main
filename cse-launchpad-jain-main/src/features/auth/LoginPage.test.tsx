import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./LoginPage";

// Mock the hook
const mutateMock = vi.fn();
vi.mock("./useLogin", () => ({
    useLogin: () => ({
        mutate: mutateMock,
        isPending: false,
        error: null,
    }),
}));

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { retry: false },
    },
});

const renderComponent = () => {
    render(
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>
        </QueryClientProvider>
    );
};

describe("LoginPage", () => {
    it("renders the login form correctly", () => {
        renderComponent();
        expect(screen.getByText("Welcome back")).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });

    it("shows validation errors for invalid input", async () => {
        renderComponent();

        // Submit empty form
        fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

        expect(await screen.findByText(/please enter a valid email address/i)).toBeInTheDocument();
        expect(await screen.findByText(/password must be at least 6 characters/i)).toBeInTheDocument();
    });

    it("calls login mutation with correct data on successful submit", async () => {
        renderComponent();

        const emailInput = screen.getByLabelText("Email");
        const passwordInput = screen.getByLabelText("Password");
        const submitBtn = screen.getByRole("button", { name: /sign in/i });

        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });
        fireEvent.click(submitBtn);

        await waitFor(() => {
            expect(mutateMock).toHaveBeenCalledWith(
                expect.objectContaining({
                    email: "test@example.com",
                    password: "password123",
                }),
                expect.any(Object)
            );
        });
    });
});
