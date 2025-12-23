export default function Highlights() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-8">

      {/* GitHub */}
      <div className="card bg-[#0d1117] border border-white/10 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-2">
          GitHub Presence
        </h3>
        <p className="text-sm text-white/60">
          Learn how recruiters evaluate repositories, commits,
          consistency, and real-world project quality.
        </p>
      </div>

      {/* LinkedIn */}
      <div className="card bg-white border rounded-2xl p-6">
        <h3 className="font-semibold text-[#0a66c2] mb-2">
          LinkedIn Branding
        </h3>
        <p className="text-sm text-gray-600">
          Optimize headlines, summaries, and networking strategies
          aligned with internships and early careers.
        </p>
      </div>

      {/* Industry */}
      <div className="card bg-black/40 backdrop-blur border border-white/10 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-2">
          Industry Insight
        </h3>
        <p className="text-sm text-white/60">
          Direct guidance from speakers with real hiring
          and industry experience.
        </p>
      </div>

    </section>
  );
}
