"use client";

import Link from "next/link";

export default function ContentPage() {
  const featuredArticles = [
    {
      id: 1,
      image: "accelerating",
      category: "Press",
      title:
        "From Space Detection To Rapid Response: New End-To-End Global Methane Emissions Reduction Effort Launched by Bloomberg Philanthropies and Partners",
    },
    {
      id: 2,
      image: "earth",
      category: "",
      title: "Detecting Methane from Offshore Oil and Gas Activity",
    },
  ];

  const newsArticles = [
    {
      id: 1,
      image: "tanager",
      title: "Carbon Mapper Shares New Tanager-1 Data to...",
    },
    {
      id: 2,
      image: "cop",
      title: "What COP30 Signaled about Global Methane...",
    },
    {
      id: 3,
      image: "detection",
      title: "From Space Detection To Rapid Response: New End...",
    },
    {
      id: 4,
      image: "mapper",
      title: "Carbon Mapper...",
    },
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Cdefs%3E%3ClinearGradient id='spaceGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23000010'/%3E%3Cstop offset='50%25' style='stop-color:%23000020'/%3E%3Cstop offset='100%25' style='stop-color:%23000030'/%3E%3C/linearGradient%3E%3CradialGradient id='earthGrad2' cx='80%25' cy='50%25' r='40%25'%3E%3Cstop offset='0%25' style='stop-color:%234169E1'/%3E%3Cstop offset='50%25' style='stop-color:%231E90FF'/%3E%3Cstop offset='100%25' style='stop-color:%23000020' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23spaceGrad)' width='1200' height='400'/%3E%3Cellipse cx='1000' cy='200' rx='300' ry='250' fill='url(%23earthGrad2)'/%3E%3C/svg%3E")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        {/* Orange accent */}
        <div className="absolute bottom-0 right-1/4 w-32 h-16 bg-gradient-to-t from-orange-400 to-transparent opacity-60"></div>
        <div className="absolute bottom-8 left-8">
          <p className="text-white text-lg font-medium">Content Hub</p>
        </div>
      </section>

      {/* Content Hub Intro Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-purple-600">+</span> Content Hub
        </h2>
        <p className="text-gray-600 mb-8">
          Dive into our science, research, stories, and educational resources.
        </p>
        <Link
          href="/resources"
          className="inline-block px-6 py-3 border border-gray-900 rounded text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
        >
          View all resources
        </Link>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-purple-600">+</span> Featured
        </h2>
        <p className="text-gray-600 mb-8">
          Check out the latest Content Hub resources.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Featured Article 1 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[200px] bg-blue-900">
              <div
                className="absolute inset-0 flex items-center justify-center p-6"
                style={{
                  background:
                    "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                }}
              >
                <div className="text-white text-center">
                  <p className="text-lg font-light mb-1">Accelerating</p>
                  <p className="text-2xl font-bold">global efforts to</p>
                  <p className="text-2xl font-bold text-cyan-400">
                    cut methane emissions.
                  </p>
                </div>
              </div>
              <span className="absolute bottom-2 left-2 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">
                Press
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-purple-900 leading-tight mb-4">
                From Space Detection To Rapid Response: New End-To-End Global
                Methane Emissions Reduction Effort Launched by Bloomberg
                Philanthropies and Partners
              </h3>
              <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
            </div>
          </div>

          {/* Featured Article 2 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[200px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Cdefs%3E%3CradialGradient id='earthView' cx='50%25' cy='50%25' r='60%25'%3E%3Cstop offset='0%25' style='stop-color:%234169E1'/%3E%3Cstop offset='30%25' style='stop-color:%231E90FF'/%3E%3Cstop offset='60%25' style='stop-color:%2300008B'/%3E%3Cstop offset='100%25' style='stop-color:%23000020'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='%23000020' width='400' height='200'/%3E%3Ccircle cx='200' cy='100' r='80' fill='url(%23earthView)'/%3E%3Ccircle cx='180' cy='90' r='15' fill='%2390EE90' opacity='0.5'/%3E%3Ccircle cx='220' cy='110' r='10' fill='%2390EE90' opacity='0.4'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-purple-900 leading-tight mb-4">
                Detecting Methane from Offshore Oil and Gas Activity
              </h3>
              <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-purple-600">+</span> News
        </h2>
        <p className="text-gray-600 mb-8">
          Learn more about Carbon Mapper's methodology, technology, and
          processes to uncover methane and CO₂ emissions.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {/* News Card 1 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[140px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  background:
                    "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg opacity-80"></div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                Carbon Mapper Shares New Tanager-1 Data to...
              </h3>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[140px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 140'%3E%3Crect fill='%23f5f5f5' width='200' height='140'/%3E%3Crect x='20' y='30' width='60' height='80' fill='%23e0e0e0'/%3E%3Crect x='100' y='40' width='80' height='60' fill='%23d0d0d0'/%3E%3Ccircle cx='100' cy='70' r='20' fill='%23c0c0c0'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                What COP30 Signaled about Global Methane...
              </h3>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[140px]">
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                }}
              >
                <span className="text-white text-xs font-medium px-2 py-1 bg-black/20 rounded">
                  Join the global emissions...
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                From Space Detection To Rapid Response: New End...
              </h3>
            </div>
          </div>

          {/* News Card 4 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[140px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 140'%3E%3Crect fill='%23e8f4e8' width='200' height='140'/%3E%3Crect x='0' y='100' width='200' height='40' fill='%23228B22' opacity='0.3'/%3E%3Ccircle cx='100' cy='60' r='30' fill='%2387CEEB' opacity='0.5'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                Carbon Mapper...
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Data Dispatch Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative">
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-blue-600 hidden lg:block"></div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-purple-600">+</span> Data Dispatch
        </h2>
        <p className="text-gray-600 mb-8">
          Discover insights from Carbon Mapper's Data Portal that highlight
          transparency through accessible methane and CO₂ emissions data.
        </p>

        <div className="grid md:grid-cols-4 gap-6 pr-0 lg:pr-28">
          {/* Data Dispatch Card 1 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[120px]">
              <span className="absolute top-2 left-2 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded z-10">
                Data Dispatch
              </span>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23556B2F' width='200' height='120'/%3E%3Crect x='50' y='30' width='40' height='30' fill='%23808080' opacity='0.5'/%3E%3Crect x='100' y='50' width='50' height='40' fill='%23A9A9A9' opacity='0.4'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2">
                Detecting Methane from Offshore Oil and Gas Activity
              </h3>
              <p className="text-xs text-gray-500">Published on Oct 08, 2024</p>
            </div>
          </div>

          {/* Data Dispatch Card 2 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[120px]">
              <span className="absolute top-2 left-2 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded z-10">
                Data Dispatch
              </span>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%2387CEEB' width='200' height='120'/%3E%3Ccircle cx='100' cy='60' r='40' fill='%23FFFFFF' opacity='0.6'/%3E%3Ccircle cx='80' cy='50' r='20' fill='%23E0E0E0' opacity='0.5'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2">
                Seeing Around the Clouds
              </h3>
              <p className="text-xs text-gray-500">Published on Jun 06, 2024</p>
            </div>
          </div>

          {/* Data Dispatch Card 3 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[120px]">
              <span className="absolute top-2 left-2 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded z-10">
                Data Dispatch
              </span>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23E8E8E8' width='200' height='120'/%3E%3Crect x='20' y='80' width='160' height='40' fill='%23FFFFFF'/%3E%3Crect x='40' y='40' width='120' height='60' fill='%23D0D0D0'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2">
                Observing Methane at High Latitudes
              </h3>
              <p className="text-xs text-gray-500">Published on May 08, 2024</p>
            </div>
          </div>

          {/* Data Dispatch Card 4 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[120px]">
              <span className="absolute top-2 left-2 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded z-10">
                Data Dispatch
              </span>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23F5F5DC' width='200' height='120'/%3E%3Crect x='30' y='20' width='60' height='80' fill='%23D2B48C' opacity='0.5'/%3E%3Crect x='110' y='40' width='60' height='60' fill='%23DEB887' opacity='0.4'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2">
                Repeat Observations of Global Methane S...
              </h3>
              <p className="text-xs text-gray-500">Published on Apr 07, 2024</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/data-dispatch"
            className="inline-block px-6 py-3 border border-gray-900 rounded text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
          >
            View more
          </Link>
        </div>
      </section>

      {/* Research and Analysis Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative">
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-blue-600 hidden lg:block"></div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-purple-600">+</span> Research and Analysis
        </h2>
        <p className="text-gray-600 mb-8">
          Dive into in-depth analyses of Carbon Mapper's research.
        </p>

        <div className="grid md:grid-cols-4 gap-6 pr-0 lg:pr-28">
          {/* Research Card 1 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[120px]">
              <span className="absolute top-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs font-medium rounded z-10">
                Research and Analysis
              </span>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  background:
                    "linear-gradient(135deg, #4B0082 0%, #6B21A8 100%)",
                }}
              ></div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2">
                Methane Waste Super-emitters: An Opportunity for Global Action
                in the Waste Sector
              </h3>
              <p className="text-xs text-gray-500">Published on Jun 25, 2024</p>
            </div>
          </div>

          {/* Research Card 2 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[120px]">
              <span className="absolute top-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs font-medium rounded z-10">
                Research and Analysis
              </span>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23F5F5DC' width='200' height='120'/%3E%3Crect x='20' y='60' width='160' height='60' fill='%23D2B48C' opacity='0.3'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2">
                The Near-Term Mitigation Opportunity of Super-Emitters - A Case
                Study in the Permian Basin
              </h3>
              <p className="text-xs text-gray-500">Published on Mar 18, 2024</p>
            </div>
          </div>

          {/* Research Card 3 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[120px]">
              <span className="absolute top-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs font-medium rounded z-10">
                Research and Analysis
              </span>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%2390EE90' width='200' height='120'/%3E%3Crect x='0' y='80' width='200' height='40' fill='%23228B22' opacity='0.3'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2">
                Quantifying methane emissions from United States landfills
              </h3>
              <p className="text-xs text-gray-500">Published on Mar 28, 2024</p>
            </div>
          </div>

          {/* Research Card 4 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[120px]">
              <span className="absolute top-2 left-2 px-2 py-1 bg-purple-600 text-white text-xs font-medium rounded z-10">
                Research and Analysis
              </span>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23D2691E' width='200' height='120'/%3E%3Crect x='40' y='20' width='120' height='80' fill='%23F4A460' opacity='0.4'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2">
                Empirical methane emissions intensity for gas production sites
                in Permian B...
              </h3>
              <p className="text-xs text-gray-500">Published on Feb 14, 2024</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/research"
            className="inline-block px-6 py-3 border border-gray-900 rounded text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
          >
            View more
          </Link>
        </div>
      </section>

      {/* Technical Resources Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <span className="text-purple-600">+</span> Technical Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Technical Resource 1 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[100px]">
              <span className="absolute top-2 left-2 px-2 py-1 bg-gray-600 text-white text-xs font-medium rounded z-10">
                Technical Resource
              </span>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #E0E0E0 0%, #F5F5F5 100%)",
                }}
              ></div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2">
                Product Guide: Data Definition & Specification
              </h3>
              <p className="text-xs text-gray-500">Published on Feb 14, 2024</p>
            </div>
          </div>

          {/* Technical Resource 2 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[100px]">
              <span className="absolute top-2 left-2 px-2 py-1 bg-gray-600 text-white text-xs font-medium rounded z-10">
                Technical Resource
              </span>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #E0E0E0 0%, #F5F5F5 100%)",
                }}
              ></div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2">
                Tanager Methane Performance Specifications
              </h3>
              <p className="text-xs text-gray-500">Published on Jan 24, 2024</p>
            </div>
          </div>

          {/* Technical Resource 3 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-[100px]">
              <span className="absolute top-2 left-2 px-2 py-1 bg-gray-600 text-white text-xs font-medium rounded z-10">
                Technical Resource
              </span>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #E0E0E0 0%, #F5F5F5 100%)",
                }}
              ></div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2">
                Carbon Mapper Quality Control Description Document
              </h3>
              <p className="text-xs text-gray-500">Published on Jan 24, 2024</p>
            </div>
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
