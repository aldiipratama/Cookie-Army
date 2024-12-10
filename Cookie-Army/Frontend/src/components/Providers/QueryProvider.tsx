'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren } from "react"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        },
    }
})

export default function QueryProvider(props: PropsWithChildren) {
    return (
        <QueryClientProvider client={queryClient} {...props} />
    )
}
