import { LoginInput } from "./login.schema";

import { sql } from "@/lib/db";

export const loginUser = async (data: LoginInput): Promise<{ token: string; user: { name: string; email: string; role: string } }> => {
    // 1. Query user from DB
    const users = await sql`
        SELECT * FROM users WHERE email = ${data.email}
    `;

    if (users.length === 0) {
        throw new Error("Invalid email or password");
    }

    const user = users[0];

    // 2. Validate password (PLAIN TEXT CHECK - INSECURE FOR PRODUCTION)
    if (user.password !== data.password) {
        throw new Error("Invalid email or password");
    }

    // 3. Return user info and fake token
    return {
        token: "neon-jwt-token-" + Math.random().toString(36).substring(7),
        user: {
            name: user.name,
            email: user.email,
            role: user.role
        }
    };
};
