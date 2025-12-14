"use client"

export function MissionSection() {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Mission Title */}
        <div className="mb-8 flex items-start gap-4">
          <span className="text-4xl font-bold text-gray-900 mt-1">+</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our mission</h2>
        </div>

        {/* Mission Description */}
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          Our mission is to drive greenhouse gas emission reductions by making methane and carbon dioxide data
          accessible and actionable.
        </p>
      </div>
    </section>
  )
}
