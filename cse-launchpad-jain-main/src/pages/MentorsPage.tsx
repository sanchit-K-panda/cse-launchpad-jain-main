
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, GraduationCap } from "lucide-react";

interface Mentor {
    name: string;
    role: string;
    description?: string;
    linkedin?: string;
    image?: string;
}

const mentors: Mentor[] = [
    {
        name: "Prof. (Dr.) Deepak Sinha",
        role: "Professor & Mentor",
        description: "Guiding students towards academic and professional excellence with years of expertise.",
        linkedin: "https://www.linkedin.com/in/prof-dr-deepak-sinha-33414a19?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        image: "/images/deepak-sinha.png"
    },
    {
        name: "Kamlesh Tiwari",
        role: "Professor & Mentor",
        description: "Experienced educator and mentor, helping students navigate their career paths.",
        linkedin: "https://www.linkedin.com/in/ktiwariiitk?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        image: "/images/kamlesh-tiwari.png"
    },
];

const MentorsPage = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white pt-20 pb-20 overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse duration-[10000ms]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse duration-[10000ms] delay-1000" />
            </div>

            <Navbar />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                        Our Mentors
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Meet the experienced professionals dedicating their time to guide you on your journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mentors.map((mentor, index) => (
                        <div
                            key={index}
                            className={`animate-in fade-in slide-in-from-bottom-12 duration-700 fill-mode-backwards delay-[${index * 100}ms]`}
                        >
                            <Card className="bg-white/5 border-white/10 backdrop-blur-md overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group">
                                <CardHeader className="text-center pb-2 pt-8">
                                    <div className="mx-auto mb-4 relative">
                                        <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-all duration-500" />
                                        <Avatar className="w-24 h-24 border-2 border-white/10 group-hover:border-purple-500/50 transition-colors relative z-10">
                                            <AvatarImage src={mentor.image} alt={mentor.name} />
                                            <AvatarFallback className="bg-slate-800 text-purple-300 text-2xl font-bold">
                                                {mentor.name.split(" ").map(n => n[0]).join("").substring(0, 2)}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <CardTitle className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                        {mentor.name}
                                    </CardTitle>
                                    <CardDescription className="text-purple-400 font-medium flex items-center justify-center gap-1.5">
                                        <GraduationCap className="w-4 h-4" />
                                        {mentor.role}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-center space-y-4 pb-8">
                                    <p className="text-slate-400 text-sm leading-relaxed px-4">
                                        {mentor.description}
                                    </p>

                                    {mentor.linkedin && (
                                        <div className="pt-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="bg-transparent border-white/20 text-slate-300 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 gap-2"
                                                asChild
                                            >
                                                <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
                                                    <Linkedin className="w-4 h-4" />
                                                    Connect on LinkedIn
                                                </a>
                                            </Button>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MentorsPage;
