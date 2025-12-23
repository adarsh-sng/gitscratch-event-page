import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12"
    >
      {/* WHY ATTEND */}
      <motion.div
        className="card bg-white border rounded-2xl p-8"
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        <h3 className="text-xl font-semibold text-[#0a66c2] mb-6">
          $ why attend
        </h3>

        <div className="space-y-4 text-sm text-gray-700">
          <div className="border-l-4 border-[#0a66c2] pl-4">
            Learn how recruiters actually evaluate GitHub profiles,
            beyond just number of repositories.
          </div>

          <div className="border-l-4 border-[#0a66c2] pl-4">
            Understand how to present projects, skills, and impact
            clearly on LinkedIn.
          </div>

          <div className="border-l-4 border-[#0a66c2] pl-4">
            Get clarity on what makes a profile “internship-ready”
            in early college years.
          </div>

          <div className="border-l-4 border-[#0a66c2] pl-4">
            Walk away with a concrete roadmap to improve both
            GitHub and LinkedIn after the event.
          </div>
        </div>
      </motion.div>

      {/* WHO SHOULD ATTEND */}
      <motion.div
        className="card bg-white border rounded-2xl p-8"
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        <h3 className="text-xl font-semibold text-[#0a66c2] mb-6">
          $ who should attend
        </h3>

        <div className="space-y-4 text-sm text-gray-700">
          <div className="border-l-4 border-[#0a66c2] pl-4">
            Students who have GitHub and LinkedIn accounts but
            aren’t confident about their quality.
          </div>

          <div className="border-l-4 border-[#0a66c2] pl-4">
            1st & 2nd year students preparing early for internships
            and career opportunities.
          </div>

          <div className="border-l-4 border-[#0a66c2] pl-4">
            Beginners in tech, AI, development, or open source
            looking for direction.
          </div>

          <div className="border-l-4 border-[#0a66c2] pl-4">
            Anyone who wants recruiters to take their online
            profile seriously at first glance.
          </div>
        </div>
      </motion.div>
    </section>
  );
}
