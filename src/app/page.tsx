import HomeBrand from "@/components/home/HomeBrand";
import HomeFooter from "@/components/home/HomeFooter";
import HomeHero from "@/components/home/HomeHero";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedProject from "@/components/persistent/FeaturedProject";
import FloatingControls from "@/components/persistent/FloatingControls";

export default function Home() {
  return (
    <>
      <FloatingControls />
      <FeaturedProject />
      <main>
        <HomeHero />
        <HomeBrand />
        <HowItWorks />
        <HomeFooter />
      </main>
    </>
  );
}
