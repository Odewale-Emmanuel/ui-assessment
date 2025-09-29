import { JSX } from "react";
import KreaLogo from "@/public/krea-logo.svg";
import MobbinFullLogo from "@/public/mobbin-logo-wordmark_dark.svg";
import Image from "next/image";

export function StickyBanner(): JSX.Element {
  return (
    <div className="sticky bottom-0 left-0 flex justify-between items-center p-4 sm:px-6 sm:py-4 bg-[#1e1e1e]">
      <div className="inline-flex gap-3 items-center">
        <span className=" bg-black p-1 rounded-md">
          <Image
            src={KreaLogo}
            alt="krea.ai logo"
            className="invert h-7 sm:h-8 aspect-square object-cover"
          />
        </span>

        <h3 className="text-white text-[.8em] sm:text-base">Krea AI</h3>
      </div>

      <div className="inline-flex items-end gap-1">
        <h3 className="text-white text-[.8em] sm:text-base">curated by</h3>

        <Image
          src={MobbinFullLogo}
          alt="Mobbin logo"
          className="w-32 sm:w-38 -translate-y-1"
        />
      </div>
    </div>
  );
}
