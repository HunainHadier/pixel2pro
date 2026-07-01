import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import { courses } from "@/data/courses";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full border-t border-zinc-900 bg-black text-slate-400 select-none">
      <div className="mx-auto container px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 md:gap-12">
          <div className="space-y-6 lg:col-span-4">
            <Logo variant="light" size="default" />
            <p className="max-w-sm text-sm leading-6 text-slate-400">
              Pixel2Pro turns focused learners into job-ready builders through cohort-based tracks, verified credentials, and portfolio-grade outcomes with internship pathways.
            </p>
            <div className="flex items-center gap-4 text-slate-500">
              <a
                href="https://www.facebook.com/profile.php?id=61577664824357"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/pixel2pro_/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/pixel2pro"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/@Pixel2Proo"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="transition-colors hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="transition-colors hover:text-white">
                  Faculty
                </Link>
              </li>
              <li>
                <Link to="/team" className="transition-colors hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="transition-colors hover:text-white">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Learning Tracks</h4>
            <ul className="space-y-3 text-sm">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link
                    to={`/courses/${course.id}`}
                    className="block max-w-xs truncate transition-colors hover:text-white"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-slate-500" />
                <a href="mailto:info@pixel2pro.com" className="transition-colors hover:text-white">
                  info@pixel2pro.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-slate-500" />
                <a href="tel:+923092271214" className="transition-colors hover:text-white">
                  +92 309 227 1214
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-slate-500" />
                <span>
                  UF-114, Kolachi IT Park, Gulshan E Jamal, Rashid Minhas Road, Karachi, Sindh, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-12 border-slate-900" />

        <div className="flex flex-col gap-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>&copy; {currentYear} Pixel2Pro. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            {/*
            <Link to="/refund-policy" className="transition-colors hover:text-white">
              Refund Policy
            </Link>
            <Link to="/vetting-terms" className="transition-colors hover:text-white">
              Hakamtechsol Vetting Board Terms
            </Link>
            */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
