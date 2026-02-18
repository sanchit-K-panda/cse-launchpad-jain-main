import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, User, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
            {/* 🌌 Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px] animate-pulse duration-[10000ms]" />
                <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px] animate-pulse duration-[10000ms] delay-1000" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)]" />
            </div>

            {/* 🧊 Login Card */}
            <Card className="relative z-10 w-full max-w-md border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:scale-[1.005] hover:shadow-indigo-500/10 animate-in fade-in slide-in-from-bottom-8">
                <CardHeader className="space-y-2 text-center pb-8">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 ring-1 ring-indigo-500/40">
                        <User className="h-6 w-6 text-indigo-400" />
                    </div>
                    <CardTitle className="text-3xl font-bold tracking-tight text-white drop-shadow-sm">
                        Welcome back
                    </CardTitle>
                    <CardDescription className="text-slate-400 text-base">
                        Sign in to access your dashboard
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                        {/* 🔘 Role Selection */}
                        <div className="grid grid-cols-2 gap-4 p-1 rounded-xl bg-slate-900/50 border border-white/5">
                            <div
                                onClick={() => form.setValue("role", "student")}
                                className={cn(
                                    "cursor-pointer rounded-lg p-3 text-center transition-all duration-300 ease-out",
                                    currentRole === "student"
                                        ? "bg-indigo-600/20 text-indigo-300 shadow-sm ring-1 ring-indigo-500/50"
                                        : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                                )}
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <User className={cn("h-4 w-4 transition-colors", currentRole === "student" ? "text-indigo-400" : "text-slate-500")} />
                                    <span className="text-sm font-medium">Student</span>
                                </div>
                            </div>
                            <div
                                onClick={() => form.setValue("role", "mentor")}
                                className={cn(
                                    "cursor-pointer rounded-lg p-3 text-center transition-all duration-300 ease-out",
                                    currentRole === "mentor"
                                        ? "bg-purple-600/20 text-purple-300 shadow-sm ring-1 ring-purple-500/50"
                                        : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                                )}
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <GraduationCap className={cn("h-4 w-4 transition-colors", currentRole === "mentor" ? "text-purple-400" : "text-slate-500")} />
                                    <span className="text-sm font-medium">Mentor</span>
                                </div>
                            </div>
                        </div>

                        {/* ✨ Inputs */}
                        <div className="space-y-5">
                            <div className="space-y-2 group">
                                <Label htmlFor="email" className="text-slate-300 text-xs font-medium uppercase tracking-wider ml-1">Email</Label>
                                <div className="relative transition-transform duration-200 focus-within:scale-[1.01]">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-indigo-400">
                                        <User className="h-4 w-4" />
                                    </div>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        className="bg-slate-900/50 border-white/10 pl-10 h-11 text-white placeholder:text-slate-600 focus-visible:ring-indigo-500/50 focus-visible:border-indigo-500/50 transition-all duration-300"
                                        {...form.register("email")}
                                    />
                                </div>
                                {form.formState.errors.email && (
                                    <p className="text-xs text-red-400 ml-1 animate-in slide-in-from-top-1">{form.formState.errors.email.message}</p>
                                )}
                            </div>

                            <div className="space-y-2 group">
                                <div className="flex items-center justify-between ml-1">
                                    <Label htmlFor="password" className="text-slate-300 text-xs font-medium uppercase tracking-wider">Password</Label>
                                    <Link to="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors hover:underline underline-offset-4">
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="relative transition-transform duration-200 focus-within:scale-[1.01]">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-indigo-400">
                                        <Eye className="h-4 w-4 py-0" />
                                    </div>
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        className="bg-slate-900/50 border-white/10 pl-10 pr-10 h-11 text-white placeholder:text-slate-600 focus-visible:ring-indigo-500/50 focus-visible:border-indigo-500/50 transition-all duration-300"
                                        {...form.register("password")}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-all duration-200 hover:scale-110 focus:outline-none"
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                                {form.formState.errors.password && (
                                    <p className="text-xs text-red-400 ml-1 animate-in slide-in-from-top-1">{form.formState.errors.password.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center space-x-3 ml-1">
                            <Checkbox
                                id="remember"
                                className="border-white/20 data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500 transition-all duration-200"
                                onCheckedChange={(checked) => form.setValue("rememberMe", checked as boolean)}
                            />
                            <Label htmlFor="remember" className="text-sm font-medium leading-none text-slate-400 cursor-pointer hover:text-slate-300 transition-colors">
                                Remember me for 30 days
                            </Label>
                        </div>

                        {/* ❗ Error UI */}
                        {error && (
                            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-200 text-sm flex items-center justify-center animate-in fade-in slide-in-from-top-2 shadow-inner">
                                <span className="mr-2">⚠️</span> {error.message}
                            </div>
                        )}

                        {/* 🔘 Button */}
                        <Button
                            type="submit"
                            className="w-full h-11 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isPending}
                        >
                            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {isPending ? "Signing in..." : "Sign in to Dashboard"}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t border-white/5 pt-6 pb-6">
                    <p className="text-sm text-slate-500">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium hover:underline underline-offset-4 transition-colors">
                            Create an account
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default LoginPage;
