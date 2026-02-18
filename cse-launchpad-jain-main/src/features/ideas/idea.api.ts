import { IdeaInput } from "./idea.schema";


import { sql } from "@/lib/db";

export const submitIdea = async (data: IdeaInput): Promise<{ id: string; status: 'success' }> => {
    // Basic validation or transformation could happen here
    // In a real app, you'd want to handle user authentication and get the real user ID

    // Note: The 'ideas' table needs to exist.
    // CREATE TABLE IF NOT EXISTS ideas (
    //   id SERIAL PRIMARY KEY,
    //   title TEXT NOT NULL,
    //   description TEXT NOT NULL,
    //   category TEXT NOT NULL,
    //   is_public BOOLEAN DEFAULT true,
    //   author TEXT DEFAULT 'Anonymous',
    //   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    // );

    const result = await sql`
      INSERT INTO ideas (title, description, category, is_public, author)
      VALUES (${data.title}, ${data.description}, ${data.category}, ${data.isPublic}, 'Current User')
      RETURNING id
    `;

    return {
        id: result[0].id,
        status: 'success'
    };
};

export const fetchIdeas = async () => {
    const ideas = await sql`
        SELECT * FROM ideas ORDER BY created_at DESC
    `;

    // Map DB fields to FE schema if necessary (e.g. snake_case to camelCase)
    // For now assuming slight differences or handling in component, 
    // but best practice is to align them.
    return ideas.map(idea => ({
        ...idea,
        isPublic: idea.is_public,
        date: new Date(idea.created_at).toISOString().split('T')[0]
    }));
};
