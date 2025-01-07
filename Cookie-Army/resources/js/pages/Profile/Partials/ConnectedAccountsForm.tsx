import React, {useRef, useState, FormEventHandler, MouseEventHandler, MouseEvent, FormEvent} from 'react';
<<<<<<< HEAD
import {Link, useForm} from '@inertiajs/react';
import {ConnectedAccount as ConnectedAccountType, Provider} from '@/types';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ConnectedAccountsForm({ className = '', hasPassword, providers, connectedAccounts }: { className?: string, hasPassword: boolean, providers: Provider[], connectedAccounts: ConnectedAccountType[] }) {
    const [confirmingAccountDeletion, setConfirmingAccountDeletion] = useState<boolean>(false);
    const passwordInput = useRef<HTMLInputElement | null>(null);
=======
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError.jsx';
import Modal from '@/Components/Modal';
import ConnectedAccount from '@/Components/ConnectedAccount.jsx';
import InputLabel from '@/Components/InputLabel.jsx';
import TextInput from '@/Components/TextInput.jsx';
import SecondaryButton from '@/Components/SecondaryButton.jsx';
import {useForm} from '@inertiajs/react';
import ActionLink from '@/Components/ActionLink.jsx';
import {ConnectedAccount as ConnectedAccountType, Provider} from '@/types';

export default function ConnectedAccountsForm({ className = '', hasPassword, providers, connectedAccounts }: { className?: string, hasPassword: boolean, providers: Provider[], connectedAccounts: ConnectedAccountType[] }) {
    const [confirmingAccountDeletion, setConfirmingAccountDeletion] = useState<boolean>(false);
    const passwordInput = useRef<HTMLInputElement>();
>>>>>>> origin/frontend_yesi

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmAccountDeletion = (e: MouseEvent) => {
        e.preventDefault();

        setConfirmingAccountDeletion(true);
    };

    const deleteAccount = (e: FormEvent, connectedAccount: ConnectedAccountType) => {
        e.preventDefault();

        destroy(route('connected-accounts.destroy', connectedAccount.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingAccountDeletion(false);

        reset();
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Connected Accounts</h2>

                <p className="max-w-xl mt-1 text-sm text-gray-600">
                    Connect your social media accounts to enable Sign In with OAuth.
                </p>
            </header>

            <div className="p-4 bg-red-500/10 text-red-500 border-l-4 border-red-600 rounded font-medium text-sm">
                If you feel any of your connected accounts have been compromised, you should disconnect them immediately and change your password.
            </div>

            <div className="space-y-6 mt-6">
                {providers.map(provider => {
                    const connectedAccount = connectedAccounts
                        .filter(account => account.provider === provider.id)
                        .shift();

                    return (
                        <React.Fragment key={provider.id}>
<<<<<<< HEAD
                                {connectedAccount ?
                                    (connectedAccounts.length > 1 || hasPassword && <Button variant={'destructive'} onClick={confirmAccountDeletion}>Remove</Button>)
                                    : (
                                        <Link href={route('oauth.redirect', { provider })}>Connect</Link>
                                    )}
                            {connectedAccount && (
                                <div>
=======
                            <ConnectedAccount provider={provider} connectedAccount={connectedAccount}>
                                {connectedAccount ?
                                    (connectedAccounts.length > 1 || hasPassword && <DangerButton onClick={confirmAccountDeletion}>Remove</DangerButton>)
                                    : (
                                        <ActionLink href={route('oauth.redirect', { provider })}>Connect</ActionLink>
                                    )}
                            </ConnectedAccount>

                            {connectedAccount && (
                                <Modal show={confirmingAccountDeletion} onClose={closeModal}>
>>>>>>> origin/frontend_yesi
                                    <form onSubmit={(e) => deleteAccount(e, connectedAccount)} className="p-6">
                                        <h2 className="text-lg font-medium text-gray-900">
                                            Are you sure you want to remove this account?
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-600">
                                            Please enter your password to confirm you would like to remove this account.
                                        </p>

                                        <div className="mt-6">
<<<<<<< HEAD
                                            <Label htmlFor="password" className="sr-only">Password</Label>

                                            <Input
=======
                                            <InputLabel htmlFor="password" value="Password" className="sr-only"/>

                                            <TextInput
>>>>>>> origin/frontend_yesi
                                                id="password"
                                                type="password"
                                                name="password"
                                                ref={passwordInput}
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                className="mt-1 block w-3/4"
<<<<<<< HEAD
                                                placeholder="Password"
                                            />

                                            <span className="mt-2 text-red-500 text-xs">{errors.password}</span>
                                        </div>

                                        <div className="mt-6 flex justify-end">
                                            <Button variant={'secondary'}>Cancel</Button>

                                            <Button variant={'destructive'} className="ms-3" disabled={processing}>
                                                Remove Account
                                            </Button>
                                        </div>
                                    </form>
                                </div>
=======
                                                isFocused
                                                placeholder="Password"
                                            />

                                            <InputError message={errors.password} className="mt-2"/>
                                        </div>

                                        <div className="mt-6 flex justify-end">
                                            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                                            <DangerButton className="ms-3" disabled={processing}>
                                                Remove Account
                                            </DangerButton>
                                        </div>
                                    </form>
                                </Modal>
>>>>>>> origin/frontend_yesi
                            )}
                        </React.Fragment>
                    )
                })}
            </div>
        </section>
    );
}
