import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/features/auth/login.api";
import { LoginInput } from "@/lib/validation/auth.schema";

export const useLogin = () => {
    return useMutation({
        mutationFn: (data: LoginInput) => loginUser(data),
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.user.role);
            localStorage.setItem("user", JSON.stringify(data.user));
        },
    });
};
