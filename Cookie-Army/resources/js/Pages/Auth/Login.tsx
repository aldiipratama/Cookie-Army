import { Button } from "@/Components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FiArrowLeftCircle, FiGithub } from "react-icons/fi";
import { FaMicrosoft } from "react-icons/fa";
import { Separator } from "@/Components/ui/separator";
import { Head, router, useForm } from "@inertiajs/react";
import { Input } from "@/Components/ui/input";
import { z } from "zod";
import BgParticle from "@/Components/BgParticle";
import { ModeToggle } from "@/Components/ModeToggle";
import { useToast } from "@/hooks/use-toast";
import { FormEvent } from "react";
import Spinner from "@/Components/Spinner";
import { Label } from "@/Components/ui/label";

const LoginSchema = z.object({
    email: z.string().email("Invalid email!"),
    password: z.string().min(3, "Password at least 3 character"),
});

type LoginFormType = z.infer<typeof LoginSchema>;

const Login = () => {
    const { toast } = useToast();
    const { data, setData, processing, errors, post, reset } =
        useForm<LoginFormType>({
            email: "",
            password: "",
        });
    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => {
                reset("password");
            },
            onSuccess: () => {
                toast({
                    className: "bg-green-500",
                    title: "Login Success.",
                    description: "Happy relationship!.",
                });
            },
            onError: (errors) => {
                if (errors.error) {
                    toast({
                        className: "bg-red-500",
                        title: "Login Failed.",
                        description: errors.error,
                    });
                }
            },
            onStart: () => {
                toast({
                    className: "bg-sky-500",
                    title: "Logging in, Please wait!",
                });
            },
        });
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <Head title="Login" />
            {/* <BgParticle /> */}
            <div className="relative flex w-1/2 rounded-lg shadow-lg max-md:w-4/5 h-4/5 bg-accent">
                <div className="absolute top-5 left-5">
                    <Button
                        variant={"link"}
                        className="hover:no-underline"
                        onClick={() => router.visit(route("home"))}
                    >
                        <FiArrowLeftCircle />
                        <span className="hover:underline">Back</span>
                    </Button>
                </div>
                <div className="absolute top-5 right-5">
                    <ModeToggle />
                </div>
                <div className="flex items-center justify-center flex-1 max-md:hidden">
                    <Button variant={"ghost"} className="p-0">
                        <img
                            src="https://placehold.co/250x250?text=Logo"
                            alt="logo"
                            className="rounded-full"
                        />
                    </Button>
                </div>
                <div className="flex flex-col justify-center flex-1 gap-4 py-5 pe-5 max-md:ps-5">
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold">LOGIN</h2>
                        <p className="text-sm">
                            Receive Personalize Recommendations and Offers Just
                            For You
                        </p>
                    </div>
                    <div className="flex justify-center gap-2">
                        <Button
                            size={"icon"}
                            className="p-0 rounded-full bg-foreground"
                        >
                            <FcGoogle />
                        </Button>
                        <Button
                            size={"icon"}
                            className="p-0 rounded-full bg-foreground"
                        >
                            <FiGithub />
                        </Button>
                        <Button
                            size={"icon"}
                            className="p-0 rounded-full bg-foreground"
                        >
                            <FaMicrosoft />
                        </Button>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Separator className="w-20 bg-white" />
                        <span>or</span>
                        <Separator className="w-20 bg-white" />
                    </div>
                    <form className="space-y-4" onSubmit={handleOnSubmit}>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Write your email here"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <span className="text-red-500">{errors.email}</span>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                type="password"
                                id="password"
                                placeholder="**********"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <span className="text-red-500">
                                {errors.password}
                            </span>
                        </div>
                        <Button
                            type="submit"
                            className="flex w-full gap-2 bg-yellow-500 hover:bg-yellow-500/90"
                            disabled={
                                processing ||
                                !data.email ||
                                data.password.length < 3
                            }
                        >
                            {processing ? (
                                <>
                                    <Spinner size="sm" />
                                    <span>Logging in</span>
                                </>
                            ) : (
                                "Login"
                            )}
                        </Button>
                    </form>
                    <p className="text-center">
                        Don't have an account?{" "}
                        <Button
                            variant={"link"}
                            className="p-0 text-yellow-500"
                        >
                            Register
                        </Button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
