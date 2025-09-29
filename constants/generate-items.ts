import { GenerateItemType } from "@/types/generate-items-type";
import Gallery from "@/public/gallery.svg";
import VideoIcon from "@/public/video-icon.svg";
import MagicTool from "@/public/magic-tool.svg";
import PenTool from "@/public/pen-tool.svg";
import Compass from "@/public/compass.svg";
import Folder from "@/public/folder.svg";
import Microphone from "@/public/mic-lipsync.svg";
import Person from "@/public/motion.svg";

const GenerateItems: GenerateItemType[] = [
  {
    icon: Gallery,
    iconType: "gradient",
    iconColor: "#61788B",
    isNew: true,
    title: "Image",
    description:
      "Generate images with custom styles with in Flux and ideogram.",
    url: "/gallery",
  },
  {
    icon: VideoIcon,
    iconType: "solid",
    iconColor: "#F3AB06",
    isNew: false,
    title: "Video",
    description: "Generate videos with Haiku, Pika, Runaway, Luma and more.",
    url: "/video",
  },
  {
    icon: PenTool,
    iconType: "gradient",
    iconColor: "#3BB6F5",
    isNew: false,
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops",
    url: "/pen",
  },
  {
    icon: MagicTool,
    iconType: "gradient",
    iconColor: "#363636",
    isNew: true,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22k",
    url: "/magic",
  },
  {
    icon: Compass,
    iconType: "gradient",
    iconColor: "#613D8E",
    isNew: true,
    title: "Edit",
    description: "Add objects, change style, or expand photos and generation",
    url: "/compass",
  },
  {
    icon: Microphone,
    iconType: "gradient",
    iconColor: "#33524A",
    isNew: true,
    title: "Video Lipsync",
    description: "Lip sync any video to any audio",
    url: "/lipsync",
  },
  {
    icon: Person,
    iconType: "solid",
    iconColor: "#1C1E1F",
    isNew: true,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters",
    url: "/motion",
  },
  {
    icon: Folder,
    iconType: "solid",
    iconColor: "#E3043C",
    isNew: false,
    title: "Train",
    description: "Transfer motion to images and animate characters",
    url: "/train",
  },
  {
    icon: Gallery,
    iconType: "gradient",
    iconColor: "#61788B",
    isNew: true,
    title: "Image",
    description:
      "Generate images with custom styles with in Flux and ideogram.",
    url: "/gallery",
  },
  {
    icon: VideoIcon,
    iconType: "solid",
    iconColor: "#F3AB06",
    isNew: false,
    title: "Video",
    description: "Generate videos with Haiku, Pika, Runaway, Luma and more.",
    url: "/video",
  },
  {
    icon: PenTool,
    iconType: "gradient",
    iconColor: "#3BB6F5",
    isNew: false,
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops",
    url: "/pen",
  },
  {
    icon: MagicTool,
    iconType: "gradient",
    iconColor: "#363636",
    isNew: true,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22k",
    url: "/magic",
  },
  {
    icon: Compass,
    iconType: "gradient",
    iconColor: "#613D8E",
    isNew: true,
    title: "Edit",
    description: "Add objects, change style, or expand photos and generation",
    url: "/compass",
  },
  {
    icon: Microphone,
    iconType: "gradient",
    iconColor: "#33524A",
    isNew: true,
    title: "Video Lipsync",
    description: "Lip sync any video to any audio",
    url: "/lipsync",
  },
  {
    icon: Person,
    iconType: "solid",
    iconColor: "#1C1E1F",
    isNew: true,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters",
    url: "/motion",
  },
  {
    icon: Folder,
    iconType: "solid",
    iconColor: "#E3043C",
    isNew: false,
    title: "Train",
    description: "Transfer motion to images and animate characters",
    url: "/train",
  },
];

export { GenerateItems };
