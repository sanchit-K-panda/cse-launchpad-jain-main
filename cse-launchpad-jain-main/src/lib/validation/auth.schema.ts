import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters"),
    rememberMe: z.boolean().default(false),
    role: z.enum(["student", "mentor"]).default("student"),
});

export type LoginInput = z.infer<typeof loginSchema>;
