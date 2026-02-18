import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { submitIdea, fetchIdeas } from "./idea.api";
import { IdeaInput } from "./idea.schema";
import { useToast } from "@/components/ui/use-toast";

export const useSubmitIdea = () => {
    const { toast } = useToast();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: IdeaInput) => submitIdea(data),
        onSuccess: () => {
            toast({
                title: "Idea Pitched Successfully!",
                description: "Your idea has been submitted to the Ideaverse.",
                variant: "default",
            });
            queryClient.invalidateQueries({ queryKey: ["ideas"] });
        },
        onError: (error) => {
            toast({
                title: "Submission Failed",
                description: error.message || "Something went wrong.",
                variant: "destructive",
            });
        }
    });
};

export const useGetIdeas = () => {
    return useQuery({
        queryKey: ["ideas"],
        queryFn: fetchIdeas,
    });
};
