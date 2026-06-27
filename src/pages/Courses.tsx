import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, Search } from "lucide-react";
import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import HeroCarousel from "@/components/HeroCarousel";
import ToolsCarousel from "@/components/ToolsCarousel";
import { courses, categories } from "@/data/courses";

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "All";
  const [active, setActive] = useState(initialCat);
  const searchQuery = searchParams.get("search") || "";
  const [searchVal, setSearchVal] = useState(searchQuery);

  useEffect(() => {
    setSearchVal(searchParams.get("search") || "");
    setActive(searchParams.get("cat") || "All");
  }, [searchParams]);

  const filtered = courses.filter((c) => {
    const matchesCat = active === "All" || c.category === active;
    const matchesSearch =
      !searchQuery ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      c.track.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleSearchChange = (val: string) => {
    setSearchVal(val);
    const newParams: Record<string, string> = {};
    if (active !== "All") newParams.cat = active;
    if (val.trim()) newParams.search = val.trim();
    setSearchParams(newParams);
  };

  const selectCat = (cat: string) => {
    setActive(cat);
    const newParams: Record<string, string> = {};
    if (cat !== "All") newParams.cat = cat;
    if (searchVal.trim()) newParams.search = searchVal.trim();
    setSearchParams(newParams);
  };

  return (
    <Layout>
      <section className="border-b border-slate-200 bg-slate-50 py-8 md:py-14">
        <div className="container grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Programs</p>
            <h1 className="mt-3 text-4xl font-bold md:text-6xl">Find the track that fits your next move.</h1>
            <p className="mt-4 max-w-2xl text-slate-600">
              Browse Pixel2Pro's focused learning programs. Each program includes live classes, practical assignments, and portfolio outcomes.
            </p>
          </div>
          <HeroCarousel className="h-[280px] shadow-xl sm:h-[340px] md:h-[390px]" />
        </div>
      </section>

      <ToolsCarousel />

      <section className="py-8 md:py-12">
        <div className="container">
          <div className="mb-6 max-w-md relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search programs, tools, or learning paths..."
              value={searchVal}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="h-11 w-full rounded-full border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-black placeholder:text-slate-400 shadow-sm"
            />
          </div>

          <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2">
            <span className="flex h-10 shrink-0 items-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-semibold">
              <SlidersHorizontal size={16} /> Filter
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => selectCat(cat)}
                className={`h-10 shrink-0 rounded-full border px-4 text-sm font-semibold transition-all active:scale-95 ${
                  active === cat
                    ? "border-black bg-black text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-slate-500">
              No programs found matching your search.
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
