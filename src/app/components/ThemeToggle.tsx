"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
      {/* Light */}
      <button
        onClick={() => setTheme("light")}
        className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
          theme === "light"
            ? "bg-yellow-500/20 text-yellow-400 shadow-lg"
            : "hover:bg-white/10 text-gray-500"
        }`}
      >
        <Sun size={18} />
      </button>

      {/* Dark */}
      <button
        onClick={() => setTheme("dark")}
        className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
          theme === "dark"
            ? "bg-blue-500/20 text-blue-400 shadow-lg"
            : "hover:bg-white/10 text-gray-500"
        }`}
      >
        <Moon size={18} />
      </button>

      {/* System */}
      <button
        onClick={() => setTheme("system")}
        className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
          theme === "system"
            ? "bg-purple-500/20 text-purple-400 shadow-lg"
            : "hover:bg-white/10 text-gray-500"
        }`}
      >
        <Monitor size={18} />
      </button>
    </div>
  );
}