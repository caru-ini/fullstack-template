"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, ChevronDown, type LucideIcon, Moon, Sun, Wrench } from "lucide-react";
import { useTheme } from "next-themes";
import { createElement } from "react";

const themeIcons: Record<string, LucideIcon> = {
  light: Sun,
  dark: Moon,
  system: Wrench,
};

export function ThemeToggle({ variant = "icon" }: { variant?: "icon" | "dropdown" }) {
  const { theme: current, themes, setTheme } = useTheme();

  return variant === "icon" ? (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
    >
      <Sun className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          aria-label="Toggle theme"
          className="flex items-center rounded-full px-2"
        >
          <div className="flex items-center">
            <div className="relative">
              <Sun className="size-5 scale-100 transition-transform duration-300 dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute inset-0 size-5 scale-0 -rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0" />
            </div>
          </div>
          <ChevronDown className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
            {createElement(themeIcons[theme] ?? Wrench, { className: "mr-2 size-4" })}
            {theme}
            {theme === current ? <Check className="ml-auto size-4" /> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
