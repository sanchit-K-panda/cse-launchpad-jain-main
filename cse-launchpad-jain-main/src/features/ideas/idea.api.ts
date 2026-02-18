import { IdeaInput } from "./idea.schema";
import { supabase } from "@/supabase";

export const submitIdea = async (data: IdeaInput): Promise<{ id: string; status: 'success' }> => {
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData.user) {
        throw new Error("User not authenticated");
    }

    const { data: ideaData, error } = await supabase
        .from('ideas')
        .insert([
            {
                title: data.title,
                description: data.description,
                category: data.category,
                is_public: data.isPublic,
                user_id: userData.user.id
            }
        ])
        .select()
        .single();

    if (error) {
        console.error("Supabase error:", error);
        throw new Error(error.message);
    }

    return {
        id: ideaData.id,
        status: 'success'
    };
};

export const fetchIdeas = async (): Promise<any[]> => {
    const { data, error } = await supabase
        .from('ideas')
        .select(`
            *,
            profiles (full_name)
        `)
        .order('created_at', { ascending: false });

    if (error) {
        throw new Error(error.message);
    }

    // Map response to match expected frontend structure if needed, or update frontend
    return data.map(idea => ({
        id: idea.id,
        title: idea.title,
        description: idea.description,
        category: idea.category,
        isPublic: idea.is_public,
        author: idea.profiles?.full_name || "Unknown Author",
        date: new Date(idea.created_at).toLocaleDateString()
    }));
};
