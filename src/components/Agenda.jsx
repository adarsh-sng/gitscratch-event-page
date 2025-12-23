import { motion } from "framer-motion";

const agenda = [
  { time: "12:00", title: "Welcome" },
  { time: "12:10", title: "GitHub for Students" },
  { time: "12:45", title: "LinkedIn Branding" },
  { time: "1:30", title: "Live Q&A" },
  { time: "2:00", title: "Quiz" },
  { time: "2:30", title: "Closing" },
];

export default function Agenda() {
  return (
    <section id="agenda" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white mb-8">
          $ agenda
        </h2>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20" />

          {/* Items */}
          <div className="relative flex gap-10 overflow-x-auto pb-6 scrollbar-hide">
            {agenda.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="min-w-[160px] text-center"
              >
                {/* Dot */}
                <div className="mx-auto w-3 h-3 rounded-full bg-blue-500 mb-4" />

                {/* Card */}
                <div className="card bg-black/40 backdrop-blur border border-white/10 rounded-xl p-4">
                  <p className="text-sm text-blue-400 mb-1">
                    {item.time}
                  </p>
                  <p className="text-sm text-white">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
