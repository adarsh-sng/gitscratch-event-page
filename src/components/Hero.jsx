import { Link } from "@tanstack/react-router";
import posterImage from "../assets/aiconic2.webp";
export default function Hero() {
  return (
    <section className="bg-fixed">
      <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-5xl font-semibold text-white mb-6">
            <span className="text-green-400">$</span> git scratch
          </h1>

          <p className="text-xl text-blue-400 mb-6">
            Build your GitHub & LinkedIn presence
          </p>

          <p className="text-white/60 max-w-xl mb-10">
            A hands-on session by Notion Community & AI Club focused on writing
            better code, showcasing it effectively, and building a professional
            online presence early.
          </p>

          <Link
            to="/register"
            className="inline-block px-8 py-4 rounded-full
                       bg-[#0a66c2] hover:bg-[#004182]
                       transition text-white font-medium"
          >
            $ register
          </Link>
        </div>

        {/* RIGHT POSTER */}
        <div className="flex justify-center">
          <img
            src={posterImage}
            alt="Event poster"
            className="w-full max-w-[440px] rounded-2xl border border-white/20
                       object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
