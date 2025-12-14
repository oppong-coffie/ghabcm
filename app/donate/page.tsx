"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

export default function DonatePage() {
  const waysToGive = [
    "Donations by mail",
    "Wire transfers",
    "Donor-advised funds",
    "Gifts of stock",
    "Bequests",
    "Qualified charitable distributions",
  ];

  return (
    <main className="w-full">
      {/* Hero Section - Aerial Map View */}
      <section className="relative h-[350px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Cdefs%3E%3ClinearGradient id='desertGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23C4A574'/%3E%3Cstop offset='30%25' style='stop-color:%23D4B584'/%3E%3Cstop offset='60%25' style='stop-color:%23B89B64'/%3E%3Cstop offset='100%25' style='stop-color:%23A08B54'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23desertGrad)' width='1200' height='400'/%3E%3Crect x='0' y='50' width='400' height='300' fill='%23556B2F' opacity='0.3'/%3E%3Crect x='500' y='100' width='300' height='200' fill='%23808080' opacity='0.4'/%3E%3Crect x='900' y='80' width='200' height='150' fill='%23696969' opacity='0.3'/%3E%3Ccircle cx='1050' cy='100' r='30' fill='%234169E1' opacity='0.6'/%3E%3Ccircle cx='1100' cy='150' r='20' fill='%234169E1' opacity='0.5'/%3E%3Cpath d='M100,200 Q300,150 500,200 T900,180' stroke='%23708090' stroke-width='3' fill='none' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </section>

      {/* Breadcrumb */}
      <section className="py-6 px-6 max-w-7xl mx-auto border-b border-gray-200">
        <p className="text-sm text-gray-500">
          About / <span className="text-gray-900">Get Involved</span>
        </p>
      </section>

      {/* Make a difference Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="text-purple-600">+</span> Make a difference in
          climate action
        </h2>

        <div className="max-w-3xl space-y-6">
          <p className="text-gray-600 leading-relaxed">
            As a 501(c)(3) nonprofit organization, we rely on the generosity of
            our philanthropic funders. We accept donations from those who want
            to share in our public good mission to drive greenhouse gas
            emissions reductions with science-backed data and research.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Support accessibility and transparency in methane emissions towards
            future climate and public health.
          </p>

          <div className="pt-4">
            <Link
              href="https://donate.carbonmapper.org"
              className="inline-block px-8 py-3 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-8 pt-8 border-t border-gray-200 mt-8">
            {/* Platinum Transparency Badge */}
            <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L17.5 8 12 11.5 6.5 8 12 4.5zM5.5 9.5l5.5 3v6l-5.5-3.5v-5.5zm13 0v5.5l-5.5 3.5v-6l5.5-3z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Platinum</p>
                <p className="text-xs text-gray-500">Transparency</p>
                <p className="text-sm font-bold text-gray-900">2025</p>
                <p className="text-xs text-gray-500">Candid.</p>
              </div>
            </div>

            {/* Charity Navigator Badge */}
            <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="text-xs font-medium text-gray-700 mb-1">
                  Charity
                </p>
                <p className="text-xs font-medium text-gray-700">Navigator</p>
                <div className="flex gap-0.5 mt-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                  <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                  <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                  <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">★ FOUR STAR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to give Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <span className="text-purple-600">+</span> Ways to give
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Description */}
          <div>
            <p className="text-gray-900 font-medium mb-4">
              Carbon Mapper can accept the following types of donations:
            </p>
          </div>

          {/* Right - List of ways */}
          <div className="space-y-0">
            {waysToGive.map((way, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-4 border-t border-gray-200 first:border-t-0"
              >
                <Plus className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-gray-800">{way}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in touch Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="text-purple-600">+</span> Get in touch
        </h2>

        <div className="max-w-2xl space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Reach out to speak with us about other ways to make a contribution.
            For donation inquiries, please contact Amanda Storm, Director of
            Development, for donation inquiries.
          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stay in touch Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-purple-600">+</span> Stay in touch
        </h2>

        <p className="text-gray-600 mb-6">
          To see how your gift can be put to good use, subscribe here.
        </p>

        <Link
          href="#newsletter"
          className="inline-block px-6 py-3 bg-purple-900 text-white font-medium rounded hover:bg-purple-800 transition-colors"
        >
          Subscribe
        </Link>
      </section>

      {/* Funding & policies Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <span className="text-purple-600">+</span> Funding & policies
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Description */}
          <div className="border border-gray-200 p-6 rounded-lg">
            <p className="text-gray-600 leading-relaxed">
              Carbon Mapper, Inc. is a 501(c)(3) nonprofit organization focused
              on making emissions data accessible and actionable to drive
              reductions. These efforts are made possible by the generous
              support of our philanthropic donors. Review our policies and
              financial statements below.
            </p>
          </div>

          {/* Right - Links */}
          <div className="space-y-0">
            <Link
              href="#"
              className="flex items-center gap-4 py-4 border-t border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <span className="text-gray-800">IRS Federal Form 990 (2024)</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 py-4 border-t border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <span className="text-gray-800">IRS Federal Form 990 (2023)</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 py-4 border-t border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <span className="text-gray-800">IRS Federal Form 990 (2022)</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 py-4 border-t border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <span className="text-gray-800">IRS Federal Form 990 (2021)</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 py-4 border-t border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <span className="text-gray-800">
                Audited Financial Statements (2024)
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 py-4 border-t border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <span className="text-gray-800">
                Audited Financial Statements (2023)
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 py-4 border-t border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <span className="text-gray-800">
                Audited Financial Statements (2022)
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 py-4 border-t border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <span className="text-gray-800">
                Audited Financial Statements (2021)
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 py-4 border-t border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <span className="text-gray-800">Indirect Cost Policy</span>
            </Link>
            <Link
              href="/privacy"
              className="flex items-center gap-4 py-4 border-t border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <span className="text-gray-800">Privacy Policy</span>
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
