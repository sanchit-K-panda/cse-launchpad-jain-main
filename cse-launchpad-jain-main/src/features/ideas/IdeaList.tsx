import { useGetIdeas } from "./useIdea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const IdeaList = () => {
    const { data: ideas, isLoading, isError } = useGetIdeas();

    if (isLoading) {
        return <div className="text-center text-slate-400 animate-pulse">Loading ideas...</div>;
    }

    if (isError) {
        return <div className="text-center text-red-400">Failed to load ideas.</div>;
    }

    if (!ideas || ideas.length === 0) {
        return <div className="text-center text-slate-400">No ideas pitched yet.</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ideas.map((idea) => (
                <Card key={idea.id} className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group flex flex-col h-full">
                    <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                                {idea.category}
                            </Badge>
                            <span className="text-xs text-slate-500 flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {idea.date}
                            </span>
                        </div>
                        <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {idea.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-1 text-slate-400 text-xs">
                            <User className="w-3 h-3" />
                            {idea.author}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-slate-300 leading-relaxed line-clamp-3">
                            {idea.description}
                        </p>
                    </CardContent>
                    <CardFooter className="pt-4 border-t border-white/5">
                        <Button variant="ghost" className="w-full text-slate-400 hover:text-white hover:bg-white/5 group/btn">
                            View Details <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};
