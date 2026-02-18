import { useMutation } from "@tanstack/react-query";
import { registerUser } from "./signup.api";
import { SignupInput } from "./signup.schema";

export const useSignup = () => {
    return useMutation({
        mutationFn: (data: SignupInput) => registerUser(data),
        onSuccess: (data) => {
            // Store token and user data
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
        },
    });
};
