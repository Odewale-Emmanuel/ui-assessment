import { StaticImageData } from "next/image";

export type ToolType = {
  icon: StaticImageData;
  iconType: "solid" | "gradient" | "transparent";
  iconColor: string;
  isNew: boolean;
  title: string;
  description: string;
  url: string;
};
