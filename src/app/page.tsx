import NavBar from "@/components/NavBar.component";
import AboutSection from "@/sections/about.section";
import EventSection from "@/sections/events.section";
import Footer from "@/sections/footer.section";
import HeroSection from "@/sections/hero.section";
import SponsorsSection from "@/sections/sponsors.section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen mx-auto bg-[#F6F6F6]">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <EventSection />
      <SponsorsSection />
      <Footer />
    </main>
  )
}
