import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toPascalCase(str: string | null | undefined): string {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : ''
}