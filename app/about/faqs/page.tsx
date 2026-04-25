import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus } from 'lucide-react';

const FaqsPage = () => {
  return (
    <div className="w-full bg-[#f8f9fa] text-black min-h-screen font-sans">
      {/* Banner */}
      <div className="w-full h-[350px] relative overflow-hidden bg-white">
        <Image 
          src="/iceberg_banner.png" 
          alt="Iceberg in ocean" 
          fill 
          className="object-cover"
        />
        {/* Gradient overlays matching reference */}
        <div className="absolute bottom-0 left-0 w-2/3 md:w-1/3 h-24 bg-gradient-to-tr from-purple-600/90 to-transparent mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-1/4 h-8 bg-gradient-to-r from-transparent to-orange-400" />
        {/* White mask at bottom similar to image */}
        <div className="absolute bottom-0 left-0 w-[50%] h-[50px] bg-white hidden md:block" />
        <div className="absolute bottom-[50px] left-0 w-[40%] h-[20px] bg-white hidden md:block" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 bg-[#f8f9fa]">
        {/* Breadcrumb */}
        <div className="text-gray-500 text-[15px] mb-12 pt-4">
          <Link href="/about" className="hover:text-black transition-colors">About</Link> / <span className="text-black">Frequently Asked Questions</span>
        </div>

        {/* Header Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2">
            <Plus className="w-8 h-8 text-black shrink-0" strokeWidth={1.5} />
            <h1 className="text-[40px] font-bold tracking-tight">FAQs</h1>
          </div>
        </section>

        {/* FAQs Container */}
        <section className="mb-24">
          <div className="border border-black flex flex-col bg-white">
            
            {/* General Section */}
            <div className="flex flex-col md:flex-row border-b border-black">
              <div className="w-full md:w-1/3 p-6 md:p-8 bg-white md:border-r border-black font-bold text-[18px]">
                General
              </div>
              <div className="w-full md:w-2/3 bg-[#f2f4f6]">
                {[
                  'What is Carbon Mapper?',
                  'How is Carbon Mapper\'s approach different from past or current efforts to detect and act on emissions?',
                  'How will Carbon Mapper data actually translate to emission reductions?',
                  'How is the Carbon Mapper program different from other methane monitoring satellites?'
                ].map((item, idx, arr) => (
                  <div key={idx} className={`flex items-start gap-5 p-6 hover:bg-gray-200/50 transition-colors cursor-pointer ${idx !== arr.length - 1 ? 'border-b border-black' : ''}`}>
                    <Plus className="w-5 h-5 text-black shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-[11px] font-bold uppercase tracking-wide leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spacer Row */}
            <div className="h-16 w-full border-b border-black bg-white" />

            {/* Methane and CO2 emissions Section */}
            <div className="flex flex-col md:flex-row border-b border-black">
              <div className="w-full md:w-1/3 p-6 md:p-8 bg-white md:border-r border-black font-bold text-[18px]">
                Methane and CO<sub className="text-[12px] bottom-[-2px] relative">2</sub> emissions
              </div>
              <div className="w-full md:w-2/3 bg-[#f2f4f6]">
                {[
                  'Why focus on methane',
                  'What about other gases?',
                  'What are the differences among methane gas concentrations, enhancements, and emissions?',
                  'What are the different types of methane emissions?',
                  'How steady or persistent are methane emissions?',
                  'What are some general findings from regional methane surveys?',
                  'Are facility operators using the data to repair leaks?'
                ].map((item, idx, arr) => (
                  <div key={idx} className={`flex items-start gap-5 p-6 hover:bg-gray-200/50 transition-colors cursor-pointer ${idx !== arr.length - 1 ? 'border-b border-black' : ''}`}>
                    <Plus className="w-5 h-5 text-black shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-[11px] font-bold uppercase tracking-wide leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spacer Row */}
            <div className="h-16 w-full border-b border-black bg-white" />

            {/* Our data Section */}
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 p-6 md:p-8 bg-[#8a2be2] text-white md:border-r border-black font-bold text-[18px]">
                Our data
              </div>
              <div className="w-full md:w-2/3 bg-[#f2f4f6]">
                {[
                  'What am I seeing with the Carbon Mapper data portal?',
                  'Can I download the data? Does Carbon Mapper charge for its data?',
                  'Where can I find more information on the methods used to generate the data',
                  'How should I cite the Carbon Mapper data?',
                  'Is this real-time data?',
                  'I sometimes see multiple plume origins associated with the same plume image. What\'s the cause of that?',
                  'What measurement systems were used to produce these data sets?',
                  'Why do some areas show more emission sources than others?',
                  'What are the differences between plumes and sources?',
                  'What does "persistence" mean and how is the emission rate for a given source calculated?',
                  'Do you have descriptions of the fields in your plume and source lists?',
                  'What format do you use for your plume time stamps?',
                  'How can I download your plume emission database?',
                  'How can I determine where you\'ve collected data and where you haven\'t?',
                  'What are null detects?',
                  'How can I confirm a reported leak repair or see when an intermittent source is not detected?',
                  'Are all observed methane sources leaks?',
                  'Carbon Mapper analyzes NASA EMIT data, but in some cases there are differences between what Carbon Mapper publishes and what NASA publishes. Why?',
                  'Some emission rates are stated as not yet quantified. What does that mean?',
                  'How do you determine the emission sector for a given plume/source and why don\'t you identify the facility or company name associated with the observed emission?'
                ].map((item, idx, arr) => (
                  <div key={idx} className={`flex items-start gap-5 p-6 hover:bg-gray-200/50 transition-colors cursor-pointer ${idx !== arr.length - 1 ? 'border-b border-black' : ''}`}>
                    <Plus className="w-5 h-5 text-black shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-[11px] font-bold uppercase tracking-wide leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default FaqsPage;