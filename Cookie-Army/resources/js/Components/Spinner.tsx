import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { HTMLAttributes } from "react";

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg";
}

const Spinner = ({ className, size = "md" }: SpinnerProps) => {
    return (
        <Loader
            className={cn(
                `animate-spin rounded-full`,
                {
                    "h-4 w-4 border-b": size === "sm",
                    "h-8 w-8 border-b-2": size === "md",
                    "h-12 w-12 border-b-4": size === "lg",
                },
                className
            )}
        />
    );
};

export default Spinner;
