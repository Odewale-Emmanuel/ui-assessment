"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import KreaLogo from "@/public/krea-logo.svg";
import { ModeToggler } from "./mode-toggler";
import { JSX } from "react";
import Home from "@/public/home.svg";
import Gallery from "@/public/gallery.svg";
import VideoIcon from "@/public/video-icon.svg";
import MagicTool from "@/public/magic-tool.svg";
import PenTool from "@/public/pen-tool.svg";
import Compass from "@/public/compass.svg";
import Folder from "@/public/folder.svg";
import { usePathname } from "next/navigation";
import { FaBell } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectGroup,
  SelectValue,
} from "@/components/ui/select";

function NavBarLeft(): JSX.Element {
  return (
    <Select>
      <SelectTrigger className="w-auto border-0 p-0 shadow-none dark:bg-transparent hover:bg-transparent focus:outline-0">
        <SelectValue
          placeholder="benevolentrimboebie"
          className="text-[.65em]"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Items</SelectLabel>
          <SelectItem value="benevolentrimboebie">
            benevolentrimboebie
          </SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex justify-between sticky top-0 left-0 items-center gap-2 py-1.5 bg-transparent",
        "dark:bg-white/1.5"
      )}
    >
      <div className="inline-flex items-center gap-4">
        <span>
          <Link href={"/"}>
            <Image
              src={KreaLogo}
              alt="krea-logo"
              className="dark:invert w-6 aspect-square"
            />
          </Link>
        </span>

        <div className="inline-flex gap-2 items-center">
          <span className="w-6 aspect-square inline-block rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
          <NavBarLeft />
        </div>
      </div>

      <ul className="flex items-center bg-gray-200/40 dark:bg-black p-1 rounded-lg gap-1">
        <li className="inline-flex items-center">
          <Link href={"/"} className="inline-flex items-center">
            <span
              className={cn(
                "relative inline-block hover:bg-white group py-2 px-2.5 rounded-lg",
                pathname != "/" && "dark:hover:bg-white/10",
                pathname == "/" && "bg-white shadow-lg"
              )}
            >
              <Image
                src={Home}
                alt="home icon"
                className={cn(
                  "w-4 aspect-square",
                  pathname !== "/" && "dark:invert"
                )}
              />
            </span>
          </Link>
        </li>

        <li className="inline-flex items-center">
          <Link href={"/gallery"} className="inline-flex items-center">
            <span
              className={cn(
                "relative inline-block hover:bg-white group py-2 px-2.5 rounded-lg",
                pathname != "/gallery" && "dark:hover:bg-white/10",
                pathname == "/gallery" && "bg-white shadow-lg"
              )}
            >
              <Image
                src={Gallery}
                alt="gallery icon"
                className={cn(
                  "w-4 aspect-square",
                  pathname !== "/gallery" && "dark:invert"
                )}
              />
            </span>
          </Link>
        </li>

        <li className="inline-flex items-center">
          <Link href={"/video"} className="inline-flex items-center">
            <span
              className={cn(
                "relative inline-block hover:bg-white group py-2 px-2.5 rounded-lg",
                pathname != "/video" && "dark:hover:bg-white/10",
                pathname == "/video" && "bg-white shadow-lg"
              )}
            >
              <Image
                src={VideoIcon}
                alt="video icon"
                className={cn(
                  "w-4 aspect-square",
                  pathname !== "/video" && "dark:invert"
                )}
              />
            </span>
          </Link>
        </li>

        <li className="inline-flex items-center">
          <Link href={"/magic"} className="inline-flex items-center">
            <span
              className={cn(
                "relative inline-block hover:bg-white group py-2 px-2.5 rounded-lg",
                pathname != "/magic" && "dark:hover:bg-white/10",
                pathname == "/magic" && "bg-white shadow-lg"
              )}
            >
              <Image
                src={MagicTool}
                alt="magic icon"
                className={cn(
                  "w-4 aspect-square",
                  pathname !== "/magic" && "dark:invert"
                )}
              />
            </span>
          </Link>
        </li>

        <li className="inline-flex items-center">
          <Link href={"/pen"} className="inline-flex items-center">
            <span
              className={cn(
                "relative inline-block hover:bg-white group py-2 px-2.5 rounded-lg",
                pathname != "/pen" && "dark:hover:bg-white/10",
                pathname == "/pen" && "bg-white shadow-lg"
              )}
            >
              <Image
                src={PenTool}
                alt="edit icon"
                className={cn(
                  "w-4 aspect-square",
                  pathname !== "/pen" && "dark:invert"
                )}
              />
            </span>
          </Link>
        </li>

        <li className="inline-flex items-center">
          <Link href={"/compass"} className="inline-flex items-center">
            <span
              className={cn(
                "relative inline-block hover:bg-white group py-2 px-2.5 rounded-lg",
                pathname != "/compass" && "dark:hover:bg-white/10",
                pathname == "/compass" && "bg-white shadow-lg"
              )}
            >
              <Image
                src={Compass}
                alt="compass icon"
                className={cn(
                  "w-4 aspect-square",
                  pathname !== "/compass" && "dark:invert"
                )}
              />
            </span>
          </Link>
        </li>

        <li className="inline-flex items-center">
          <Link href={"/folder"} className="inline-flex items-center">
            <span
              className={cn(
                "relative inline-block hover:bg-white group py-2 px-2.5 rounded-lg",
                pathname != "/folder" && "dark:hover:bg-white/10",
                pathname == "/folder" && "bg-white shadow-lg"
              )}
            >
              <Image
                src={Folder}
                alt="folder icon"
                className={cn(
                  "w-4 aspect-square",
                  pathname !== "/folder" && "dark:invert"
                )}
              />
            </span>
          </Link>
        </li>
      </ul>

      <div className="inline-flex gap-2 items-center">
        <Link href={"/gallery-exp"} className="inline-flex items-center">
          <span className="inline-flex items-center gap-1 bg-gray-200/40 dark:bg-black rounded-lg py-2 px-2.5">
            <Image
              src={Gallery}
              alt="home icon"
              className={cn("w-4 aspect-square", "dark:invert")}
            />
            <span className="text-[.65em]">Gallery</span>
          </span>
        </Link>

        <Link href={"/support"} className="inline-flex items-center">
          <span className="inline-flex items-center gap-1 bg-gray-200/40 dark:bg-black rounded-lg py-2 px-2.5">
            <BiSupport />
            <span className="text-[.65em]">Support</span>
          </span>
        </Link>

        <Link href={"/support"} className="inline-flex items-center">
          <span className="inline-flex items-center bg-gray-200/40 dark:bg-black rounded-lg py-2 px-2.5">
            <FaBell className="text-sm" />
          </span>
        </Link>

        <span className="bg-gray-200/40 dark:bg-black rounded-lg">
          <ModeToggler />
        </span>
        <span className="w-6 aspect-square inline-block rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
      </div>
    </nav>
  );
}
