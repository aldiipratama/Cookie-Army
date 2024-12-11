'use client'

import { useTheme } from 'next-themes'
import NextTopLoader from 'nextjs-toploader'

export default function TopLoader() {
    const { theme } = useTheme()

    return <NextTopLoader color={theme === 'dark' ? 'white' : 'black'} height={1} />
}
