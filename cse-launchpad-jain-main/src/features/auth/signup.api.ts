import { SignupInput } from "./signup.schema";
import { supabase } from "@/supabase";

export const registerUser = async (data: SignupInput): Promise<{ token: string; user: any }> => {
    const { data: authData, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
            data: {
                full_name: data.name,
                role: data.role,
            },
        },
    });

    if (error) {
        throw new Error(error.message);
    }

    if (!authData.user) {
        throw new Error("Registration failed");
    }

    // For email confirmation flows, session might be null initially
    return {
        token: authData.session?.access_token || "",
        user: {
            id: authData.user.id,
            email: authData.user.email || "",
            role: authData.user.user_metadata?.role || "student",
            full_name: authData.user.user_metadata?.full_name || "",
        },
    };
};
