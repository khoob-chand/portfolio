"use client";
import { motion } from "framer-motion";
import { BsPersonWorkspace } from "react-icons/bs";
import { HiSparkles, HiBriefcase } from "react-icons/hi";
import laptop from "../assets/rightiamge.jpg"; 

const experiences = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "Zucol Solutions",
    duration: "Dec 2025 - Present",
    color: "from-pink-400 to-rose-400",
    bgColor: "from-pink-50 to-rose-50",
  },
  {
    id: 2,
    title: "Data Management & Excel Associate",
    company: "Sports For All (SFA)",
    duration: "Dec 2024 - Jan 2025",
    color: "from-purple-400 to-indigo-400",
    bgColor: "from-purple-50 to-indigo-50",
  },
  {
    id: 3,
    title: "Full Stack Website Developer (Academic Project)",
    company: "College Project",
    duration: "Dec 2023 - Jan 2024",
    color: "from-blue-400 to-cyan-400",
    bgColor: "from-blue-50 to-cyan-50",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen py-20 md:py-28 px-6 md:px-10 overflow-hidden bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-800"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-purple-300 to-pink-300 dark:from-purple-900/40 dark:to-pink-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-linear-to-br from-blue-300 to-cyan-300 dark:from-blue-900/40 dark:to-cyan-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-linear-to-r from-pink-400 to-purple-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* TITLE */}
      <div className="relative flex justify-center mb-16 md:mb-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <motion.div
            className="w-12 md:w-20 h-1 rounded-full bg-linear-to-r from-transparent via-purple-400 to-purple-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 blur-xl opacity-30 rounded-2xl" />
            <h2 className="relative px-6 md:px-8 py-3 rounded-2xl text-xl md:text-2xl font-black tracking-wide bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-lg">
              <span className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent flex items-center gap-2">
                <HiBriefcase className="w-6 h-6" />
                Experience
              </span>
            </h2>
          </div>
          
          <motion.div
            className="w-12 md:w-20 h-1 rounded-full bg-linear-to-r from-purple-400 via-purple-400 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center order-2 lg:order-1"
        >
          <div className="relative">
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-32 h-32 bg-linear-to-br from-pink-400 to-rose-400 dark:from-pink-900/40 dark:to-rose-900/40 rounded-full opacity-40 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-linear-to-br from-blue-400 to-cyan-400 dark:from-blue-900/40 dark:to-cyan-900/40 rounded-full opacity-40 blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Floating laptop */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl shadow-purple-300/50 dark:shadow-purple-900/50 border border-white/50 dark:border-slate-700/50">
                <img
                  src={laptop}
                  alt="Experience illustration"
                  className="w-60 md:w-80 lg:w-96 drop-shadow-2xl object-contain relative z-10"
                />
                
                {/* linear overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-pink-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl pointer-events-none" />
              </div>
            </motion.div>

            {/* Floating emojis */}
            <motion.div
              className="absolute -top-4 -right-4 text-3xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              💼
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 -left-6 text-3xl"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -10, 10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              🚀
            </motion.div>
            <motion.div
              className="absolute top-1/3 -right-6 text-3xl"
              animate={{
                y: [0, -12, 0],
                rotate: [0, 15, -15, 0],
              }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            >
              ✨
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT TIMELINE */}
        <div className="relative flex flex-col gap-8 order-1 lg:order-2">
          
          {/* Vertical linear line */}
          <div className="absolute left-3 md:left-4 top-0 h-full w-[2px] bg-linear-to-b from-pink-400 via-purple-400 to-blue-400 opacity-40 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-10 md:pl-14"
            >
              {/* Animated dot */}
              <motion.div
                className={`absolute left-[7px] md:left-[11px] top-7 w-4 h-4 rounded-full bg-linear-to-r ${exp.color} shadow-lg z-10`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.3 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-linear-to-r from-white/50 to-transparent"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/50 dark:border-slate-700/50 rounded-2xl p-5 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                {/* linear background on hover */}
                <div className={`absolute inset-0 bg-linear-to-r ${exp.bgColor} dark:from-slate-700/20 dark:to-slate-600/20 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl`} />
                
                {/* Duration badge */}
                <div className="relative flex items-center gap-2 mb-3">
                  <motion.span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs md:text-sm font-bold bg-linear-to-r ${exp.color} text-white shadow-md`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <HiSparkles className="w-3 h-3" />
                    {exp.duration}
                  </motion.span>
                </div>

                {/* Content */}
                <div className="relative flex items-start md:items-center gap-4">
                  <motion.div
                    className={`p-3 rounded-xl bg-linear-to-br ${exp.color} shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <BsPersonWorkspace size={20} className="text-white" />
                  </motion.div>

                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-800 dark:text-slate-200 group-hover:bg-linear-to-r group-hover:from-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400 text-sm mt-1 font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
