export default function Outcomes() {
  const items = [
    {
      title: "Build a stand-out GitHub portfolio",
      desc: "Learn commit strategy, project structure, and contribution consistency.",
    },
    {
      title: "Optimize your LinkedIn profile",
      desc: "Craft headlines, summaries, and network with purpose.",
    },
    {
      title: "Live industry insights",
      desc: "Hear real hiring stories & recruiter expectations.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-8">
      {items.map((item, i) => (
        <div
          key={i}
          className="card bg-black/40 backdrop-blur border border-white/10 rounded-2xl p-6"
        >
          <h3 className="text-white font-semibold mb-2">
            {item.title}
          </h3>
          <p className="text-gray-300 text-sm">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}
