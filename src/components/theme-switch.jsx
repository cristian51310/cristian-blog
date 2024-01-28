"use client"

import { useTheme } from 'next-themes';
import { cx } from "../utils";
import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeSwitch() {
  const { setTheme, theme } = useTheme();

  console.log(theme);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cx(
        "w-10 h-10 flex items-center justify-center rounded-md p-2.5",
        theme === "light" && "bg-dark/30 text-purple-600",
        theme === "dark" && "bg-light/30 text-amber-500"
      )}
      aria-label="theme-switcher"
    >
      {theme === "light" ? (
        <MoonIcon />
      ) : (
        <SunIcon />
      )}
    </button>
  )
}