import { motion } from "framer-motion";
import profile from "../assets/khoobchand.jpg";
import { HiSparkles, HiCode, HiHeart, HiLightningBolt } from "react-icons/hi";

const About = () => {
  const skills = [
  { icon: HiCode, text: "Writing Clean Code", color: "from-pink-400 to-rose-400" },
  { icon: HiLightningBolt, text: "Fast Adaptability", color: "from-purple-400 to-indigo-400" },
  { icon: HiHeart, text: "Logical Problem Solving", color: "from-blue-400 to-cyan-400" },
];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-800"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-linear-to-br from-purple-300 to-pink-300 dark:from-purple-900/40 dark:to-pink-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 bg-linear-to-br from-blue-300 to-cyan-300 dark:from-blue-900/40 dark:to-cyan-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
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
      {[...Array(15)].map((_, i) => (
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

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 z-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg shadow-purple-200/50 dark:shadow-purple-900/50 border border-purple-200 dark:border-slate-700"
          >
            <HiSparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-bold bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              WHO I AM?
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl font-black leading-tight"
          >
            <span className="text-gray-800 dark:text-slate-200">About{" "}</span>
            <span className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>

          {/* Description */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
  className="space-y-5 text-gray-700 dark:text-slate-300 leading-relaxed text-lg"
>
  <p>
    My name is{" "}
    <span className="font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
     Khoobchand Jhariya
    </span>
    , a dedicated Frontend Developer with a strong command of modern web technologies. 
    I build responsive, high-performance, and visually appealing web applications 
    with a focus on clean design and smooth user experience.
  </p>

  <p>
    I have hands-on experience working with{" "}
    <span className="font-semibold text-purple-600 dark:text-purple-400">JavaScript</span>,{" "}
    <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>,{" "}
    HTML, CSS, Tailwind, and TypeScript to create scalable and interactive user interfaces. 
    I enjoy turning complex ideas into simple, functional, and user-friendly solutions.
  </p>

  <p>
    I am continuously improving my skills and expanding towards{" "}
    <span className="font-bold bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
      Full Stack Development
    </span>{" "}
    to build complete, end-to-end web applications and contribute to impactful real-world projects.
  </p>
</motion.div>


          {/* Skill badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            {skills.map(({ icon: Icon, text, color }, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg border border-white/50 dark:border-slate-700/50"
              >
                <div className={`p-2 rounded-xl bg-linear-to-r ${color}`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-gray-700 dark:text-slate-300">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center z-10"
        >
          <div className="relative group">
            {/* Decorative circles */}
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

            {/* Image container */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-2xl shadow-purple-300/50 dark:shadow-purple-900/50 border border-white/50 dark:border-slate-700/50 p-3">
              <motion.img
                src={profile}
                alt="Khoobchand"
                className="w-[320px] h-[400px] sm:w-[340px] sm:h-[420px] md:w-[360px] md:h-[440px] object-cover rounded-[2rem] relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* linear overlay */}
              <div className="absolute inset-3 rounded-[2rem] bg-linear-to-tr from-pink-500/10 via-purple-500/10 to-blue-500/10 pointer-events-none" />
            </div>

            {/* Floating emojis */}
            <motion.div
              className="absolute -top-4 -right-4 text-3xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🎨
            </motion.div>
            <motion.div
              className="absolute top-1/4 -left-6 text-3xl"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -10, 10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              💻
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 -right-6 text-3xl"
              animate={{
                y: [0, -12, 0],
                rotate: [0, 15, -15, 0],
              }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute -bottom-4 left-1/4 text-3xl"
              animate={{
                y: [0, -8, 0],
                rotate: [0, -12, 12, 0],
              }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
            >
              🚀
            </motion.div>

            {/* Floating skill tags */}
            <motion.div
              className="absolute -top-8 left-1/3 px-4 py-2 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-lg border border-purple-200 dark:border-slate-700"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-sm font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                React.js
              </span>
            </motion.div>
            <motion.div
              className="absolute bottom-16 -left-12 px-4 py-2 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-lg border border-blue-200 dark:border-slate-700"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            >
              <span className="text-sm font-bold bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                JavaScript
              </span>
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-16 px-4 py-2 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-lg border border-pink-200 dark:border-slate-700"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
            >
              <span className="text-sm font-bold bg-lienar-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Tailwind
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
