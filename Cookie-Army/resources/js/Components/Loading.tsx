import { Skeleton } from "./ui/skeleton";

export const LoadingPost = () => {
    return (
        <Skeleton className="flex flex-col justify-center gap-2 p-5">
            <div className="flex gap-2 items-center">
                <Skeleton className="w-[50px] h-[50px] rounded-full" />
                <div className="flex flex-col gap-2">
                    <Skeleton className="w-14 h-5" />
                    <Skeleton className="w-20 h-5" />
                </div>
            </div>
            <Skeleton className="w-full h-5" />
            <Skeleton className="w-3/4 h-5" />
            <Skeleton className="w-96 h-96 self-center" />
            <Skeleton className="w-1/2 h-5" />
        </Skeleton>
    );
};
