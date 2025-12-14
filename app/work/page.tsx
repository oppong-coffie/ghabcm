"use client";

import Link from "next/link";
import { Database, Microscope, Leaf, GraduationCap } from "lucide-react";

export default function WorkPage() {
  return (
    <main className="w-full">
      {/* Hero Section with Aerial View */}
      <section className="relative h-[350px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Cdefs%3E%3ClinearGradient id='aerialGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23556B2F'/%3E%3Cstop offset='30%25' style='stop-color:%23708090'/%3E%3Cstop offset='60%25' style='stop-color:%23A0A0A0'/%3E%3Cstop offset='100%25' style='stop-color:%23808080'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23aerialGrad)' width='1200' height='400'/%3E%3Crect x='100' y='50' width='200' height='100' fill='%23D3D3D3' opacity='0.5'/%3E%3Crect x='400' y='100' width='150' height='80' fill='%23C0C0C0' opacity='0.4'/%3E%3Crect x='700' y='80' width='180' height='120' fill='%23A9A9A9' opacity='0.3'/%3E%3Ccircle cx='300' cy='200' r='30' fill='%23228B22' opacity='0.4'/%3E%3Ccircle cx='600' cy='250' r='40' fill='%23228B22' opacity='0.3'/%3E%3C/svg%3E")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
        </div>
        <div className="absolute bottom-8 left-8">
          <p className="text-white text-lg font-medium">Our Work</p>
        </div>
      </section>

      {/* Theory of change Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <span className="text-purple-600">+</span> Theory of change
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Studies have shown that a relatively small number of high-emission
              point sources – also referred to as super-emitters – can have a
              disproportionate impact on regional methane emissions. With more
              frequent monitoring, we can find and address these large sources
              to quickly and efficiently reduce methane and CO₂ emissions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Reducing greenhouse gas emissions across sectors requires
              continued monitoring and an understanding of the challenges to
              successful mitigation. Detecting, pinpointing, and quantifying
              emissions can provide industry operators and policymakers the
              information they need to guide decision-making. This is a goal
              we're proud to advance each day.
            </p>
          </div>

          {/* Right Image - Thermal/Heatmap */}
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='thermalGrad' x1='0%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%23000080'/%3E%3Cstop offset='25%25' style='stop-color:%234B0082'/%3E%3Cstop offset='50%25' style='stop-color:%23FF4500'/%3E%3Cstop offset='75%25' style='stop-color:%23FFD700'/%3E%3Cstop offset='100%25' style='stop-color:%23FFFFFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23000033' width='400' height='300'/%3E%3Cellipse cx='200' cy='150' rx='150' ry='100' fill='url(%23thermalGrad)' opacity='0.8'/%3E%3Cellipse cx='180' cy='140' rx='80' ry='60' fill='%23FF6347' opacity='0.6'/%3E%3Cellipse cx='200' cy='150' rx='40' ry='30' fill='%23FFD700' opacity='0.7'/%3E%3Ccircle cx='200' cy='150' r='15' fill='%23FFFFFF' opacity='0.9'/%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Our priorities Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-gray-200">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-purple-600">+</span> Our priorities
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              We're focused on four key priorities: filling data gaps, advancing
              scientific understanding, driving mitigation through
              collaboration, and advancing education and insights on emissions
              data.
            </p>
          </div>
          <Link
            href="/priorities"
            className="px-6 py-3 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View our priorities
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Data Card */}
          <div className="space-y-4">
            <div className="w-16 h-16 flex items-center justify-center">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-purple-600 opacity-80"></div>
                <div className="absolute top-2 left-6 w-6 h-6 rounded-full bg-orange-400"></div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-purple-900">Data</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Filling data gaps in methane and CO₂ emissions with remote
              airborne and satellite observations.
            </p>
          </div>

          {/* Science Card */}
          <div className="space-y-4">
            <div className="w-16 h-16 flex items-center justify-center">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-4 border-purple-600 border-dashed"></div>
                <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-orange-400"></div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-purple-900">Science</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Advancing scientific understanding of super-emitters by using
              remote sensing tools to verify, and monitor methane and CO₂.
            </p>
          </div>

          {/* Mitigation Card */}
          <div className="space-y-4">
            <div className="w-16 h-16 flex items-center justify-center">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-purple-200"></div>
                <div className="absolute -top-1 left-4 w-4 h-4 rounded-full bg-purple-600"></div>
                <div className="absolute top-6 -left-1 w-3 h-3 rounded-full bg-orange-400"></div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-purple-900">Mitigation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Driving mitigation through collaboration with industry,
              nonprofits, policymakers, and other stakeholders to build
              technical capacity and develop emission mitigation solutions.
            </p>
          </div>

          {/* Education and insights Card */}
          <div className="space-y-4">
            <div className="w-16 h-16 flex items-center justify-center">
              <div className="relative">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                  <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                </div>
                <div className="mt-1 flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-orange-300"></div>
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                </div>
                <div className="mt-1 flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-purple-900">
              Education and insights
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Apply our expertise in researching and translating our data to
              provide policy-relevant insights and tools to support
              understanding and accelerate decarbonizing warming emissions data.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Image Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Cdefs%3E%3ClinearGradient id='earthGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23000020'/%3E%3Cstop offset='50%25' style='stop-color:%23001040'/%3E%3Cstop offset='100%25' style='stop-color:%23000030'/%3E%3C/linearGradient%3E%3CradialGradient id='sunGrad' cx='80%25' cy='30%25' r='30%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFD700'/%3E%3Cstop offset='50%25' style='stop-color:%23FFA500'/%3E%3Cstop offset='100%25' style='stop-color:%23FF4500' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='earthSurface' cx='50%25' cy='80%25' r='60%25'%3E%3Cstop offset='0%25' style='stop-color:%234169E1'/%3E%3Cstop offset='40%25' style='stop-color:%231E90FF'/%3E%3Cstop offset='70%25' style='stop-color:%2300008B'/%3E%3Cstop offset='100%25' style='stop-color:%23000020'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23earthGrad)' width='1200' height='400'/%3E%3Cellipse cx='600' cy='600' rx='700' ry='400' fill='url(%23earthSurface)'/%3E%3Ccircle cx='950' cy='100' r='80' fill='url(%23sunGrad)'/%3E%3C/svg%3E")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </section>

      {/* How Carbon Mapper fits into the landscape */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <span className="text-purple-600">+</span> How Carbon Mapper
          <br />
          <span className="ml-6">fits into the landscape</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              There is a growing ecosystem of monitoring technologies, tools and
              organizations that are providing more transparent and accessible
              methane emissions data to drive action.
            </p>
            <p className="text-gray-600 leading-relaxed">
              These types of monitoring range from tools that provide greater
              visibility into the aggregated totals of methane over wide areas
              to tools that pinpoint some of the largest – and mitigable –
              emission events at their source. To see technology can enable
              emissions. A portfolio of technologies and approaches, including
              ground, airborne, and satellite observations tools, is needed to
              provide decision-makers with a complete picture of global
              emissions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Carbon Mapper is contributing to this ecosystem by identifying
              emissions down to the source at individual facilities and aiming
              to provide direct mitigation guidance to operators and
              decision-makers who are implementing actions on the ground. We do
              this through our unique position to detect and clearly
              methane-emitting assets by making our data accessible and
              actionable, and working with stakeholders to drive emissions
              reductions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ultimately, our goal at Carbon Mapper is to provide sustained
              monitoring of up to 80% of methane and CO₂ super-emitters globally
              via a satellite constellation.
            </p>
          </div>

          {/* Right - Pyramid Illustration */}
          <div className="relative h-[400px] flex items-center justify-center">
            <svg viewBox="0 0 300 300" className="w-full h-full max-w-[350px]">
              {/* Pyramid layers */}
              <polygon
                points="150,30 280,250 20,250"
                fill="#E8E0F0"
                stroke="#9B7BB8"
                strokeWidth="1"
              />
              <line
                x1="150"
                y1="30"
                x2="150"
                y2="250"
                stroke="#C0B0D0"
                strokeWidth="1"
                strokeDasharray="4"
              />
              <line
                x1="85"
                y1="140"
                x2="215"
                y2="140"
                stroke="#C0B0D0"
                strokeWidth="1"
                strokeDasharray="4"
              />
              <line
                x1="52"
                y1="200"
                x2="248"
                y2="200"
                stroke="#C0B0D0"
                strokeWidth="1"
                strokeDasharray="4"
              />

              {/* Satellite beam */}
              <line
                x1="260"
                y1="20"
                x2="150"
                y2="100"
                stroke="#6B21A8"
                strokeWidth="2"
              />
              <line
                x1="260"
                y1="20"
                x2="200"
                y2="140"
                stroke="#6B21A8"
                strokeWidth="1"
                opacity="0.5"
              />
              <line
                x1="260"
                y1="20"
                x2="180"
                y2="160"
                stroke="#6B21A8"
                strokeWidth="1"
                opacity="0.3"
              />

              {/* Satellite */}
              <rect x="250" y="10" width="20" height="12" fill="#4B0082" />
              <rect x="245" y="14" width="8" height="4" fill="#6B21A8" />
              <rect x="267" y="14" width="8" height="4" fill="#6B21A8" />

              {/* Ground elements */}
              <circle cx="80" cy="230" r="8" fill="#F97316" />
              <circle cx="150" cy="235" r="6" fill="#F97316" opacity="0.7" />
              <circle cx="220" cy="225" r="5" fill="#F97316" opacity="0.5" />

              {/* Label */}
              <text
                x="270"
                y="45"
                fontSize="10"
                fill="#6B21A8"
                fontWeight="bold"
              >
                DIC
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* Leveraging emissions data Section */}
      <section className="py-16 px-6 bg-amber-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Leveraging emissions data
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Carbon Mapper data can also be used, alongside other data sources,
            to help improve emissions accounting. We work closely with
            organizations and initiatives that are tackling different parts of
            the methane and CO₂ measurement and monitoring challenges to
            complement monitoring, increase coverage, and maximize impact.
          </p>

          <Link
            href="/science"
            className="inline-block px-6 py-3 border border-gray-900 rounded text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
          >
            View science and technology
          </Link>
        </div>
      </section>

      {/* Learn more Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-2">
          <span className="text-purple-600">+</span> Learn more
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sectors of focus */}
          <div className="border-t-2 border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Sectors of focus
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our efforts focus on industrial sectors where fugitive/ high
              emission methane and CO₂ point sources are found including oil and
              gas, coal, waste/landfills generation, waste, and large livestock
              operations.
            </p>
            <Link
              href="/sectors"
              className="inline-block px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              View sectors of focus
            </Link>
          </div>

          {/* Science and technology */}
          <div className="border-t-2 border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Science and technology
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our science and research team is at the forefront of using remote
              sensing to detect, pinpoint and quantify methane and CO₂
              emissions. Leveraging deep scientific expertise and a long history
              of research, we translate scientific results into action through
              peer-reviewed studies published in peer-reviewed literature.
            </p>
            <Link
              href="/science"
              className="inline-block px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              View science and technology
            </Link>
          </div>

          {/* Impact */}
          <div className="border-t-2 border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Impact</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our impact ranges from advancing data accessibility and providing
              science to driving mitigation actions that reduce harmful methane
              and CO₂ emissions.
            </p>
            <Link
              href="/impact"
              className="inline-block px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              View our Impact
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-12 flex items-center gap-2">
            Subscribe to our newsletter{" "}
            <span className="text-orange-400">+</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Award Badge */}
            <div className="flex items-start">
              <div className="bg-red-500 text-white p-6 rounded-lg max-w-[200px]">
                <div className="text-black font-bold text-sm mb-2">
                  FASTCOMPANY
                </div>
                <div className="flex justify-center mb-2">
                  <div className="grid grid-cols-3 gap-1">
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                  </div>
                </div>
                <div className="text-center text-xs text-white">
                  <div className="font-bold">World</div>
                  <div className="font-bold">Changing</div>
                  <div className="font-bold">Ideas</div>
                  <div className="text-white/70 mt-1">2024</div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border-b border-gray-300 focus:border-purple-600 outline-none transition-colors bg-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border-b border-gray-300 focus:border-purple-600 outline-none transition-colors bg-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border-b border-gray-300 focus:border-purple-600 outline-none transition-colors bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border-b border-gray-300 focus:border-purple-600 outline-none transition-colors bg-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 border-gray-300 rounded"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      I acknowledge and agree to our{" "}
                      <a href="#" className="text-purple-600 hover:underline">
                        privacy policy
                      </a>
                      *
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-600">
                      Opt into email communications, including the newsletter
                    </span>
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 border border-gray-900 text-gray-900 font-medium rounded hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    Subscribe
                  </button>
                </div>

                <p className="text-xs text-gray-500 pt-2">*Required Fields</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Terms of Use
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
