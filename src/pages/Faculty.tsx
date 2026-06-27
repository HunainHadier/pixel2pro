import { Linkedin } from "lucide-react";
import Layout from "@/components/Layout";

const faculty = [
  {
    name: "Ayaan Mir",
    specialty: "Next-Gen Developer Track",
    background: "Former enterprise product architect across SaaS platforms and AI-enabled internal tools.",
  },
  {
    name: "Maha Siddiqui",
    specialty: "Digital Marketing High Level Performance Ads",
    background: "Performance strategist with corporate growth experience across acquisition, analytics, and funnel optimization.",
  },
  {
    name: "Hamza Rauf",
    specialty: "Shopify and E-Commerce Growth",
    background: "Commerce operator focused on conversion systems, retention flows, and scalable store operations.",
  },
  {
    name: "Zara Khan",
    specialty: "AI Foundation and Freelancing",
    background: "Remote-work mentor helping service providers package AI-assisted delivery systems for global clients.",
  },
  {
    name: "Rimsha Noor",
    specialty: "Creative Media Program",
    background: "Brand design and video mentor with agency experience in content systems and visual campaigns.",
  },
  {
    name: "Daniyal Sheikh",
    specialty: "Amazon Private Label & Agency Systems",
    background: "Marketplace systems consultant specializing in launch operations, reporting, and agency SOPs.",
  },
];

const Faculty = () => (
  <Layout>
    <section className="border-b border-slate-200 bg-slate-50 py-10 md:py-16">
      <div className="container max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Our Faculty / Instructors</p>
        <h1 className="mt-3 text-4xl font-bold md:text-6xl">Industry mentors with operating depth.</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Pixel2Pro instructors are selected for practical teaching ability, corporate exposure, and portfolio-first mentorship.
        </p>
      </div>
    </section>

    <section className="py-10 md:py-16">
      <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {faculty.map((mentor) => (
          <article key={mentor.name} className="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-black hover:shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                {mentor.name.split(" ").map((part) => part[0]).join("")}
              </div>
              <a
                href="https://www.linkedin.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition hover:bg-black hover:text-white"
                aria-label={`${mentor.name} LinkedIn profile`}
              >
                <Linkedin size={18} />
              </a>
            </div>
            <h2 className="mt-5 text-xl font-bold">{mentor.name}</h2>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">{mentor.specialty}</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{mentor.background}</p>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Faculty;
