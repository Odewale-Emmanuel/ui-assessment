import { StaticImageData } from "next/image";

export type GenerateItemType = {
  icon: StaticImageData;
  iconType: "solid" | "gradient" | "transparent";
  iconColor: string;
  isNew: boolean;
  title: string;
  description: string;
  url: string;
};
