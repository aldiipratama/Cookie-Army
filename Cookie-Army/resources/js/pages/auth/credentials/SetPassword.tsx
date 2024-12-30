import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Head, useForm } from '@inertiajs/react';
import React, { FormEventHandler, useEffect } from 'react'

const SetPassword = ({ message }: { message: string }) => {
    const toast = useToast()
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('auth.create-password'), {
            onFinish: () => reset('password'),
            onStart: () => toast('Wait for checking LoggedIn!', { type: 'info' }),
            onError: () => toast('Login Failed', { type: 'error' }),
            onSuccess: () => toast('Login Success', { type: 'success' })
        });
    };

    useEffect(
        () => {
            toast(message, {
                type: 'warning'
            })
        }, []
    );

    return (
        <>
            <Head title='Set Password' />
            <div className="flex h-screen justify-center items-center">
                <Card className='w-96'>
                    <CardHeader>
                        <CardTitle>
                            Create your Password
                        </CardTitle>
                    </CardHeader>
                    <form onSubmit={submit}>
                        <CardContent>
                            <div className="grid gap-2">
                                <Label htmlFor='password'>Password</Label>
                                <Input
                                    id='password'
                                    type='password'
                                    name='password'
                                    placeholder='Input Your Password...'
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <span className='text-xs text-destructive'>{errors.password}</span>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor='password_confirmation'>Password Confirmation</Label>
                                <Input
                                    id='password_confirmation'
                                    type='password'
                                    name='password_confirmation'
                                    placeholder='Input again Your Password...'
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                />
                                <span className='text-xs text-destructive'>{errors.password_confirmation}</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type='submit'>Submit</Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default SetPassword