import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Loader2, User, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLogin } from "./useLogin";
import { loginSchema, LoginInput } from "./login.schema";
import { cn } from "@/lib/utils";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { mutate: login, isPending, error } = useLogin();

    const form = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
            role: "student",
        },
    });

    const currentRole = form.watch("role");

    const onSubmit = (data: LoginInput) => {
        login(data, {
            onSuccess: () => {
                navigate("/home");
            },
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 blur-[150px] rounded-full top-[-100px] left-[-100px]" />
            <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[150px] rounded-full bottom-[-100px] right-[-100px]" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8"
            >
                {/* Logo / Heading */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-semibold text-white tracking-tight">
                        Welcome Back
                    </h1>
                    <p className="text-slate-400 text-sm mt-2">
                        Sign in to continue to your dashboard
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                    {/* Role Selection */}
                    <div className="grid grid-cols-2 gap-4 p-1 rounded-xl bg-white/5 border border-white/10">
                        <div
                            onClick={() => form.setValue("role", "student")}
                            className={cn(
                                "cursor-pointer rounded-lg p-3 text-center transition-all duration-300 ease-out flex items-center justify-center gap-2",
                                currentRole === "student"
                                    ? "bg-indigo-600/20 text-indigo-300 shadow-sm ring-1 ring-indigo-500/50"
                                    : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                            )}
                        >
                            <User className="h-4 w-4" />
                            <span className="text-sm font-medium">Student</span>
                        </div>
                        <div
                            onClick={() => form.setValue("role", "mentor")}
                            className={cn(
                                "cursor-pointer rounded-lg p-3 text-center transition-all duration-300 ease-out flex items-center justify-center gap-2",
                                currentRole === "mentor"
                                    ? "bg-purple-600/20 text-purple-300 shadow-sm ring-1 ring-purple-500/50"
                                    : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                            )}
                        >
                            <GraduationCap className="h-4 w-4" />
                            <span className="text-sm font-medium">Mentor</span>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <div className="relative group">
                            <Mail className="absolute left-3 top-3.5 text-slate-400 w-5 h-5 group-focus-within:text-indigo-400 transition-colors" />
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                                {...form.register("email")}
                            />
                        </div>
                        {form.formState.errors.email && (
                            <p className="text-xs text-red-400 ml-1">{form.formState.errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="space-y-1">
                        <div className="relative group">
                            <Lock className="absolute left-3 top-3.5 text-slate-400 w-5 h-5 group-focus-within:text-indigo-400 transition-colors" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                                {...form.register("password")}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3.5 text-slate-400 hover:text-white transition"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        {form.formState.errors.password && (
                            <p className="text-xs text-red-400 ml-1">{form.formState.errors.password.message}</p>
                        )}
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between text-sm text-slate-400">
                        <label className="flex items-center gap-2 cursor-pointer hover:text-slate-300 transition-colors">
                            <input
                                type="checkbox"
                                className="accent-indigo-600 w-4 h-4 rounded border-white/10 bg-white/5"
                                {...form.register("rememberMe")}
                            />
                            Remember me
                        </label>
                        <Link to="#" className="hover:text-white transition">
                            Forgot password?
                        </Link>
                    </div>

                    {/* Error Display */}
                    {error && (
                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-200 text-sm text-center">
                            {error.message}
                        </div>
                    )}

                    {/* Button */}
                    <motion.button
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        disabled={isPending}
                        className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
                    </motion.button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-slate-400 mt-6">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                        Create one
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

export default LoginPage;
