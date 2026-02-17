"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin,  Send } from "lucide-react";
import { HiSparkles } from "react-icons/hi";

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "khoobchandjhariya48@gmail.com",
      color: "from-pink-400 to-rose-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 624432600",
      color: "from-purple-400 to-indigo-400",
    },
    
  ];

 const socialLinks = [
  { 
    icon: Github, 
    href: "https://https://github.com/khoob-chand",
    color: "from-gray-600 to-gray-800", 
    hoverColor: "hover:from-pink-500 hover:to-rose-500" 
  },
  { 
    icon: Linkedin, 
   href: "https://www.linkedin.com/in/khoobchand-jhariya-819956202/", 
    color: "from-blue-500 to-blue-700", 
    hoverColor: "hover:from-purple-500 hover:to-indigo-500" 
  },
  { 
    icon: Mail, 
    href: "mailto:khoobchandjhariya48@gmail.com",
    color: "from-red-400 to-pink-500", 
    hoverColor: "hover:from-purple-500 hover:to-indigo-500" 
  }
];


  return (
    <section className="relative w-full min-h-screen py-20 md:py-28 px-6 md:px-10 overflow-hidden bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-800" id="contact">
      
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-pink-300 to-rose-300 dark:from-pink-900/40 dark:to-rose-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
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
            x: [0, -70, 0],
            y: [0, 70, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-linear-to-br from-purple-300 to-pink-300 dark:from-purple-900/40 dark:to-pink-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
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

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center md:text-left leading-tight">
            <span className="text-gray-800 dark:text-slate-200">Contact{" "}</span>
            <span className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              With Me
            </span>
          </h2>
          <motion.div
            className="mt-4 w-32 h-1.5 rounded-full bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 mx-auto md:mx-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT - FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-10 shadow-2xl dark:shadow-purple-900/50">
             <p className="text-gray-700 dark:text-slate-300 mb-8 text-base md:text-lg leading-relaxed font-medium">
  Have a project in mind or looking for a developer to bring your ideas to life? 
  I'm open to freelance work, internships, and full-time opportunities. 
  Feel free to reach out — let's build something amazing together.
</p>


              <form className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="text-sm uppercase tracking-wider font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full mt-3 p-4 rounded-2xl bg-white dark:bg-slate-700 border-2 border-purple-200 dark:border-slate-600 focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/30 transition-all text-gray-800 dark:text-slate-200 placeholder:text-gray-400 dark:placeholder:text-slate-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="text-sm uppercase tracking-wider font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full mt-3 p-4 rounded-2xl bg-white dark:bg-slate-700 border-2 border-purple-200 dark:border-slate-600 focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/30 transition-all text-gray-800 dark:text-slate-200 placeholder:text-gray-400 dark:placeholder:text-slate-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="text-sm uppercase tracking-wider font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="How can I help you?"
                    className="w-full mt-3 p-4 rounded-2xl bg-white dark:bg-slate-700 border-2 border-purple-200 dark:border-slate-600 focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/30 transition-all resize-none text-gray-800 dark:text-slate-200 placeholder:text-gray-400 dark:placeholder:text-slate-500"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="group relative w-full md:w-fit px-10 py-4 rounded-2xl font-bold text-white overflow-hidden shadow-xl shadow-purple-300/50 dark:shadow-purple-900/50"
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
                  <span className="relative flex items-center justify-center gap-2 text-lg tracking-wider">
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    SEND MESSAGE
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-start space-y-6 order-1 lg:order-2"
          >
            
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.03, x: 5 }}
                className="group"
              >
                <div className="flex items-start md:items-center gap-5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/50 dark:border-slate-700/50 rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all">
                  <motion.div
                    className={`p-4 rounded-xl bg-linear-to-br ${item.color} shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon size={24} className="text-white" />
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent flex items-center gap-1">
                      <HiSparkles className="w-3 h-3 text-purple-400" />
                      {item.label}
                    </span>
                    <span className="text-base md:text-lg text-gray-800 dark:text-slate-200 font-semibold mt-1 break-all">
                      {item.value}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-8"
            >
              <p className="text-sm font-bold uppercase text-gray-600 dark:text-slate-400 mb-4 text-center md:text-left">
                Connect With Me 🤝
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((social, idx) => (
  <motion.a
    key={idx}
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
    whileTap={{ scale: 0.9 }}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.7 + idx * 0.1, type: "spring", stiffness: 200 }}
    className={`p-4 rounded-2xl bg-linear-to-br ${social.color} ${social.hoverColor} transition-all cursor-pointer shadow-lg hover:shadow-xl`}
  >
    <social.icon size={24} className="text-white" />
  </motion.a>
))}

              </div>
            </motion.div>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
}
