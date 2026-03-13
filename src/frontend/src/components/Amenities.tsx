import { useEffect, useRef, useState } from "react";

const amenities = [
  {
    emoji: "🏙️",
    title: "Grand Clubhouse",
    desc: "A state-of-the-art clubhouse with indoor games, lounge, and event space.",
  },
  {
    emoji: "🌳",
    title: "Parks & Gardens",
    desc: "Lush landscaped parks with jogging tracks and children's play zones.",
  },
  {
    emoji: "🔒",
    title: "24/7 Security",
    desc: "CCTV surveillance, boom barriers, and trained security personnel at all times.",
  },
  {
    emoji: "🛣️",
    title: "Wide Roads",
    desc: "30ft and 40ft internal roads with smooth asphalt finish and street lighting.",
  },
  {
    emoji: "🔧",
    title: "Underground Drainage",
    desc: "Fully functional underground drainage and rainwater harvesting system.",
  },
];

function useInView(threshold = 0.1) {
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

export default function Amenities() {
  const { ref, inView } = useInView();

  return (
    <section
      id="amenities"
      data-ocid="amenities.section"
      className="py-24 md:py-32 bg-stone-50 dark:bg-[#0a0f1e]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] font-sans mb-4">
            LIFESTYLE FEATURES
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-900 dark:text-[#f8f5f0]">
            World-Class <span className="italic text-gold">Amenities</span>
          </h2>
        </div>
        <div ref={ref} className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {amenities.map((a, i) => (
            <div
              key={a.title}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
              }}
              className="glass-card rounded-2xl p-8 text-center hover:-translate-y-2 hover:border-gold/30 transition-all duration-300 group cursor-default"
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-400 inline-block">
                {a.emoji}
              </div>
              <h3 className="font-serif text-lg text-stone-900 dark:text-[#f8f5f0] mb-2">
                {a.title}
              </h3>
              <p className="text-stone-500 dark:text-[#f8f5f0]/50 font-sans text-xs leading-relaxed">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
