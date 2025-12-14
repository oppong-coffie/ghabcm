"use client";

import { ArrowRight, Globe, Building2, Code2 } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero Section with Map Background */}
      <section className="relative h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Cdefs%3E%3ClinearGradient id='mapGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%239DC4D4'/%3E%3Cstop offset='50%25' style='stop-color:%23A8D0D8'/%3E%3Cstop offset='100%25' style='stop-color:%23B5DCD5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23mapGrad)' width='1200' height='400'/%3E%3C/svg%3E")`,
          }}
        >
          {/* Map overlay pattern */}
          <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-500"></div>
        </div>
        <div className="absolute bottom-8 left-8">
          <p className="text-gray-700 text-lg font-medium">
            Accessible and actionable emissions data
          </p>
        </div>
      </section>

      {/* About our data Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <span className="text-purple-600">+</span> About our data
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Overview</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our data portal includes observations of methane and CO₂
                super-emitters across the globe. Data is sourced from multiple
                sensors onboard aircraft, satellites, and other space-based
                systems. It's added to the portal on a frequent and ongoing
                basis.
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Product guide
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Data FAQs
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Quality Control document
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[280px] bg-gray-100">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='heatGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23E8E8E8'/%3E%3Cstop offset='100%25' style='stop-color:%23D0D0D0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23heatGrad)' width='400' height='300'/%3E%3Ccircle cx='200' cy='150' r='80' fill='%234B0082' opacity='0.3'/%3E%3Ccircle cx='180' cy='140' r='50' fill='%238B008B' opacity='0.4'/%3E%3Ccircle cx='220' cy='160' r='40' fill='%23FF00FF' opacity='0.3'/%3E%3Ccircle cx='160' cy='130' r='25' fill='%23FF69B4' opacity='0.5'/%3E%3Ccircle cx='240' cy='170' r='20' fill='%23FFB6C1' opacity='0.4'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who can use the data Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-2">
          <span className="text-purple-600">+</span> Who can use the data?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Public access Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <Globe className="w-12 h-12 text-purple-600" strokeWidth={1} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Public access
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our data is intended to support the public good. It's available
              for non-commercial use by governments, facility operators,
              nonprofits, journalists, researchers, and others working to reduce
              greenhouse gas emissions.
            </p>
            <button className="px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
              View our Terms of Use
            </button>
          </div>

          {/* Commercial use Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-4 border-purple-600 border-dashed flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-orange-400"></div>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Commercial use
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              For commercial use or redistribution of Carbon Mapper data, please
              review our Terms of Use and contact us. For non-methane and carbon
              dioxide data from the Planet Tanager constellation, contact Planet
              directly.
            </p>
            <button className="px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
              Contact us
            </button>
          </div>

          {/* Data for developers Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="w-16 h-16 mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                </div>
                <div className="mt-1 flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>
                <div className="absolute -top-2 right-0 px-1 bg-gray-100 text-[8px] text-gray-500 rounded">
                  API
                </div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Data for developers
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We make it easy to integrate our data with external applications.
              Register for an account through our data portal to get started.
            </p>
            <button className="px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
              Register
            </button>
          </div>
        </div>
      </section>

      {/* Using our APIs Section */}
      <section className="py-16 px-6 bg-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-orange-400">+</span> Using our APIs
          </h2>

          <p className="text-purple-200 max-w-3xl mb-8 leading-relaxed">
            Whether you are a developer building applications or a researcher
            seeking valuable insights, our APIs provide seamless programmatic
            access to our data. To start using our APIs and integrating the data
            with other applications, register through our data portal.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/api/data"
              className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white font-medium rounded transition-colors"
            >
              Data API
            </Link>
            <Link
              href="/api/stac"
              className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white font-medium rounded transition-colors"
            >
              STAC API
            </Link>
            <Link
              href="/register"
              className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white font-medium rounded transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </section>

      {/* Precise data from trusted sources Section */}
      <section className="py-16 px-6 bg-blue-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-purple-600">+</span> Precise data from trusted
            sources
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Our portal incorporates data from various remote sensing systems,
              including spaceborne measurements from NASA's EMIT sensor on the
              International Space Station, as well as dedicated campaigns
              utilizing advanced airborne platforms, such as NASA's AVIRIS-NG
              and Arizona State University's Center for Global Discovery and
              Conservation Science (GDCS) Global Airborne Observatory.
            </p>
            <p>
              In the near future, our portal will include data from the Carbon
              Mapper Coalition's first satellite (called Tanager-1 developed by
              Planet Labs using technology from NASA's Jet Propulsion
              Laboratory). The Tanager satellite program is being developed and
              deployed through a public-private partnership with the Carbon
              Mapper Coalition.
            </p>
          </div>
        </div>
      </section>

      {/* Three Column Info Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* The Remote sensing landscape */}
          <div className="border-t-2 border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              The Remote sensing landscape
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Remote sensing via satellites is a good solution to quickly find
              large emissions events. A period of time may elapse between
              initial detection and verification on site. Remote sensing is most
              useful when leveraged as part of a portfolio of technologies and
              approaches to emissions monitoring, including ground, airborne,
              and satellite tools. Our data can then be used to help prioritize
              mitigation and abatement investments.
            </p>
          </div>

          {/* Data to support action */}
          <div className="border-t-2 border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Data to support action
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our data helps fill gaps in understanding the observed scope of
              methane and CO₂ emissions and support direct mitigation from
              facility and facility operators.
            </p>
            <button className="px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Read more about our Impact
            </button>
          </div>

          {/* Questions about our data? */}
          <div className="border-t-2 border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Questions about our data?
            </h3>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4">
              <p>
                For info about our data, contact{" "}
                <a
                  href="mailto:data@carbonmapper.org"
                  className="text-purple-600 hover:underline"
                >
                  data@carbonmapper.org
                </a>
              </p>
              <p>
                For info on leak detection services, contact{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Planet Labs
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More data information Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="text-purple-600">+</span> More data information
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl">
          Don't see what you're looking for or have questions on how to
          interpret our data? Have questions about additional licensing options,
          including redistributing our data? Contact us.
        </p>

        <button className="px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          Contact us
        </button>
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
              <div className="bg-black text-white p-6 rounded-lg max-w-[200px]">
                <div className="text-red-500 font-bold text-sm mb-2">
                  FASTCOMPANY
                </div>
                <div className="flex justify-center mb-2">
                  <div className="grid grid-cols-3 gap-1">
                    <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                    <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                    <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                    <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                    <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                    <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                  </div>
                </div>
                <div className="text-center text-xs">
                  <div className="font-bold">World</div>
                  <div className="font-bold">Changing</div>
                  <div className="font-bold">Ideas</div>
                  <div className="text-gray-400 mt-1">2024</div>
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
    </main>
  );
}
