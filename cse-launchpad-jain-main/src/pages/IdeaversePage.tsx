import Navbar from "@/components/Navbar";
import { PitchIdeaForm } from "@/features/ideas/PitchIdeaForm";
import { IdeaList } from "@/features/ideas/IdeaList";

const IdeaversePage = () => {
    const role = localStorage.getItem("role");

    return (
        <div className="min-h-screen bg-slate-950 text-white pt-20 pb-20 overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse duration-[8000ms]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse duration-[8000ms] delay-2000" />
            </div>

            <Navbar />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                        {role === "mentor" ? "Review Pitches" : "Ideaverse"}
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {role === "mentor"
                            ? "Explore innovative ideas pitched by students and provide your mentorship."
                            : "This is your space to innovate. Pitch your ideas, get feedback from mentors, and bring your vision to life."
                        }
                    </p>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 fill-mode-backwards">
                    {role === "mentor" ? <IdeaList /> : <PitchIdeaForm />}
                </div>
            </div>
        </div>
    );
};

export default IdeaversePage;
