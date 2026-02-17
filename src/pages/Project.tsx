"use client";
import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSparkles, HiCode, HiExternalLink, HiEye } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import first from "../assets/zucol.png";
// import second from "../assets/zucolold.png"
// import third from "../assets/bthawk.png"
// import forth from "../assets/paste.png"
// import fifth from "../assets/todo.png"

// Projects data
const projectsData = [
  {
    id: 1,
    title: "Zucol Solutions Website",
    description:
      "Developed the Zucol Solutions corporate website with a modern, fully responsive UI using React, TypeScript, and Tailwind CSS. Worked on UI development, component structuring, API integration, and interactive animations to enhance user experience and performance.",
    image: first,
    tags: ["React", "TypeScript", "Tailwind CSS", "API Integration", "Framer Motion"],
    demoLink: "https://www.rentifyo.com/",
    githubLink: null,
    color: "from-pink-400 to-rose-400",
    bgGradient: "from-pink-50 to-rose-50",
  },
  
  
];

const Project = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 md:py-28 px-6 overflow-hidden bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-800"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-purple-300 to-pink-300 dark:from-purple-900/40 dark:to-pink-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
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
              MY WORK
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
            <span className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-slate-400 font-medium max-w-2xl mx-auto mt-6">
            Check out some of my recent work and side projects ✨
          </p>

          <motion.div
            className="mt-6 mx-auto w-40 h-1.5 rounded-full bg-linear-to-r from-pink-400 via-purple-400 to-blue-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/50 dark:border-slate-700/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  {/* Action buttons overlay */}
                  <AnimatePresence>
                    {hoveredId === project.id &&
                      (project.demoLink || project.githubLink) && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 backdrop-blur-sm"
                        >
                          {project.demoLink && (
                            <motion.a
                              href={project.demoLink}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all"
                              title="View Demo"
                            >
                              <HiEye className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </motion.a>
                          )}
                          {project.githubLink && (
                            <motion.a
                              href={project.githubLink}
                              whileHover={{ scale: 1.1, rotate: -5 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all"
                              title="View Code"
                            >
                              <FaGithub className="w-6 h-6 text-gray-800 dark:text-slate-200" />
                            </motion.a>
                          )}
                        </motion.div>
                      )}
                  </AnimatePresence>

                  {/* Decorative corner */}
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-br ${project.color} opacity-30 rounded-bl-[100px]`}
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-black text-gray-800 dark:text-slate-200 group-hover:bg-linear-to-r group-hover:from-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold bg-linear-to-r ${project.color} text-white shadow-md`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links - Mobile visible */}
                  {(project.demoLink || project.githubLink) && (
                    <div className="flex gap-3 pt-4 md:hidden">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-linear-to-r from-pink-500 to-purple-500 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
                        >
                          <HiExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-800 dark:bg-slate-700 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
                        >
                          <FaGithub className="w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom linear accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 rounded-2xl font-bold text-white overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500" />
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ opacity: 0.5 }}
            />
            <span className="relative flex items-center gap-3 text-lg">
              <HiSparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              View All Projects
              <HiExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
