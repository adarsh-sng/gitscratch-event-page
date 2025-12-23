export default function DevPresence() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-28 space-y-20">

      {/* GITHUB */}
      <div className="card bg-[#0d1117] border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-white mb-4">
          $ github
        </h2>

        <p className="text-white/60 mb-8 max-w-2xl">
          Learn how recruiters actually read GitHub profiles —
          from commit history to project clarity.
        </p>

        <div className="grid grid-cols-14 gap-1 mb-8">
          {Array.from({ length: 98 }).map((_, i) => {
            const shades = [
              "bg-[#161b22]",
              "bg-green-900",
              "bg-green-700",
              "bg-green-500",
            ];
            return (
              <div
                key={i}
                className={`w-3 h-3 rounded-sm ${
                  shades[Math.floor(Math.random() * shades.length)]
                }`}
              />
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-white/70">
          <ul className="space-y-2">
            <li>• Writing meaningful commits</li>
            <li>• Structuring real projects</li>
            <li>• README that tells a story</li>
          </ul>
          <ul className="space-y-2">
            <li>• Consistency over randomness</li>
            <li>• Beginner-friendly open source</li>
            <li>• Showing impact, not noise</li>
          </ul>
        </div>
      </div>

      {/* LINKEDIN */}
      <div className="card bg-white border rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-[#0a66c2] mb-4">
          $ linkedin
        </h2>

        <p className="text-gray-600 mb-8 max-w-2xl">
          Your LinkedIn is your public professional identity.
          Learn how to present yourself beyond certificates.
        </p>

        <div className="border rounded-xl p-5 bg-gray-50 mb-8">
          <div className="h-4 w-40 bg-gray-300 rounded mb-2" />
          <div className="h-3 w-64 bg-gray-200 rounded mb-2" />
          <div className="h-3 w-56 bg-gray-200 rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
          <ul className="space-y-2">
            <li>• Writing strong headlines</li>
            <li>• Clear professional summary</li>
            <li>• Project positioning</li>
          </ul>
          <ul className="space-y-2">
            <li>• Networking with intent</li>
            <li>• Content & consistency</li>
            <li>• Early credibility building</li>
          </ul>
        </div>
      </div>

    </section>
  );
}
