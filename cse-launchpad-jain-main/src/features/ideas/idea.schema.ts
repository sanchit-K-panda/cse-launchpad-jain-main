import { z } from "zod";

export const ideaSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters").max(100, "Title must be under 100 characters"),
    description: z.string().min(20, "Please provide more detail (at least 20 characters)").max(2000, "Description is too long"),
    category: z.enum(["Technology", "Healthcare", "Education", "Environment", "Social Impact", "Other"]).default("Technology"),
    isPublic: z.boolean().default(true),
});

export type IdeaInput = z.infer<typeof ideaSchema>;
