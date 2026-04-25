import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, ArrowRight, ArrowUpRight } from 'lucide-react';

const ImpactPage = () => {
  return (
    <div className="w-full bg-[#f8f9fa] text-black min-h-screen font-sans pb-24">
      {/* Banner */}
      <div className="w-full h-[350px] relative overflow-hidden bg-white">
        <Image 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" 
          alt="Map with markers" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 w-2/3 md:w-1/3 h-24 bg-gradient-to-tr from-purple-600/90 to-transparent mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-1/4 h-8 bg-gradient-to-r from-transparent to-orange-400" />
        <div className="absolute bottom-0 left-0 w-[60%] h-[40px] bg-white hidden md:block" />
        <div className="absolute bottom-[40px] left-0 w-[45%] h-[20px] bg-white hidden md:block" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 bg-[#f8f9fa]">
        <div className="text-gray-500 text-[15px] mb-12 pt-4">
          <Link href="/work" className="hover:text-black transition-colors">Work</Link> / <span className="text-black">Impact</span>
        </div>

        {/* Making emissions visible and actionable */}
        <section className="mb-20">
          <div className="flex items-start gap-2 mb-6">
            <Plus className="w-8 h-8 text-black shrink-0 mt-2" strokeWidth={1.5} />
            <h1 className="text-[32px] md:text-[40px] font-bold tracking-tight max-w-2xl leading-[1.1]">
              Making emissions visible and actionable
            </h1>
          </div>
          
          <p className="text-[12px] leading-relaxed max-w-[500px] pl-[40px] font-medium">
            Our commitment to addressing climate change is visible in the outcomes we drive 
            in each of our priority areas: data, science, mitigation, and education and insights. 
            We are grateful for the sustained support of our philanthropic donors who make 
            these impacts possible.
          </p>
        </section>

        {/* Data to action */}
        <section className="mb-24">
          <div className="flex items-start gap-2 mb-6">
            <Plus className="w-8 h-8 text-black shrink-0 mt-2" strokeWidth={1.5} />
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight">
              Data to action
            </h2>
          </div>
          
          <p className="text-[12px] leading-relaxed max-w-[500px] pl-[40px] font-medium mb-10">
            Using remote sensing technologies, we detect, pinpoint, and quantify large 
            emissions and super-emitters for quick action.
          </p>

          <div className="border border-black flex flex-col bg-white">
             {/* Header */}
             <div className="bg-[#6b9de8] text-white p-5 border-b border-black font-bold text-[24px]">
               Moving from data to impact
             </div>
             
             {/* 2-Column Content */}
             <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-[#6b9de8] p-6 md:p-8 flex justify-between md:border-r border-black min-h-[400px]">
                   <span className="text-white font-bold text-[18px]">Delivering actionable emissions data</span>
                   <span className="text-white/70 font-normal text-sm">01</span>
                </div>
                <div className="w-full md:w-1/2 bg-[#d1e0f0] p-6 md:p-10 flex items-center justify-center">
                   <div className="w-full aspect-[4/3] relative">
                     <Image src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000&auto=format&fit=crop" alt="Earth from space" fill className="object-cover shadow-lg" />
                     {/* Red overlay to match reference */}
                     <div className="absolute bottom-0 right-0 w-[80%] h-[50%] bg-red-600/30 mix-blend-multiply" />
                     <div className="absolute top-[40%] left-[10%] text-white text-[10px] font-bold tracking-widest">Mexico</div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Mitigation stories */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div className="flex items-start gap-2">
              <Plus className="w-8 h-8 text-black shrink-0 mt-2" strokeWidth={1.5} />
              <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight">
                Mitigation stories
              </h2>
            </div>
            <button className="flex items-center gap-2 border border-black bg-white px-4 py-2 text-[12px] font-bold hover:bg-gray-50 transition-colors w-max shadow-sm md:mb-2 ml-10 md:ml-0">
              <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              View other mitigation stories
            </button>
          </div>

          <div className="border border-black flex flex-col bg-white">
            
            {/* Section 1 */}
            <div className="bg-[#f0f2f5] p-4 font-bold text-[18px] border-b border-black">
               Providing direct mitigation guidance
            </div>
            
            <div className="flex flex-col md:flex-row border-b border-black">
               <div className="w-full md:w-1/2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-black">
                  <h3 className="font-bold text-[18px] mb-4">Mitigation example: a leaking pipeline in Colorado</h3>
                  <p className="text-[11px] leading-relaxed mb-6 font-medium text-gray-800">
                    In Keenesburg, Colorado, we made several observations of emissions 
                    coming from a leaking pipeline. The facility operator was notified 
                    about the leak and took action to fix it. We were able to verify the 
                    mitigation in subsequent flights.
                  </p>
                  <p className="text-[11px] leading-relaxed font-medium text-gray-800">
                    This is the power of making methane and CO<sub>2</sub> emissions data 
                    accessible and actionable on our data portal.
                  </p>
               </div>
               <div className="w-full md:w-1/2 p-4 md:p-6 bg-white flex items-center justify-center">
                  <div className="w-full relative aspect-video border border-gray-200">
                     <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Data portal UI" fill className="object-cover" />
                     <div className="absolute bottom-4 left-4 bg-gray-900/80 p-3 max-w-[200px]">
                        <p className="text-white text-[10px] font-medium">Methane emissions were seen coming from a leaking pipeline</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Section 2 */}
            <div className="bg-[#f0f2f5] p-4 font-bold text-[18px] border-b border-black">
               Supporting statewide mitigation programs
            </div>
            
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b border-black">
               <div className="w-full md:w-1/2 p-4 md:p-6 bg-white border-b md:border-b-0 md:border-r border-black flex items-center justify-center">
                  <div className="w-full relative aspect-[4/3] border border-gray-200">
                     <Image src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop" alt="Landfill map" fill className="object-cover" />
                  </div>
               </div>
               <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                     <h3 className="font-bold text-[18px] mb-4">California and Pennsylvania methane surveys</h3>
                     <p className="text-[11px] leading-relaxed mb-8 font-medium text-gray-800">
                       We partnered with the California Air Resources Board and the State of 
                       Pennsylvania on separate aerial surveys to detect and quantify strong 
                       point sources and super emitters across these states. In many cases, 
                       we were able to help notify facility operators about emissions, so they 
                       could find and repair leaks. This successful program helped to 
                       underpin continued leadership in methane management in both states.
                     </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                     <button className="flex items-center gap-2 border border-black bg-white px-4 py-2 text-[12px] font-bold hover:bg-gray-50 transition-colors w-max shadow-sm">
                       <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                       CA survey
                     </button>
                     <button className="flex items-center gap-2 border border-black bg-white px-4 py-2 text-[12px] font-bold hover:bg-gray-50 transition-colors w-max shadow-sm">
                       <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                       PA survey
                     </button>
                  </div>
               </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row">
               <div className="w-full md:w-1/2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-black">
                  <h3 className="font-bold text-[18px] mb-4">Mitigation example: Methane emissions from buried infrastructure in California's San Joaquin Valley</h3>
                  <p className="text-[11px] leading-relaxed mb-6 font-medium text-gray-800">
                    Carbon Mapper researchers completed multiple observations in the 
                    Buena Vista Oil Field in the San Joaquin Valley of California. For nearly a 
                    month we saw a persistent leak of methane emissions (occurring from 
                    July 8, 2020, through Aug. 6, 2020).
                  </p>
                  <p className="text-[11px] leading-relaxed font-medium text-gray-800">
                    We helped notify the operator and learned that the leak was coming 
                    from a small fuel line. The operator fixed the leak, and we were able to 
                    confirm mitigation! During multiple subsequent aerial surveys, we 
                    observed no further leaks in the fuel line.
                  </p>
               </div>
               <div className="w-full md:w-1/2 p-4 md:p-6 bg-white flex items-center justify-center">
                  <div className="w-full relative aspect-video border border-gray-200">
                     <Image src="https://images.unsplash.com/photo-1621644782299-fb75cbbf3db5?q=80&w=1000&auto=format&fit=crop" alt="Plume map UI" fill className="object-cover" />
                  </div>
               </div>
            </div>
            
          </div>
        </section>

        {/* Data dispatches */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div className="flex items-start gap-2">
              <Plus className="w-8 h-8 text-black shrink-0 mt-2" strokeWidth={1.5} />
              <div>
                 <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight mb-2">
                   Data dispatches
                 </h2>
                 <p className="text-[12px] leading-relaxed max-w-[500px] font-medium">
                   Our data dispatch series covers unique or noteworthy plumes we see around the 
                   world. We help people understand the "why" behind these emissions and bridge 
                   the gap between observed emissions and potential opportunities to take action.
                 </p>
              </div>
            </div>
            <button className="flex items-center gap-2 border border-black bg-white px-4 py-2 text-[12px] font-bold hover:bg-gray-50 transition-colors w-max shadow-sm md:mb-8 ml-10 md:ml-0">
              <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              View data dispatches
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ImpactPage;