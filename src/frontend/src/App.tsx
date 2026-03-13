import { useState } from "react";
import About from "./components/About";
import Amenities from "./components/Amenities";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Loader from "./components/Loader";
import MapSection from "./components/MapSection";
import Navbar from "./components/Navbar";
import PricingCards from "./components/PricingCards";
import ScheduleVisitForm from "./components/ScheduleVisitForm";
import ScrollProgress from "./components/ScrollProgress";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";
import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const { isDark, toggle } = useDarkMode();

  const handleLoaderComplete = () => {
    setFadeOut(true);
    setTimeout(() => setLoading(false), 600);
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-navy" : "bg-stone-50"}`}>
      {loading && (
        <div
          style={{
            opacity: fadeOut ? 0 : 1,
            transition: "opacity 0.6s ease",
            pointerEvents: fadeOut ? "none" : "auto",
          }}
        >
          <Loader onComplete={handleLoaderComplete} />
        </div>
      )}

      {!loading && (
        <>
          <ScrollProgress />
          <Navbar isDark={isDark} onToggleDark={toggle} />
          <main>
            <Hero />
            <About />
            <Highlights />
            <PricingCards />
            <Gallery />
            <Amenities />
            <MapSection />
            <Testimonials />
            <ScheduleVisitForm />
            <FAQ />
          </main>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}
