"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { IoIosSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";

export function ModeToggler() {
  const { setTheme, theme } = useTheme();

  function handleThemeToggle(): void {
    setTheme(theme == "light" ? "dark" : "light");
  }
  return (
    <div
      role="button"
      className="aspect-square p-2 rounded-lg hover:cursor-pointer"
      onClick={handleThemeToggle}
    >
      <span className="sr-only">Toggle theme</span>
      {theme == "light" ? (
        <span>
          <IoIosSunny
            className="transition-all text-lg"
            suppressHydrationWarning
          />
        </span>
      ) : (
        <span>
          <BsMoonStarsFill className="text-sm" />
        </span>
      )}
    </div>
  );
}
