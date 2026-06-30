import { Linkedin } from "lucide-react";
import Layout from "@/components/Layout";
import hunainHaiderImg from "@/assets/hunain-haider.png";
import arbazImg from "@/assets/team-arbaz.png";

type FacultyMember = {
  name: string;
  specialty: string;
  background: string;
  image?: string;
  linkedin?: string;
};

const faculty: FacultyMember[] = [
  {
    name: "Arbaz Ali",
    specialty: "AI Foundation and Freelancing",
    background: "Guides learners through AI-first workflows, client packaging, and income-ready service systems.",
    image: arbazImg,
    linkedin: "https://www.linkedin.com/in/arbaz-ali-7746a0404/",
  },
  {
    name: "Hunain Haider",
    specialty: "Next Gen Developer",
    background: "Builds modern product experiences with clean architecture, fast delivery, and career-ready mentorship.",
    image: hunainHaiderImg,
    linkedin: "https://www.linkedin.com/in/hunain-haider-658956257",
  },
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
    {/* Header Section */}
    <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-12 md:py-20">
      <div className="mx-auto w-full max-w-[95rem] px-6 md:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Our Faculty / Instructors</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Industry mentors with operating depth.</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Pixel2Pro instructors are selected for practical teaching ability, real-world exposure, and portfolio-first mentorship.
        </p>
      </div>
    </section>

    {/* Faculty Grid Section */}
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="mx-auto w-full max-w-[95rem] px-6 md:px-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {faculty.map((mentor, index) => (
            <article
              key={mentor.name}
              style={{ animationDelay: `${index * 90}ms` }}
              className="group relative flex h-auto flex-row overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              {/* Image Side - Fixed width ratio */}
              <div className="w-[30%] shrink-0 overflow-hidden bg-slate-100">
                {mentor.image ? (
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-200 text-xl font-bold text-slate-400">
                    {mentor.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                )}
              </div>

              {/* Content Side */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">{mentor.specialty}</p>
                    {mentor.linkedin && (
                      <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-indigo-600">
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">{mentor.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{mentor.background}</p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Pixel2Pro Mentor</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Faculty;