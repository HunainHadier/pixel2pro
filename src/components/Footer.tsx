import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import { courses } from "@/data/courses";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-slate-400 border-t border-zinc-900 relative z-10 select-none">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8">
          {/* Brand Identity Column */}
          <div className="space-y-6 lg:col-span-4">
            <Logo variant="light" size="default" />
            <p className="text-sm leading-6 text-slate-400 max-w-sm">
              Hakamtechsol turns focused learners into job-ready builders through cohort-based tracks, verified credentials, and portfolio-grade outcomes with guaranteed internship opportunities.
            </p>
            <div className="flex items-center gap-4 text-slate-500">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-5 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="hover:text-white transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="hover:text-white transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs Column */}
          <div className="space-y-5 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Learning Tracks
            </h4>
            <ul className="space-y-3 text-sm">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link
                    to={`/courses/${course.id}`}
                    className="hover:text-white transition-colors block truncate max-w-xs"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support Column */}
          <div className="space-y-5 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-slate-500 shrink-0" />
                <a href="mailto:info@hakamtechsol.com" className="hover:text-white transition-colors">
                  info@hakamtechsol.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-slate-500 shrink-0" />
                <a href="tel:+923000000000" className="hover:text-white transition-colors">
                  +92 300 0000000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-slate-500 shrink-0 mt-0.5" />
                <span>
                  Office 402, 4th Floor, Tech Hub Towers, Lahore, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-slate-900" />

        {/* Bottom Bar */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500">
          <div>
            &copy; {currentYear} Hakamtechsol. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
            <Link to="/vetting-terms" className="hover:text-white transition-colors">
              Hakamtechsol Vetting Board Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;