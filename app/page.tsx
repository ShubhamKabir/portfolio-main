import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import FeaturedWork from "@/components/FeaturedWork";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import ExploreWork from "@/components/ExploreWork";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Introduction />

        <FeaturedWork />

        <Capabilities />

        <Experience />

        <ExploreWork />

        <Resume />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
