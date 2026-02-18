import { LoginInput } from "./login.schema";

export const loginUser = async (data: LoginInput): Promise<{ token: string; user: any }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Dummy Credentials Logic
            let user = null;

            if (data.email === "khush@example.com" && data.password === "password123") {
                user = { id: "1", name: "Khush", email: "khush@example.com", role: "student" };
            } else if (data.email === "jitesh@example.com" && data.password === "password123") {
                user = { id: "2", name: "Jitesh", email: "jitesh@example.com", role: "student" };
            } else if (data.email === "kamlesh@example.com" && data.password === "password123") {
                user = { id: "3", name: "Kamlesh Tiwari", email: "kamlesh@example.com", role: "mentor" };
            }

            if (user) {
                // Determine if the role matches the requested role in UI (optional strictness)
                // For testing, we can just return the user's actual role or the requested one.
                // Let's rely on the hardcoded user role.

                resolve({
                    token: "mock-jwt-token-" + Date.now(),
                    user: {
                        id: user.id,
                        email: user.email,
                        role: user.role, // Use the hardcoded role
                        full_name: user.name,
                    },
                });
            } else {
                reject(new Error("Invalid credentials. Try khush@example.com / password123"));
            }
        }, 1000);
    });
};
