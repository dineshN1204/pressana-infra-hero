import { FileCheck, Lock, MapPin, Navigation, Shield, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "Strategically located at 730/1, Avinashi Rd, Race Course, Coimbatore, Tamil Nadu 641018 — excellent connectivity to the airport, racecourse, and IT corridors.",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: FileCheck,
    title: "RERA Approved",
    desc: "Fully government-certified with RERA registration. Transparent transactions and buyer-protected investment.",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    icon: Shield,
    title: "Clear Title",
    desc: "Zero legal complications. Every plot has been thoroughly verified by our legal experts for hassle-free ownership.",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: Zap,
    title: "Underground Utilities",
    desc: "No overhead wires. All electrical and utility lines are underground for a clean, modern aesthetic.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Navigation,
    title: "Wide Internal Roads",
    desc: "30ft and 40ft wide roads throughout the layout ensuring easy vehicle movement and future resale value.",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Lock,
    title: "24/7 Gated Security",
    desc: "Boom barriers, CCTV surveillance, and security personnel ensure a completely safe living environment.",
    color: "from-rose-500/20 to-red-500/20",
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

export default function Highlights() {
  const { ref, inView } = useInView();

  return (
    <section
      id="highlights"
      data-ocid="highlights.section"
      className="py-24 md:py-32 bg-stone-100 dark:bg-[#0d1528]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] font-sans mb-4">
            WHY CHOOSE US
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-900 dark:text-[#f8f5f0]">
            Project <span className="italic text-gold">Highlights</span>
          </h2>
        </div>
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
              }}
              className="group glass-card rounded-2xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 hover:border-gold/30 transition-all duration-400 cursor-default"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <f.icon className="text-gold" size={24} />
              </div>
              <h3 className="font-serif text-xl text-stone-900 dark:text-[#f8f5f0] mb-3">
                {f.title}
              </h3>
              <p className="text-stone-500 dark:text-[#f8f5f0]/50 font-sans text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
