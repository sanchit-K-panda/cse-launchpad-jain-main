import { SignupInput } from "./signup.schema";

import { sql } from "@/lib/db";

export const registerUser = async (data: SignupInput): Promise<{ token: string; user: { name: string; email: string; role: string } }> => {

    // 1. Check if user exists
    const existingUsers = await sql`
        SELECT id FROM users WHERE email = ${data.email}
    `;

    if (existingUsers.length > 0) {
        throw new Error("Email already registered");
    }

    // 2. Insert new user
    // Note: Storing password in plain text for this demo.
    const result = await sql`
        INSERT INTO users (name, email, password, role)
        VALUES (${data.name}, ${data.email}, ${data.password}, ${data.role})
        RETURNING *
    `;

    const newUser = result[0];

    return {
        token: "neon-jwt-token-" + Math.random().toString(36).substring(7),
        user: {
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
        },
    };
};
