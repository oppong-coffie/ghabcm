export function StatsSection() {
  return (
    <section className="w-full px-6 py-16 md:px-12 md:py-24 bg-background border-t border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-b from-orange-300 to-orange-500 h-32 rounded-lg"></div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Total methane plumes on our portal</p>
              <h3 className="text-4xl font-bold mb-4">27548</h3>
              <p className="text-sm leading-relaxed">
                Our imaging satellites have detected plumes from methane sources across the globe, providing crucial
                data for climate action.
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-b from-orange-400 to-orange-600 h-32 rounded-lg flex items-center justify-center">
              <p className="text-3xl font-bold text-white">5225</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Carbon dioxide plumes on our portal</p>
              <p className="text-sm leading-relaxed">
                Carbon Mapper's satellite mission tracks CO2 sources globally, enabling nations to achieve their climate
                commitments through improved data.
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col gap-4">
            <div className="bg-orange-100 h-32 rounded-lg flex items-center justify-center">
              <p className="text-5xl font-bold text-orange-600">278M</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Total methane emissions on our portal</p>
              <p className="text-sm leading-relaxed">
                We're tracking emissions across all countries, making emissions visibility available to the public and
                policymakers now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
