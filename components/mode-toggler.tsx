"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MdSunny } from "react-icons/md";
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
          <MdSunny className="transition-all text-md" />
        </span>
      ) : (
        <span>
          <BsMoonStarsFill className="text-sm" />
        </span>
      )}
    </div>
  );
}
