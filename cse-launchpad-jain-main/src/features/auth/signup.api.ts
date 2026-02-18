import { SignupInput } from "./signup.schema";

export const registerUser = async (data: SignupInput): Promise<{ token: string; user: { name: string; email: string; role: string } }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: "fake-jwt-token-" + Math.random().toString(36).substring(7),
                user: {
                    name: data.name,
                    email: data.email,
                    role: data.role,
                },
            });
        }, 1000); // Simulate network delay
    });
};
