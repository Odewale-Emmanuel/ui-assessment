"use client";

import { JSX, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Tools } from "@/constants/tools";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ToolType } from "@/types/tool-type";

function ToolCard({ tool }: { tool: ToolType }): JSX.Element {
  return (
    <div className="flex items-start gap-2.5">
      <span
        className={cn(
          "h-9 aspect-square inline-flex relative items-center justify-center rounded-md"
        )}
        style={{ backgroundColor: tool.iconColor }}
      >
        {tool.iconType === "gradient" && (
          <span
            className={cn(
              "absolute z-0 top-0 left-0 w-full h-full rounded-md",
              "bg-gradient-to-b from-black/3 from-10% via-transparent via-40% to-white/50 to-95%"
            )}
          ></span>
        )}

        <Image src={tool.icon} alt={tool.title} className="invert" />
      </span>

      <div className="flex flex-col gap-0.5">
        <div className="flex gap-1.5 items-center">
          <h4 className="text-black/90 dark:text-white text-[.7em] font-semibold sm:font-normal">
            {tool.title}
          </h4>

          {tool.isNew && (
            <span className="bg-blue-700 px-2 py-0.5 -mt-1 text-white rounded-md font-semibold text-[.5em]">
              New
            </span>
          )}
        </div>

        <p className="text-[.55em] leading-4 text-black/80 dark:text-white/60">
          {tool.description}
        </p>
      </div>

      <div className="h-full ml-auto inline-flex items-center justify-center">
        <span className="inline-block text-[.6em] -mt-2 relative bg-[#F6F6F6] dark:text-white dark:border dark:bg-white/10 py-1.5 px-2.5 rounded-xl">
          <Link
            href={tool.url}
            className="absolute w-full h-full top-0 left-0"
          ></Link>
          Open
        </span>
      </div>
    </div>
  );
}

export function ToolSection(): JSX.Element {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <section className="flex flex-col gap-4 px-4 sm:px-6 mb-4">
      <header className="flex justify-between gap-2 ">
        <h3 className="text-sm font-semibold sm:font-normal">Generate</h3>

        <button
          className="inline-flex items-center hover:cursor-pointer gap-1"
          onClick={() => setShowMore((prev) => !prev)}
        >
          <span>
            {showMore ? (
              <FaAngleUp className="text-blue-700" />
            ) : (
              <FaAngleDown className="text-blue-700" />
            )}
          </span>

          <span className="text-blue-700 text-[.7em]">
            {showMore ? "show less" : "show all"}
          </span>
        </button>
      </header>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {showMore
          ? Tools.map((tool, index) => <ToolCard tool={tool} key={index} />)
          : Tools.slice(0, 8).map((tool, index) => (
              <ToolCard tool={tool} key={index} />
            ))}{" "}
      </div>
    </section>
  );
}
