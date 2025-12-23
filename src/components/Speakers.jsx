const speakers = [
  {
    name: "Alan K Biju",
    role: "Bain Analyst Intern | Competitive Programmer",
    image: "/Alan.webp",
    objectPosition: "object-center",
    linkedin: "https://www.linkedin.com/in/alan-k-biju/",
  },
  {
    name: "Eeman Majumdar",
    role: "SIH Hackathon Winner | Deloitte Data Sciencntist",
    image: "/eeman.webp",
    objectPosition: "object-top",
    linkedin: "https://www.linkedin.com/in/eeman-majumder-2184331a2",
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="max-w-7xl mx-auto px-6 py-20">
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
              className={`w-44 h-44 rounded-3xl object-fit
                         border-2 border-white/20
                         mb-2 sm:mb-0
                         group-hover:brightness-110 transition ${
                           speaker.objectPosition ?? ""
                         }`}
            />

            {/* Speaker Info */}
            <div className="space-y-2 text-center sm:text-left mx-8">
              <h3 className="text-xl font-semibold text-white tracking-tight ">
                {speaker.name}
              </h3>
              <p className="text-md font-medium text-blue-300/80 uppercase tracking-wide">
                {speaker.role}
              </p>
              {speaker.linkedin && (
                <div className="pt-2">
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-400/60 px-4 py-1.5 text-sm text-blue-100 transition hover:border-blue-300 hover:text-white"
                  >
                    <span
                      className="size-2 rounded-full bg-blue-400"
                      aria-hidden
                    />
                    LinkedIn
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
