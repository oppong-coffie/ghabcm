"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Database, 
  Satellite, 
  Microscope, 
  Users, 
  Cpu, 
  BarChart3, 
  ShieldCheck, 
  Globe2, 
  Code2, 
  ChevronRight,
  Zap,
  Target,
  FileSearch,
  ArrowRight,
  Link
} from 'lucide-react';

const DataPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <Image 
          src="/data_hero.png" 
          alt="GhaBCM Data Science" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-orange-500" />
              <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Data, Science, and Innovation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Evidence-Based <br />
              <span className="text-orange-500 underline decoration-white/20 underline-offset-8">Blue Carbon</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed font-medium">
              GhaBCM operates as a Data-as-a-Service (DaaS) platform that maps and monitors Ghana’s coastal mangrove ecosystems with 90%+ accuracy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                GhaBCM Data Platform: <br />
                <span className="text-orange-500">Science & Methodology</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                GhaBCM bridges the gap between local coastal preservation and global climate finance through transparent, science-backed data. By combining satellite technology, field-based science, and indigenous knowledge, we provide high-integrity, audit-proof data on blue carbon stocks.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm text-sm font-bold text-slate-700">
                  <Target size={16} className="text-orange-500" /> 90%+ Accuracy
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm text-sm font-bold text-slate-700">
                  <ShieldCheck size={16} className="text-blue-500" /> Audit-Proof
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm text-sm font-bold text-slate-700">
                  <Zap size={16} className="text-green-500" /> Real-time Monitoring
                </div>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
               <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden relative group">
                  <Image src="/spatial_mapping.png" alt="Mapping" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-orange-500/10" />
               </div>
               <div className="aspect-square bg-slate-200 rounded-3xl mt-8 overflow-hidden relative group">
                  <Image src="/mangroves_ghana.png" alt="Mangroves" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-blue-900/10" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generation Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">How We Generate Our Data</h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">Our data pipeline integrates high-resolution remote sensing with on-ground empirical measurements.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Satellite Imagery & Remote Sensing",
                icon: Satellite,
                content: "We utilize Sentinel-2 MSI data with <10% cloud cover. Images undergo atmospheric correction to calculate NDVI and track vegetation health over time.",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                title: "Field Surveys & Empirical Assessment",
                icon: Microscope,
                content: "Ground-truthing includes samples of tree height, diameter, leaf litter, and below-ground soil carbon up to 1 meter depth.",
                color: "text-orange-600",
                bg: "bg-orange-50"
              },
              {
                title: "Community-Led Citizen Science",
                icon: Users,
                content: "On-ground measurements are conducted in collaboration with indigenous coastal communities, ensuring site-specific accuracy and local empowerment.",
                color: "text-green-600",
                bg: "bg-green-50"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[40px] border border-slate-100 bg-white hover:shadow-2xl transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <card.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{card.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Analytical Methodology</h2>
            <p className="text-xl text-slate-400">Translating raw environmental variables into high-integrity climate assets.</p>
          </div>

          <div className="space-y-32">
            {[
              {
                title: "Machine Learning & Classification",
                desc: "Using Random Forest Classifiers in QGIS and R, we separate mangroves from other land cover with 90%+ accuracy.",
                icon: Cpu,
                list: ["Sentinel-2 data input", "Random Forest training", "90%+ land cover precision"]
              },
              {
                title: "Carbon Stock Calculation",
                desc: "We convert biomass data into metric tons of Co2/ha using standardized, region-specific allometric equations.",
                icon: BarChart3,
                list: ["Above-ground biomass formulas", "Root/Soil carbon coring", "Laboratory LOI methods"]
              },
              {
                title: "InVEST Model Integration",
                desc: "We track how land use changes lead to carbon accumulation or emission, allowing investors to monitor net gains.",
                icon: Database,
                list: ["Deforestation vs Conservation tracking", "Long-term carbon forecasting", "Audit-proof investment data"]
              }
            ].map((step, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-8">
                    <step.icon size={28} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">{step.title}</h3>
                  <p className="text-xl text-slate-400 mb-10 leading-relaxed">{step.desc}</p>
                  <ul className="space-y-4">
                    {step.list.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                        <span className="text-lg text-slate-300 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <div className="flex-1 w-full aspect-video bg-white/5 rounded-[40px] border border-white/10 flex items-center justify-center relative group overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <Code2 size={120} className="text-white/20 group-hover:text-white/40 transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrity & Usage Sections */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 mb-32">
            <div className="p-12 rounded-[40px] bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <ShieldCheck className="text-orange-500" size={32} />
                <h2 className="text-3xl font-bold text-slate-900">Data Integrity & Quality</h2>
              </div>
              <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
                <div className="flex gap-4">
                  <div className="font-bold text-slate-900">01.</div>
                  <p><span className="font-bold text-slate-900">Accuracy Assessment:</span> Models are validated using out-of-bag (OOB) error estimates, ensuring high precision without relying on biased sets.</p>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-slate-900">02.</div>
                  <p><span className="font-bold text-slate-900">Audit-Proof:</span> All datasets are cross-referenced with both NDVI thresholds and ground-truth GPS plots for total transparency.</p>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-slate-900">03.</div>
                  <p><span className="font-bold text-slate-900">Uncertainty Management:</span> Dynamic spatial inputs reduce model simplifications, providing reliable investment-grade data.</p>
                </div>
              </div>
            </div>
            
            <div className="p-12 rounded-[40px] bg-blue-900 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              <div className="flex items-center gap-4 mb-8">
                <Globe2 className="text-orange-500" size={32} />
                <h2 className="text-3xl font-bold">Public & Non-Commercial</h2>
              </div>
              <p className="text-xl text-blue-100 leading-relaxed mb-10">
                Our foundational data is available to support the public good. It can be accessed for non-commercial research, environmental advocacy, and community-led initiatives by nonprofits and academic researchers.
              </p>
              <button className="flex items-center gap-2 text-white font-bold text-lg hover:gap-4 transition-all">
                Request Academic Access <ChevronRight className="text-orange-500" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
             <motion.div
               whileHover={{ y: -10 }}
               className="p-12 rounded-[40px] border border-slate-200 bg-white shadow-sm"
             >
                <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-lg text-xs font-bold uppercase tracking-widest mb-6">Commercial Model</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Data-as-a-Service (DaaS)</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  For climate finance transactions, carbon trading, and institutional investments. financial institutions and project developers can purchase validated metrics to verify the integrity of their investments.
                </p>
                <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold flex items-center gap-3 hover:bg-slate-800 transition-colors shadow-lg">
                  Institutional Login <ArrowRight size={18} />
                </button>
             </motion.div>

             <motion.div
               whileHover={{ y: -10 }}
               className="p-12 rounded-[40px] border border-slate-200 bg-slate-50 shadow-sm"
             >
                <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-lg text-xs font-bold uppercase tracking-widest mb-6">Integration</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Data for Developers</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We make it simple to build on top of our data infrastructure. Integrate our blue carbon metrics and monitoring insights into external climate-tech applications or risk management tools.
                </p>
                <button className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-full font-bold flex items-center gap-3 hover:bg-slate-900 hover:text-white transition-all">
                  API Documentation <Code2 size={18} />
                </button>
             </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
           <div className="w-20 h-20 bg-orange-500 rounded-3xl mx-auto flex items-center justify-center mb-10 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <FileSearch size={40} className="text-white" />
           </div>
           <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">Audit-Proof Data. <br /><span className="text-orange-500">Proven Results.</span></h2>
           <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
             Get the transparent, science-backed data you need to invest confidently in the blue economy.
           </p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-orange-500 text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/20 active:scale-95">
                Explore Portal
              </button>
              <button className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
                Download Methodology
              </button>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-8">
              <Link href="#" className="text-sm hover:text-orange-500 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-sm hover:text-orange-500 transition-colors">Terms of Service</Link>
              <Link href="#" className="text-sm hover:text-orange-500 transition-colors">Methodology Documentation</Link>
            </div>
            <div className="text-sm text-slate-500 font-medium">
              © 2025 GhaBCM. Empowering Science for Coastal Ecosystems.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default DataPage;
