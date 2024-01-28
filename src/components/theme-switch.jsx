"use client"

import { cx } from "../utils";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";
import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeSwitch() {
  const [mode, setMode] = useThemeSwitch();

  return (
    <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      className={cx(
        "w-10 h-10 flex items-center justify-center rounded-md p-2.5",
        mode === "light" && "bg-dark/30 text-purple-600",
        mode === "dark" && "bg-light/30 text-amber-500"
      )}
      aria-label="theme-switcher"
    >
      {mode === "light" ? (
        <MoonIcon />
      ) : (
        <SunIcon />
      )}
    </button>
  )
}