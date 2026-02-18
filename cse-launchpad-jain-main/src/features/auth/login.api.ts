import { LoginInput } from "./login.schema";

export const loginUser = async (data: LoginInput): Promise<{ token: string }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Mock validation
            if (data.email === "admin@example.com" && data.password === "password123") {
                resolve({ token: "fake-jwt-token-12345" });
            } else {
                reject(new Error("Invalid email or password"));
            }
        }, 1000); // Simulate network delay
    });
};
