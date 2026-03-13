import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      data-ocid="scroll.panel"
      className="fixed top-0 left-0 h-[3px] z-[9998] transition-[width] duration-100"
      style={{
        width: `${width}%`,
        background: "linear-gradient(90deg, #c9a84c, #e8cc7a)",
      }}
    />
  );
}
