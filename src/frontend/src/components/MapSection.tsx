import { MapPin } from "lucide-react";

const landmarks = [
  { name: "Airport", dist: "5 km", icon: "✈️" },
  { name: "Railway Station", dist: "4 km", icon: "🚂" },
  { name: "Racecourse", dist: "0.5 km", icon: "🏇" },
  { name: "Colleges", dist: "2 km", icon: "🎓" },
  { name: "IT Parks", dist: "6 km", icon: "💼" },
];

export default function MapSection() {
  return (
    <section
      id="location"
      data-ocid="location.section"
      className="py-24 md:py-32 bg-stone-100 dark:bg-[#0a0f1e]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] font-sans mb-4">
            CONNECTIVITY
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-900 dark:text-[#f8f5f0]">
            Prime <span className="italic text-gold">Location</span>
          </h2>
          <p className="text-stone-600 dark:text-[#f8f5f0]/50 font-sans mt-4 max-w-xl mx-auto">
            Strategically located at Racecourse Corridor, Coimbatore, offering
            seamless access to the airport, railway station, and IT hubs.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div
            className="lg:col-span-2 rounded-2xl overflow-hidden"
            style={{ height: "450px" }}
            data-ocid="location.map_marker"
          >
            <iframe
              title="Pressana Infra Location"
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d69029.36513611831!2d76.97363779023911!3d11.020688549571044!3m2!1i1024!2i768!4f13.1!2m1!1sPressana%20Infra!5e0!3m2!1sen!2sus!4v1773442433495!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-stone-900 dark:text-[#f8f5f0] mb-6">
              Nearby Landmarks
            </h3>
            {landmarks.map((l) => (
              <div
                key={l.name}
                className="glass-card rounded-xl px-5 py-4 flex items-center gap-4 hover:border-gold/30 hover:-translate-x-1 transition-all duration-300"
              >
                <span className="text-2xl">{l.icon}</span>
                <div>
                  <p className="text-stone-900 dark:text-[#f8f5f0] font-sans text-sm font-medium">
                    {l.name}
                  </p>
                  <p className="text-gold font-sans text-xs">{l.dist}</p>
                </div>
                <MapPin
                  size={14}
                  className="text-gold/50 ml-auto flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
