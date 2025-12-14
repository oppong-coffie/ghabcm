export function DonateSection() {
  return (
    <section className="w-full px-6 py-16 md:px-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Purple box with text */}
          <div className="bg-purple-600 text-white p-8 md:p-12 rounded-lg">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold">+</span>
              <h2 className="text-2xl md:text-3xl font-bold">Donate</h2>
            </div>
            <p className="text-lg opacity-90">
              Your support fuels our work to make high-quality emissions data accessible to the climate leaders who need
              it most.
            </p>
          </div>

          {/* Right side - Light purple with content */}
          <div className="bg-purple-100 p-8 md:p-12 rounded-lg">
            <p className="text-foreground mb-8 leading-relaxed">
              As a SCOTUS nonprofit organization, Carbon Mapper is dedicated to accelerating local climate action
              through data and science. Your tax-deductible contribution directly supports our work in scientific data
              generation and making climate action accessible to the public and policymakers.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-purple-600 text-white hover:bg-purple-700 transition-colors rounded">
                Donate
              </button>
              <button className="px-6 py-2 border border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors rounded">
                More details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
