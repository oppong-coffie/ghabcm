export function ContentHubSection() {
  return (
    <section className="w-full px-6 py-16 md:px-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl font-bold">+</span>
          <h2 className="text-2xl md:text-3xl font-bold">Content Hub</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
          Explore our library of resources, research, and educational materials about emissions data, climate science,
          and carbon reduction strategies.
        </p>
        <button className="px-6 py-2 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors">
          Learn more
        </button>
      </div>
    </section>
  )
}
