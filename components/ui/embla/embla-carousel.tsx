"use client";

import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./embla-carousel-dot-button";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./embla-carousel-arrow-buttons";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { CarouselSlides } from "@/constants/hero-carousel";
import { CarouselSlideType } from "@/types/hero-carousel-type";

type PropType = {
  options?: EmblaOptionsType;
};

function SlideCard({ slide }: { slide: CarouselSlideType }) {
  return (
    <div className="embla__slide p-7 sm:p-9 bg-gray-50 relative group aspect-video basis-full md:basis-[80%] lg:basis-[60%] rounded-xl md:rounded-3xl overflow-hidden">
      <div className="">
        <Image
          src={slide.image}
          alt="wan 2.2"
          className="absolute z-0 top-0 left-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
        />
        <span className="absolute z-0 top-0 left-0 w-full h-full bg-gradient-to-b from-black/1 from-40% to-black/70 to-80%"></span>
      </div>

      <div className="relative h-full grid grid-cols-1 grid-rows-[auto_1fr] sm:grid-rows-2">
        <div className="">
          <h3 className="uppercase text-[.55em] text-white/85">
            {slide.feature}
          </h3>
        </div>

        <div className="flex flex-col">
          {slide.mainHeader && (
            <h1 className="hidden sm:block text-5xl text-center text-white font-bold md:text-5xl -mt-4">
              {slide.mainHeader}
            </h1>
          )}

          <div className="mt-auto flex flex-col gap-2">
            <h2 className="hidden sm:block text-white font-semibolsd text-xl">
              {slide.secondaryHeader}
            </h2>

            <div className="grid grid-cols-[1.38fr_1fr] md:grid-cols-[1.28fr_1fr]">
              <p className="text-[.6em] text-white/75 sm:text-white/85 leading-4 sm:leading-5">
                {slide.description}
              </p>
              <div className="flex justify-end items-end">
                <span className="bg-white relative text-black/95 overflow-hidden py-3 px-4 rounded-4xl font-semibold text-[.55em] sm:text-[.70em]">
                  <Link
                    href={slide.ctaUrl || "/"}
                    className="absolute top-0 left-0 w-full h-full"
                  ></Link>
                  {slide.ctaTitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-10">
          {CarouselSlides.map((slide, index) => (
            <SlideCard slide={slide} key={index} />
          ))}
        </div>
      </div>

      <div className="flex justify-between p-1 sm:p-2">
        <div className="alignment-placeholder"></div>

        <div className="embla__dots flex gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            >
              <span
                className={cn(
                  "bg-gray-300 dark:bg-white/5 h-1.5 sm:h-2 aspect-square rounded-full",
                  index === selectedIndex && "bg-black dark:bg-white"
                )}
              ></span>
            </DotButton>
          ))}
        </div>

        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
