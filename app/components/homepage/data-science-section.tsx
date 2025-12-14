export function DataScienceSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Laptop mockup */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Laptop frame */}
              <div className="bg-slate-900 rounded-lg shadow-2xl overflow-hidden border-8 border-black">
                {/* Screen */}
                <img
                  src="/methane.jpg"
                  alt="Data visualization showing methane emission heat map on interactive map"
                  className="w-full h-auto block"
                />
              </div>
              {/* Laptop base */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-black rounded-b-lg"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            {/* Decorative accent */}
            <div className="w-12 h-12 rounded-full bg-purple-400 opacity-70"></div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Data and Science</h2>

            {/* Description text */}
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our platform provides unprecedented access to methane and carbon dioxide emissions data. We combine
              satellite imagery, ground-based sensors, and advanced analytics to deliver actionable insights for climate
              action. Transparency drives accountability and empowers communities to make informed decisions about their
              environmental impact.
            </p>

            {/* Open data portal button */}
            <button className="inline-block px-6 py-3 bg-foreground text-background font-semibold rounded-md hover:bg-foreground/90 transition-colors">
              Open data portal
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
