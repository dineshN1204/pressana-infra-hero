import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

export default function ScheduleVisitForm() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    visitDate: "",
    visitTime: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      setError("Connection not ready. Please try again.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await actor.submitVisit(
        form.name,
        form.phone,
        form.email,
        form.visitDate,
        form.visitTime,
        form.message,
      );
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 focus:border-gold/60 focus:ring-0 rounded-xl px-5 py-4 text-stone-900 dark:text-[#f8f5f0] placeholder-stone-400 dark:placeholder-[#f8f5f0]/30 font-sans text-sm outline-none transition-all duration-200";

  return (
    <section
      id="contact"
      data-ocid="form.section"
      className="py-24 md:py-32 bg-white dark:bg-[#0d1528]"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] font-sans mb-4">
            GET IN TOUCH
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-900 dark:text-[#f8f5f0]">
            Schedule a <span className="italic text-gold">Site Visit</span>
          </h2>
          <p className="text-stone-500 dark:text-[#f8f5f0]/50 font-sans mt-4">
            Our team will contact you to confirm your visit.
          </p>
        </div>

        {success ? (
          <div
            data-ocid="form.success_state"
            className="glass-card rounded-2xl p-16 text-center"
          >
            <CheckCircle className="text-gold mx-auto mb-6" size={56} />
            <h3 className="font-serif text-2xl text-stone-900 dark:text-[#f8f5f0] mb-3">
              Visit Scheduled!
            </h3>
            <p className="text-stone-600 dark:text-[#f8f5f0]/60 font-sans">
              Thank you, {form.name}. Our team will call you within 24 hours to
              confirm your site visit.
            </p>
            <button
              type="button"
              onClick={() => {
                setSuccess(false);
                setForm({
                  name: "",
                  phone: "",
                  email: "",
                  visitDate: "",
                  visitTime: "",
                  message: "",
                });
              }}
              className="mt-8 px-8 py-3 border border-gold/40 text-gold rounded-full hover:bg-gold/10 transition-all font-sans text-sm"
            >
              Schedule Another Visit
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 md:p-12 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-stone-500 dark:text-[#f8f5f0]/50 text-xs tracking-wider font-sans mb-2 block"
                >
                  FULL NAME
                </label>
                <input
                  id="name"
                  data-ocid="form.name_input"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className={inputCls}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-stone-500 dark:text-[#f8f5f0]/50 text-xs tracking-wider font-sans mb-2 block"
                >
                  PHONE NUMBER
                </label>
                <input
                  id="phone"
                  data-ocid="form.phone_input"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  className={inputCls}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-stone-500 dark:text-[#f8f5f0]/50 text-xs tracking-wider font-sans mb-2 block"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  id="email"
                  data-ocid="form.email_input"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  type="email"
                  placeholder="your@email.com"
                  className={inputCls}
                />
              </div>
              <div>
                <label
                  htmlFor="visitDate"
                  className="text-stone-500 dark:text-[#f8f5f0]/50 text-xs tracking-wider font-sans mb-2 block"
                >
                  VISIT DATE
                </label>
                <input
                  id="visitDate"
                  data-ocid="form.date_input"
                  name="visitDate"
                  value={form.visitDate}
                  onChange={handleChange}
                  required
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className={`${inputCls} [color-scheme:light] dark:[color-scheme:dark]`}
                />
              </div>
              <div>
                <label
                  htmlFor="visitTime"
                  className="text-stone-500 dark:text-[#f8f5f0]/50 text-xs tracking-wider font-sans mb-2 block"
                >
                  PREFERRED TIME
                </label>
                <select
                  id="visitTime"
                  data-ocid="form.time_select"
                  name="visitTime"
                  value={form.visitTime}
                  onChange={handleChange}
                  required
                  className={inputCls}
                >
                  <option
                    value=""
                    disabled
                    className="bg-white dark:bg-[#0a0f1e]"
                  >
                    Select time slot
                  </option>
                  {timeSlots.map((t) => (
                    <option
                      key={t}
                      value={t}
                      className="bg-white dark:bg-[#0a0f1e]"
                    >
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-stone-500 dark:text-[#f8f5f0]/50 text-xs tracking-wider font-sans mb-2 block"
              >
                MESSAGE (OPTIONAL)
              </label>
              <textarea
                id="message"
                data-ocid="form.textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your requirements..."
                className={`${inputCls} resize-none`}
              />
            </div>
            {error && (
              <p
                data-ocid="form.error_state"
                className="text-red-400 font-sans text-sm"
              >
                {error}
              </p>
            )}
            <button
              data-ocid="form.submit_button"
              type="submit"
              disabled={loading}
              className="w-full py-4 gold-gradient text-navy font-semibold rounded-full hover:opacity-90 hover:scale-[1.01] transition-all duration-300 text-sm tracking-wider disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Submitting...
                </>
              ) : (
                "Schedule My Visit"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
