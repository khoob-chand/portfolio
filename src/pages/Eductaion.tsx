"use client";
import { motion } from "framer-motion";
import { HiAcademicCap, HiSparkles, HiBookOpen } from "react-icons/hi";

const educationData = [
  {
    id: 1,
    duration: "2023 - Present",
    title: "Bachelor Degree",
    degree: "BCA (Computer Application)",
    institution: "SS Jain Subodh Autonomus",
    color: "from-pink-400 to-rose-400",
    bgColor: "from-pink-50 to-rose-50",
    icon: "🎓",
    status: "In Progress",
  },
  {
    id: 2,
    duration: "2021 - 2022",
    title: "Higher Secondary",
    degree: "12th Grade",
    institution: "Maheshwari Secondary School",
    color: "from-purple-400 to-indigo-400",
    bgColor: "from-purple-50 to-indigo-50",
    icon: "📖",
    status: "Completed",
  },
  {
    id: 3,
    duration: "2020 - 2021",
    title: "Secondary School",
    degree: "10th Grade",
    institution: "Maheshwari Secondary School",
    color: "from-blue-400 to-cyan-400",
    bgColor: "from-blue-50 to-cyan-50",
    icon: "✏️",
    status: "Completed",
  },
];

const Education = () => {
  return (
    <section id="education" className="relative min-h-screen py-20 md:py-28 px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-800">
      
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-300 to-cyan-300 dark:from-blue-900/40 dark:to-cyan-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 dark:from-purple-900/40 dark:to-pink-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
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
        
        {/* TITLE - Different Style */}
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
            <HiBookOpen className="w-6 h-6 text-purple-500" />
            <span className="text-sm font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              MY ACADEMIC JOURNEY
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          
          <motion.div
            className="mt-6 mx-auto w-40 h-1.5 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        {/* BENTO GRID LAYOUT - Completely Different! */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/50 dark:border-slate-700/50 rounded-3xl p-8 shadow-2xl hover:shadow-purple-300/50 dark:hover:shadow-purple-900/50 transition-all duration-500 overflow-hidden">
                
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${edu.bgColor} dark:from-slate-700/20 dark:to-slate-600/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                  initial={false}
                />
                
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.color} opacity-10 rounded-bl-[100px]`} />
                
                {/* Status badge */}
                <motion.div
                  className="relative flex items-center justify-between mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${edu.color} text-white shadow-md`}>
                    {edu.status}
                  </span>
                  <span className="text-4xl">{edu.icon}</span>
                </motion.div>

                {/* Duration */}
                <motion.p
                  className="relative text-sm font-bold text-gray-500 dark:text-slate-400 mb-4 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  <HiSparkles className="w-4 h-4 text-purple-400" />
                  {edu.duration}
                </motion.p>

                {/* Title */}
                <motion.h3
                  className="relative text-2xl md:text-3xl font-black text-gray-800 dark:text-slate-200 mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  {edu.title}
                </motion.h3>

                {/* Degree */}
                <motion.p
                  className={`relative text-lg font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-4`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.6 }}
                >
                  {edu.degree}
                </motion.p>

                {/* Institution */}
                <motion.div
                  className="relative flex items-start gap-3 pt-4 border-t-2 border-gray-200 dark:border-slate-700 group-hover:border-purple-300 dark:group-hover:border-purple-600 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.7 }}
                >
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${edu.color} shadow-md group-hover:scale-110 transition-transform`}>
                    <HiAcademicCap size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wide">Institution</p>
                    <p className="text-sm font-semibold text-gray-700 dark:text-slate-300 mt-1 leading-tight">
                      {edu.institution}
                    </p>
                  </div>
                </motion.div>

                {/* Decorative shine effect */}
                <motion.div
                  className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-white to-transparent dark:from-slate-600 dark:to-transparent opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* IMAGE SECTION - Bottom Center (Optional - uncomment if you want to add image) */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <div className="relative max-w-xl">
            <motion.div
              className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-400 dark:from-blue-900/40 dark:to-cyan-900/40 rounded-full opacity-40 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-400 dark:from-pink-900/40 dark:to-purple-900/40 rounded-full opacity-40 blur-3xl"
              animate={{
                scale: [1.3, 1, 1.3],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-[3rem] p-10 shadow-2xl border border-white/50 dark:border-slate-700/50">
              <motion.img
                src={educationImg}
                alt="Education Journey"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full max-w-[500px] object-contain drop-shadow-2xl relative z-10"
              />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-[3rem] pointer-events-none" />
            </div>

            <motion.div
              className="absolute -top-6 -right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50 dark:border-slate-700/50"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <HiLightningBolt className="w-8 h-8 text-yellow-500" />
            </motion.div>
            
            <motion.div
              className="absolute bottom-8 -left-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white/50 dark:border-slate-700/50"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              <p className="text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Lifelong Learner 🌟
              </p>
            </motion.div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Education;
