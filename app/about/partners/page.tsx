import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Plus } from 'lucide-react';

const PartnersPage = () => {
  return (
    <div className="w-full bg-white text-black min-h-screen font-sans">
      {/* Banner */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <Image 
          src="/earth.webp" 
          alt="Earth from space" 
          fill 
          className="object-cover"
        />
        {/* Gradient overlay at bottom left */}
        <div className="absolute bottom-0 left-0 w-2/3 md:w-1/3 h-32 bg-gradient-to-tr from-purple-600/80 to-orange-400/80 mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-1/4 h-8 bg-gradient-to-r from-orange-400 to-transparent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12">
        {/* Breadcrumb */}
        <div className="text-gray-500 text-sm mb-12">
          <Link href="/about" className="hover:text-black transition-colors">About</Link> / <span className="text-black">Partners</span>
        </div>

        {/* The Carbon Mapper Coalition */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Plus className="w-8 h-8 text-black" strokeWidth={1.5} />
            <h1 className="text-4xl font-bold tracking-tight">The Carbon Mapper Coalition</h1>
          </div>
          
          <p className="text-lg max-w-3xl mb-12 leading-relaxed">
            The Carbon Mapper Coalition is a first-of-its-kind public-private partnership 
            working to develop and deploy satellites that will help us detect, quantify, and 
            share facility-scale data on greenhouse gas emissions to empower mitigation 
            action. This collaboration lays the foundation for a larger goal to scale the system to 
            a full constellation — providing routine monitoring and accelerating impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-black">
            {/* Col 1 */}
            <div className="border-b md:border-b-0 md:border-r border-black">
              <div className="bg-[#d1e0f0] p-4 font-semibold text-lg border-b border-black">
                A unique partnership
              </div>
              <div className="p-8">
                <p className="text-sm leading-relaxed">
                  Backed by philanthropy and led by Carbon Mapper, the coalition brings 
                  together entities with expertise across technology, science, 
                  engineering, government, and policy. Together, we are capable of 
                  driving more impact than any one organization could accomplish on its 
                  own at the scale needed to drive emissions reductions.
                </p>
              </div>
            </div>
            {/* Col 2 */}
            <div>
              <div className="bg-[#d1e0f0] p-4 font-semibold text-lg border-b border-black">
                Coalition members
              </div>
              <div className="p-8 flex flex-col justify-between h-full">
                <p className="text-sm leading-relaxed mb-8">
                  NASA Jet Propulsion Laboratory (JPL), Planet Labs PBC, California Air 
                  Resources Board (CARB), University of Arizona, Arizona State 
                  University, and RMI — along with funders, including High Tide 
                  Foundation, Bloomberg Philanthropies, and the Grantham Foundation 
                  for the Protection of the Environment among others.
                </p>
                <button className="flex items-center gap-3 border border-black px-6 py-3 text-sm font-semibold w-max hover:bg-gray-50 transition-colors">
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  View coalition announcement
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Airplane Image */}
        <div className="mb-16">
          <div className="relative w-full h-[500px] border border-black/10">
             <Image 
               src="/nasa_airplane.png"
               alt="NASA Airplane"
               fill
               className="object-cover"
             />
          </div>
          {/* subtle gradient detail below the image as seen in reference */}
          <div className="flex justify-between w-full h-3 mt-1">
             <div className="w-1/3 bg-gradient-to-r from-purple-500/80 to-transparent"></div>
             <div className="w-1/6 bg-gradient-to-l from-orange-400/80 to-transparent"></div>
          </div>
        </div>

        {/* Other Collaborators */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Plus className="w-8 h-8 text-black" strokeWidth={1.5} />
            <h2 className="text-4xl font-bold tracking-tight">Other collaborators</h2>
          </div>
          
          <p className="text-sm max-w-2xl mb-12">
            We work with other organizations, institutions, and initiatives in a variety of ways to 
            provide access to actionable data and insights on greenhouse gas emissions.
          </p>

          <div className="border border-black flex flex-col">
            {/* Research */}
            <div className="bg-[#d1e0f0] p-4 font-semibold text-base border-b border-black">
              Research
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-black">
              {[
                { name: 'University of Michigan', logo: 'U of M' },
                { name: 'Stanford University', logo: 'Stanford' },
                { name: 'Harvard University', logo: 'Harvard' },
                { name: 'PSE Healthy Energy', logo: 'PSE' }
              ].map((item, idx) => (
                <div key={item.name} className={`flex flex-col items-center justify-center p-8 text-center text-xs ${idx !== 3 ? 'border-r border-black' : ''}`}>
                  <div className="w-16 h-16 bg-gray-100 rounded-full mb-6 flex items-center justify-center text-gray-400 font-bold border border-gray-200">
                    {item.logo}
                  </div>
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
              ))}
            </div>

            {/* Data and impact */}
            <div className="bg-[#d1e0f0] p-4 font-semibold text-base border-b border-black">
              Data and impact
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { name: 'Waste MAP', logo: 'WASTE MAP', color: 'text-blue-900' },
                { name: 'Global Waste Pathway', logo: 'Global Methane Pledge', color: 'text-blue-500' },
                { name: "EDF's Permian Map", logo: 'MAP', color: 'text-gray-300' },
                { name: '', logo: '', color: '' }
              ].map((item, idx) => (
                <div key={idx} className={`flex flex-col items-center justify-center p-8 text-center text-xs ${idx !== 3 ? 'border-r border-black' : ''}`}>
                  {item.name ? (
                     <>
                        <div className={`h-16 flex items-center justify-center font-bold text-xl mb-6 ${item.color}`}>
                          {item.logo}
                        </div>
                        <span className="font-medium text-sm">{item.name}</span>
                     </>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Committees */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-6">
            <Plus className="w-8 h-8 text-black" strokeWidth={1.5} />
            <h2 className="text-4xl font-bold tracking-tight">Advisory Committees</h2>
          </div>
          
          <p className="text-sm max-w-2xl mb-12">
            Carbon Mapper's advisory committees are industry experts assembled to help keep 
            us on the cutting edge of science, technology, policy, and impact. They assist 
            Carbon Mapper in making strategic decisions and support specific projects.
          </p>

          <div className="border border-black flex flex-col">
            {/* Science and Measurement */}
            <div className="bg-[#d1e0f0] p-6 border-b border-black">
               <h3 className="font-bold text-xl mb-3">Science and Measurement Committee</h3>
               <p className="text-sm max-w-3xl leading-relaxed">
                 The Science and Measurement Committee brings global expertise in earth and 
                 atmospheric science, remote sensing, and measurement, monitoring, 
                 reporting, and verification (MMRV) frameworks.
               </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { name: 'Dr. Eric Kort', title: 'Chair, University of Michigan' },
                { name: 'Prof. Dr. Ilse Aben', title: 'SRON Netherlands Institute for Space Research' },
                { name: 'Dr. Joule Bergerson', title: 'University of Calgary' },
                { name: 'Dr. Adam Brandt', title: 'Stanford University' },
                { name: 'Prof. Dr. Andre Butz', title: 'Heidelberg University' },
                { name: 'Dr. Christian Frankenberg', title: 'California Institute of Technology' },
                { name: 'Deborah Gordon', title: 'RMI' },
                { name: 'Dr. Francesca Hopkins', title: 'University of California, Riverside' },
                { name: 'Dr. Daniel Jacob', title: 'Harvard University' },
                { name: 'Dr. Daniel Zimmerle', title: 'Colorado State University' },
                { name: 'Colin McCormick', title: 'Climate TRACE, Georgetown University' },
                { name: '', title: '' }
              ].map((member, idx) => (
                <div key={idx} className={`p-8 text-center flex flex-col items-center justify-center border-b border-black ${idx % 4 !== 3 ? 'border-r' : ''}`}>
                  {member.name ? (
                     <>
                        <div className="font-bold text-[15px] mb-2">{member.name}</div>
                        <div className="text-xs text-gray-500 max-w-[150px] leading-relaxed">{member.title}</div>
                     </>
                  ) : null}
                </div>
              ))}
            </div>

            {/* Policy and Impact */}
            <div className="bg-[#d1e0f0] p-6 border-b border-black">
               <h3 className="font-bold text-xl mb-3">Policy and Impact Committee</h3>
               <p className="text-sm max-w-3xl leading-relaxed">
                 The Policy and Impact Committee consists of professionals with deep 
                 expertise translating data into policies and programs designed to reduce 
                 emissions at local and global scales.
               </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { name: 'Deborah Gordon', title: 'Co-Chair, RMI' },
                { name: 'Mary Nichols', title: 'Co-Chair, former CARB' },
                { name: 'Robert Murphy', title: 'Former Chevron/Aclima' },
                { name: 'Tim Gould', title: 'International Energy Agency' },
                { name: 'Dr. Rob Jackson', title: 'Stanford University' },
                { name: 'Giulia Ferrini', title: 'Climate and Clean Air Coalition' },
                { name: 'Dr. Kelly Sims Gallagher', title: 'Tufts University' },
                { name: 'Kate Fay', title: 'Former EPA Region 8/Noble Energy' },
                { name: 'Hilton Kelley', title: 'Community In-Power and Development Association Inc.' },
                { name: 'Dr. David McCabe', title: 'Clean Air Task Force' },
                { name: '', title: '' },
                { name: '', title: '' }
              ].map((member, idx) => (
                <div key={idx} className={`p-8 text-center flex flex-col items-center justify-center ${idx < 8 ? 'border-b border-black' : ''} ${idx % 4 !== 3 ? 'border-r border-black' : ''}`}>
                  {member.name ? (
                     <>
                        <div className="font-bold text-[15px] mb-2">{member.name}</div>
                        <div className="text-xs text-gray-500 max-w-[150px] leading-relaxed">{member.title}</div>
                     </>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Newsletter Section */}
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
                    <span className="text-sm">Acknowledge and agree to our <span className="underline decoration-1 underline-offset-2">privacy policy</span>*</span>
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

export default PartnersPage;