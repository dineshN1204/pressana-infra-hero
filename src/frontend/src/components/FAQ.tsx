import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: "rera",
    q: "Is the project RERA approved?",
    a: "Yes, Pressana Infra is fully RERA approved and registered with the Tamil Nadu Real Estate Regulatory Authority. Our RERA number is displayed on all marketing materials.",
  },
  {
    id: "sizes",
    q: "What are the available plot sizes?",
    a: "We offer three categories: Standard (1200 sq ft), Premium (2400 sq ft), and Luxury Villa Plots (3600 sq ft). Custom configurations may be available on request.",
  },
  {
    id: "payment",
    q: "What are the payment options?",
    a: "We offer flexible payment plans including EMI options through partner banks, construction-linked payment, and full payment with special discounts.",
  },
  {
    id: "location",
    q: "How do I reach the project site?",
    a: "The project is located on East Coast Road (ECR), approximately 25 km from Chennai Airport and 15 km from OMR IT Corridor. GPS navigation is available and our site is open for visits on weekends.",
  },
  {
    id: "possession",
    q: "When will possession be given?",
    a: "Plot possession is offered immediately after registration and full payment. There are no construction timelines as these are villa plots.",
  },
  {
    id: "charges",
    q: "Are there any hidden charges?",
    a: "Absolutely none. The quoted price includes the plot cost and basic infrastructure. Registration charges, stamp duty, and GST are as per government norms and clearly communicated upfront.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section
      data-ocid="faq.section"
      className="py-24 md:py-32 bg-stone-50 dark:bg-[#0a0f1e]"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] font-sans mb-4">
            HAVE QUESTIONS?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-900 dark:text-[#f8f5f0]">
            Frequently Asked <span className="italic text-gold">Questions</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.id}
              data-ocid={`faq.item.${i + 1}`}
              className="glass-card rounded-2xl overflow-hidden hover:border-gold/20 transition-all duration-300"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between px-8 py-6 text-left"
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
              >
                <span className="font-serif text-lg text-stone-900 dark:text-[#f8f5f0]">
                  {faq.q}
                </span>
                <span className="text-gold ml-4 flex-shrink-0">
                  {open === faq.id ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              {open === faq.id && (
                <div className="px-8 pb-6">
                  <p className="text-stone-600 dark:text-[#f8f5f0]/60 font-sans leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
