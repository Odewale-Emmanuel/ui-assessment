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
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectGroup,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function SelectMenu(): JSX.Element {
  return (
    <Select>
      <SelectTrigger
        className="w-auto border-0 p-0 shadow-none dark:bg-transparent hover:bg-transparent focus:outline-0 focus-visible:ring-0 hover:cursor-pointer dark:hover:bg-transparent text-[0.70em] text-gray-500"
        suppressHydrationWarning
      >
        <SelectValue placeholder="benevolentrimboebie" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-[.6em]">Menu options</SelectLabel>
          <SelectItem className="text-[.65em]" value="benevolentrimboebie">
            benevolentrimboebie
          </SelectItem>
          <SelectItem className="text-[.65em]" value="banana">
            Banana
          </SelectItem>
          <SelectItem className="text-[.65em]" value="blueberry">
            Blueberry
          </SelectItem>
          <SelectItem className="text-[.65em]" value="grapes">
            Grapes
          </SelectItem>
          <SelectItem className="text-[.65em]" value="pineapple">
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function MobileNav(): JSX.Element {
  const pathname = usePathname();

  return (
    <Drawer>
      <DrawerTrigger asChild suppressHydrationWarning>
        <button className="hover:cursor-pointer">
          <span className="sr-only">mobile nav menu button</span>
          <span>
            <CgMenuGridO className="text-2xl" />
          </span>
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle className="sr-only">Mobile Nav Menu</DrawerTitle>

        <div className="h-svh flex flex-col gap-4 p-4">
          <div className="flex items-center justify-between">
            <span>
              <Link href={"/"}>
                <Image
                  src={KreaLogo}
                  alt="krea-logo"
                  className="dark:invert w-6 aspect-square"
                />
              </Link>
            </span>

            <div className="flex items-center gap-2">
              <DrawerClose asChild>
                <button className="hover:cursor-pointer">
                  <span className="sr-only">close mobile menu button</span>
                  <span>
                    <IoClose className="text-xl" />
                  </span>
                </button>
              </DrawerClose>
            </div>
          </div>

          <div className="inline-flex gap-2 items-center">
            <span className="w-6 aspect-square inline-block rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
            <SelectMenu />
          </div>

          <ul className="flex items-center w-auto bg-gray-200/40 dark:bg-black p-1 rounded-lg gap-1">
            <li className="inline-flex items-center">
              <Link href={"/"} className="inline-flex items-center">
                <span
                  className={cn(
                    "relative inline-block group hover:bg-white group py-2 px-2.5 rounded-lg",
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
                  {pathname !== "/" && (
                    <span className="hidden mt-2 text-[.5em] absolute left-1/2 -translate-x-1/2 -bottom-7 group-hover:inline-block bg-black text-white dark:invert py-1 px-2 rounded-lg">
                      Home
                    </span>
                  )}
                </span>
              </Link>
            </li>

            <li className="inline-flex items-center">
              <Link href={"/gallery"} className="inline-flex items-center">
                <span
                  className={cn(
                    "relative inline-block group hover:bg-white group py-2 px-2.5 rounded-lg",
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
                  {pathname !== "/gallery" && (
                    <span className="hidden mt-2 text-[.5em] absolute left-1/2 -translate-x-1/2 -bottom-7 group-hover:inline-block bg-black text-white dark:invert py-1 px-2 rounded-lg">
                      Gallery
                    </span>
                  )}
                </span>
              </Link>
            </li>

            <li className="inline-flex items-center">
              <Link href={"/video"} className="inline-flex items-center">
                <span
                  className={cn(
                    "relative inline-block group hover:bg-white group py-2 px-2.5 rounded-lg",
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
                  {pathname !== "/video" && (
                    <span className="hidden mt-2 text-[.5em] absolute left-1/2 -translate-x-1/2 -bottom-7 group-hover:inline-block bg-black text-white dark:invert py-1 px-2 rounded-lg">
                      Video
                    </span>
                  )}
                </span>
              </Link>
            </li>

            <li className="inline-flex items-center">
              <Link href={"/magic"} className="inline-flex items-center">
                <span
                  className={cn(
                    "relative inline-block group hover:bg-white group py-2 px-2.5 rounded-lg",
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
                  {pathname !== "/magic" && (
                    <span className="hidden mt-2 text-[.5em] absolute left-1/2 -translate-x-1/2 -bottom-7 group-hover:inline-block bg-black text-white dark:invert py-1 px-2 rounded-lg">
                      Enhancer
                    </span>
                  )}
                </span>
              </Link>
            </li>

            <li className="inline-flex items-center">
              <Link href={"/pen"} className="inline-flex items-center">
                <span
                  className={cn(
                    "relative inline-block group hover:bg-white group py-2 px-2.5 rounded-lg",
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
                  {pathname !== "/pen" && (
                    <span className="hidden mt-2 text-[.5em] absolute left-1/2 -translate-x-1/2 -bottom-7 group-hover:inline-block bg-black text-white dark:invert py-1 px-2 rounded-lg">
                      Realtime
                    </span>
                  )}
                </span>
              </Link>
            </li>

            <li className="inline-flex items-center">
              <Link href={"/compass"} className="inline-flex items-center">
                <span
                  className={cn(
                    "relative inline-block group hover:bg-white group py-2 px-2.5 rounded-lg",
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
                  {pathname !== "/compass" && (
                    <span className="hidden mt-2 text-[.5em] absolute left-1/2 -translate-x-1/2 -bottom-7 group-hover:inline-block bg-black text-white dark:invert py-1 px-2 rounded-lg">
                      Edit
                    </span>
                  )}
                </span>
              </Link>
            </li>

            <li className="inline-flex items-center">
              <Link href={"/folder"} className="inline-flex items-center">
                <span
                  className={cn(
                    "relative inline-block group hover:bg-white group py-2 px-2.5 rounded-lg",
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
                  {pathname !== "/folder" && (
                    <span className="hidden mt-2 text-[.5em] absolute left-1/2 -translate-x-1/2 -bottom-7 group-hover:inline-block bg-black text-white dark:invert py-1 px-2 rounded-lg">
                      Files
                    </span>
                  )}
                </span>
              </Link>
            </li>
          </ul>

          <div className="inline-flex flex-col gap-3 items-start">
            <Link href={"/gallery-exp"} className="inline-flex items-center">
              <span className="inline-flex items-center gap-1 bg-gray-200/40 dark:bg-black rounded-lg py-2 px-2.5">
                <Image
                  src={Gallery}
                  alt="home icon"
                  className={cn("w-4 aspect-square", "dark:invert")}
                />
                <span className="text-[.65em] inline-block">Gallery</span>
              </span>
            </Link>

            <Link href={"/support"} className="inline-flex items-center">
              <span className="inline-flex items-center gap-1 bg-gray-200/40 dark:bg-black rounded-lg py-2 px-2.5">
                <BiSupport />
                <span className="text-[.65em] inline-block">Support</span>
              </span>
            </Link>

            <Link href={"/notification"} className="inline-flex items-center">
              <span className="inline-flex items-center gap-1 bg-gray-200/40 dark:bg-black rounded-lg py-2 px-2.5">
                <FaBell className="text-sm" />
                <span className="text-[.65em] inline-block">Notification</span>
              </span>
            </Link>

            <span className="w-6 aspect-square inline-block rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export function NavBar(): JSX.Element {
  const pathname = usePathname();

  return (
    <>
      <nav
        className={cn(
          "hidden md:flex justify-between sticky z-50 top-0 left-0 items-center gap-2 py-2.5 bg-white px-4 sm:px-6",
          "dark:bg-white/1 backdrop-blur-3xl"
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
            <SelectMenu />
          </div>
        </div>

        <ul className="flex items-center bg-gray-200/40 dark:bg-black p-1 rounded-lg gap-1">
          <li className="inline-flex items-center">
            <Link href={"/"} className="inline-flex items-center">
              <span
                className={cn(
                  "relative inline-block group hover:bg-white group py-2 px-2.5 rounded-lg",
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
                {pathname !== "/" && (
                  <span className="hidden mt-2 text-[.5em] absolute left-1/2 -translate-x-1/2 -bottom-7 group-hover:inline-block bg-black text-white dark:invert py-1 px-2 rounded-lg">
                    Home
                  </span>
                )}
              </span>
            </Link>
          </li>

          <li className="inline-flex items-center">
            <Link href={"/gallery"} className="inline-flex items-center">
              <span
                className={cn(
                  "relative inline-block group hover:bg-white group py-2 px-2.5 rounded-lg",
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
                {pathname !== "/gallery" && (
                  <span className="hidden mt-2 text-[.5em] absolute left-1/2 -translate-x-1/2 -bottom-7 group-hover:inline-block bg-black text-white dark:invert py-1 px-2 rounded-lg">
                    Gallery
                  </span>
                )}
              </span>
            </Link>
          </li>

          <li className="inline-flex items-center">
            <Link href={"/video"} className="inline-flex items-center">
              <span
                className={cn(
                  "relative inline-block group hover:bg-white group py-2 px-2.5 rounded-lg",
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
                {pathname !== "/video" && (
                  <span className="hidden mt-2 text-[.5em] absolute left-1/2 -translate-x-1/2 -bottom-7 group-hover:inline-block bg-black text-white dark:invert py-1 px-2 rounded-lg">
                    Video
                  </span>
                )}
              </span>
            </Link>
          </li>

          <li className="inline-flex items-center">
            <Link href={"/magic"} className="inline-flex items-center">
              <span
                className={cn(
                  "relative inline-block group hover:bg-white group py-2 px-2.5 rounded-lg",
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
                {pathname !== "/magic" && (
                  <span className="hidden mt-2 text-[.5em] absolute left-1/2 -translate-x-1/2 -bottom-7 group-hover:inline-block bg-black text-white dark:invert py-1 px-2 rounded-lg">
                    Enhancer
                  </span>
                )}
              </span>
            </Link>
          </li>

          <li className="inline-flex items-center">
            <Link href={"/pen"} className="inline-flex items-center">
              <span
                className={cn(
                  "relative inline-block group hover:bg-white group py-2 px-2.5 rounded-lg",
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
                {pathname !== "/pen" && (
                  <span className="hidden mt-2 text-[.5em] absolute left-1/2 -translate-x-1/2 -bottom-7 group-hover:inline-block bg-black text-white dark:invert py-1 px-2 rounded-lg">
                    Realtime
                  </span>
                )}
              </span>
            </Link>
          </li>

          <li className="inline-flex items-center">
            <Link href={"/compass"} className="inline-flex items-center">
              <span
                className={cn(
                  "relative inline-block group hover:bg-white group py-2 px-2.5 rounded-lg",
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
                {pathname !== "/compass" && (
                  <span className="hidden mt-2 text-[.5em] absolute left-1/2 -translate-x-1/2 -bottom-7 group-hover:inline-block bg-black text-white dark:invert py-1 px-2 rounded-lg">
                    Edit
                  </span>
                )}
              </span>
            </Link>
          </li>

          <li className="inline-flex items-center">
            <Link href={"/folder"} className="inline-flex items-center">
              <span
                className={cn(
                  "relative inline-block group hover:bg-white group py-2 px-2.5 rounded-lg",
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
                {pathname !== "/folder" && (
                  <span className="hidden mt-2 text-[.5em] absolute left-1/2 -translate-x-1/2 -bottom-7 group-hover:inline-block bg-black text-white dark:invert py-1 px-2 rounded-lg">
                    Files
                  </span>
                )}
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
              <span className="text-[.65em] hidden lg:inline-block">
                Gallery
              </span>
            </span>
          </Link>

          <Link href={"/support"} className="inline-flex items-center">
            <span className="inline-flex items-center gap-1 bg-gray-200/40 dark:bg-black rounded-lg py-2 px-2.5">
              <BiSupport />
              <span className="text-[.65em] hidden lg:inline-block">
                Support
              </span>
            </span>
          </Link>

          <Link href={"/notification"} className="inline-flex items-center">
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

      <nav
        className={cn(
          "md:hidden flex justify-between sticky z-50 top-0 left-0 items-center gap-2 py-2.5 bg-white shadow-2xl px-4 sm:px-6",
          "dark:bg-white/1 backdrop-blur-3xl"
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
        </div>

        <div className="inline-flex items-center gap-1.5">
          <ModeToggler />
          <MobileNav />
        </div>
      </nav>
    </>
  );
}
