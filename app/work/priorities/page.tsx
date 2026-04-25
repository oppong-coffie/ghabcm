import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, ArrowRight, ArrowUpRight, Hexagon, Circle, FileText } from 'lucide-react';

const PrioritiesPage = () => {
  return (
    <div className="w-full bg-[#f8f9fa] text-black min-h-screen font-sans">
      {/* Banner */}
      <div className="w-full h-[350px] relative overflow-hidden bg-white">
        <Image 
          src="/priorities_hero.png" 
          alt="Satellite map" 
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
          <Link href="/work" className="hover:text-black transition-colors">Work</Link> / <span className="text-black">Our Priorities</span>
        </div>

        {/* Enabling accessible and actionable data */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-6">
            <Plus className="w-8 h-8 text-black shrink-0" strokeWidth={1.5} />
            <h1 className="text-[40px] font-bold tracking-tight max-w-xl leading-[1.1]">Enabling accessible and actionable data</h1>
          </div>
          
          <p className="text-[13px] leading-[1.6] max-w-[500px] mb-12 font-medium">
            We are filling data gaps on methane and carbon dioxide emissions by leveraging 
            remote sensing to deliver data that is precise, timely, and accessible.
          </p>

          <div className="border border-black flex flex-col bg-white">
            <div className="flex flex-col md:flex-row border-b border-black">
              <div className="w-full md:w-1/2 p-6 md:p-10 md:border-r border-black flex flex-col justify-between">
                <div>
                   <h3 className="text-[20px] font-bold mb-4">Data platform</h3>
                   <p className="text-[12px] leading-relaxed mb-4 font-medium text-gray-800">
                     Our public data platform offers multi-sensor emissions data from 
                     methane and CO<sub>2</sub> super-emitters across the globe. Facility operators, 
                     researchers, journalists, nonprofits and regulators are using our portal 
                     to mitigate emissions on the ground, gain insights into regional and 
                     sector-specific emissions, drive research, and inform policy.
                   </p>
                   <p className="text-[12px] leading-relaxed mb-10 font-medium text-gray-800">
                     The Carbon Mapper® data portal also offers a public API, making it 
                     easier for researchers and developers to integrate this data into their 
                     own systems and applications.
                   </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center justify-center gap-2 border border-black px-4 py-2.5 text-[12px] font-bold hover:bg-gray-50 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                    View emissions data
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-black px-4 py-2.5 text-[12px] font-bold hover:bg-gray-50 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    Learn more about our data
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-gray-100 relative min-h-[300px]">
                <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Data portal" fill className="object-cover p-4 md:p-8" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 bg-gray-100 relative min-h-[400px] border-b md:border-b-0 md:border-r border-black">
                <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" alt="Satellite cleanroom" fill className="object-cover p-4 md:p-8" />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
                <div>
                   <h3 className="text-[20px] font-bold mb-4">Remote sensing technology</h3>
                   <p className="text-[12px] leading-relaxed mb-4 font-medium text-gray-800">
                     We use satellites and aircraft to detect, pinpoint, and quantify methane 
                     and CO<sub>2</sub> point sources at the scale of individual facilities.
                   </p>
                   <p className="text-[12px] leading-relaxed mb-4 font-medium text-gray-800">
                     For several years, Carbon Mapper has been conducting airborne 
                     surveys using advanced remote sensing technology to lay the 
                     foundation for the scaling of an operational satellite data that can drive 
                     localized action, globally. These surveys have demonstrated that when 
                     decision makers have access to data, mitigation actions can be taken 
                     quickly and often cost-effectively.
                   </p>
                   <p className="text-[12px] leading-relaxed mb-10 font-medium text-gray-800">
                     To scale this work, Carbon Mapper analyzes observations from Planet's 
                     Tanager-1 satellite to identify large super-emitters that can be 
                     prioritized for fast, effective action. The Tanager satellite is designed to 
                     help fill gaps in current understanding of methane and CO<sub>2</sub> emissions. 
                     This is the first step toward a larger goal to build a full constellation 
                     capable of high-frequency, operational monitoring.
                   </p>
                </div>
                <div>
                  <button className="flex items-center gap-2 border border-black px-4 py-2.5 text-[12px] font-bold hover:bg-gray-50 transition-colors w-max">
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    Learn more about our science and tech
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leading on innovative science */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-4">
            <Plus className="w-8 h-8 text-black shrink-0" strokeWidth={1.5} />
            <h2 className="text-[40px] font-bold tracking-tight">Leading on innovative science</h2>
          </div>
          
          <p className="text-[13px] max-w-[500px] mb-8 font-medium leading-relaxed">
            As part of our goal to enable science-based action, we're transparent about our 
            processes and the science behind our data. We've conducted controlled tests, and 
            we publish peer-reviewed studies and present at academic and educational 
            conferences throughout the year.
          </p>
          
          <button className="flex items-center gap-2 border border-black bg-white px-4 py-2.5 text-[12px] font-bold hover:bg-gray-50 transition-colors w-max shadow-sm">
            <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
            Science & tech
          </button>
        </section>

        {/* Key areas of focus */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-6">
            <Plus className="w-8 h-8 text-black shrink-0" strokeWidth={1.5} />
            <h2 className="text-[40px] font-bold tracking-tight">Key areas of focus</h2>
          </div>

          <div className="border border-black flex flex-col md:flex-row bg-white">
            {[
              {
                title: "Advancing scientific research",
                desc: "We advance cutting-edge scientific research and understanding of methane emissions, which includes publishing our findings and leading a research program.",
                btn: "Research highlights",
                icon: <Hexagon className="w-16 h-16 text-gray-200 stroke-[1]" />
              },
              {
                title: "Delivering transparency",
                desc: "We strive to build trust in our data through transparent, repeatable, and validated methods for emissions detection and quantification. Read our published and peer-reviewed papers and discover more about our technology and scientific methods on our resource hub.",
                btn: "View our methodology",
                fileIcon: true,
                icon: <Hexagon className="w-16 h-16 text-gray-200 stroke-[1] fill-purple-600/10" />
              },
              {
                title: "Driving best practices in emissions science",
                desc: "We work with leading scientists, researchers, and industry experts to use direct observations to support alignment on global, regional, and local emissions standards and frameworks. This helps people better assess and use our data for mitigation.",
                btn: "View our partners",
                icon: <Circle className="w-16 h-16 text-gray-200 stroke-[1]" />
              }
            ].map((item, idx, arr) => (
              <div key={idx} className={`w-full md:w-1/3 p-8 flex flex-col ${idx !== arr.length - 1 ? 'border-b md:border-b-0 md:border-r border-black' : ''}`}>
                 <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
                    {item.icon}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
                       <span className="w-4 h-4 bg-orange-400 rounded-sm rotate-45"></span>
                    </div>
                 </div>
                 <h3 className="font-bold text-[18px] leading-[1.2] mb-4 pr-4">{item.title}</h3>
                 <p className="text-[12px] leading-relaxed mb-10 font-medium text-gray-800">{item.desc}</p>
                 <button className="mt-auto flex items-center gap-2 border border-black bg-white px-4 py-2.5 text-[12px] font-bold hover:bg-gray-50 transition-colors w-max shadow-sm">
                    {item.fileIcon ? <FileText className="w-3.5 h-3.5 text-gray-400" /> : <ArrowRight className="w-3.5 h-3.5 text-gray-400" />}
                    {item.btn}
                 </button>
              </div>
            ))}
          </div>
        </section>

        {/* Unlocking mitigation action */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-4">
            <Plus className="w-8 h-8 text-black shrink-0" strokeWidth={1.5} />
            <h2 className="text-[40px] font-bold tracking-tight">Unlocking mitigation action</h2>
          </div>
          
          <p className="text-[13px] max-w-[500px] mb-12 font-medium leading-relaxed">
            We collaborate with industry, governments, NGOs, communities, and other 
            stakeholders to develop and support emission reduction solutions that are based 
            on science.
          </p>

          <div className="border border-black flex flex-col bg-white">
            {/* Top row headers */}
            <div className="flex flex-col md:flex-row border-b border-black bg-[#d1e0f0]">
               <div className="w-full md:w-1/2 p-5 flex justify-between items-center border-b md:border-b-0 md:border-r border-black font-bold text-[18px]">
                  <span>Direct mitigation by operators</span>
                  <span className="text-gray-500 font-normal text-sm">01</span>
               </div>
               <div className="w-full md:w-1/2 p-5 flex justify-between items-center font-bold text-[18px]">
                  <span>Regulators and agencies</span>
                  <span className="text-gray-500 font-normal text-sm">02</span>
               </div>
            </div>
            {/* Top row content */}
            <div className="flex flex-col md:flex-row border-b border-black">
               <div className="w-full md:w-1/2 p-8 border-b md:border-b-0 md:border-r border-black">
                  <p className="text-[12px] font-medium leading-relaxed max-w-sm">
                    The data we provide is designed to support direct 
                    mitigation action by those on the ground — supporting 
                    operators in their efforts to quickly detect and repair 
                    methane leaks and verify those reductions.
                  </p>
                  <p className="text-[12px] font-medium leading-relaxed max-w-sm mt-4">
                    Access to this data can also help operators prioritize 
                    investments and inform best practices in their operations.
                  </p>
               </div>
               <div className="w-full md:w-1/2 p-8">
                  <p className="text-[12px] font-medium leading-relaxed max-w-sm">
                    Access to localized emissions data can help inform 
                    regulatory efforts to reduce methane emissions, identify 
                    opportunities for effective emission reduction policies, 
                    and verify mitigation success.
                  </p>
               </div>
            </div>

            {/* Bottom row headers */}
            <div className="flex flex-col md:flex-row border-b border-black bg-[#d1e0f0]">
               <div className="w-full md:w-1/2 p-5 flex justify-between items-center border-b md:border-b-0 md:border-r border-black font-bold text-[18px]">
                  <span>Communities</span>
                  <span className="text-gray-500 font-normal text-sm">03</span>
               </div>
               <div className="w-full md:w-1/2 p-5 flex justify-between items-center font-bold text-[18px]">
                  <span>Other nongovernmental organizations</span>
                  <span className="text-gray-500 font-normal text-sm">04</span>
               </div>
            </div>
            {/* Bottom row content */}
            <div className="flex flex-col md:flex-row">
               <div className="w-full md:w-1/2 p-8 border-b md:border-b-0 md:border-r border-black">
                  <p className="text-[12px] font-medium leading-relaxed max-w-sm">
                    Methane is sometimes co-emitted with harmful air 
                    pollutants that can affect community health and safety. 
                    Our publicly available data can help communities discover 
                    potentially harmful events and identify where mitigation 
                    action can address public health risks.
                  </p>
               </div>
               <div className="w-full md:w-1/2 p-8">
                  <p className="text-[12px] font-medium leading-relaxed max-w-sm">
                    Data alone isn't enough. We work with nonprofit 
                    organizations and other stakeholders to get emissions 
                    data into the hands of those who can use it to drive 
                    emissions reductions.
                  </p>
               </div>
            </div>
          </div>
        </section>

      </div>

      {/* Advancing action through education */}
      <section className="w-full bg-[#f8f9fa]">
         <div className="w-full h-[400px] relative overflow-hidden">
            <Image src="/smokestacks.png" alt="Industrial smokestacks" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 w-1/3 h-24 bg-gradient-to-tr from-purple-600/90 to-transparent mix-blend-multiply" />
            <div className="absolute bottom-0 right-0 w-1/4 h-8 bg-gradient-to-r from-transparent to-orange-400" />
            
            <div className="absolute bottom-0 left-0 w-[40%] h-[20px] bg-[#f8f9fa] hidden md:block" />
            <div className="absolute bottom-[20px] left-0 w-[20%] h-[15px] bg-[#f8f9fa] hidden md:block" />
            <div className="absolute bottom-0 right-0 w-[10%] h-[15px] bg-[#f8f9fa] hidden md:block" />
         </div>
         <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16">
            <div className="flex items-start gap-2 mb-4">
              <Plus className="w-8 h-8 text-black shrink-0 mt-2" strokeWidth={1.5} />
              <h2 className="text-[40px] font-bold tracking-tight max-w-xl leading-[1.1]">Advancing action through education and insights</h2>
            </div>
            <p className="text-[13px] max-w-[500px] mb-8 font-medium leading-relaxed pl-[40px]">
              One of our priorities is helping people understand current emissions challenges 
              and the role remote sensing can play in monitoring and reducing emissions. We 
              apply our expertise in interpreting and translating our findings, offering policy-
              relevant insights and tools, and provide educational resources and information to 
              improve emissions monitoring and support mitigation solutions.
            </p>
            
            <div className="pl-[40px]">
               <button className="flex items-center gap-2 border border-black bg-white px-4 py-2.5 text-[12px] font-bold hover:bg-gray-50 transition-colors w-max shadow-sm">
                 <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                 Education series
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default PrioritiesPage;