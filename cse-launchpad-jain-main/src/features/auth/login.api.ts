import { LoginInput } from "./login.schema";
import { supabase } from "@/supabase";

export const loginUser = async (data: LoginInput): Promise<{ token: string; user: any }> => {
    const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
    });

    if (error) {
        throw new Error(error.message);
    }

    if (!authData.session) {
        throw new Error("No session created");
    }

    return {
        token: authData.session.access_token,
        user: {
            id: authData.user.id,
            email: authData.user.email,
            role: authData.user.user_metadata?.role || "student",
            full_name: authData.user.user_metadata?.full_name || "",
        },
    };
};
