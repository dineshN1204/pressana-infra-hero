import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

function animateIn(el: HTMLElement, delay: number) {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.filter = "blur(4px)";
  setTimeout(() => {
    el.style.transition =
      "opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1), filter 1s ease";
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
    el.style.filter = "blur(0px)";
  }, delay);
}

export default function Hero() {
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.muted = true;
      vid.play().catch(() => {});
    }

    if (subtitleRef.current) animateIn(subtitleRef.current, 800);
    if (headlineRef.current) animateIn(headlineRef.current, 1100);
    if (line2Ref.current) animateIn(line2Ref.current, 1400);
    if (descRef.current) animateIn(descRef.current, 1750);
    if (btnsRef.current) animateIn(btnsRef.current, 2100);
  }, []);

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Full-screen video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        crossOrigin="anonymous"
      >
        <source src="/assets/Pressana_Infra.mp4" type="video/mp4" />
      </video>

      {/* Cinematic gradient — heavy at bottom, light at top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,8,20,0.35) 0%, rgba(5,8,20,0.25) 40%, rgba(5,8,20,0.75) 75%, rgba(5,8,20,0.97) 100%)",
        }}
      />

      {/* Hero text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-6">
        <p
          ref={subtitleRef}
          className="text-gold text-[10px] md:text-xs lg:text-sm tracking-[0.35em] md:tracking-[0.45em] font-sans uppercase mb-4 md:mb-6"
          style={{ opacity: 0 }}
        >
          RERA Approved &nbsp;|&nbsp; Racecourse Corridor, Coimbatore
        </p>

        <h1
          ref={headlineRef}
          className="font-serif text-3xl md:text-5xl lg:text-7xl text-cream leading-tight max-w-4xl mb-2 md:mb-3"
          style={{ opacity: 0 }}
        >
          Premium Villa Plots
        </h1>

        <span
          ref={line2Ref}
          className="block font-serif text-3xl md:text-5xl lg:text-7xl italic text-gold leading-tight max-w-4xl mb-5 md:mb-7"
          style={{ opacity: 0 }}
        >
          Designed for Modern Living
        </span>

        <p
          ref={descRef}
          className="text-cream/70 text-sm md:text-base lg:text-lg max-w-xl md:max-w-2xl mb-8 md:mb-10 font-sans leading-relaxed"
          style={{ opacity: 0 }}
        >
          Secure your dream address on the prestigious Racecourse Corridor.
          Gated community with world-class amenities, clear title, and
          government-approved plots.
        </p>

        <div
          ref={btnsRef}
          className="flex flex-col sm:flex-row gap-4 items-center"
          style={{ opacity: 0 }}
        >
          <button
            type="button"
            data-ocid="hero.primary_button"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 gold-gradient text-navy font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 text-sm tracking-wider ripple-effect shadow-lg shadow-yellow-900/30"
          >
            Schedule Site Visit
          </button>
          <button
            type="button"
            data-ocid="hero.secondary_button"
            className="px-8 py-4 border border-gold/60 text-gold rounded-full hover:bg-gold/10 hover:border-gold hover:scale-105 transition-all duration-300 text-sm tracking-wider"
          >
            Download Brochure
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={28} className="text-gold/60" />
      </div>
    </section>
  );
}
