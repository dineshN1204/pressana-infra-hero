import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "50+", label: "Premium Plots" },
  { value: "3 Acres", label: "Layout Area" },
  { value: "RERA", label: "Approved" },
  { value: "Airport", label: "Frontage" },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function About() {
  const { ref: sectionRef, inView } = useInView(0.1);

  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-24 md:py-32 bg-stone-50 dark:bg-[#0a0f1e]"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-50px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
            alt="Premium Villa"
            className="w-full h-[500px] object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
          />
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(to top, rgba(10,15,30,0.6) 0%, transparent 60%)",
            }}
          />
          <div className="absolute bottom-6 left-6 glass-card rounded-xl px-5 py-3">
            <p className="text-gold text-xs tracking-widest font-sans">
              RERA APPROVED
            </p>
            <p className="text-stone-900 dark:text-[#f8f5f0] text-lg font-serif">
              TN/37/Building/7589/2026
            </p>
          </div>
        </div>

        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(50px)",
            transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
          }}
        >
          <p className="text-gold text-xs tracking-[0.4em] font-sans mb-4">
            ABOUT THE PROJECT
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-[#f8f5f0] mb-6 leading-tight">
            A New Standard of
            <br />
            <span className="italic text-gold">Luxury Living</span>
          </h2>
          <p className="text-stone-600 dark:text-[#f8f5f0]/60 font-sans leading-relaxed mb-6">
            Pressana Infra presents an exclusive gated community nestled along
            the prestigious Racecourse Corridor in Coimbatore. Thoughtfully
            designed villa plots that blend natural serenity with modern
            conveniences — just minutes from Coimbatore's international airport,
            premier colleges, and IT parks.
          </p>
          <p className="text-stone-600 dark:text-[#f8f5f0]/60 font-sans leading-relaxed mb-10">
            Every plot is government-approved, legally verified with clear
            title, and equipped with underground utilities, wide internal roads,
            and round-the-clock security — setting a benchmark for premium
            plotted developments in Coimbatore.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-2xl text-gold">{s.value}</p>
                <p className="text-stone-500 dark:text-[#f8f5f0]/50 text-xs tracking-wider font-sans mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
