import { TouchEvent, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const banners = [
  "/p2p/nextGen.jpeg",
  "/p2p/digitalmarketing.jpeg",
  "/p2p/shopify.jpeg",
  "/p2p/AIfrelancing.jpeg",
];

const HeroCarousel = ({ className = "" }: { className?: string }) => {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const move = (direction: number) => {
    setActive((current) => (current + direction + banners.length) % banners.length);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStart === null) return;
    const distance = touchStart - event.changedTouches[0].clientX;
    if (Math.abs(distance) > 40) move(distance > 0 ? 1 : -1);
    setTouchStart(null);
  };

  useEffect(() => {
    const timer = window.setInterval(() => move(1), 4500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className={`group relative overflow-hidden rounded-lg border border-slate-200 bg-white ${className}`}
      onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={banner} className="relative flex h-full min-w-full items-center justify-center bg-white">
            <img
              src={banner}
              alt={`Pixel2Pro learning banner ${index + 1}`}
              className="h-full w-full object-contain grayscale"
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 to-transparent" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <div className="flex gap-1.5">
          {banners.map((banner, index) => (
            <button
              key={banner}
              type="button"
              onClick={() => setActive(index)}
              className={`h-1.5 rounded-full transition-all ${active === index ? "w-8 bg-white" : "w-2 bg-white/45"}`}
              aria-label={`Show banner ${index + 1}`}
            />
          ))}
        </div>
        <div className="hidden gap-2 sm:flex">
          <Button
            type="button"
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full bg-white text-black opacity-0 transition group-hover:opacity-100"
            onClick={() => move(-1)}
            aria-label="Previous banner"
          >
            <ChevronLeft size={17} />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full bg-white text-black opacity-0 transition group-hover:opacity-100"
            onClick={() => move(1)}
            aria-label="Next banner"
          >
            <ChevronRight size={17} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
