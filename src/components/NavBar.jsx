import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all
      ${scrolled ? "backdrop-blur bg-black/40 border-b border-white/10" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/notion.png" className="h-8 w-8 object-contain mr-3" />
          <span className="text-white/40 scale-110">×</span>
          <img src="/aiclubc.svg" className="h-10 w-16 object-contain -ml-1" />
        </div>

        <div className="hidden md:flex gap-6 text-sm text-white/80">
          <a href="#about" className="scroll-smooth scroll-mt-20">
            About
          </a>
          <a href="#agenda" className="scroll-smooth scroll-mt-20">
            Agenda
          </a>
          <a href="#speakers" className="scroll-smooth scroll-mt-20">
            Speakers
          </a>
        </div>

        <Link
          to="/register"
          className="px-4 py-2 text-sm rounded-lg bg-blue-600 hover:bg-blue-500 transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
