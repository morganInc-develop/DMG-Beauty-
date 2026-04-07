import HomeAbout from "@/components/home/HomeAbout";
import HomeFooter from "@/components/home/HomeFooter";
import FloatingControls from "@/components/persistent/FloatingControls";

export default function Home() {
  return (
    <>
      <FloatingControls />
      <main>
        <HomeAbout />
        <HomeFooter />
      </main>
    </>
  );
}
