import { LoginForm } from "@/components/auth/LoginForm";
import { motion } from "framer-motion";

const Login = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#0B0F19] relative overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200">

            {/* 🌌 Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[8000ms]" />
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[10000ms] delay-1000" />
                <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[12000ms] delay-2000" />
            </div>

            {/* 🕸️ Subtle Grid Texture (Optional quality touch) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

            <div className="w-full px-4 relative z-10">
                <LoginForm />
            </div>

            {/* Bottom Credit / Legal - optional filler for "premium feel" */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-6 left-0 w-full text-center"
            >
                <p className="text-[#334155] text-xs font-medium tracking-wide">
                    CSE LAUNCHPAD &copy; {new Date().getFullYear()}
                </p>
            </motion.div>
        </div>
    );
};

export default Login;
