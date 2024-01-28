"use client"

import { useTheme } from 'next-themes';
import { useState } from 'react';
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeSwitch() {
  const [flipState, setFlipState] = useState(false);
  const { setTheme, theme } = useTheme();

  const handleClick = () => {
    setFlipState(!flipState)
    setTheme(flipState ? "light" : "dark")
  }

  return (
    <div>
      {theme === "light" ? (
        <button
          onClick={handleClick}
          className="w-10 h-10 flex items-center justify-center rounded-md p-2.5 bg-dark/30"
          aria-label="theme-switcher"
        >
          <FaMoon className='w-6 h-6 text-purple-500' />
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="w-10 h-10 flex items-center justify-center rounded-md p-2.5 bg-light/30"
          aria-label="theme-switcher"
        >
          <FaSun className='w-6 h-6 text-amber-500' />
        </button>
      )}
    </div>
  )
}