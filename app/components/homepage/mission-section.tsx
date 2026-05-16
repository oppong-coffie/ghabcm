"use client"

import { motion } from "framer-motion";

export function MissionSection() {
  return (
    <section className="bg-white px-6 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Mission Title */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex items-start gap-1"
        >
          <span className="text-4xl md:text-5xl font-bold text-orange-500 mt-0">+</span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Our mission</h2>
        </motion.div>

        {/* Mission Description */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed"
        >
          Our mission is to drive greenhouse gas emission reductions and protect vulnerable marine ecosystems by making blue carbon data accessible, actionable, and verifiable. GhaBCM bridges the gap between local coastal preservation and global climate finance through innovative spatial technology.
        </motion.p>
      </div>
    </section>
  )
}
