import { X, ZoomIn } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const images = [
  {
    id: "villa-1",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
    alt: "Premium Villa",
    large: true,
  },
  {
    id: "interior",
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=700&q=80",
    alt: "Luxury Home Interior",
    large: false,
  },
  {
    id: "aerial",
    src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=700&q=80",
    alt: "Real Estate Aerial View",
    large: false,
  },
  {
    id: "modern",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80",
    alt: "Modern Villa",
    large: false,
  },
  {
    id: "luxury",
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=700&q=80",
    alt: "Luxury Residence",
    large: false,
  },
  {
    id: "ecr",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=700&q=80",
    alt: "ECR Villa Plot",
    large: false,
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

export default function Gallery() {
  const { ref, inView } = useInView();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      data-ocid="gallery.section"
      className="py-24 md:py-32 bg-white dark:bg-[#0d1528]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] font-sans mb-4">
            VISUAL TOUR
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-900 dark:text-[#f8f5f0]">
            Project <span className="italic text-gold">Gallery</span>
          </h2>
        </div>
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]"
        >
          {images.map((img, i) => (
            <button
              type="button"
              key={img.id}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "scale(1)" : "scale(0.95)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                padding: 0,
                border: "none",
                background: "none",
              }}
              className={[
                "relative overflow-hidden rounded-2xl cursor-pointer group text-left",
                img.large
                  ? "aspect-[4/3] sm:col-span-2 sm:row-span-2 sm:aspect-auto"
                  : "aspect-[4/3]",
              ].join(" ")}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-stone-900/40 dark:bg-[#0a0f1e]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-gold" size={32} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-stone-900/95 dark:bg-[#0a0f1e]/95 flex items-center justify-center p-6">
          <button
            type="button"
            className="absolute top-6 right-6 text-stone-200 hover:text-gold transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <button
            type="button"
            className="w-full h-full flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <img
              src={lightbox}
              alt="Gallery fullscreen"
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
            />
          </button>
        </div>
      )}
    </section>
  );
}
