import { Head } from "@inertiajs/react";

const Welcome = () => {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <p>Untuk Frontend ngodingnya di resources/js oke!!!</p>
                    <p>Omat di resources/js !!!</p>
                </div>
            </div>
        </>
    );
};

export default Welcome;
