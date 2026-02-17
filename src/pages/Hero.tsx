// src/components/Hero.tsx
import { motion } from "framer-motion";
import coderImg from "../assets/right.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload, HiMail, HiSparkles } from "react-icons/hi";
import resume from "../assets/Khoobchand.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-800"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-pink-300 to-rose-300 dark:from-pink-900/40 dark:to-rose-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          animate={{
            x: [0, 100, 0],
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
          className="absolute top-40 right-20 w-72 h-72 bg-linear-to-br from-purple-300 to-indigo-300 dark:from-purple-900/40 dark:to-indigo-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/3 w-72 h-72 bg-linear-to-br from-blue-300 to-cyan-300 dark:from-blue-900/40 dark:to-cyan-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-72 h-72 bg-linear-to-br from-yellow-200 to-orange-200 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
          animate={{
            x: [0, -80, 0],
            y: [0, -80, 0],
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
      {[...Array(20)].map((_, i) => (
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

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 z-10"
          >
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg shadow-purple-200/50 dark:shadow-purple-900/50 border border-purple-200 dark:border-slate-700"
            >
              <motion.span
                animate={{ rotate: [0, 14, -14, 14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                className="text-2xl"
              >
                👋
              </motion.span>
              <span className="text-sm font-semibold bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name with sparkles */}
            <div className="space-y-3 relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight">
                  <motion.span
                    className="inline-block bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{ backgroundSize: "200% auto" }}
                  >
                   Khoobchand
                  </motion.span>
                  <br />
                  <motion.span
                    className="inline-block bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                    style={{ backgroundSize: "200% auto" }}
                  >
                    Jhariya
                  </motion.span>
                </h1>
              </motion.div>

              {/* Sparkles around name */}
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <HiSparkles className="w-8 h-8 text-yellow-400" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 -left-8"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <HiSparkles className="w-6 h-6 text-pink-400" />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-700 dark:text-slate-300 leading-relaxed max-w-xl font-medium"
            >
              A passionate{" "}
              <motion.span
                className="relative inline-block font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Frontend Developer
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-1 bg-linear-to-r from-pink-400 to-purple-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                />
              </motion.span>{" "}
              passionate about turning complex problems into simple, beautiful
              and intuitive web solutions. ✨
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              {[
                {
                  Icon: FaGithub,
                  href: "#",
                  iconColor: "text-gray-700 dark:text-slate-300",
                  hoverColor: "hover:text-gray-900 dark:hover:text-white",
                },
                {
                  Icon: FaLinkedin,
                  href: "#",
                  iconColor: "text-blue-600 dark:text-blue-400",
                  hoverColor: "hover:text-blue-700 dark:hover:text-blue-300",
                },
                // { Icon: FaTwitter, href: "#", iconColor: "text-sky-500 dark:text-sky-400", hoverColor: "hover:text-sky-600 dark:hover:text-sky-300" },
              ].map(({ Icon, href, iconColor, hoverColor }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="group p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 dark:border-slate-700/50"
                >
                  <Icon
                    className={`w-6 h-6 ${iconColor} ${hoverColor} transition-colors duration-300`}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-2xl font-bold text-white overflow-hidden shadow-xl shadow-purple-300/50 dark:shadow-purple-900/50"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500" />
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ backgroundSize: "200% auto" }}
                  />
                  <span className="relative flex items-center gap-2 text-lg">
                    <HiMail className="w-5 h-5" />
                    Contact Me
                  </span>
                </motion.button>
              </a>

              <motion.a
                href={resume}
                download="khoobchand.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-2xl font-bold text-gray-700 dark:text-slate-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-2 border-purple-300 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="flex items-center gap-2 text-lg">
                  <HiDownload className="w-5 h-5 group-hover:animate-bounce" />
                  Download CV
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative z-10"
          >
            {/* Decorative circles */}
            <motion.div
              className="absolute -top-8 -left-8 w-32 h-32 bg-linear-to-br from-pink-400 to-rose-400 rounded-full opacity-40 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full opacity-40 blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Image container with floating animation */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-2xl shadow-purple-300/50 dark:shadow-purple-900/50 p-8 border border-white/50 dark:border-slate-700/50">
                <img
                  src={coderImg}
                  alt="Developer illustration"
                  className="w-full h-auto relative z-10"
                />

                {/* linear overlay effect */}
                <div className="absolute inset-0 bg-linear-to-tr from-pink-500/5 via-purple-500/5 to-blue-500/5 pointer-events-none" />
              </div>

              {/* Floating emojis around image */}
              <motion.div
                className="absolute -top-4 -right-4 text-4xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                💻
              </motion.div>
              <motion.div
                className="absolute top-1/4 -left-6 text-3xl"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                🚀
              </motion.div>
              <motion.div
                className="absolute bottom-1/4 -right-6 text-3xl"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              >
                ⚡
              </motion.div>
              <motion.div
                className="absolute -bottom-4 left-1/4 text-3xl"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, -12, 12, 0],
                }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
              >
                ✨
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
