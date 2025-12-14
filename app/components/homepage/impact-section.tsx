export function ImpactSection() {
  return (
    <section className="w-full px-6 py-16 md:px-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl font-bold">+</span>
          <h2 className="text-2xl md:text-3xl font-bold">Translating data to impact</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl leading-relaxed">
          Our data fuels in-depth understanding of the methane and CO2 sources and behavior. We're advancing efforts to
          understand the magnitude and attribution of greenhouse gas emissions in concert with the transition toward a
          sustainable energy future.
        </p>
        <button className="px-6 py-2 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors">
          Learn more
        </button>
      </div>
    </section>
  )
}
