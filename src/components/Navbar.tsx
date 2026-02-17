import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const navItems: string[] = ["Home", "About", "Experience", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Glassmorphism navbar */}
      <div className="relative">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20 blur-xl" />
        
        <div className="relative backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-white/20 dark:border-slate-700/20 shadow-lg transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

            {/* LOGO with gradient */}
            
            <a href="#home">
            <motion.h1
              className="text-2xl font-black tracking-tight"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Khoobchand
              </span>
              <motion.span
                className="text-pink-500"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                .
              </motion.span>
            </motion.h1>
            </a>

            {/* DESKTOP LINKS + THEME TOGGLE */}
            <ul className="hidden md:flex gap-8 items-center">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative cursor-pointer text-gray-700 dark:text-slate-300 font-semibold hover:text-transparent hover:bg-linear-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text transition-all duration-300"
                  >
                    {item}
                    
                    {/* Animated underline */}
                    <motion.span
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-linear-to-r from-pink-500 to-purple-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Hover glow effect */}
                    <motion.span
                      className="absolute inset-0 bg-linear-to-r from-pink-500/10 to-purple-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ transform: "scale(1.5)" }}
                    />
                  </a>
                </motion.li>
              ))}
              
              
              {/* Contact button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-2.5 rounded-full font-bold text-white overflow-hidden shadow-lg shadow-purple-300/50 dark:shadow-purple-900/50"
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
                <span className="relative">Let's Talk</span>
              </motion.button>
               {/* Theme Toggle Button - Desktop */}
              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <ThemeToggle />
              </motion.li>
            </ul>

            {/* MOBILE - THEME TOGGLE + MENU BUTTON */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              
              <motion.button
                className="relative p-2 rounded-xl bg-linear-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20"
                onClick={() => setOpen(!open)}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {open ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} className="text-purple-600 dark:text-purple-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} className="text-purple-600 dark:text-purple-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-white/20 dark:border-slate-700/20 shadow-xl overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setOpen(false)}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-3 rounded-xl font-semibold text-gray-700 dark:text-slate-300 hover:bg-linear-to-r hover:from-pink-100 hover:to-purple-100 dark:hover:from-pink-900/20 dark:hover:to-purple-900/20 hover:text-transparent hover:bg-clip-text transition-all duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
              
              {/* Mobile contact button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full px-6 py-3 rounded-xl font-bold text-white bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-purple-300/50 dark:shadow-purple-900/50"
                onClick={() => setOpen(false)}
              >
                Let's Talk
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating particles on navbar */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-linear-to-r from-pink-400 to-purple-400 rounded-full pointer-events-none"
          style={{
            top: "50%",
            left: `${20 + i * 15}%`,
          }}
          animate={{
            y: [-10, -20, -10],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </motion.nav>
  );
};

export default Navbar;
