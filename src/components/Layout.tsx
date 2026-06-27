import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TechBackground from "./TechBackground";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-white text-black">
    {/* Ambient Background Animation Blobs */}
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-45 select-none">
      <div className="absolute -left-12 -top-12 h-[350px] w-[350px] rounded-full bg-slate-100 blur-[80px] animate-blob-slow sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
      <div className="absolute -right-12 top-1/4 h-[300px] w-[300px] rounded-full bg-blue-50/70 blur-[70px] animate-blob-reverse sm:h-[450px] sm:w-[450px] sm:blur-[100px]" />
      <div className="absolute bottom-10 left-1/4 h-[350px] w-[350px] rounded-full bg-indigo-50/50 blur-[90px] animate-blob-slow sm:h-[520px] sm:w-[520px] sm:blur-[110px]" />
    </div>

    {/* Tech Design Constellation Animation Background */}
    <TechBackground />

    {/* Content Wrapper */}
    <div className="relative z-10 flex flex-1 flex-col">
      <Header />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <Footer />
    </div>
  </div>
);

export default Layout;
