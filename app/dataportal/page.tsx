"use client";

import Link from "next/link";
import {
  Search,
  Filter,
  MapPin,
  Layers,
  Ruler,
  Home,
  ChevronDown,
  X,
  Plus,
  Minus,
  Navigation,
  Grid3X3,
} from "lucide-react";

export default function DataPortalPage() {
  // Sample source data
  const sources = [
    {
      id: 1,
      name: "Jining, Shandong, People's Republic of China",
      coordinates: "35.43578, 116.47612",
      acquired: "11-13-2025",
      plumes: 1,
      emissionRate: "28.3K",
      emissionUnit: "kg CO2/hr",
      uncertainty: "+/- 6.6K",
    },
    {
      id: 2,
      name: "Jining, Shandong, People's Republic of China",
      coordinates: "35.38448, 116.4427",
      acquired: "11-13-2025",
      plumes: 1,
      emissionRate: "N/A",
      emissionUnit: "kg CO2/hr",
      uncertainty: "",
    },
    {
      id: 3,
      name: "Tutora, Iași, Romania",
      coordinates: "47.15078, 27.74221",
      acquired: "11-13-2025",
      plumes: 2,
      emissionRate: "200",
      emissionUnit: "kg CH4/hr",
      uncertainty: "+/- 32",
    },
  ];

  // Sample cluster markers for the map
  const clusters = [
    { x: 8, y: 85, count: 1 },
    { x: 12, y: 35, count: 150 },
    { x: 14, y: 42, count: 1609 },
    { x: 15, y: 47, count: 4405 },
    { x: 16, y: 55, count: 65 },
    { x: 18, y: 38, count: 437 },
    { x: 20, y: 60, count: 8 },
    { x: 22, y: 35, count: 10 },
    { x: 25, y: 62, count: 2 },
    { x: 28, y: 68, count: 110 },
    { x: 30, y: 55, count: 7 },
    { x: 32, y: 70, count: 9 },
    { x: 35, y: 75, count: 69 },
    { x: 38, y: 55, count: 2 },
    { x: 40, y: 45, count: 301 },
    { x: 42, y: 50, count: 395 },
    { x: 44, y: 42, count: 512 },
    { x: 45, y: 30, count: 4 },
    { x: 48, y: 38, count: 25 },
    { x: 50, y: 35, count: 46 },
    { x: 52, y: 55, count: 12 },
    { x: 54, y: 45, count: 93 },
    { x: 55, y: 32, count: 148 },
    { x: 56, y: 50, count: 626 },
    { x: 58, y: 28, count: 64 },
    { x: 60, y: 40, count: 3 },
    { x: 62, y: 55, count: 294 },
    { x: 64, y: 62, count: 47 },
    { x: 66, y: 50, count: 198 },
    { x: 68, y: 45, count: 762 },
    { x: 70, y: 58, count: 44 },
    { x: 72, y: 35, count: 1 },
    { x: 74, y: 30, count: 4 },
    { x: 76, y: 50, count: 93 },
    { x: 78, y: 55, count: 65 },
    { x: 80, y: 38, count: 2 },
    { x: 82, y: 32, count: 10 },
    { x: 84, y: 75, count: 10 },
    { x: 86, y: 85, count: 31 },
    { x: 88, y: 70, count: 11 },
    { x: 90, y: 78, count: 1 },
    { x: 92, y: 82, count: 64 },
    { x: 15, y: 92, count: 95 },
    { x: 30, y: 88, count: 4 },
    { x: 65, y: 28, count: 20 },
    { x: 78, y: 25, count: 17 },
    { x: 60, y: 20, count: 3 },
  ];

  const getClusterSize = (count: number) => {
    if (count >= 1000) return "w-12 h-12 text-xs";
    if (count >= 100) return "w-10 h-10 text-xs";
    if (count >= 10) return "w-8 h-8 text-xs";
    return "w-6 h-6 text-[10px]";
  };

  return (
    <main className="w-full h-screen flex flex-col overflow-hidden bg-gray-100">
      {/* Top Header */}
      <header className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between z-20">
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center gap-2 bg-gray-800 rounded px-3 py-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by location, coordinate or name"
              className="bg-transparent text-sm text-white placeholder-gray-400 outline-none w-64"
            />
          </div>

          <button className="p-2 hover:bg-gray-800 rounded transition-colors">
            <Filter className="w-4 h-4 text-gray-400" />
          </button>

          <Link href="#" className="text-purple-400 text-sm hover:underline">
            Show filters
          </Link>
        </div>

        <div className="flex items-center gap-6">
          {/* Statistics */}
          <div className="flex items-center gap-4 text-sm">
            <span>
              <span className="font-bold text-white">32907</span>
              <span className="text-gray-400 ml-1">Plumes</span>
            </span>
            <span>
              <span className="font-bold text-white">11208</span>
              <span className="text-gray-400 ml-1">Sources</span>
            </span>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-white font-bold text-lg tracking-tight">
              CARBON
            </span>
            <span className="text-orange-500 font-bold text-lg tracking-tight">
              MAPPER
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 relative flex">
        {/* Left Sidebar */}
        <div className="w-12 bg-white border-r border-gray-200 flex flex-col items-center py-4 gap-2 z-10">
          <button
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            title="Home"
          >
            <Home className="w-5 h-5 text-gray-600" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            title="Layers"
          >
            <Layers className="w-5 h-5 text-gray-600" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            title="Measure"
          >
            <Ruler className="w-5 h-5 text-gray-600" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            title="Grid"
          >
            <Grid3X3 className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Map Area */}
        <div className="flex-1 relative bg-gray-200">
          {/* World Map SVG Background */}
          <div className="absolute inset-0">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              {/* Ocean Background */}
              <rect fill="#E8E8E8" width="100" height="100" />

              {/* Simplified World Map - Continents */}
              {/* North America */}
              <path
                d="M5,15 Q15,10 25,18 L28,25 Q30,35 25,40 L18,45 Q12,50 10,55 L8,48 Q5,40 8,30 Z"
                fill="#F5F5F5"
                stroke="#D0D0D0"
                strokeWidth="0.3"
              />

              {/* South America */}
              <path
                d="M20,55 Q25,52 28,58 L30,70 Q28,80 22,88 L18,85 Q15,75 17,65 Z"
                fill="#F5F5F5"
                stroke="#D0D0D0"
                strokeWidth="0.3"
              />

              {/* Europe */}
              <path
                d="M42,15 Q50,12 55,18 L58,22 Q55,28 50,30 L45,28 Q40,25 42,20 Z"
                fill="#F5F5F5"
                stroke="#D0D0D0"
                strokeWidth="0.3"
              />

              {/* Africa */}
              <path
                d="M42,35 Q52,32 55,40 L58,55 Q55,70 48,75 L42,72 Q38,60 40,45 Z"
                fill="#F5F5F5"
                stroke="#D0D0D0"
                strokeWidth="0.3"
              />

              {/* Asia */}
              <path
                d="M55,12 Q70,8 85,15 L90,25 Q88,35 80,40 L70,38 Q60,35 58,25 Z"
                fill="#F5F5F5"
                stroke="#D0D0D0"
                strokeWidth="0.3"
              />

              {/* Australia */}
              <path
                d="M78,60 Q88,58 92,65 L90,75 Q85,80 78,78 L75,70 Q75,62 78,60 Z"
                fill="#F5F5F5"
                stroke="#D0D0D0"
                strokeWidth="0.3"
              />
            </svg>
          </div>

          {/* Cluster Markers */}
          <div className="absolute inset-0 pointer-events-none">
            {clusters.map((cluster, index) => (
              <div
                key={index}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${getClusterSize(
                  cluster.count
                )} 
                  bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold 
                  shadow-lg border-2 border-purple-400 pointer-events-auto cursor-pointer hover:bg-purple-700 transition-colors`}
                style={{ left: `${cluster.x}%`, top: `${cluster.y}%` }}
              >
                {cluster.count}
              </div>
            ))}
          </div>

          {/* Map Controls - Right */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-10">
            <button className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
              <Navigation className="w-4 h-4 text-gray-600" />
            </button>
            <button className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
            <button className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
              <Minus className="w-4 h-4 text-gray-600" />
            </button>
            <div className="w-8 h-20 bg-white border border-gray-300 rounded mt-1 relative">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-3/4 bg-gray-200 rounded">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3 h-1 bg-purple-600 rounded"></div>
              </div>
            </div>
            <button className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 mt-1">
              <Layers className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Right Panel - Sources */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col z-10">
          {/* Panel Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">Sources</h2>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <Grid3X3 className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Sort */}
          <div className="px-4 py-2 border-b border-gray-100">
            <span className="text-xs text-gray-500">Sort by </span>
            <button className="text-xs text-purple-600 hover:underline inline-flex items-center gap-1">
              Date Acquired
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          {/* Sources List */}
          <div className="flex-1 overflow-y-auto">
            {sources.map((source) => (
              <div
                key={source.id}
                className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  {/* Map Preview */}
                  <div className="w-16 h-16 bg-purple-900 rounded overflow-hidden flex-shrink-0">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Source Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-purple-700 leading-tight truncate">
                      {source.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {source.coordinates}
                    </p>
                    <p className="text-xs text-gray-500">
                      Latest Acquired:{" "}
                      <span className="text-purple-600">{source.acquired}</span>
                    </p>
                    <p className="text-xs text-gray-500">
                      Plumes: {source.plumes}
                    </p>

                    <div className="mt-2">
                      <p
                        className={`text-2xl font-bold ${
                          source.emissionRate === "N/A"
                            ? "text-gray-400"
                            : "text-gray-900"
                        }`}
                      >
                        {source.emissionRate}
                        {source.uncertainty && (
                          <span className="text-sm font-normal text-gray-400 ml-1">
                            {source.uncertainty}
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-orange-500">
                        Source Emission Rate ({source.emissionUnit})
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Statistics Button */}
          <div className="p-4 border-t border-gray-200">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Summary Statistics
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <footer className="bg-white border-t border-gray-200 px-4 py-2 flex items-center justify-between text-xs text-gray-500 z-20">
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="font-medium">mapbox</span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-gray-700">
            Terms of Use ↗
          </Link>
          <Link href="#" className="hover:text-gray-700">
            carbonmapper.org ↗
          </Link>
          <Link href="#" className="hover:text-gray-700">
            Data Providers
          </Link>
          <Link href="#" className="hover:text-gray-700">
            Acknowledgments
          </Link>
        </div>

        <div className="text-gray-400">
          © Mapbox © OpenStreetMap Improve this map © Maxar
        </div>
      </footer>
    </main>
  );
}
