import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Plus, Users, Handshake, Globe, ShieldCheck } from 'lucide-react';

const PartnersPage = () => {
  return (
    <div className="w-full bg-white text-black min-h-screen font-sans">
      {/* Banner */}
      <div className="w-full h-[500px] relative overflow-hidden group">
        <Image
          src="/partner_hero.png"
          alt="Partnership for Coastal Conservation"
          fill
          className="object-cover transition-transform duration-[20s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-orange-500 text-white text-xs font-bold uppercase tracking-widest mb-6">
                Our Ecosystem
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Strength in <br />
                <span className="text-orange-500">Coalition</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed font-medium">
                Collaborating with global pioneers and local guardians to protect the world's blue carbon.
              </p>
            </div>
          </div>
        </div>
        {/* Gradient overlay at bottom left */}
        <div className="absolute bottom-0 left-0 w-2/3 md:w-1/3 h-32 bg-gradient-to-tr from-blue-900/80 to-orange-400/80 mix-blend-multiply" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12">
        {/* Breadcrumb */}
        <div className="text-gray-500 text-sm mb-12">
          <Link href="/about" className="hover:text-black transition-colors">About</Link> / <span className="text-black font-semibold">Partners</span>
        </div>

        {/* Indigenous-Led Partnerships Section */}
        <section className="mb-24 relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-orange-500 hidden md:block" />
          <div className="flex items-center gap-4 mb-8">
            <Users className="w-10 h-10 text-orange-500" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Indigenous-Led Partnerships</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl font-medium text-slate-800 mb-8 leading-relaxed">
                We believe that the most effective conservation begins with the people who know the land best.
              </p>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our on-ground truthing is conducted hand-in-hand with indigenous coastal communities through citizen science initiatives. This model empowers local guardians, ensuring they are recognized and directly rewarded with systemic social and financial benefits from carbon trading.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <Handshake className="text-orange-600 mb-2" />
                    <div className="font-bold text-slate-900">Direct Reward</div>
                    <div className="text-sm text-slate-600">Financial benefits for local guardians</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <ShieldCheck className="text-blue-600 mb-2" />
                    <div className="font-bold text-slate-900">Systemic Impact</div>
                    <div className="text-sm text-slate-600">Long-term social security</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/coastal_community.png"
                alt="Community Science"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* The GhaBCM Coalition */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Plus className="w-8 h-8 text-slate-900" strokeWidth={1.5} />
            <h2 className="text-4xl font-bold tracking-tight uppercase">The GhaBCM Coalition</h2>
          </div>

          <p className="text-lg max-w-3xl mb-12 leading-relaxed text-slate-700">
            The GhaBCM Coalition is a first-of-its-kind public-private partnership
            working to develop and deploy spatial technology that detect, quantify, and
            share facility-scale data on blue carbon. We empower mitigation
            action by bridging the gap between local efforts and global finance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-200 rounded-3xl overflow-hidden shadow-lg">
            {/* Col 1 */}
            <div className="border-b md:border-b-0 md:border-r border-slate-200">
              <div className="bg-slate-900 p-6 font-bold text-lg text-white">
                A unique partnership
              </div>
              <div className="p-10">
                <p className="text-base text-slate-600 leading-relaxed">
                  Backed by global philanthropy and led by GhaBCM, the coalition brings
                  together entities with expertise across technology, science,
                  engineering, government, and policy. Together, we are capable of
                  driving more impact than any one organization could accomplish on its
                  own.
                </p>
              </div>
            </div>
            {/* Col 2 */}
            <div>
              <div className="bg-slate-900 p-6 font-bold text-lg text-white">
                Coalition members
              </div>
              <div className="p-10 flex flex-col justify-between h-full bg-slate-50">
                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  NASA Jet Propulsion Laboratory (JPL), Planet Labs PBC, Ghana Environmental
                  Protection Agency (EPA), University of Ghana, and West African Marine Science
                  Association — along with funders, including High Tide
                  Foundation, and global climate funds.
                </p>
                <button className="flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 text-sm font-bold w-full md:w-max hover:bg-slate-800 transition-all rounded-full shadow-md">
                  View coalition announcement
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Global Collaborators */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <Globe className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold tracking-tight">Global Collaborators</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'University of Ghana', logo: 'UG', color: 'bg-blue-900' },
              { name: 'KNUST', logo: 'KNUST', color: 'bg-orange-600' },
              { name: 'UNESCO', logo: 'UNESCO', color: 'bg-blue-500' },
              { name: 'IUCN', logo: 'IUCN', color: 'bg-green-700' }
            ].map((item) => (
              <div key={item.name} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
                <div className={`w-20 h-20 ${item.color} rounded-full mb-6 flex items-center justify-center text-white font-black text-xl shadow-inner`}>
                  {item.logo}
                </div>
                <span className="font-bold text-slate-800">{item.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-[1200px] mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8 md:mb-0">
            <div className="flex gap-6">
              <Link href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">Terms of Use</Link>
            </div>
            <span className="text-slate-700 hidden md:block">|</span>
            <span className="text-slate-500">© 2025 GhaBCM. All rights reserved.</span>
          </div>
          <div className="flex gap-8 items-center">
            <Link href="#" className="font-bold hover:text-orange-500 transition-colors">Contact Us</Link>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default PartnersPage;