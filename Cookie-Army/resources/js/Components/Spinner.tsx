import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg";
}

const Spinner = ({ className, size = "md", ...props }: SpinnerProps) => {
    return (
        <div
            className={cn(
                `animate-spin rounded-full border-2 border-t-transparent`,
                {
                    "h-4 w-4 border": size === "sm",
                    "h-8 w-8 border-2": size === "md",
                    "h-12 w-12 border-4": size === "lg",
                },
                className
            )}
            {...props}
        />
    );
};

export default Spinner;
