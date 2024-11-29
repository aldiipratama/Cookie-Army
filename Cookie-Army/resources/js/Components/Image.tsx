import { cn } from "@/lib/utils";
import { ImgHTMLAttributes, useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { cva } from "class-variance-authority";
import Spinner from "./Spinner";

export interface TypeImage extends ImgHTMLAttributes<HTMLImageElement> {
    size?: "sm" | "md" | "lg";
    variant: "post" | "profile" | "bgProfile";
    cursor?: "yes" | "no";
}

const imageVariants = cva("flex items-center justify-center", {
    variants: {
        variant: {
            post: "rounded-lg min-w-64 min-h-64 max-h-96",
            profile: "rounded-full",
            bgProfile: "min-w-[300px] min-h-[100px]",
        },
        size: {
            sm: "size-6",
            md: "size-14",
            lg: "size-24",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

const Image = ({ className, cursor, variant, size, ...props }: TypeImage) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    return (
        <>
            {isError && (
                <div className="flex-1 justify-items-center">
                    <div
                        className={cn(
                            imageVariants({ size, variant }),
                            "text-wrap text-xs text-muted-foreground text-center bg-primary/10",
                            className
                        )}
                    >
                        <span>image error</span>
                    </div>
                </div>
            )}
            {isLoading && (
                <div className="flex-1 justify-items-center">
                    <Skeleton
                        className={cn(
                            imageVariants({ size, variant }),
                            className
                        )}
                    >
                        <Spinner size="sm" className="border-foreground" />
                    </Skeleton>
                </div>
            )}
            <img
                className={cn(
                    imageVariants({ size, variant }),
                    "object-cover",
                    className
                )}
                style={{
                    display: isError || isLoading ? "none" : "",
                    cursor: isError ? "default" : cursor ? "pointer" : "",
                }}
                onLoad={() => {
                    setIsLoading(false);
                    setIsError(false);
                }}
                onError={() => {
                    setIsLoading(false);
                    setIsError(true);
                }}
                {...props}
            />
        </>
    );
};

export default Image;
