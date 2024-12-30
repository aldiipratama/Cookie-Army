import { SVGAttributes } from 'react';
import Google from './Google';
import Twitter from './Twitter';
import { ProviderId } from '@/types';
import Tiktok from './Tiktok';

export default function ProviderIcon({ className = '', provider, ...props }: SVGAttributes<SVGElement> & {
    provider: ProviderId
}) {
    const Icon = () => {
        switch (provider) {
            case 'google':
                return <Google {...props} className={className} />
            case 'twitter':
                return <Twitter {...props} className={className} />
            case 'tiktok':
                return <Tiktok {...props} className={className} />
        }
    };

    return (
        <div className="text-gray-900">
            <Icon />
        </div>
    )
}
