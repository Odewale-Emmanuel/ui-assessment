import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/ui/embla/embla-carousel";
import { JSX } from "react";

export function HeroSection(): JSX.Element {
  const OPTIONS: EmblaOptionsType = { align: "start" };

  return (
    <header className="overflow-hidden px-4 md:pl-7 md:pr-1 my-10">
      <EmblaCarousel options={OPTIONS} />
    </header>
  );
}
