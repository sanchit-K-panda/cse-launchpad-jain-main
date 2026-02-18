import { LoginInput } from "./login.schema";

export const loginUser = async (data: LoginInput): Promise<{ token: string; user: { name: string; email: string; role: string } }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Mock validation - Allow any valid input for development
            if (data.email && data.password.length >= 6) {
                resolve({
                    token: "fake-jwt-token-" + Math.random().toString(36).substring(7),
                    user: {
                        name: "Test User",
                        email: data.email,
                        role: data.role // Return the selected role
                    }
                });
            } else {
                reject(new Error("Invalid email or password"));
            }
        }, 1000); // Simulate network delay
    });
};
