import { SignupInput } from "./signup.schema";

export const registerUser = async (data: SignupInput): Promise<{ token: string; user: any }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: "mock-session-token",
                user: {
                    id: Math.random().toString(36).substring(7),
                    email: data.email,
                    role: data.role,
                    full_name: data.name,
                },
            });
        }, 1000);
    });
};
