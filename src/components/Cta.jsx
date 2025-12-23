import { Link } from '@tanstack/react-router';
export default function Cta() {
  return (
    <section id="register" className="py-32 text-center">
      <h2 className="text-3xl font-semibold text-white mb-6">
        $ ready to start
      </h2>

      <p className="text-white/60 mb-10">
        Join git scratch and improve your developer presence.
      </p>

      <Link
        to="/register"
        className="px-10 py-4 rounded-full bg-[#0a66c2]
                   hover:bg-[#004182] transition
                   text-white font-medium"
      >
        $ register
      </Link>
    </section>
  );
}
