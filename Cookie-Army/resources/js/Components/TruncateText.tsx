"use client";

import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from "react";
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
    const [showButton, setShowButton] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (textRef.current) {
            const { scrollHeight, clientHeight } = textRef.current;
            // Jika scrollHeight lebih besar dari clientHeight, berarti ada lebih banyak teks yang perlu ditampilkan
            setShowButton(scrollHeight > clientHeight);
        }
    }, [children]);

    return (
        <div className={cn("space-y-0", className)} {...props}>
            <p
                ref={textRef}
                className={cn(
                    isExpanded ? "line-clamp-none" : `line-clamp-${lines}`
                )}
            >
                {children}
            </p>
            {showButton && (
                <Button
                    variant="link"
                    size="sm"
                    className="p-0"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? "Show Less" : "Show More"}
                </Button>
            )}
        </div>
    );
}
