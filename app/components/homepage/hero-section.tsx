"use client";

export function HeroSection() {
  return (
    <section className="w-full">
      {/* Hero Title */}
      <div className="bg-white px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
            Accelerating local climate action, globally.
          </h1>
        </div>
      </div>

      {/* Hero Image with Accent Bars */}
      <div className="relative w-full overflow-hidden">
        {/* Pink accent bar */}
        <div className="absolute left-0 bottom-20 w-40 h-16 bg-gradient-to-r from-pink-400 to-pink-300 z-10"></div>

        {/* Main hero image - Earth from space */}
        <div className="w-full h-96 md:h-96 relative">
          <img
            src="/earth.webp"
            alt="Earth from space"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Orange accent bar */}
        <div className="absolute right-0 bottom-0 w-40 h-16 bg-gradient-to-l from-orange-400 to-orange-300 z-10"></div>
      </div>
    </section>
  );
}
