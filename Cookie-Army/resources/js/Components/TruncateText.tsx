"use client";

import { HTMLAttributes, ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";

interface TruncatedTextProps extends HTMLAttributes<HTMLDivElement> {
    lines?: number;
    children: ReactNode;
}

export function TruncatedText({
    lines = 1,
    className,
    children,
    ...props
}: TruncatedTextProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={cn("space-y-0", className)} {...props}>
            <p
                className={cn(
                    "overflow-hidden",
                    !isExpanded &&
                        (lines === 1
                            ? "text-nowrap overflow-ellipsis whitespace-nowrap"
                            : `line-clamp-${lines}`)
                )}
            >
                {children}
            </p>
            <Button
                variant="link"
                size="sm"
                className="p-0"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? "Show Less" : "Show More"}
            </Button>
        </div>
    );
}
