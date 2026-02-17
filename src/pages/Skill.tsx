"use client";
import { motion } from "framer-motion";
import { HiSparkles, HiCode, HiLightningBolt } from "react-icons/hi";

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "C++",
  "C",
  "Bootstrap",
  "Tailwind",
  "GitHub",
];

export const skillsImage = (skill: string) => {
  const skillMap: Record<string, string> = {
    HTML: "/skills/HTML.svg",
    CSS: "/skills/CSS.svg",
    JavaScript: "/skills/JavaScript.svg",
    React: "/skills/React-Dark.svg",
    "C++": "/skills/CPP.svg",
    C: "/skills/C.svg",
    Bootstrap: "/skills/Bootstrap.svg",
    Tailwind: "/skills/TailwindCSS-Dark.svg",
    GitHub: "/skills/Github-Dark.svg",
  };

  return {
    src: skillMap[skill] || "/skills/default.svg",
  };
};

// Skill colors for gradient effects - ALL SKILLS COVERED! 🎨
const skillColors: Record<string, string> = {
  HTML: "from-orange-400 to-red-400",
  CSS: "from-blue-400 to-cyan-400",
  JavaScript: "from-yellow-400 to-orange-400",
  React: "from-cyan-400 to-blue-400",
  "C++": "from-blue-500 to-indigo-600",
  C: "from-indigo-500 to-purple-600",
  Bootstrap: "from-purple-500 to-pink-500",
  Tailwind: "from-teal-400 to-cyan-400",
  GitHub: "from-gray-600 to-gray-800",
};

const Skill = () => {
  return (
    <section id="skills" className="relative min-h-screen py-20 md:py-28 px-6 overflow-hidden bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-800">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-pink-300 to-rose-300 dark:from-pink-900/40 dark:to-rose-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-linear-to-br from-blue-300 to-cyan-300 dark:from-blue-900/40 dark:to-cyan-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-linear-to-br from-purple-300 to-indigo-300 dark:from-purple-900/40 dark:to-indigo-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-linear-to-r from-pink-400 to-purple-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto z-10">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-xl mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <HiCode className="w-6 h-6 text-purple-500" />
            <span className="text-sm font-bold bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              MY TECH STACK
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
            <span className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Skills & Tools
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-slate-400 font-medium max-w-2xl mx-auto mt-6">
            Technologies I love working with to build amazing projects ✨
          </p>

          <motion.div
            className="mt-6 mx-auto w-40 h-1.5 rounded-full bg-linear-to-r from-pink-400 via-purple-400 to-blue-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {skillsData.map((skill, index) => {
            const { src } = skillsImage(skill);
            const gradient = skillColors[skill] || "from-purple-400 to-pink-400";

            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.1,
                  y: -10,
                  rotate: [0, -5, 5, 0],
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/50 dark:border-slate-700/50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden aspect-square flex flex-col items-center justify-center">
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Decorative corner glow */}
                  <motion.div
                    className={`absolute -top-10 -right-10 w-32 h-32 bg-linear-to-br ${gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />

                  {/* Icon container */}
                  <div className="relative mb-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                    <motion.div
                      className={`absolute inset-0 bg-linear-to-br ${gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity`}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <img
                      src={src}
                      alt={skill}
                      className="relative w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Skill name */}
                  <h3 className="relative text-sm md:text-base font-bold text-gray-800 dark:text-slate-200 text-center group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {skill}
                  </h3>

                  {/* Sparkle effect on hover */}
                  <motion.div
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <HiSparkles className="w-5 h-5 text-yellow-400" />
                  </motion.div>

                  {/* Bottom shine effect */}
                  <motion.div
                    className={`absolute -bottom-20 left-1/2 -translate-x-1/2 w-32 h-32 bg-linear-to-t ${gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* STATS SECTION - Fun Addition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            {
              icon: HiCode,
              number: "8+",
              label: "Technologies",
              color: "from-pink-400 to-rose-400",
            },
            {
              icon: HiLightningBolt,
              number: "React",
              label: "Specialist",
              color: "from-purple-400 to-indigo-400",
            },
            {
              icon: HiSparkles,
              number: "Frontend",
              label: "Developer",
              color: "from-blue-400 to-cyan-400",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/50 dark:border-slate-700/50 rounded-3xl p-8 shadow-xl text-center"
            >
              <motion.div
                className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${stat.color} shadow-lg mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3
                className={`text-3xl md:text-4xl font-black bg-linear-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
              >
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-slate-400 font-semibold text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
