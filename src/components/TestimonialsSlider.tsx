import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fetchRecords } from "@/lib/supabaseClient";

const defaultTestimonials = [
  {
    name: "Usman Rao",
    track: "Remote Front-End Developer",
    story: "The freelance coaching sessions changed everything for me. I now have clients from Canada and Australia, and I work from home on my own schedule. This is not just a course, it is a career launchpad.",
  },
  {
    name: "Ahmad Ziauddin",
    track: "Freelance Web Developer",
    story: "Before joining this platform, I only had basic HTML skills. Within 3 months, I built real websites, got my first freelance client from the UK, and now earn online confidently. The mentorship and support were beyond what I expected.",
  },
  {
    name: "Amina Farhan",
    track: "Junior UI Developer",
    story: "I always had a creative side but did not know how to enter the IT field. Their UI Development course helped me learn the tools, build a stunning portfolio, and get hired by a local agency as a junior developer.",
  },
];

const TestimonialsSlider = () => {
  const [testimonialsList, setTestimonialsList] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0); // Start with first index since list is dynamic
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const getFeedbacks = async () => {
      try {
        const records = await fetchRecords("feedbacks");
        if (records && records.length > 0) {
          // Filter out records without required fields
          const validRecords = records.filter((r: any) => r.name && r.track && r.story);
          setTestimonialsList(validRecords);
        }
      } catch (e) {
        console.error("Error loading feedbacks from Supabase:", e);
      }
    };
    getFeedbacks();
  }, []);

  useEffect(() => {
    if (testimonialsList.length === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [testimonialsList]);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const cardWidth = isMobile ? 280 : isTablet ? 330 : 380;
  const gap = isMobile ? 16 : 24;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  if (testimonialsList.length === 0) {
    return (
      <div className="flex justify-center py-4">
        <article
          style={{ width: `${cardWidth}px` }}
          className="rounded-lg border border-slate-200 bg-white text-black p-6 shadow-[0_15px_40px_rgba(15,23,42,0.06)] text-center transition-all duration-300"
        >
          <div className="font-serif text-6xl font-bold leading-none text-slate-300">“</div>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            No testimonials submitted yet. Be the first to share your learning journey at Pixel2Pro!
          </p>
          <div className="mt-6 h-px bg-slate-100 w-full" />
          <p className="mt-4 text-xs font-semibold text-slate-400">
            Pixel2Pro Reviews
          </p>
        </article>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full overflow-hidden py-6"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Cards Track */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(calc(50vw - ${activeIndex * (cardWidth + gap) + cardWidth / 2}px))`,
          gap: `${gap}px`,
        }}
      >
        {testimonialsList.map((item, index) => {
          const isActive = index === activeIndex;
          const initials = item.name
            .split(" ")
            .map((n) => n[0])
            .join("");

          return (
            <article
              key={`${item.name}-${index}`}
              onClick={() => setActiveIndex(index)}
              style={{ width: `${cardWidth}px` }}
              className={`shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white text-black shadow-[0_15px_40px_rgba(15,23,42,0.06)] transition-all duration-500 cursor-pointer ${
                isActive
                  ? "scale-105 border-slate-900 shadow-xl opacity-100"
                  : "scale-90 opacity-40 hover:opacity-60 blur-[0.2px]"
              }`}
            >
              <div className="p-6 md:p-8 flex flex-col justify-between h-[230px] md:h-[250px]">
                <div>
                  <div className="font-serif text-6xl font-bold leading-none text-slate-300">“</div>
                  <p className="mt-1 text-sm leading-6 text-slate-600 md:text-base line-clamp-3 md:line-clamp-4">
                    {item.story}
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-3 mt-auto">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-500 shadow-sm border border-slate-200">
                    {initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-sm font-bold leading-tight text-black md:text-base truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 truncate">
                      {item.track}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        type="button"
        aria-label="Previous testimonial"
        className="absolute left-6 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-slate-800 transition lg:flex"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        type="button"
        aria-label="Next testimonial"
        className="absolute right-6 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-slate-800 transition lg:flex"
      >
        <ChevronRight size={20} />
      </button>

      {/* Pagination Dots */}
      <div className="mt-8 flex justify-center gap-1.5">
        {testimonialsList.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              activeIndex === index ? "w-6 bg-black" : "w-1.5 bg-black/20"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
