import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, ArrowRight, ArrowUpRight, FileText } from 'lucide-react';

const SectorsPage = () => {
  return (
    <div className="w-full bg-[#f8f9fa] text-black min-h-screen font-sans pb-24">
      {/* Banner */}
      <div className="w-full h-[350px] relative overflow-hidden bg-white">
        <Image 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop" 
          alt="Pump jacks at sunset" 
          fill 
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 w-2/3 md:w-1/3 h-24 bg-gradient-to-tr from-purple-600/90 to-transparent mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-1/4 h-8 bg-gradient-to-r from-transparent to-orange-400" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40px] bg-white hidden md:block" />
        <div className="absolute bottom-[40px] left-0 w-[30%] h-[20px] bg-white hidden md:block" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 bg-[#f8f9fa]">
        <div className="text-gray-500 text-[15px] mb-12 pt-4">
          <Link href="/work" className="hover:text-black transition-colors">Work</Link> / <span className="text-black">Sectors of Focus</span>
        </div>

        {/* Understanding the sources */}
        <section className="mb-24">
          <div className="flex items-start gap-2 mb-6">
            <Plus className="w-8 h-8 text-black shrink-0 mt-2" strokeWidth={1.5} />
            <h1 className="text-[32px] md:text-[40px] font-bold tracking-tight max-w-2xl leading-[1.1]">
              Understanding the sources: methane and carbon dioxide emissions
            </h1>
          </div>
          
          <div className="pl-[40px] max-w-[550px] space-y-6 mb-12">
             <p className="text-[12px] leading-relaxed font-medium">
               Methane and carbon dioxide are powerful players in climate change. These 
               greenhouse gases are released into the atmosphere from a variety of sources and 
               processes across global sectors. This includes natural sources — like wetlands, 
               termites, or wildfires — or anthropogenic (human-caused) sources — like 
               agriculture, oil and gas operations, or landfills and dumpsites.
             </p>
             <p className="text-[12px] leading-relaxed font-medium">
               Atmospheric growth rates for these greenhouse gases are strongly influenced by 
               human-caused super-emitters, according to The Global Carbon Project's Global 
               Methane Budget.
             </p>
             <p className="text-[12px] leading-relaxed font-medium">
               Knowing exactly where these emissions come from is important because 
               it influences how they can be identified, quantified, tracked, and 
               ultimately mitigated.
             </p>
          </div>

          <div className="border border-black flex flex-col md:flex-row bg-white">
            <div className="w-full md:w-1/2 p-6 md:p-10 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between">
              <div>
                 <h3 className="text-[20px] font-bold mb-4">Methane emissions: point and area sources</h3>
                 <p className="text-[12px] leading-relaxed mb-4 font-medium text-gray-800">
                   Both methane point and area sources contribute to regional emissions. 
                   However, point sources are often large methane emission events 
                   localized to discrete pieces of infrastructure or facilities. They are also 
                   known as super-emitters.
                 </p>
                 <p className="text-[12px] leading-relaxed mb-10 font-medium text-gray-800">
                   Meanwhile, area sources are also large, but they are spread over a wide 
                   area. Identifying which types of sources are contributing to regional 
                   emissions can help prioritize the most effective mitigation solutions.
                 </p>
              </div>
              <div>
                <button className="flex items-center justify-center gap-2 border border-black px-4 py-2.5 text-[12px] font-bold hover:bg-gray-50 transition-colors w-max shadow-sm">
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                  Learn more
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-white relative min-h-[300px] flex items-center justify-center p-8">
               {/* Diagram Placeholder */}
               <div className="w-full max-w-[400px] aspect-[4/3] relative border border-gray-200">
                 <Image src="https://images.unsplash.com/photo-1621644782299-fb75cbbf3db5?q=80&w=800&auto=format&fit=crop" alt="Emissions diagram" fill className="object-cover opacity-80" />
                 {/* Fake annotations overlay */}
                 <div className="absolute inset-0 border-2 border-dashed border-black m-4 pointer-events-none"></div>
                 <div className="absolute top-[20%] left-[25%] w-3 h-3 rounded-full bg-orange-400"></div>
                 <div className="absolute top-[50%] left-[45%] w-4 h-4 rounded-full bg-orange-400"></div>
                 <div className="absolute top-[60%] right-[20%] w-6 h-6 rounded-full bg-orange-400"></div>
                 <div className="absolute bottom-2 w-full text-center text-[8px] font-mono font-bold bg-white/80 py-1">Area source (1,500 kg CH4/hr)</div>
               </div>
            </div>
          </div>
        </section>

        {/* Key global sectors */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-6">
            <Plus className="w-8 h-8 text-black shrink-0" strokeWidth={1.5} />
            <h2 className="text-[40px] font-bold tracking-tight">Key global sectors</h2>
          </div>

          <div className="border border-black flex flex-col bg-white">
            {[
              {
                title: "Oil and Gas",
                desc: "The oil and gas sector is responsible for about 23% of global human-caused methane emissions (according to the 2021 Global Methane Assessment). These come from equipment malfunctions, leaks, flaring, venting, and process emissions. Our observations can spot large and potentially hazardous super-emitters, support rapid leak detection and repair, assess trends, and verify reductions for both methane and CO2 in those high emission sources.",
                img: "https://images.unsplash.com/photo-1518709766631-90aace3fef34?q=80&w=1000&auto=format&fit=crop" // Offshore rig
              },
              {
                title: "Coal",
                desc: "Coal venting contributes about 12% of human-caused methane emissions worldwide (according to the 2021 Global Methane Assessment). We survey both active and idle coal mining operations to identify and quantify large emitting sources in key coal-producing regions.",
                img: "https://images.unsplash.com/photo-1587313885333-85f920252b9b?q=80&w=1000&auto=format&fit=crop" // Coal conveyor
              },
              {
                title: "Electricity generation",
                desc: "The process of burning fuel to generate power releases greenhouse gasses, primarily CO2. About 25% of human-caused climate forcing gases originate through power generation in the United States (according to the EPA). Power generation can occur both at large power plants that provide residential power and also on a smaller scale at industrial facilities like refineries, mines, cement plants, and others. If methane is burned as a fuel, methane emissions are sometimes observed at these facilities.",
                img: "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?q=80&w=1000&auto=format&fit=crop" // Power lines
              },
              {
                title: "Waste",
                desc: "The waste sector accounts for nearly 20% of human-caused methane emissions globally (according to the 2021 Global Methane Assessment). Methane sources in the waste sector include landfills, managed and unmanaged waste sites, compost facilities, and wastewater treatment facilities. Our ability to detect and precisely locate high emissions within specific sections of waste management sites can guide best practices and help prioritize mitigation actions.",
                img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop" // Landfill
              },
              {
                title: "Agriculture",
                desc: "The agriculture sector is one of the largest methane-emitting sectors with activities like livestock and manure management resulting in 32% of human-caused methane emissions (according to the 2021 Global Methane Assessment).\n\nHowever, detecting and pinpointing those emissions is still a challenge. Raising and managing livestock at large facilities is a major contributor of methane. Our surveys have identified agricultural methane point sources at large livestock operations, including from emissions associated with manure management and biogas capture technologies, such as digesters.\n\nAgricultural emissions is an area we plan to explore as we grow our team and capabilities. Check back for more information and updates on our efforts within this important sector.",
                img: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1000&auto=format&fit=crop" // Cattle
              }
            ].map((sector, idx, arr) => (
              <div key={idx} className={`flex flex-col md:flex-row ${idx !== arr.length - 1 ? 'border-b border-black' : ''}`}>
                 {/* Left Image Column */}
                 <div className="w-full md:w-1/2 relative min-h-[300px] border-b md:border-b-0 md:border-r border-black p-4 md:p-6 bg-white">
                    <div className="w-full h-full relative">
                      <Image src={sector.img} alt={sector.title} fill className="object-cover" />
                    </div>
                 </div>
                 {/* Right Content Column */}
                 <div className="w-full md:w-1/2 flex flex-col">
                    <div className="p-6 md:p-8 flex-grow border-b border-black">
                       <h3 className="text-[20px] font-bold mb-4">{sector.title}</h3>
                       <div className="text-[11px] leading-relaxed mb-8 font-medium text-gray-800 whitespace-pre-wrap">
                         {sector.desc}
                       </div>
                       <div className="flex flex-col sm:flex-row gap-3">
                         <button className="flex items-center justify-center gap-2 bg-[#8a2be2] hover:bg-[#7a22cc] transition-colors text-white px-4 py-2 text-[11px] font-bold shadow-sm w-max">
                           <ArrowUpRight className="w-3.5 h-3.5 text-white/70" strokeWidth={2.5} />
                           View {sector.title.toLowerCase()} sector data
                         </button>
                         <button className="flex items-center justify-center gap-2 border border-black px-4 py-2 text-[11px] font-bold hover:bg-gray-50 transition-colors w-max shadow-sm">
                           <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                           Work with us
                         </button>
                       </div>
                    </div>
                    <div className="p-6 md:p-8 bg-gray-50/50">
                       <div className="text-[12px] font-bold mb-4">{sector.title} related resources</div>
                       <button className="flex items-center justify-center gap-2 border border-black bg-white px-4 py-2 text-[11px] font-bold hover:bg-gray-50 transition-colors w-max shadow-sm">
                         <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                         View related resources
                       </button>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-[32px] md:text-[40px] tracking-tight text-black flex-shrink-0">Subscribe to our newsletter</h2>
            <div className="h-[1px] bg-gray-200 flex-grow relative">
               <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30px] h-[30px] flex items-center justify-center">
                 <Plus className="w-6 h-6 text-gray-300 stroke-1" />
               </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
            {/* Fast Company Box */}
            <div className="w-full md:w-auto shrink-0 flex justify-center md:justify-start">
              <div className="bg-[#ff0066] p-8 w-[240px] flex flex-col items-center justify-center">
                <div className="text-white font-serif text-[24px] tracking-widest mb-6 font-bold">FAST <span className="font-light">COMPANY</span></div>
                {/* 3x3 dot grid mimicking logo */}
                <div className="grid grid-cols-3 gap-1.5 mb-6">
                   {[...Array(9)].map((_, i) => (
                     <div key={i} className="w-3 h-3 bg-white rounded-full"></div>
                   ))}
                </div>
                <div className="text-white text-center text-[12px] font-bold tracking-widest leading-tight uppercase">
                  World<br/>Changing<br/>Ideas<br/>2025
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="w-full max-w-2xl">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-8">
                  <div className="border-b border-black">
                     <input type="text" placeholder="First Name*" className="w-full bg-transparent pb-2 outline-none text-[13px] placeholder:text-gray-500" />
                  </div>
                  <div className="border-b border-black">
                     <input type="text" placeholder="Last Name*" className="w-full bg-transparent pb-2 outline-none text-[13px] placeholder:text-gray-500" />
                  </div>
                  <div className="border-b border-black">
                     <input type="text" placeholder="Company" className="w-full bg-transparent pb-2 outline-none text-[13px] placeholder:text-gray-500" />
                  </div>
                  <div className="border-b border-black">
                     <input type="email" placeholder="Email Address*" className="w-full bg-transparent pb-2 outline-none text-[13px] placeholder:text-gray-500" />
                  </div>
               </div>
               
               <div className="space-y-3 mb-8">
                  <label className="flex items-start gap-3 cursor-pointer group">
                     <div className="w-4 h-4 border border-black mt-0.5 flex-shrink-0 group-hover:bg-gray-100 transition-colors"></div>
                     <span className="text-[12px]">Acknowledge and agree to our <a href="#" className="underline">privacy policy</a>*</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                     <div className="w-4 h-4 border border-black mt-0.5 flex-shrink-0 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                        <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                     </div>
                     <span className="text-[12px]">Opt into email communications, including the newsletter</span>
                  </label>
               </div>

               <button className="w-full border border-black py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors font-bold text-[13px]">
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  Subscribe
               </button>
               <div className="text-[10px] text-gray-500 mt-2">*Required fields</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default SectorsPage;