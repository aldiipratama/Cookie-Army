"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function ModeToggleClick() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const ModeToggleSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isChecked = mounted && (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches))

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      )}
      checked={isChecked}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none flex items-center justify-center h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )}
      >
        <Sun className={cn("h-3 w-3 transition-all", theme === "dark" ? "rotate-0 scale-0" : "rotate-90 scale-100")} />
        <Moon className={cn("h-3 w-3 absolute transition-all", theme === "dark" ? "rotate-90 scale-100" : "rotate-0 scale-0")} />
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  )
})
ModeToggleSwitch.displayName = SwitchPrimitives.Root.displayName

export { ModeToggleSwitch }