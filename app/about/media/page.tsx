import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Plus, ArrowRight, ArrowLeft, Download, Play, Youtube } from 'lucide-react';

const MediaPage = () => {
  return (
    <div className="w-full bg-[#f8f9fa] text-black min-h-screen font-sans">
      {/* Banner */}
      <div className="w-full h-[350px] relative overflow-hidden bg-white">
        <Image 
          src="/plume_banner.png" 
          alt="Satellite heat map plume" 
          fill 
          className="object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute bottom-0 left-0 w-2/3 md:w-1/3 h-24 bg-gradient-to-tr from-purple-600/90 to-transparent mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-1/4 h-8 bg-gradient-to-r from-transparent to-orange-400" />
        {/* White mask at bottom similar to image */}
        <div className="absolute bottom-0 left-0 w-[40%] h-[40px] bg-white hidden md:block" />
        <div className="absolute bottom-[40px] left-0 w-[30%] h-[20px] bg-white hidden md:block" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 bg-[#f8f9fa]">
        {/* Breadcrumb */}
        <div className="text-gray-500 text-[15px] mb-16 pt-4">
          <Link href="/about" className="hover:text-black transition-colors">About</Link> / <span className="text-black">Media</span>
        </div>

        {/* News and announcements Section */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <Plus className="w-8 h-8 text-black shrink-0" strokeWidth={1.5} />
            <h1 className="text-[32px] md:text-[40px] font-bold tracking-tight leading-[1.1]">
              News and announcements
            </h1>
          </div>
          
          <p className="text-[13px] leading-[1.6] max-w-xl mb-12 font-medium">
            Our data, insights, and experts can help reporters cover human-caused methane 
            emissions in global regions and sectors. Learn about the important and growing 
            role remote sensing technologies play in helping society detect, quantify, and 
            ultimately act on large emissions sources.
          </p>

          <div className="border border-black flex flex-col bg-white overflow-hidden">
            {/* Header row */}
            <div className="flex justify-between items-center p-4 border-b border-black">
              <span className="font-bold text-[18px]">News</span>
              <div className="flex gap-4 pr-2">
                <ArrowLeft className="w-5 h-5 text-gray-300 cursor-pointer" />
                <ArrowRight className="w-5 h-5 text-gray-300 cursor-pointer" />
              </div>
            </div>
            
            {/* Carousel Grid */}
            <div className="flex w-full overflow-x-auto">
               {[
                 {
                   title: "OGCI and Carbon Mapper team up to reduce methane emissions from the oil and gas sector",
                   date: "Mar 03, 2026",
                   imgUrl: "https://images.unsplash.com/photo-1621644782299-fb75cbbf3db5?q=80&w=800&auto=format&fit=crop"
                 },
                 {
                   title: "Carbon Mapper Shares How Tanager-1 Data is Driving Methane Emissions Transparency and Mitigation Action at 2025 AGU Meeting",
                   date: "Dec 08, 2025",
                   imgUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
                 },
                 {
                   title: "What COP30 Signaled about Global Methane Leadership",
                   date: "Nov 25, 2025",
                   imgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                 },
                 {
                   title: "From Space... Rapid Resp To-End Glo... Emissions Effort Laun... Bloomberg and Partne...",
                   date: "Oct 12, 2025",
                   imgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
                   isLast: true
                 }
               ].map((item, idx) => (
                 <div key={idx} className={`w-[300px] shrink-0 border-r border-black flex flex-col p-5 relative ${idx === 3 ? 'border-r-0' : ''}`}>
                    <div className="w-full h-[180px] bg-gray-200 mb-4 relative">
                       <Image src={item.imgUrl} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <span className="bg-[#66b3ff] text-white text-[9px] font-bold tracking-widest px-1.5 py-0.5 uppercase w-max mb-3">News</span>
                      <h3 className="font-bold text-[15px] leading-[1.2] mb-3 pr-2">{item.title}</h3>
                      <p className="text-[11px] text-gray-500 mb-8 mt-auto">Published on: {item.date}</p>
                      <button className="border border-black p-2 w-max hover:bg-gray-50 transition-colors mt-auto">
                        <ArrowUpRight className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>

                    {/* Blue overlay for the last card */}
                    {item.isLast && (
                      <div className="absolute top-0 right-0 bottom-0 w-[45%] bg-[#4287f5] flex items-end justify-center pb-6">
                         <button className="border border-white/40 flex items-center gap-2 px-4 py-2 text-white hover:bg-white/10 transition-colors">
                            <ArrowRight className="w-3 h-3" />
                            <span className="text-[11px] font-bold tracking-wide">View more</span>
                         </button>
                      </div>
                    )}
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Media kit */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <Plus className="w-8 h-8 text-black shrink-0" strokeWidth={1.5} />
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight">Media kit</h2>
          </div>
          
          <p className="text-[13px] max-w-[480px] mb-8 font-medium leading-relaxed">
            Download our media kit for a comprehensive overview of our brand, audience, 
            reach, and opportunities for collaboration.
          </p>
          
          <button className="flex items-center gap-2 bg-[#8a2be2] hover:bg-[#7a22cc] transition-colors px-4 py-2 text-sm font-bold text-white w-max shadow-sm">
            <Download className="w-4 h-4 text-white/60" />
            Media kit
          </button>
        </section>

        {/* Requests Grid */}
        <section className="mb-20">
          <div className="border border-black flex flex-col md:flex-row bg-white">
            {/* Interview requests */}
            <div className="w-full md:w-1/2 flex flex-col md:border-r border-black">
              <div className="bg-[#d1e0f0] p-4 font-bold text-[18px] border-b border-black tracking-tight">
                Interview requests
              </div>
              <div className="p-8 flex flex-col justify-between h-full">
                <p className="text-[12px] leading-relaxed mb-8 font-medium max-w-sm">
                  Our in-house expertise spans emissions trends across key sectors and 
                  regions, science-based data and insights, and the evolving ecosystem 
                  of remote sensing technologies to address methane and CO2 
                  emissions. We can speak to key observations and trends the data on 
                  our portal reveals. We can also address the prevalence and persistence 
                  of super-emitters across regions, facilities and local jurisdictions — and 
                  share how this data is driving action today and identifying 
                  opportunities for the future. For media inquiries, please contact 
                  <a href="mailto:media@carbonmapper.org" className="underline hover:text-purple-600 transition-colors mx-1">media@carbonmapper.org</a>.
                </p>
                <button className="flex items-center gap-2 border border-black px-4 py-2 text-[12px] font-bold hover:bg-gray-50 transition-colors w-max">
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                  Contact us with media requests
                </button>
              </div>
            </div>

            {/* Speaker requests */}
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="bg-[#d1e0f0] p-4 font-bold text-[18px] border-b border-black tracking-tight">
                Speaker requests
              </div>
              <div className="p-8 flex flex-col justify-between h-full">
                <p className="text-[12px] leading-relaxed mb-8 font-medium max-w-sm">
                  Carbon Mapper experts regularly speak at a variety of events on topics 
                  related to global emissions, remote sensing, emissions data, and 
                  science and innovation. To request a Carbon Mapper speaker at your 
                  conference or event, please contact our team.
                </p>
                <button className="flex items-center gap-2 border border-black px-4 py-2 text-[12px] font-bold hover:bg-gray-50 transition-colors w-max">
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                  Connect with us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Emissions data */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-4">
            <Plus className="w-8 h-8 text-black shrink-0" strokeWidth={1.5} />
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight">Emissions data for powerful reporting</h2>
          </div>
          
          <p className="text-[13px] max-w-[550px] mb-8 font-medium leading-relaxed">
            Journalists and media professionals can use our data to underpin reporting that 
            increases awareness and drives action to stop emissions. To better understand the 
            sources of human-caused methane super-emitters across the globe, check out our 
            data portal.
          </p>
          
          <button className="flex items-center gap-3 bg-[#8a2be2] hover:bg-[#7a22cc] transition-colors px-5 py-2.5 text-sm font-bold text-white w-max shadow-sm">
            <ArrowUpRight className="w-4 h-4 text-white/60" strokeWidth={2.5} />
            View emissions data
          </button>
        </section>

        {/* Using our data */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-8">
            <Plus className="w-8 h-8 text-black shrink-0" strokeWidth={1.5} />
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight">Using our data: a how-to for journalists</h2>
          </div>

          <div className="border border-black flex flex-col md:flex-row bg-white">
            <div className="w-full md:w-1/2 p-6 md:p-8 md:border-r border-black flex flex-col justify-center">
              <p className="text-[12px] font-medium leading-relaxed max-w-sm">
                Watch this video to learn how to search and filter methane data, find 
                plumes in your areas of interest, and create data alerts that deliver new 
                plumes straight to your inbox daily, weekly or monthly.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-6 bg-white flex items-center justify-center">
               <div className="w-full max-w-[450px] aspect-video bg-black relative border border-gray-200 group cursor-pointer overflow-hidden">
                  {/* Fake Youtube Thumbnail */}
                  <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" alt="Video thumbnail" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 via-transparent to-black/60">
                     <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-[10px] text-blue-800">CM</div>
                        <div className="text-white text-[15px] font-semibold leading-tight pr-8">
                          Media Guide: Using Carbon Mapper Data for High-Impact Methane Journalism
                        </div>
                     </div>
                     <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                         <div className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center">
                            <span className="text-white text-[10px]">↗</span>
                         </div>
                         <div className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center">
                            <span className="text-white text-[10px]">◷</span>
                         </div>
                       </div>
                       <div className="flex items-center gap-1.5 bg-black/80 px-2 py-1 rounded text-white text-[10px] font-medium">
                         Watch on <Youtube className="w-3.5 h-3.5" /> <span className="font-bold tracking-tight">YouTube</span>
                       </div>
                     </div>
                  </div>

                  {/* Play Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-[60px] h-[40px] bg-[#ff0000] rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Contact us */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-4">
            <Plus className="w-8 h-8 text-black shrink-0" strokeWidth={1.5} />
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight">Contact us</h2>
          </div>
          
          <p className="text-[13px] max-w-[480px] font-medium leading-relaxed">
            Please reach out to us for press requests, interview opportunities, or other media-
            related inquiries. We'd love to connect.
          </p>
        </section>

      </div>
    </div>
  );
};

export default MediaPage;