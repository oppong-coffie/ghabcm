"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Database, Globe, Users, Zap } from 'lucide-react'

const MissionWord = ({ children }: { children: string }) => {
  return (
    <motion.span
      whileHover={{ 
        color: '#f97316', 
        scale: 1.1, 
        rotate: 2,
        textShadow: "0px 4px 10px rgba(249, 115, 22, 0.3)",
        transition: { duration: 0.2 } 
      }}
      className="inline-block cursor-pointer transition-colors duration-200"
    >
      {children}&nbsp;
    </motion.span>
  )
}

const AboutPage = () => {
  const missionText = "Our mission is to drive greenhouse gas emission reductions and protect vulnerable marine ecosystems by making blue carbon data accessible, actionable, and verifiable. GhaBCM bridges the gap between local coastal preservation and global climate finance through innovative spatial technology."
  const words = missionText.split(' ')

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/mangroves_ghana.png"
          alt="Mangroves Ghana"
          fill
          className="object-cover scale-110 hover:scale-100 transition-transform duration-[10s] ease-out"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white" />
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-1.5 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 text-orange-400 rounded-full text-sm font-bold uppercase tracking-widest">
              Est. 2024
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
          >
            Pioneering <span className="text-orange-500">Blue</span> <br />
            Carbon Systems
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Empowering coastal communities through spatial intelligence and sustainable climate finance solutions.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl -mr-48 -mt-48 opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -ml-48 -mb-48 opacity-50" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 inline-flex items-center gap-3 px-6 py-2.5 bg-slate-900 text-white rounded-full font-bold text-sm uppercase tracking-widest shadow-xl"
          >
            <Zap size={18} className="text-orange-500" />
            The Mission
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-12">
            {words.map((word, i) => (
              <MissionWord key={i}>{word}</MissionWord>
            ))}
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-900 mx-auto rounded-full"
          />
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">Our Core Philosophy</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We believe that environmental preservation is only sustainable when it creates economic value for those who protect it.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Scientific Integrity",
                desc: "Every data point is grounded in rigorous spatial technology and field verification to ensure global standards of accuracy.",
                icon: Shield,
                color: "from-blue-500 to-blue-700"
              },
              {
                title: "Community First",
                desc: "Local coastal communities are the primary beneficiaries and active participants in our climate finance initiatives.",
                icon: Users,
                color: "from-green-500 to-green-700"
              },
              {
                title: "Radical Transparency",
                desc: "Our data is accessible and verifiable for global stakeholders, building the trust needed for large-scale investment.",
                icon: Globe,
                color: "from-purple-500 to-purple-700"
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative p-10 rounded-3xl bg-white border border-slate-200 hover:border-orange-200 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-8 text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 px-6 md:px-12 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 bg-orange-500 text-white rounded-lg text-xs font-bold uppercase tracking-widest mb-6">
                Technology
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-tight">Innovative Spatial <br /><span className="text-orange-500">Intelligence</span></h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-10">
                GhaBCM utilizes state-of-the-art remote sensing and GIS architecture to monitor coastal biomass. By transforming complex satellite data into verifiable carbon credits, we unlock the financial potential of natural ecosystems.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Real-time Monitoring", desc: "Live tracking of mangrove health and density." },
                  { title: "AI Carbon Modeling", desc: "Predictive algorithms for sequestration forecasting." },
                  { title: "Immutable Ledger", desc: "Data verification powered by secure digital protocols." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:h-[600px] rounded-[40px] overflow-hidden shadow-2xl shadow-orange-500/10"
            >
              <Image
                src="/spatial_mapping.png"
                alt="Spatial Mapping Tech"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                    <Database size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-orange-500 uppercase tracking-tighter">Live Data Stream</div>
                    <div className="text-xl font-bold">Volta Region Delta</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative aspect-square lg:h-[600px] rounded-[40px] overflow-hidden shadow-2xl"
            >
              <Image
                src="/coastal_community.png"
                alt="Coastal Community"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-lg text-xs font-bold uppercase tracking-widest mb-6">
                Impact
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-10 leading-tight">Preserving Nature, <br />Empowering <span className="text-orange-500">People</span></h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Our model ensures that 70% of climate finance proceeds go directly back into local community development and ecosystem maintenance. We're not just mapping forests; we're building sustainable futures for coastal inhabitants.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-3xl font-black text-slate-900 mb-1 underline decoration-orange-500 decoration-4 underline-offset-4">120+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase">Communities</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-3xl font-black text-slate-900 mb-1 underline decoration-blue-600 decoration-4 underline-offset-4">50k</div>
                  <div className="text-sm font-bold text-slate-500 uppercase">Hectares</div>
                </div>
              </div>
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-slate-300 group">
                Download Impact Report <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Meet the Visionaries</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A diverse team of environmental scientists, spatial engineers, and climate finance experts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Kofi Mensah", role: "Chief Scientific Officer", desc: "Expert in Mangrove Ecology" },
              { name: "Ama Serwaa", role: "Head of Spatial Tech", desc: "GIS & Remote Sensing Specialist" },
              { name: "Robert Osei", role: "Climate Finance Lead", desc: "Investment Strategist" },
              { name: "Elaine Addo", role: "Community Director", desc: "Coastal Engagement Expert" }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-2 rounded-[32px] border border-slate-200 overflow-hidden"
              >
                <div className="aspect-[4/5] bg-slate-100 rounded-[28px] mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="px-6 pb-6">
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-orange-500 transition-colors">{member.name}</h4>
                  <p className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-3">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900 to-blue-800 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to make an impact?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Join us in our mission to protect coastal ecosystems and drive global climate finance to where it's needed most.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-orange-500 text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/20 active:scale-95">
                Partner with Us
              </button>
              <button className="px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all active:scale-95">
                Explore Data Portal
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
