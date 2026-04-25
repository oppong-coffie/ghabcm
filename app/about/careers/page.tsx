import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Plus, ArrowRight } from 'lucide-react';

const CareersPage = () => {
  return (
    <div className="w-full bg-[#f8f9fa] text-black min-h-screen font-sans">
      {/* Banner */}
      <div className="w-full h-[350px] relative overflow-hidden bg-white">
        <Image 
          src="/laptop_typing.png" 
          alt="Hands typing on laptop" 
          fill 
          className="object-cover"
        />
        {/* Gradient overlays matching reference */}
        <div className="absolute bottom-0 left-0 w-2/3 md:w-1/3 h-24 bg-gradient-to-tr from-purple-600/90 to-transparent mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-1/4 h-8 bg-gradient-to-r from-transparent to-orange-400" />
        {/* White mask at bottom similar to image */}
        <div className="absolute bottom-0 left-0 w-[40%] h-[35px] bg-white hidden md:block" />
        <div className="absolute bottom-[35px] left-0 w-[30%] h-[20px] bg-white hidden md:block" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 bg-[#f8f9fa]">
        {/* Breadcrumb */}
        <div className="text-gray-500 text-sm mb-16 pt-4">
          <Link href="/about" className="hover:text-black transition-colors">About</Link> / <span className="text-black">Careers</span>
        </div>

        {/* Header Section */}
        <section className="mb-10">
          <div className="flex items-start gap-2">
            <Plus className="w-8 h-8 text-black mt-2 shrink-0" strokeWidth={1.5} />
            <h1 className="text-[42px] font-bold tracking-tight leading-[1.1] max-w-2xl">
              Help build a better future for our planet
            </h1>
          </div>
        </section>

        {/* Content Box */}
        <section className="mb-32">
          <div className="border border-black bg-white flex flex-col max-w-4xl">
            {/* Header row */}
            <div className="p-5 font-bold text-lg border-b border-black">
              Join our team
            </div>
            {/* Content area */}
            <div className="p-8 md:p-10 flex flex-col">
              <p className="text-[13px] leading-relaxed mb-6 font-medium text-gray-800 max-w-2xl">
                As a nonprofit, we're committed to driving greenhouse gas emission 
                reductions by making methane and carbon dioxide data accessible 
                and actionable. We're a small team that's quickly growing!
              </p>
              
              <p className="text-[13px] leading-relaxed mb-6 font-medium text-gray-800 max-w-2xl">
                If you're passionate about making an impact, we invite you to apply 
                to our open roles below or check back often for new job listings.
              </p>

              <p className="text-[13px] leading-relaxed mb-6 font-medium text-gray-800 max-w-2xl">
                Carbon Mapper is an equal opportunity employer that believes a 
                diverse team will not just lead to a better working environment, but 
                will also help us create better products and services.
              </p>

              <p className="text-[13px] leading-relaxed mb-10 font-medium text-gray-800 max-w-2xl">
                Carbon Mapper is committed to the full inclusion of all qualified 
                individuals. If any reasonable accommodation is needed in our 
                process, please reach out to <a href="mailto:careers@carbonmapper.org" className="underline decoration-1 underline-offset-2 hover:text-purple-700 transition-colors">careers@carbonmapper.org</a>.
              </p>

              <button className="flex items-center gap-3 bg-[#8a2be2] hover:bg-[#7a22cc] transition-colors px-5 py-2.5 text-[13px] font-bold text-white w-max shadow-sm">
                <ArrowUpRight className="w-[14px] h-[14px] text-white/50" strokeWidth={2.5} />
                View open positions
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Newsletter Section (Copied from Partners Page) */}
      <section className="w-full relative overflow-hidden bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-24 pb-32">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center mt-[-40px]">
             <div className="w-32 h-[1px] bg-gray-300 absolute" />
             <div className="h-32 w-[1px] bg-gray-300 absolute" />
          </div>

          <h2 className="text-4xl font-medium tracking-tight mb-20 text-center">Subscribe to our newsletter</h2>
          
          <div className="border-t border-black pt-16 flex flex-col lg:flex-row gap-16 items-start">
            {/* Fast Company Box */}
            <div className="w-full lg:w-[320px] h-[380px] bg-[#e6005c] text-white p-10 flex flex-col justify-between shrink-0 shadow-sm">
              <div className="font-serif text-[28px] font-bold tracking-widest uppercase leading-none">
                Fast<br/>Company
              </div>
              
              <div className="grid grid-cols-3 gap-2 w-20 my-8">
                {[...Array(9)].map((_, i) => (
                   <div key={i} className="w-[14px] h-[14px] rounded-full bg-black"></div>
                ))}
              </div>

              <div>
                <div className="text-3xl font-bold leading-[1.1] tracking-tight">
                  World<br/>Changing<br/>Ideas<br/><span className="font-normal opacity-90">2025</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex-1 w-full max-w-3xl">
              <form className="flex flex-col gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <input 
                    type="text" 
                    placeholder="First Name*" 
                    className="w-full border-b border-black pb-3 text-sm focus:outline-none focus:border-gray-500 placeholder-black bg-transparent"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name*" 
                    className="w-full border-b border-black pb-3 text-sm focus:outline-none focus:border-gray-500 placeholder-black bg-transparent"
                  />
                  <input 
                    type="text" 
                    placeholder="Company" 
                    className="w-full border-b border-black pb-3 text-sm focus:outline-none focus:border-gray-500 placeholder-black bg-transparent"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address*" 
                    className="w-full border-b border-black pb-3 text-sm focus:outline-none focus:border-gray-500 placeholder-black bg-transparent"
                  />
                </div>

                <div className="flex flex-col gap-5 mt-4">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" className="mt-1 appearance-none w-4 h-4 border border-black rounded-sm checked:bg-black checked:border-black shrink-0 relative after:content-[''] after:absolute after:hidden checked:after:block after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:left-[4px] after:top-[1px]" />
                    <span className="text-sm">Acknowledge and agree to our <span className="underline decoration-1 underline-offset-2 hover:text-black">privacy policy</span>*</span>
                  </label>
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" className="mt-1 appearance-none w-4 h-4 border border-black rounded-sm checked:bg-black checked:border-black shrink-0 relative after:content-[''] after:absolute after:hidden checked:after:block after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:left-[4px] after:top-[1px]" />
                    <span className="text-sm">Opt into email communications, including the newsletter</span>
                  </label>
                </div>

                <button type="button" className="flex items-center justify-center gap-3 border border-black py-4 px-12 text-sm font-bold mt-4 hover:bg-gray-100 transition-colors w-full md:w-auto self-start">
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  Subscribe
                </button>

                <p className="text-xs text-gray-500 mt-2">*Required fields</p>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-black bg-white">
          <div className="max-w-[1200px] mx-auto py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-black">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center mb-6 md:mb-0">
              <div className="flex gap-4">
                <Link href="#" className="hover:underline">Privacy Policy</Link>
                <Link href="#" className="hover:underline">Terms of Use</Link>
              </div>
              <span className="text-gray-500 hidden md:block">|</span>
              <span className="text-gray-500">Carbon Mapper® is a registered trademark of Carbon Mapper, Inc.</span>
            </div>
            <div className="flex gap-8 items-center">
               <Link href="#" className="font-semibold hover:underline">Contact</Link>
               <div className="flex gap-5 text-[14px] font-medium text-gray-600">
                  <span className="hover:text-black cursor-pointer">in</span>
                  <span className="hover:text-black cursor-pointer">X</span>
                  <span className="hover:text-black cursor-pointer">yt</span>
                  <span className="hover:text-black cursor-pointer">ig</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;