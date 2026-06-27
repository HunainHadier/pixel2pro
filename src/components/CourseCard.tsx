import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { Button } from "./ui/button";
import type { Course } from "@/data/courses";

const CourseCard = ({ course }: { course: Course }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl">
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-white">
      <img
        src={course.image}
        alt={course.title}
        className="h-full w-full object-contain grayscale transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 to-transparent" />
      <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-bold text-white">
        {course.number}
      </span>
      <span className="absolute bottom-4 left-4 right-4 text-xs font-semibold uppercase tracking-wider text-white/80">
        {course.track}
      </span>
    </div>
    <div className="flex flex-1 flex-col gap-4 p-5">
      <div>
        <h3 className="min-h-[4.75rem] text-xl font-bold leading-tight">{course.programName}</h3>
        <p className="mt-1 min-h-10 text-sm text-slate-500">{course.description}</p>
      </div>
      <div className="mt-auto grid grid-cols-2 gap-2 text-xs font-medium text-slate-600">
        <span className="flex min-h-11 items-center gap-2 rounded-md border border-slate-200 px-3">
          <Clock3 size={15} /> {course.duration}
        </span>
        <span className="flex min-h-11 items-center gap-2 rounded-md border border-slate-200 px-3">
          <CalendarDays size={15} /> {course.sessions}
        </span>
      </div>
      <Link to={`/courses/${course.id}`} className="block pt-2">
        <Button className="h-12 w-full rounded-full">
          View Track <ArrowUpRight size={16} />
        </Button>
      </Link>
    </div>
  </article>
);

export default CourseCard;
