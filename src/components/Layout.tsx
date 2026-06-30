import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TechBackground from "./TechBackground";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-white text-black">
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none opacity-55">
      <div className="absolute -left-24 -top-20 h-[520px] w-[520px] rounded-full bg-slate-400/45 blur-[140px] animate-blob-slow sm:h-[720px] sm:w-[720px] sm:blur-[180px]" />
      <div className="absolute -right-24 top-16 h-[460px] w-[460px] rounded-full bg-slate-500/28 blur-[130px] animate-blob-reverse sm:h-[680px] sm:w-[680px] sm:blur-[170px]" />
      <div className="absolute bottom-0 left-1/4 h-[540px] w-[540px] rounded-full bg-slate-600/20 blur-[150px] animate-blob-slow sm:h-[760px] sm:w-[760px] sm:blur-[190px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_42%),radial-gradient(circle_at_center,rgba(148,163,184,0.12),transparent_62%),linear-gradient(to_bottom,rgba(255,255,255,0.08),rgba(255,255,255,0.9))]" />
    </div>

    <TechBackground />

    <div className="relative z-10 flex flex-1 flex-col">
      <Header />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <Footer />
    </div>
  </div>
);

export default Layout;
