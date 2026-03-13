import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About Project", href: "#about" },
    { label: "Project Highlights", href: "#highlights" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Amenities", href: "#amenities" },
    { label: "Location", href: "#location" },
    { label: "Schedule Visit", href: "#contact" },
  ];

  return (
    <footer
      data-ocid="footer.section"
      className="bg-stone-100 dark:bg-[#060b17] border-t border-stone-200 dark:border-white/5 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-serif text-2xl text-gold tracking-[0.2em] mb-4">
              PRESSANA{" "}
              <span className="text-stone-900 dark:text-[#f8f5f0]">INFRA</span>
            </div>
            <p className="text-stone-500 dark:text-[#f8f5f0]/50 font-sans text-sm leading-relaxed mb-6">
              Building dreams on the prestigious Racecourse Corridor in
              Coimbatore. Premium RERA-approved villa plots designed for a life
              well-lived.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/pressanainfra/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass-card rounded-xl hover:border-gold/40 hover:text-gold text-stone-500 dark:text-[#f8f5f0]/50 transition-all"
                aria-label="Instagram"
                data-ocid="footer.instagram.link"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/urbancloudbypressana/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass-card rounded-xl hover:border-gold/40 hover:text-gold text-stone-500 dark:text-[#f8f5f0]/50 transition-all"
                aria-label="Facebook"
                data-ocid="footer.facebook.link"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.youtube.com/@PressanaInfra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass-card rounded-xl hover:border-gold/40 hover:text-gold text-stone-500 dark:text-[#f8f5f0]/50 transition-all"
                aria-label="YouTube"
                data-ocid="footer.youtube.link"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-stone-900 dark:text-[#f8f5f0] font-serif text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <button
                    type="button"
                    onClick={() => handleNav(l.href)}
                    className="text-stone-500 dark:text-[#f8f5f0]/50 hover:text-gold font-sans text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-stone-900 dark:text-[#f8f5f0] font-serif text-lg mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-1 flex-shrink-0" />
                <p className="text-stone-500 dark:text-[#f8f5f0]/50 font-sans text-sm">
                  730/1, Avinashi Rd, Race Course, Coimbatore, Tamil Nadu 641018
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+916384444700"
                  className="text-stone-500 dark:text-[#f8f5f0]/50 hover:text-gold font-sans text-sm transition-colors"
                >
                  +91 63844 44700
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:info@pressanainfra.com"
                  className="text-stone-500 dark:text-[#f8f5f0]/50 hover:text-gold font-sans text-sm transition-colors"
                >
                  info@pressanainfra.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 dark:text-[#f8f5f0]/30 font-sans text-xs">
            © {new Date().getFullYear()} Pressana Infra. All rights reserved.
            RERA: TN/37/Building/7589/2026
          </p>
          <p className="text-stone-400 dark:text-[#f8f5f0]/30 font-sans text-xs">
            Premium Villa Plots | Racecourse Corridor | Coimbatore | Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
