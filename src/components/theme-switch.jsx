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
        "w-6 h-6 flex items-center justify-center rounded-full p-1",
        mode === "light" && "bg-dark text-light",
        mode === "dark" && "bg-light text-dark"
      )}
      aria-label="theme-switcher"
    >
      {mode === "light" ? (
        <MoonIcon className="fill-dark" />
      ) : (
        <SunIcon className="fill-dark" />
      )}
    </button>
  )
}