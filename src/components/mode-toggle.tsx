"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-4">
      <Sun size={16} />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <Moon size={16} />
    </div>
  );
}
