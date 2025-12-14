export function PartnershipSection() {
  return (
    <section className="w-full px-6 py-16 md:px-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl font-bold">+</span>
          <h2 className="text-2xl md:text-3xl font-bold">A unique public-private partnership</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
          As a nonprofit that works directly with cities, Carbon Mapper is uniquely positioned to advance climate action
          by bridging the gap between science and policy. We collaborate with mission-aligned partners to extend and
          scale our impact.
        </p>
        <button className="px-6 py-2 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors">
          Learn more
        </button>
      </div>
    </section>
  )
}
