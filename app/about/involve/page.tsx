import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Plus, Star } from 'lucide-react';

const InvolvedPage = () => {
  return (
    <div className="w-full bg-[#f8f9fa] text-black min-h-screen font-sans">
      {/* Banner */}
      <div className="w-full h-[350px] relative overflow-hidden bg-white">
        <Image 
          src="/methane.jpg" 
          alt="Methane emissions map" 
          fill 
          className="object-cover"
        />
        {/* Gradient overlays matching reference */}
        <div className="absolute bottom-0 left-0 w-2/3 md:w-1/3 h-32 bg-gradient-to-tr from-purple-600/80 to-transparent mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-1/4 h-8 bg-gradient-to-r from-transparent to-orange-400" />
        {/* White mask at bottom similar to image 2 top */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-white" />
        <div className="absolute bottom-8 right-0 w-1/5 h-8 bg-white" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 bg-[#f8f9fa]">
        {/* Breadcrumb */}
        <div className="text-gray-500 text-sm mb-16 pt-4">
          <Link href="/about" className="hover:text-black transition-colors">About</Link> / <span className="text-black">Get Involved</span>
        </div>

        {/* Make a difference */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-6">
            <Plus className="w-8 h-8 text-black" strokeWidth={1.5} />
            <h1 className="text-[40px] font-bold tracking-tight">Make a difference in climate action</h1>
          </div>
          
          <div className="max-w-2xl">
            <p className="text-sm leading-relaxed mb-6 font-medium text-gray-800">
              As a 501c3 nonprofit organization, we rely on the generosity of our philanthropic 
              funders. We accept donations from those who want to share in our public-good 
              mission to drive greenhouse gas emission reductions with science-backed data 
              and research.
            </p>
            <p className="text-sm leading-relaxed mb-10 font-medium text-gray-800">
              Support accessibility and transparency in methane emissions towards future 
              climate and public health.
            </p>

            <button className="flex items-center gap-3 bg-[#f5ad38] hover:bg-[#e09d30] transition-colors px-5 py-2.5 text-sm font-bold text-black w-max mb-12 shadow-sm">
              <ArrowUpRight className="w-4 h-4 text-black/60" strokeWidth={2.5} />
              Donate
            </button>

            <div className="flex gap-4">
              {/* Platinum Transparency Badge */}
              <div className="border-[3px] border-[#a8b8c8] w-[110px] h-[110px] p-2 flex flex-col justify-between text-center bg-white">
                <div className="text-[10px] font-bold text-gray-600 leading-[1.1] pt-1 tracking-wide">
                  Platinum<br/>Transparency<br/>2024
                </div>
                <div className="font-extrabold text-[15px] tracking-tight pb-1">Candid.</div>
              </div>
              
              {/* Charity Navigator Badge */}
              <div className="border-[1.5px] border-[#20409a] rounded-lg w-[110px] h-[110px] flex flex-col items-center justify-center text-center text-[#20409a] bg-white relative">
                <div className="font-semibold text-[13px] leading-[1.1] mt-1 mb-1">
                  Charity<br/>Navigator
                </div>
                <div className="flex gap-[2px] text-[#20409a] mb-1">
                  <Star className="w-[10px] h-[10px] fill-current" />
                  <Star className="w-[10px] h-[10px] fill-current" />
                  <Star className="w-[10px] h-[10px] fill-current" />
                  <Star className="w-[10px] h-[10px] fill-current" />
                </div>
                <div className="text-[8px] font-bold tracking-[0.15em] uppercase mb-1">Four-Star</div>
                {/* little decorative star icon */}
                <div className="absolute right-2 top-2">
                   <Star className="w-2 h-2 fill-[#20409a]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to give */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-6">
            <Plus className="w-8 h-8 text-black" strokeWidth={1.5} />
            <h2 className="text-[40px] font-bold tracking-tight">Ways to give</h2>
          </div>

          <div className="border border-black flex flex-col md:flex-row bg-[#f2f4f6]">
            <div className="w-full md:w-1/2 p-6 md:p-8 md:border-r border-black bg-white">
               <h3 className="font-bold text-[22px] leading-[1.2] max-w-sm">
                  Carbon Mapper can accept the following types of donations:
               </h3>
            </div>
            <div className="w-full md:w-1/2">
              {[
                'Donations by mail',
                'Wire transfers',
                'Donor advised funds',
                'Gifts of stock',
                'Bequests',
                'Qualified charitable distributions'
              ].map((item, idx, arr) => (
                <div key={item} className={`flex items-center gap-6 p-6 hover:bg-gray-200/50 transition-colors cursor-pointer ${idx !== arr.length - 1 ? 'border-b border-black' : ''}`}>
                  <Plus className="w-5 h-5 text-black shrink-0" strokeWidth={1.5} />
                  <span className="text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get in touch */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Plus className="w-8 h-8 text-black" strokeWidth={1.5} />
            <h2 className="text-[32px] font-bold tracking-tight">Get in touch</h2>
          </div>
          
          <p className="text-[13px] max-w-[450px] mb-8 leading-relaxed font-medium">
            Reach out to speak with us about other ways to make a contribution. For 
            donation inquiries, please contact Amanda Storm, Director of Development, for 
            donation inquiries.
          </p>
          
          <button className="flex items-center gap-3 bg-[#8a2be2] hover:bg-[#7a22cc] transition-colors px-4 py-2.5 text-sm font-bold text-white w-max shadow-sm">
            <ArrowUpRight className="w-4 h-4 text-white/50" strokeWidth={2.5} />
            Contact
          </button>
        </section>

        {/* Stay in touch */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-4">
            <Plus className="w-8 h-8 text-black" strokeWidth={1.5} />
            <h2 className="text-[32px] font-bold tracking-tight">Stay in touch</h2>
          </div>
          
          <p className="text-[13px] max-w-[450px] mb-8 leading-relaxed font-medium">
            To see how your gift can be put to good use, subscribe here.
          </p>
          
          <button className="flex items-center gap-3 bg-[#8a2be2] hover:bg-[#7a22cc] transition-colors px-4 py-2.5 text-sm font-bold text-white w-max shadow-sm">
            <ArrowUpRight className="w-4 h-4 text-white/50" strokeWidth={2.5} />
            Subscribe
          </button>
        </section>

        {/* Funding & policies */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-6">
            <Plus className="w-8 h-8 text-black" strokeWidth={1.5} />
            <h2 className="text-[40px] font-bold tracking-tight">Funding & policies</h2>
          </div>

          <div className="border border-black flex flex-col md:flex-row bg-[#f8f9fa]">
            <div className="w-full md:w-1/2 p-6 md:p-8 md:border-r border-black relative bg-white">
              <div className="absolute left-6 top-8 bottom-8 w-[1px] bg-gray-300 hidden md:block" />
              <div className="md:pl-6">
                <p className="text-[11px] leading-[1.6] font-medium text-black">
                  Carbon Mapper, Inc. is a 501c3 nonprofit organization focused on 
                  making emissions data actionable and accessible to drive 
                  reductions. These efforts are made possible by the generous 
                  support of our philanthropic donors. Review our policies and 
                  financial statements below.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-[#f8f9fa]">
              {[
                'IRS Federal Form 990 (2025)',
                'IRS Federal Form 990 (2024)',
                'IRS Federal Form 990 (2023)',
                'IRS Federal Form 990 (2022)',
                'IRS Federal Form 990 (2021)',
                'Audited Financial Statements (2025)',
                'Audited Financial Statements (2024)',
                'Audited Financial Statements (2023)',
                'Audited Financial Statements (2022)',
                'Audited Financial Statements (2021)',
                'Indirect Cost Policy',
                'Privacy Policy'
              ].map((item, idx, arr) => (
                <div key={item} className={`p-4 md:px-6 hover:bg-white transition-colors cursor-pointer ${idx !== arr.length - 1 ? 'border-b border-black' : ''}`}>
                  <span className="text-[17px] text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InvolvedPage;