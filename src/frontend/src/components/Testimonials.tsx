import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Chennai",
    rating: 5,
    text: "Investing in Pressana Infra was the best decision. The location, legal clarity, and support team made everything smooth. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    location: "Bengaluru",
    rating: 5,
    text: "I was looking for a plot in ECR for years. Pressana Infra offered transparent pricing, clear title, and beautiful surroundings. Worth every rupee.",
  },
  {
    name: "Venkat Raman",
    location: "Hyderabad",
    rating: 5,
    text: "The amenities and the gated community feel are outstanding. The team was extremely professional and guided us at every step of registration.",
  },
  {
    name: "Meena Krishnan",
    location: "Chennai",
    rating: 5,
    text: "Premium quality layout with wide roads and all utilities underground. My family loves visiting the site. Can't wait to build our dream home here!",
  },
];

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % reviews.length),
      4500,
    );
    return () => clearInterval(t);
  }, []);

  const prev = () =>
    setActive((p) => (p - 1 + reviews.length) % reviews.length);
  const next = () => setActive((p) => (p + 1) % reviews.length);
  const current = reviews[active];

  return (
    <section
      data-ocid="testimonials.section"
      className="py-24 md:py-32 bg-stone-50 dark:bg-[#0a0f1e] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] font-sans mb-4">
            CLIENT STORIES
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-900 dark:text-[#f8f5f0]">
            What Our Clients <span className="italic text-gold">Say</span>
          </h2>
        </div>
        <div className="relative">
          <div className="glass-card rounded-2xl p-10 md:p-14 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {STAR_KEYS.slice(0, current.rating).map((key) => (
                <Star key={key} size={18} className="text-gold fill-gold" />
              ))}
            </div>
            <p className="font-serif text-xl md:text-2xl text-stone-800 dark:text-[#f8f5f0]/90 italic leading-relaxed mb-8">
              “{current.text}”
            </p>
            <div>
              <p className="text-stone-900 dark:text-[#f8f5f0] font-sans font-semibold">
                {current.name}
              </p>
              <p className="text-gold/60 font-sans text-sm">
                {current.location}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              type="button"
              onClick={prev}
              className="p-3 glass-card rounded-full hover:border-gold/40 hover:text-gold text-stone-600 dark:text-[#f8f5f0]/60 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {reviews.map((r, i) => (
                <button
                  type="button"
                  key={r.name}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 gold-gradient" : "w-2 bg-stone-300 dark:bg-white/20"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="p-3 glass-card rounded-full hover:border-gold/40 hover:text-gold text-stone-600 dark:text-[#f8f5f0]/60 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
