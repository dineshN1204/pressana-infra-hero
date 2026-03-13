import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const plans = [
  {
    id: "standard",
    name: "Standard Plot",
    size: "1200 sq ft",
    price: "₹12 Lakhs",
    tag: "",
    featured: false,
    features: [
      "Clear Title Deed",
      "Underground Utilities",
      "30ft Road Access",
      "Compound Wall",
      "Legal Assistance",
    ],
  },
  {
    id: "premium",
    name: "Premium Plot",
    size: "2400 sq ft",
    price: "₹24 Lakhs",
    tag: "Most Popular",
    featured: true,
    features: [
      "Clear Title Deed",
      "Underground Utilities",
      "40ft Road Access",
      "Compound Wall",
      "Legal Assistance",
      "Clubhouse Access",
      "Landscaped Parks",
    ],
  },
  {
    id: "luxury",
    name: "Luxury Villa Plot",
    size: "3600 sq ft",
    price: "₹40 Lakhs",
    tag: "",
    featured: false,
    features: [
      "Clear Title Deed",
      "Underground Utilities",
      "40ft Corner Road",
      "Compound Wall",
      "Legal Assistance",
      "Clubhouse Access",
      "Landscaped Parks",
      "Priority Allocation",
    ],
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

export default function PricingCards() {
  const { ref, inView } = useInView();

  return (
    <section
      id="pricing"
      data-ocid="pricing.section"
      className="py-24 md:py-32 bg-stone-50 dark:bg-[#0a0f1e]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] font-sans mb-4">
            INVESTMENT OPTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-900 dark:text-[#f8f5f0]">
            Choose Your <span className="italic text-gold">Plot</span>
          </h2>
        </div>
        <div ref={ref} className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              data-ocid={`pricing.card.${i + 1}`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(50px)",
                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
              }}
              className={`relative rounded-2xl p-8 transition-all duration-300 group cursor-default ${
                plan.featured
                  ? "border-2 border-gold/60 bg-gradient-to-b from-gold/10 to-transparent scale-105 hover:shadow-2xl hover:shadow-gold/30"
                  : "glass-card hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/10 hover:border-gold/20"
              }`}
            >
              {plan.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-gradient text-navy text-xs font-bold px-5 py-1.5 rounded-full tracking-wider">
                  {plan.tag}
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-serif text-xl text-stone-900 dark:text-[#f8f5f0] mb-1">
                  {plan.name}
                </h3>
                <p className="text-gold/70 text-sm font-sans">{plan.size}</p>
              </div>
              <div className="mb-8">
                <span className="font-serif text-4xl text-gold">
                  {plan.price}
                </span>
                <span className="text-stone-400 dark:text-[#f8f5f0]/40 text-sm font-sans ml-2">
                  onwards
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-stone-600 dark:text-[#f8f5f0]/70 font-sans text-sm"
                  >
                    <Check size={14} className="text-gold flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`w-full py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 ${
                  plan.featured
                    ? "gold-gradient text-navy hover:opacity-90 hover:scale-105"
                    : "border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold"
                }`}
              >
                Book This Plot
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
