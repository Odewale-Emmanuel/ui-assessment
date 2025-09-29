import { NavBar } from "@/components/nav-bar";
import { HeroSection } from "@/components/hero";
import { GenerateSection } from "@/components/generate";
import { GallerySection } from "@/components/gallery";
import { StickyBanner } from "@/components/sticky-banner";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <GenerateSection />
      <GallerySection />
      <StickyBanner />
    </div>
  );
}
