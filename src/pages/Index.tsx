import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, BadgeCheck, Building2, Network, Search, ShieldCheck } from "lucide-react";
import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import HeroCarousel from "@/components/HeroCarousel";
import ToolsCarousel from "@/components/ToolsCarousel";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import TestimonialsSlider from "@/components/TestimonialsSlider";

const trustStats = [
  { icon: Building2, value: "24+", label: "Academic and industry learning partners" },
  { icon: BadgeCheck, value: "100%", label: "Verification-ready certificate mapping" },
  { icon: Network, value: "3,800+", label: "Professional alumni and peer network" },
  { icon: ShieldCheck, value: "Board", label: "Profile vetting and credential checks" },
];

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (searchQuery.trim()) {
    navigate(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
  } else {
    navigate("/courses");
  }
};

  const suggestions = searchQuery.trim()
    ? courses.filter(
        (c) =>
          c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  return (
    <Layout>
      <section className="relative overflow-visible border-b border-slate-200 bg-white">
        <div className="container grid grid-cols-1 items-center gap-8 py-8 md:min-h-[620px] md:grid-cols-[0.95fr_1.05fr] md:py-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-normal sm:text-5xl md:text-6xl lg:text-7xl">
                Pixel Today Pro Tomorrow
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
                Pixel2Pro, powered by Hakamtechsol, turns focused learners into job-ready builders through cohort-based tracks, verified credentials, and portfolio-grade outcomes with guaranteed internship opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/courses">
                <Button size="lg" className="h-[52px] w-full rounded-full px-6 sm:w-auto">
                  Explore Programs <ArrowRight size={17} />
                </Button>
              </Link>
              <Link to="/join">
                <Button size="lg" variant="outline" className="h-[52px] w-full rounded-full border-slate-300 px-6 sm:w-auto">
                  Register Now
                </Button>
              </Link>
            </div>
            <form onSubmit={handleSearchSubmit} className="relative max-w-xl z-30">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search tracks, tools, and learning paths..."
                value={searchQuery}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                className="flex h-14 w-full items-center rounded-full border border-slate-200 bg-slate-50 pl-12 pr-28 text-sm font-medium text-slate-900 outline-none transition focus:border-black focus:bg-white placeholder:text-slate-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 rounded-full bg-black px-5 text-sm font-semibold text-white hover:bg-slate-800 transition z-10"
              >
                Search
              </button>

              {/* Autocomplete suggestions dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 max-h-60 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl z-50">
                  {suggestions.map((course) => (
                    <button
                      key={course.id}
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); navigate(`/courses/${course.id}`); }}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left hover:bg-slate-50 transition"
                    >
                      <div className="pr-4">
                        <p className="text-sm font-bold text-slate-900">{course.title}</p>
                        <p className="text-xs text-slate-500 truncate max-w-[250px] sm:max-w-md">{course.description}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        {course.category}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </form>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <HeroCarousel className="h-[330px] shadow-2xl sm:h-[390px] md:h-[480px]" />
            <ToolsCarousel />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-8 md:py-12">
        <div className="container grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-slate-200 bg-white p-5">
              <stat.icon size={22} />
              <p className="mt-5 text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 gap-12 md:py-20" id="tracks">
        <div className="container">
          <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Learning Programs</p>
              <h2 className="mt-2 text-3xl font-bold md:text-5xl">Choose your next learning path.</h2>
            </div>
            <Link to="/courses" className="text-sm font-bold text-black underline underline-offset-4">
              View programs
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-slate-200 bg-slate-50 py-14 md:py-20 overflow-hidden">
        <div className="container mb-8 flex flex-col items-center">
          <div className="flex w-full items-center justify-center gap-4 md:gap-6">
            <span className="hidden h-px w-32 bg-slate-300 md:block" />
            <h2 className="text-center font-serif text-3xl font-bold leading-tight text-black md:text-4xl">
              What People are Saying About Us
            </h2>
            <span className="hidden h-px w-32 bg-slate-300 md:block" />
          </div>
          <div className="mt-5 flex justify-center">
            <a
              href="/feedback"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white hover:bg-slate-800 transition shadow-md"
            >
              Share Your Feedback
            </a>
          </div>
        </div>

        <TestimonialsSlider />
      </section>
    </Layout>
  );
};

export default Index;




