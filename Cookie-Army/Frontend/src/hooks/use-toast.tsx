'use client'

import { useTheme } from "next-themes";
import { toast as toastRT, ToastOptions } from "react-toastify";

export function useToast() {
    const { theme } = useTheme()

    const toast = (message: string, options?: ToastOptions) => toastRT(message, {
        ...options,
        theme: theme === 'dark' ? 'dark' : 'colored',
        autoClose: 1000
    })

    return {
        toast
    }
}
