"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("Theme toggle mounted");
    console.log("Current theme:", theme);
    console.log("Resolved theme:", resolvedTheme);
    console.log("System theme:", systemTheme);
    console.log(
      "HTML class list:",
      document.documentElement.classList.toString(),
    );
  }, [theme, resolvedTheme, systemTheme]);

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="h-9 w-9" disabled />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      onClick={() => {
        const newTheme = resolvedTheme === "dark" ? "light" : "dark";
        console.log("[v0] Switching theme from", resolvedTheme, "to", newTheme);
        setTheme(newTheme);
        setTimeout(() => {
          console.log(
            "[v0] HTML class list after change:",
            document.documentElement.classList.toString(),
          );
        }, 100);
      }}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
