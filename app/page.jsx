import Hero from "@/components/Hero";
import Booking from "@/components/Booking";
import PopularDest from "@/components/PopularDest";
import About from "@/components/About";
import Services from "@/components/Services";
import Forum from "@/components/Forum";
import DownloadApp from "@/components/DownloadApp";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <main className="px-24">
      <Hero />
      <Partners />
      <Booking />
      <PopularDest />
      <About />
      <Services />
      <Forum />
      <DownloadApp />
    </main>
  );
}
