import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ideaSchema, IdeaInput } from "./idea.schema";
import { useSubmitIdea } from "./useIdea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const PitchIdeaForm = () => {
    const { mutate: submitIdea, isPending } = useSubmitIdea();

    const form = useForm<IdeaInput>({
        resolver: zodResolver(ideaSchema),
        defaultValues: {
            title: "",
            description: "",
            category: "Technology",
            isPublic: true,
        },
    });

    const onSubmit = (data: IdeaInput) => {
        submitIdea(data, {
            onSuccess: () => {
                form.reset();
            },
        });
    };

    return (
        <Card className="w-full max-w-2xl mx-auto bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:shadow-cyan-500/10 hover:border-white/20">
            <CardHeader className="text-center pb-8 border-b border-white/5">
                <CardTitle className="text-3xl font-bold text-white mb-2">Pitch Your Idea</CardTitle>
                <CardDescription className="text-slate-400 text-lg">
                    Share your innovative concept with the community and mentors.
                </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className="space-y-3 group">
                                    <FormLabel className="text-slate-300 text-sm font-medium uppercase tracking-wider group-focus-within:text-cyan-400 transition-colors">Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="e.g., AI-Powered Recycling Bin"
                                            {...field}
                                            className="bg-slate-900/50 border-white/10 text-white h-12 focus-visible:ring-cyan-500/50 transition-all duration-300 focus:bg-slate-900/80"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-400" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="author"
                            render={({ field }) => (
                                <FormItem className="space-y-3 group">
                                    <FormLabel className="text-slate-300 text-sm font-medium uppercase tracking-wider group-focus-within:text-cyan-400 transition-colors">Your Name (Optional)</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Anonymous"
                                            {...field}
                                            className="bg-slate-900/50 border-white/10 text-white h-12 focus-visible:ring-cyan-500/50 transition-all duration-300 focus:bg-slate-900/80"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-400" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem className="space-y-3 group">
                                    <FormLabel className="text-slate-300 text-sm font-medium uppercase tracking-wider group-focus-within:text-cyan-400 transition-colors">Category</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="bg-slate-900/50 border-white/10 text-white h-12 focus:ring-cyan-500/50 transition-all duration-300 focus:bg-slate-900/80">
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="bg-slate-900 border-white/10 text-white backdrop-blur-xl">
                                            {["Technology", "Healthcare", "Education", "Environment", "Social Impact", "Other"].map((category) => (
                                                <SelectItem key={category} value={category} className="focus:bg-cyan-500/20 focus:text-cyan-300 cursor-pointer transition-colors">
                                                    {category}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className="text-red-400" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="space-y-3 group">
                                    <FormLabel className="text-slate-300 text-sm font-medium uppercase tracking-wider group-focus-within:text-cyan-400 transition-colors">Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Describe the problem and your solution..."
                                            className="min-h-[150px] bg-slate-900/50 border-white/10 text-white resize-none focus-visible:ring-cyan-500/50 transition-all duration-300 focus:bg-slate-900/80 p-4 leading-relaxed"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-400" />
                                </FormItem>
                            )}
                        />

                        <div className="pt-4">
                            <Button
                                type="submit"
                                className="w-full h-12 text-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                disabled={isPending}
                            >
                                {isPending && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                                {isPending ? "Submitting..." : "Pitch Idea"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};
