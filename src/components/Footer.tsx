import { motion } from "framer-motion";
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ArrowUp,
  Code,
  Sparkles
} from "lucide-react";
import { HiSparkles } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/khoob-chand", 
      label: "GitHub",
      color: "hover:text-gray-800 dark:hover:text-white"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/khoobchand-jhariya-819956202/", 
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
   
  ];

  const contactInfo = [
    { 
      icon: Mail, 
      text: "khoobchandjhariy48@gmail.com",
      href: "khoobchandjhariy48@gmail.com"
    },
    { 
      icon: Phone, 
      text: "+91 6264432600",
      href: "tel:+91 6264432600"
    },
    
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-800 overflow-hidden">
      
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-linear-to-br from-purple-300 to-pink-300 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-linear-to-br from-blue-300 to-cyan-300 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
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
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-linear-to-r from-pink-400 to-purple-400 rounded-full pointer-events-none"
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

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20 z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1 - About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <motion.h3 
                className="text-3xl font-black mb-3"
                whileHover={{ scale: 1.05 }}
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
              </motion.h3>
              <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                A passionate frontend developer creating beautiful and functional web experiences ✨
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all text-gray-600 dark:text-slate-400 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Code className="w-5 h-5 text-purple-500" />
              <h4 className="text-lg font-black text-gray-800 dark:text-slate-200">
                Quick Links
              </h4>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:w-3 transition-all"
                    />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <HiSparkles className="w-5 h-5 text-purple-500" />
              <h4 className="text-lg font-black text-gray-800 dark:text-slate-200">
                Get In Touch
              </h4>
            </div>
            <ul className="space-y-4">
              {contactInfo.map((contact, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="group flex items-start gap-3 text-sm text-gray-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <contact.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="break-all">{contact.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-sm text-gray-600 dark:text-slate-400">
                      <contact.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{contact.text}</span>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Newsletter / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <h4 className="text-lg font-black text-gray-800 dark:text-slate-200">
                Let's Connect!
              </h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-slate-400 mb-6 leading-relaxed">
              Have a project in mind? Let's work together to create something amazing! 🚀
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-white bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg hover:shadow-xl transition-all"
            >
              <Mail className="w-4 h-4" />
              Contact Me
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-linear-to-r from-transparent via-purple-400 dark:via-purple-600 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-600 dark:text-slate-400 text-center md:text-left"
          >
            © {currentYear} Made with{" "}
            <Heart className="inline w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />{" "}
            by{" "}
            <span className="font-bold bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Khoobchand Sharma
            </span>
          </motion.p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all text-gray-700 dark:text-slate-300 font-semibold text-sm"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
