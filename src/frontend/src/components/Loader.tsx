import { useEffect, useRef, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

const LETTER_ITEMS = "PRESSANA INFRA"
  .split("")
  .map((l, i) => ({ char: l, id: `l${i}` }));

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [lettersDone, setLettersDone] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= LETTER_ITEMS.length) {
          clearInterval(intervalRef.current!);
          setLettersDone(true);
          return prev;
        }
        return prev + 1;
      });
    }, 80);
    return () => clearInterval(intervalRef.current!);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100 && lettersDone) {
      const t = setTimeout(onComplete, 400);
      return () => clearTimeout(t);
    }
  }, [progress, lettersDone, onComplete]);

  return (
    <div
      data-ocid="loader.panel"
      className="fixed inset-0 z-[9999] bg-navy flex flex-col items-center justify-center"
    >
      <div className="mb-12 text-center">
        <div className="text-4xl md:text-6xl font-serif tracking-[0.3em] text-gold mb-2">
          {LETTER_ITEMS.map((item, i) => (
            <span
              key={item.id}
              className="inline-block transition-all duration-300"
              style={{
                opacity: i < visibleCount ? 1 : 0,
                transform:
                  i < visibleCount ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {item.char === " " ? "\u00A0" : item.char}
            </span>
          ))}
        </div>
        <p className="text-cream/50 text-sm tracking-[0.4em] font-sans mt-2">
          PREMIUM VILLA PLOTS
        </p>
      </div>
      <div className="w-64 md:w-80">
        <div className="h-px bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full gold-gradient transition-all duration-100 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-3 text-xs text-cream/30 font-sans tracking-widest">
          <span>LOADING</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
