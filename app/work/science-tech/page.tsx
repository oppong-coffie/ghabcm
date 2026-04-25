import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, ArrowRight, ArrowUpRight, Globe, Grid, Target, Hexagon, FileText } from 'lucide-react';

const ScienceTechPage = () => {
  return (
    <div className="w-full bg-[#f8f9fa] text-black min-h-screen font-sans pb-24">
      {/* Banner */}
      <div className="w-full h-[350px] relative overflow-hidden bg-white">
        <Image 
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000&auto=format&fit=crop" 
          alt="Earth from space" 
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
          <Link href="/work" className="hover:text-black transition-colors">Work</Link> / <span className="text-black">Science & Technology</span>
        </div>

        {/* Advancing technology */}
        <section className="mb-24">
          <div className="flex items-start gap-2 mb-8">
            <Plus className="w-8 h-8 text-black shrink-0 mt-2" strokeWidth={1.5} />
            <h1 className="text-[32px] md:text-[40px] font-bold tracking-tight max-w-2xl leading-[1.1]">
              Advancing technology to support science-based action
            </h1>
          </div>

          <div className="border border-black flex flex-col bg-white">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b border-black">
              <div className="w-full md:w-1/2 bg-gray-100 relative min-h-[300px] border-b md:border-b-0 md:border-r border-black p-6">
                <div className="w-full h-full relative">
                  <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" alt="Cleanroom" fill className="object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                 <p className="text-[12px] leading-relaxed mb-6 font-medium text-gray-800">
                   Excessive methane (CH<sub>4</sub>) and carbon dioxide (CO<sub>2</sub>) emissions are 
                   harmful to our climate and health but invisible to the naked eye. Our 
                   science-based algorithms and remote sensing technology offer a 
                   unique solution for detecting, pinpointing, and quantifying high-
                   emission methane and CO<sub>2</sub> point sources around the globe.
                 </p>
                 <p className="text-[12px] leading-relaxed font-medium text-gray-800">
                   Making these emissions visible through advanced technology and 
                   accessible via our data portal helps put data in the hands of decision 
                   makers everywhere. Our science and technology contribute to an 
                   ecosystem of observing systems that work together to support 
                   mitigation action.
                 </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row border-b border-black">
              <div className="w-full md:w-1/2 p-6 md:p-10 border-b md:border-b-0 md:border-r border-black">
                 <h3 className="text-[20px] font-bold mb-4">Why focus on methane?</h3>
                 <p className="text-[12px] leading-relaxed mb-10 font-medium text-gray-800">
                   Methane and CO<sub>2</sub> are sometimes called "the big two" carbon 
                   molecules because they are critical to mitigating climate change. 
                   Measuring and quantifying these sources is crucial to enabling 
                   rapid mitigation.
                 </p>
                 
                 <h3 className="text-[20px] font-bold mb-4">Methane: A critical near-term solution</h3>
                 <p className="text-[12px] leading-relaxed mb-6 font-medium text-gray-800">
                   Tackling methane today is one of the most effective ways we can slow 
                   the rate of global warming while we work to accelerate reductions in 
                   CO<sub>2</sub> emissions. This is because methane is an especially powerful 
                   greenhouse gas — it has more than 80 times the warming potential 
                   than CO<sub>2</sub> over 20 years. Tackling methane also helps improve public 
                   health because methane emissions are often co-emitted with other 
                   harmful air toxics.
                 </p>
                 <p className="text-[12px] leading-relaxed font-medium text-gray-800">
                   In many regions, methane super-emitters at a small number of facilities 
                   contribute disproportionately to regional emissions. These super-
                   emitters can contribute to as much as 20-60% of emissions from some 
                   regions and sectors. While it's important to apply a portfolio of 
                   measurement methods to detect all methane emissions, the Tanager 
                   satellite technology focuses on identifying and quantifying individual 
                   super-emitters, and Carbon Mapper makes that data publicly available 
                   to help guide leak repair efforts by facility operators and contribute to 
                   broader efforts to quantify and understand methane emissions with 
                   maximum transparency.
                 </p>
              </div>
              <div className="w-full md:w-1/2 bg-gray-100 relative min-h-[300px] p-6 md:p-10 flex items-center justify-center">
                <div className="w-full aspect-[4/3] relative">
                  <Image src="https://images.unsplash.com/photo-1621644782299-fb75cbbf3db5?q=80&w=1000&auto=format&fit=crop" alt="Flaring" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Row 3 - CO2 */}
            <div className="flex flex-col md:flex-row border-b border-black">
              <div className="w-full md:w-1/2 p-6 md:p-10 border-r-0 md:border-r border-black">
                 <h3 className="text-[20px] font-bold mb-4">CO<sub>2</sub>: Important for long-term impacts</h3>
                 <p className="text-[12px] leading-relaxed mb-6 font-medium text-gray-800">
                   While reducing methane emissions today can slow the rate of global 
                   warming, addressing CO<sub>2</sub> is essential for avoiding the worst impacts 
                   of climate change because it traps heat in the atmosphere for 
                   hundreds of years.
                 </p>
                 <p className="text-[12px] leading-relaxed font-medium text-gray-800">
                   Our capability to detect large point sources of CO<sub>2</sub> from power plants 
                   and refineries and across liquefied natural gas (LNG) supply chains 
                   will help independently verify these emissions sources globally.
                 </p>
              </div>
              <div className="w-full md:w-1/2 hidden md:block"></div>
            </div>

            {/* Row 4 */}
            <div className="flex flex-col md:flex-row border-b border-black">
              <div className="w-full md:w-1/2 bg-gray-100 relative min-h-[300px] border-b md:border-b-0 md:border-r border-black p-6">
                <div className="w-full h-full relative">
                  <Image src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop" alt="Satellite" fill className="object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                 <h3 className="text-[20px] font-bold mb-4">Monitoring emissions from space: A comprehensive approach</h3>
                 <p className="text-[12px] leading-relaxed font-medium text-gray-800">
                   Ultimately, our goal is to provide sustained monitoring of up to 
                   90% of methane and CO<sub>2</sub> super-emitters globally via a satellite 
                   constellation. It's ambitious — but critical to slowing global 
                   climate change.
                 </p>
              </div>
            </div>

            {/* Row 5 */}
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-6 md:p-10 border-b md:border-b-0 md:border-r border-black flex flex-col justify-center">
                 <h3 className="text-[20px] font-bold mb-4">Initial observing regions</h3>
                 <p className="text-[12px] leading-relaxed font-medium text-gray-800">
                   The tasking deck showcases initial regions of global observations for 
                   Tanager-1, which was enabled by a philanthropically funded program 
                   and launched in August 2024 as the first in a series of planned 
                   satellites. As the constellation grows, these efforts will continue 
                   to scale.
                 </p>
              </div>
              <div className="w-full md:w-1/2 bg-gray-100 relative min-h-[300px] p-6 flex items-center justify-center">
                <div className="w-full aspect-video relative opacity-80">
                  <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" alt="Map" fill className="object-cover mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Imaging spectroscopy */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div className="flex items-start gap-2">
              <Plus className="w-8 h-8 text-black shrink-0 mt-2" strokeWidth={1.5} />
              <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight max-w-xl leading-[1.1]">
                Imaging spectroscopy: Making invisible emissions visible
              </h2>
            </div>
            <button className="flex items-center gap-2 border border-black bg-white px-4 py-2 text-[12px] font-bold hover:bg-gray-50 transition-colors w-max shadow-sm md:mb-2 ml-10 md:ml-0">
              <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              Satellite tech specs
            </button>
          </div>

          <div className="border border-black flex flex-col bg-white">
            {/* Top Row */}
            <div className="flex flex-col md:flex-row border-b border-black">
              <div className="w-full md:w-1/2 bg-gray-200 relative min-h-[300px] border-b md:border-b-0 md:border-r border-black p-8 flex items-center justify-center">
                <div className="w-[80%] aspect-[4/3] relative">
                  <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop" alt="Sensor" fill className="object-cover shadow-lg rounded" />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                 <p className="text-[12px] leading-relaxed mb-6 font-medium text-gray-800">
                   The satellites and aircraft used by Carbon Mapper each host an 
                   imaging spectrometer — a device like a camera, but where every 
                   pixel measures hundreds of wavelengths of light reflected by Earth's 
                   surface and absorbed by gases in the planet's atmosphere. These 
                   instruments can see from visible wavelengths into the infrared 
                   wavelengths beyond the range of human vision. The instruments 
                   gather high-quality data that we use to detect, image, pinpoint, and 
                   quantify methane and CO<sub>2</sub> super-emitters.
                 </p>
                 <p className="text-[12px] leading-relaxed font-medium text-gray-800">
                   The instrument on Planet's Tanager-1 satellite represents 5th 
                   generation imaging spectrometer technology, designed by NASA 
                   JPL. This technology builds on previous versions used in our airborne 
                   observations and our analysis of EMIT observations from the 
                   International Space Station. The new spectrometer technology will 
                   begin to scale up global operational monitoring of super-emitters.
                 </p>
              </div>
            </div>

            {/* Bottom Row - 4 columns */}
            <div className="flex flex-col md:flex-row">
              {[
                {
                  title: "Attributing emissions at their source",
                  desc: "The technology not only observes methane emissions, but also attributes them at a facility-scale level — often including specific pieces of equipment or infrastructure. These plume detection and attribution capabilities pinpoint emissions within individual sectors, including fossil fuel production and use, waste management, and large livestock operations.",
                  icon: <Globe className="w-12 h-12 text-purple-600" />
                },
                {
                  title: "Detecting methane with high sensitivity",
                  desc: "The imaging spectrometers we use on aircraft can see plumes from methane super-emitters as low as 5-10 kg/hr under moderate conditions (90% detection limits are closer to 30 kg/hr). The Tanager satellites are designed to detect methane plumes with emission rates as low as 70 kg/hr under moderate conditions (predicted 90% detection limit of about 100 kg/hr).",
                  icon: <Grid className="w-12 h-12 text-orange-400" />
                },
                {
                  title: "More frequent sampling",
                  desc: "With the launch of the first Tanager satellite in August 2024 — the first in a planned series of satellites — we aim to provide regular monitoring of high emission methane and CO2 point sources. Depending on the sector, these emissions can be highly variable and, in some cases, intermittent. Because of this, sustained, high frequency monitoring is helpful to better understand the behavior and net impact of emission sources. Sample frequency is a function of the instrument field of view, satellite orbit, satellite agility and distribution of areas to be mapped.",
                  icon: <Target className="w-12 h-12 text-purple-600" />
                },
                {
                  title: "High resolution, wide area coverage",
                  desc: "The imaging spectrometers we use on aircraft and satellites combine high-spatial resolution (typically < 5 meters for aircraft and typically 30-40 meters for satellites) with the ability to rapidly image large areas (typically 2500-5000 km2/day with an aircraft and upwards of 130,000 km2/day per Tanager satellite). This allows us to pinpoint the origin of methane or CO2 plumes at or within individual facilities. Geolocation accuracy ranges from 5-15 meters for aircraft to 30-50 meters for Tanager satellites.",
                  icon: <Hexagon className="w-12 h-12 text-orange-400 fill-orange-100" />
                }
              ].map((item, idx, arr) => (
                <div key={idx} className={`w-full md:w-1/4 p-6 ${idx !== arr.length - 1 ? 'border-b md:border-b-0 md:border-r border-black' : ''}`}>
                   <div className="mb-6 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center relative overflow-hidden">
                      {/* Using lucide icons to approximate the custom graphics */}
                      {item.icon}
                   </div>
                   <h3 className="font-bold text-[16px] leading-[1.2] mb-4">{item.title}</h3>
                   <p className="text-[10px] leading-relaxed font-medium text-gray-800">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leading on innovative science */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-4">
            <Plus className="w-8 h-8 text-black shrink-0" strokeWidth={1.5} />
            <h2 className="text-[40px] font-bold tracking-tight">Leading on innovative science</h2>
          </div>
          
          <p className="text-[13px] max-w-[550px] mb-8 font-medium leading-relaxed pl-[40px]">
            Our science and research team is at the forefront of using remote sensing to 
            detect, pinpoint, and quantify methane and CO<sub>2</sub> emissions. Leveraging deep 
            technical expertise and a long history of research, we work to enable science-
            based action through transparent and credible methods published in peer-
            reviewed literature.
          </p>

          <div className="border border-black flex flex-col bg-white">
            {/* Transparent methods */}
            <div className="flex flex-col md:flex-row border-b border-black">
               <div className="w-full md:w-1/2 p-6 md:p-10 border-b md:border-b-0 md:border-r border-black flex flex-col justify-between">
                  <div>
                     <h3 className="text-[20px] font-bold mb-4">Transparent methods</h3>
                     <p className="text-[12px] leading-relaxed mb-6 font-medium text-gray-800">
                       We strive to build trust in our methods through transparent and 
                       validated approaches for emissions detection and quantification.
                     </p>
                     <p className="text-[12px] leading-relaxed font-medium text-gray-800">
                       To meet these objectives we have established Quality Control (QC) 
                       methods and procedures that govern the various stages of data 
                       analysis and internal review, prior to release of CH<sub>4</sub> and CO<sub>2</sub> products.
                     </p>
                  </div>
                  <div className="mt-10">
                     <button className="flex items-center gap-2 bg-[#8a2be2] hover:bg-[#7a22cc] transition-colors text-white px-4 py-2 text-[12px] font-bold shadow-sm w-max">
                       <FileText className="w-3.5 h-3.5 text-white/70" />
                       Read our methodology
                     </button>
                  </div>
               </div>
               <div className="w-full md:w-1/2 bg-gray-100 relative min-h-[300px] p-6 flex items-center justify-center">
                 <div className="w-[90%] aspect-video relative shadow-lg">
                   <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Plume map" fill className="object-cover border border-gray-300" />
                 </div>
               </div>
            </div>

            {/* Validating our methods */}
            <div className="flex flex-col md:flex-row">
               <div className="w-full md:w-1/2 bg-gray-100 relative min-h-[300px] border-b md:border-b-0 md:border-r border-black p-6">
                 <div className="w-full h-full relative">
                   <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop" alt="Airplane" fill className="object-cover" />
                 </div>
               </div>
               <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
                  <div>
                     <h3 className="text-[20px] font-bold mb-4">Validating our methods</h3>
                     <p className="text-[12px] leading-relaxed font-medium text-gray-800">
                       Carbon Mapper® methods for detection and quantification have 
                       been informed and tested by rigorous studies of our emission 
                       quantification parameters, including through several experiments in 
                       the field. Using the Global Airborne Observatory (GAO) imaging 
                       spectrometer to measure methane emissions, we compared our 
                       calculated emissions with real-time observations from Stanford 
                       researchers. These studies successfully verified our capabilities, 
                       including a minimum detection limit and probability of detection. 
                       They also helped us characterize the instrument and ensure accuracy 
                       and sensor performance.
                     </p>
                  </div>
                  <div className="mt-10">
                     <button className="flex items-center gap-2 bg-[#8a2be2] hover:bg-[#7a22cc] transition-colors text-white px-4 py-2 text-[12px] font-bold shadow-sm w-max">
                       <ArrowUpRight className="w-3.5 h-3.5 text-white/70" strokeWidth={2.5} />
                       Read our published results
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ScienceTechPage;