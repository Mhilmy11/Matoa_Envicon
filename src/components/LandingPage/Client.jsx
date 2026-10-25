import { useEffect, useRef, useState } from "react";
import { Boxes, Globe2, Layers3, Leaf, Orbit } from "lucide-react";

const clientLogos = [
  { name: "Lorem Lorem", icon: Orbit, color: "#F43F5E", text: "#51416F" },
  { name: "LGPSMI", icon: Boxes, color: "#4F8BEB", text: "#172554" },
  { name: "Loadingkum", icon: Globe2, color: "#F97316", text: "#312E81" },
  { name: "Looloosum", icon: Leaf, color: "#65C900", text: "#153E75" },
  { name: "Loogipst", icon: Layers3, color: "#10B981", text: "#064E3B" },
];

export default function Client() {
  const trackRef = useRef(null);
  const positionRef = useRef(0);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      setTrackWidth(track.scrollWidth / 2);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!trackWidth) return;

    let animationFrame;
    let previousTime = 0;
    const speed = 55;

    const animate = (time) => {
      if (previousTime !== 0) {
        const delta = Math.min((time - previousTime) / 1000, 0.05);

        positionRef.current =
          (positionRef.current + speed * delta) % trackWidth;

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
        }
      }

      previousTime = time;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [trackWidth]);

  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="relative flex w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-16" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-16" />

        <div
          ref={trackRef}
          className="flex w-max shrink-0"
          style={{ willChange: "transform" }}
        >
          {duplicatedLogos.map((logo, index) => {
            const Icon = logo.icon;

            return (
              <div
                key={`${logo.name}-${index}`}
                aria-hidden={index >= clientLogos.length}
                className="flex w-[180px] shrink-0 items-center justify-center px-5 sm:w-[220px]"
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    size={30}
                    strokeWidth={2.5}
                    style={{ color: logo.color }}
                  />

                  <span
                    className="whitespace-nowrap text-lg font-extrabold tracking-tight"
                    style={{ color: logo.text }}
                  >
                    {logo.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
