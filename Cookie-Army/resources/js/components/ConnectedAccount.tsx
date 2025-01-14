import { PropsWithChildren } from 'react';
import ProviderIcon from '@/components/icon/ProviderIcon.jsx';
import {ConnectedAccount as ConnectedAccountType, Provider} from '@/types';

export default function ConnectedAccount({ children, provider, connectedAccount }: PropsWithChildren<{
    provider: Provider,
    connectedAccount?: ConnectedAccountType
}>) {
    return (
        <div>
            <div className="px-3 flex items-center justify-between">
                <div className="flex items-center">
                    <ProviderIcon provider={provider} className="h-6 w-6"/>

                    <div className="ms-2">
                        <div className="text-sm font-semibold text-gray-600">
                            {provider.name}
                        </div>

                        {connectedAccount?.created_at ? (
                            <div className="text-xs text-gray-500">
                                Connected {connectedAccount.created_at}
                            </div>
                        ) : (
                            <div className="text-xs text-gray-500">
                                Not connected.
                            </div>
                        )}
                    </div>
                </div>

                {children}
            </div>
        </div>
    );
}
