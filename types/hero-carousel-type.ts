import { StaticImageData } from "next/image";

export type CarouselSlideType = {
  feature: string;
  image: StaticImageData;
  mainHeader: string;
  secondaryHeader: string;
  description: string;
  ctaTitle: string;
  ctaUrl: string;
};
