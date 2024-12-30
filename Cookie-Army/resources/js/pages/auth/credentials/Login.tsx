import ProviderIcon from '@/components/icon/ProviderIcon';
import { ModeToggleClick } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Loading from '@/components/ui/loading';
import { useToast } from '@/hooks/use-toast';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeftCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
<<<<<<< HEAD
import { Socialstream as SocialstreamType } from '@/types';
import Logo from '@/components/icon/Logo';
=======
>>>>>>> parent of 56523a9... slicing stories ui

export default function Login({
    canResetPassword
}: {
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });
    const toast = useToast()

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
            onStart: () => toast('Wait for checking LoggedIn!', { type: 'info' }),
            onError: () => toast('Login Failed', { type: 'error' }),
            onSuccess: () => toast('Login Success', { type: 'success' })
        });
    };

    return (
        <>
            <Head title="Login" />

            <div className='flex items-center justify-center h-screen'>
                <Card className="relative w-4/5 md:w-2/5">
                    <Button variant={'ghost'} className="absolute top-2 left-2" asChild>
                        <Link href={route('home')}>
                            <ArrowLeftCircle />
                            Back
                        </Link>
                    </Button>
                    <div className="absolute top-2 right-2">
                        <ModeToggleClick />
                    </div>
                    <CardContent className="py-5 rounded-lg bg-accent/30">
                        <div className="flex items-center justify-center gap-10">
<<<<<<< HEAD
                            <Link href={route('home')} className='max-md:hidden'>
                                <Logo className='w-40' />
=======
                            <Link href={route('home')}>
                                <img src='https://picsum.photos/150?random=logo' alt="logo" className="rounded-full max-md:hidden" />
>>>>>>> parent of 56523a9... slicing stories ui
                            </Link>
                            <div className="grid gap-4 max-md:mt-10">
                                <CardHeader className="p-0 mt-4">
                                    <CardTitle className="text-2xl">Login</CardTitle>
                                    <CardDescription>
                                        Receive Personalized Recomendations and Offers Just For You
                                    </CardDescription>
                                </CardHeader>
                                <form className='grid gap-4 mt-8' onSubmit={submit}>
                                    <div className="grid gap-2">
                                        <Label htmlFor='email'>Email</Label>
                                        <Input
                                            id='email'
                                            type='email'
                                            name='email'
                                            autoComplete='email'
                                            placeholder='Your email address...'
                                            value={data.email}
                                            autoFocus
                                            onChange={(e) => setData('email', e.target.value)} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor='password'>Password</Label>
                                        <Input
                                            id='password'
                                            type='password'
                                            name='password'
                                            autoComplete='password'
                                            placeholder='Your password...'
                                            value={data.password}
                                            autoFocus
                                            onChange={(e) => setData('password', e.target.value)} />
                                    </div>
                                    <div className="flex justify-between">
                                        <Label htmlFor='remember' className='flex items-center gap-2 cursor-pointer'>
                                            <Checkbox
                                                id='remember'
                                                name='remember'
                                                checked={data.remember}
                                                onCheckedChange={(e: boolean) => setData('remember', e)}
                                            />
                                            Remember me
                                        </Label>
                                        {
                                            canResetPassword && (
                                                <Link href={route('password.request')} className='text-sm font-medium leading-none hover:underline'>
                                                    Forgot Password
                                                </Link>
                                            )
                                        }
                                    </div>
                                    <Button type='submit' disabled={processing}>
                                        {
                                            processing ? (
                                                <Loading />
                                            ) : 'Login'
                                        }
                                    </Button>
                                </form>
                                <span className="text-center">or</span>
                                <div className="grid grid-cols-3 gap-4">
                                    <Button
                                        asChild
                                        variant={'secondary'}
                                    >
                                        <a
                                            href={route('auth.redirect', { provider: 'google' })}
                                        >
                                            <ProviderIcon provider={'google'} className="w-6 h-6" />

                                            <span className="font-medium">Google</span>
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        variant={'secondary'}
                                    >
                                        <Link
                                            href={'#'}
                                        >
                                            <ProviderIcon provider={'twitter'} className="w-6 h-6" />

                                            <span className="font-medium">Twitter</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant={'secondary'}
                                    >
                                        <Link
                                            href={'#'}
                                        >
                                            <ProviderIcon provider={'tiktok'} className="w-6 h-6" />

                                            <span className="font-medium">Tiktok</span>
                                        </Link>
                                    </Button>
                                </div>
                                <p className="text-center">
                                    Dont&apos;t have an account?
                                    <Button variant={'link'} className="p-0 ms-2">
                                        <Link href={route('register')}>Register</Link>
                                    </Button>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
