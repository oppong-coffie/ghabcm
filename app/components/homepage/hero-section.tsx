"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Hero Title */}
      <div className="px-6 py-16 md:pt-6 md:pb-0 relative z-20">
        <div className="mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-7xl lg:text-7xl font-extrabold text-blue-900 leading-[1.1] tracking-tight"
          >
            Accelerating local climate action, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">globally.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-xl md:text-2xl text-gray-600 max-w-2xl font-medium"
          >
            Empowering communities with verifiable blue carbon data to protect our planet's most vulnerable ecosystems.
          </motion.p>
        </div>
      </div>

      {/* Hero Image with Accent Bars */}
      <div className="relative w-full h-[400px] md:h-[600px] bg-[#050B14] overflow-hidden">

        {/* Decorative Top Gradient for smooth blend from white to space */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        {/* Blue accent bar (Replacing pink) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-0 bottom-32 md:bottom-40 w-48 md:w-72 h-8 md:h-12 bg-gradient-to-r from-blue-900 to-blue-600 z-20 shadow-[0_0_40px_rgba(30,58,138,0.6)] rounded-r-full"
        ></motion.div>

        {/* Main hero image - Slow Rotating Earth */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
            className="w-[150vw] h-[150vw] sm:w-[120vw] sm:h-[120vw] lg:w-[100vw] lg:h-[100vw] rounded-full overflow-hidden flex items-center justify-center"
          >
            <img
              src="/earth.webp"
              alt="Earth from space"
              className="w-full h-full object-cover opacity-90 scale-110"
            />
          </motion.div>
        </div>

        {/* Orange accent bar */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute right-0 bottom-16 md:bottom-20 w-40 md:w-64 h-8 md:h-12 bg-gradient-to-l from-orange-500 to-orange-400 z-20 shadow-[0_0_40px_rgba(249,115,22,0.6)] rounded-l-full"
        ></motion.div>
      </div>
    </section>
  );
}
