const speakers = [
  {
    name: "Alan K Biju",
    role: "Industry Speaker",
    image: "/Rishav Mishra _ 23BHI10011_ PR team.webp",
    description:
      "idk let the content team fill this in, now for testing filling with random text.",
  },
  {
    name: "Eeman Majumdar",
    role: "Industry Speaker",
    image: "/Rishav Mishra _ 23BHI10011_ PR team.webp",
    description:
      "idk let the content team fill this in, now for testing filling with random text.",
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-semibold text-white mb-12">Speakers</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {speakers.map((speaker) => (
          <div
            key={speaker.name}
            className="card group bg-black/30 backdrop-blur
                       border border-white/10 rounded-3xl p-8
                       min-h-[260px]
                       flex flex-col sm:flex-row items-center sm:items-center gap-8
                       transition-all duration-300
                       hover:border-blue-400/70 hover:-translate-y-1"
          >
            {/* Speaker Image */}
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-40 h-40 rounded-3xl object-cover
                         border-2 border-white/20
                         mb-6 sm:mb-0
                         group-hover:brightness-110 transition"
            />

            {/* Speaker Info */}
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl font-semibold text-white tracking-tight">
                {speaker.name}
              </h3>
              <p className="text-sm font-medium text-blue-300/80 uppercase tracking-wide">
                {speaker.role}
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                {speaker.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
