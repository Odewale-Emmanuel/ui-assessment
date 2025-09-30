import { NavBar } from "@/components/nav-bar";
import { HeroSection } from "@/components/hero";
import { ToolSection } from "@/components/tool";
import { GallerySection } from "@/components/gallery";
import { StickyBanner } from "@/components/sticky-banner";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <ToolSection />
      <GallerySection />
      <StickyBanner />
    </div>
  );
}
