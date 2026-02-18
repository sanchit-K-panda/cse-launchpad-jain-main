import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Loader2, User, GraduationCap, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useLogin } from "@/hooks/useLogin";
import { loginSchema, LoginInput } from "@/lib/validation/auth.schema";
import { cn } from "@/lib/utils";

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { mutate: login, isPending, error, isSuccess } = useLogin();

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
                // Slight delay to show success state before navigating
                setTimeout(() => navigate("/home"), 800);
            },
        });
    };

    // 🎭 Motion Variants
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1], // Custom spring-like bezier
                staggerChildren: 0.05
            }
        },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const inputFocusVariants = {
        focus: { scale: 1.01, borderColor: "rgba(99, 102, 241, 0.5)", boxShadow: "0px 0px 0px 4px rgba(99, 102, 241, 0.1)" },
        blur: { scale: 1, borderColor: "rgba(255, 255, 255, 0.1)", boxShadow: "none" }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[420px] mx-auto perspective-1000"
        >
            <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)] p-8 overflow-hidden group">

                {/* 🌟 Dynamic Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 mb-8 text-center space-y-2">
                    <motion.div variants={itemVariants} className="inline-block p-3 rounded-2xl bg-white/5 border border-white/10 mb-2 shadow-lg">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                        </div>
                    </motion.div>
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl font-bold text-white tracking-tight"
                    >
                        Welcome Back
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-slate-400 text-sm"
                    >
                        Enter your credentials to access your dashboard
                    </motion.p>
                </div>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">

                    {/* Role Selection */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 p-1 rounded-2xl bg-black/20 border border-white/5 backdrop-blur-md">
                        {["student", "mentor"].map((role) => (
                            <div
                                key={role}
                                onClick={() => form.setValue("role", role as "student" | "mentor")}
                                className={cn(
                                    "cursor-pointer rounded-xl p-3 text-center transition-all duration-300 ease-out flex items-center justify-center gap-2 group relative overflow-hidden",
                                    currentRole === role
                                        ? "text-white shadow-lg"
                                        : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                                )}
                            >
                                {currentRole === role && (
                                    <motion.div
                                        layoutId="role-highlight"
                                        className={cn(
                                            "absolute inset-0 rounded-xl bg-gradient-to-tr opacity-20",
                                            role === "student" ? "from-indigo-600 to-blue-600" : "from-fuchsia-600 to-purple-600"
                                        )}
                                    />
                                )}
                                {currentRole === role && (
                                    <motion.div
                                        layoutId="role-border"
                                        className={cn(
                                            "absolute inset-0 rounded-xl border border-white/10",
                                            role === "student" ? "ring-1 ring-indigo-500/30" : "ring-1 ring-fuchsia-500/30"
                                        )}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    {role === "student" ? <User size={16} /> : <GraduationCap size={16} />}
                                    <span className="capitalize font-medium text-sm">{role}</span>
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Inputs */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        {["email", "password"].map((field) => (
                            <div key={field} className="space-y-1.5 group">
                                <Label className="text-xs font-medium text-slate-400 ml-1 capitalize tracking-wide">{field}</Label>
                                <motion.div
                                    initial="blur"
                                    whileFocus="focus"
                                    variants={inputFocusVariants}
                                    className="relative"
                                >
                                    {field === "email" ? (
                                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 transition-colors group-focus-within:text-indigo-400" />
                                    ) : (
                                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 transition-colors group-focus-within:text-indigo-400" />
                                    )}

                                    <Input
                                        type={field === "email" ? "email" : (showPassword ? "text" : "password")}
                                        placeholder={field === "email" ? "name@example.com" : "••••••••"}
                                        className="pl-11 pr-10 h-12 rounded-xl bg-black/20 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-0 focus-visible:border-transparent transition-none" // Ring handled by motion
                                        {...form.register(field as "email" | "password")}
                                    />

                                    {field === "password" && (
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                                        >
                                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    )}
                                </motion.div>
                                {form.formState.errors[field as "email" | "password"] && (
                                    <motion.p
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-xs text-red-400 ml-1 font-medium flex items-center gap-1"
                                    >
                                        <AlertCircle size={10} />
                                        {form.formState.errors[field as "email" | "password"]?.message}
                                    </motion.p>
                                )}
                            </div>
                        ))}
                    </motion.div>

                    {/* Meta Options */}
                    <motion.div variants={itemVariants} className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="remember"
                                className="border-white/20 data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500 w-4 h-4 rounded transition-all duration-300"
                                onCheckedChange={(checked) => form.setValue("rememberMe", checked as boolean)}
                            />
                            <Label htmlFor="remember" className="text-slate-400 cursor-pointer hover:text-slate-300 transition-colors select-none">
                                Remember me
                            </Label>
                        </div>
                        <Link to="#" className="text-indigo-400 hover:text-indigo-300 hover:underline underline-offset-4 transition-colors text-xs font-medium">
                            Forgot password?
                        </Link>
                    </motion.div>

                    {/* Error Message */}
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, scale: 0.9 }}
                                animate={{ opacity: 1, height: "auto", scale: 1 }}
                                exit={{ opacity: 0, height: 0, scale: 0.9 }}
                                className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-200 text-sm text-center font-medium flex items-center justify-center gap-2"
                            >
                                <AlertCircle size={16} />
                                {error.message}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <motion.div variants={itemVariants}>
                        <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isPending || isSuccess}
                            className={cn(
                                "w-full h-12 rounded-xl text-white font-medium shadow-lg shadow-indigo-500/20 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden",
                                isSuccess ? "bg-green-600" : "bg-gradient-to-r from-indigo-600 to-indigo-500"
                            )}
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

                            <AnimatePresence mode="wait">
                                {isPending ? (
                                    <motion.div
                                        key="loading"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <Loader2 className="w-5 h-5 animate-spin text-white/90" />
                                    </motion.div>
                                ) : isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex items-center gap-2"
                                    >
                                        <CheckCircle2 className="w-5 h-5" />
                                        <span>Success</span>
                                    </motion.div>
                                ) : (
                                    <motion.span
                                        key="text"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex items-center justify-center gap-2 relative z-20"
                                    >
                                        Sign In <ArrowRight className="w-4 h-4" />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </motion.div>
                </form>

                {/* Footer */}
                <motion.p
                    variants={itemVariants}
                    className="text-center text-sm text-slate-500 mt-8 font-medium"
                >
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-white hover:text-indigo-300 transition-colors font-semibold hover:underline underline-offset-4 decoration-indigo-500/30">
                        Create an account
                    </Link>
                </motion.p>
            </div>
        </motion.div>
    );
};
