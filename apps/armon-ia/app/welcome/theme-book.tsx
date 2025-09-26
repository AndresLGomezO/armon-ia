export function ThemeShowcase() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-charcoal-200/20 dark:border-charcoal-800 bg-white dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <h1 className="text-5xl font-light tracking-wider text-charcoal-800 dark:text-cream-100">
            ARMONIA
          </h1>
          <p className="text-gold-600 dark:text-gold-400 mt-2 tracking-[0.3em] uppercase text-sm">
            Design System • Theme Book
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-16 space-y-20">
        {/* Brand Identity */}
        <section>
          <h2 className="text-3xl font-light text-charcoal-800 dark:text-cream-100 mb-4">
            Brand Identity
          </h2>
          <p className="text-charcoal-600 dark:text-charcoal-400 max-w-3xl">
            A sophisticated design system that embodies luxury, modernity, and
            timeless elegance. Our theme reflects the exclusivity and
            distinction of high-end modular furniture design.
          </p>
        </section>

        {/* Color Palette */}
        <section>
          <h2 className="text-3xl font-light text-charcoal-800 dark:text-cream-100 mb-8">
            Color Palette
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary Colors */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400">
                Primary
              </h3>
              <div className="space-y-2">
                <div className="bg-charcoal-800 h-24 rounded-lg flex items-end p-4">
                  <span className="text-white text-sm font-mono">
                    charcoal-800
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  <div className="bg-charcoal-50 h-12 rounded"></div>
                  <div className="bg-charcoal-200 h-12 rounded"></div>
                  <div className="bg-charcoal-400 h-12 rounded"></div>
                  <div className="bg-charcoal-600 h-12 rounded"></div>
                  <div className="bg-charcoal-900 h-12 rounded"></div>
                </div>
              </div>
            </div>

            {/* Accent Colors */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400">
                Accent
              </h3>
              <div className="space-y-2">
                <div className="bg-gold-500 h-24 rounded-lg flex items-end p-4">
                  <span className="text-white text-sm font-mono">gold-500</span>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  <div className="bg-gold-50 h-12 rounded"></div>
                  <div className="bg-gold-200 h-12 rounded"></div>
                  <div className="bg-gold-400 h-12 rounded"></div>
                  <div className="bg-gold-600 h-12 rounded"></div>
                  <div className="bg-gold-900 h-12 rounded"></div>
                </div>
              </div>
            </div>

            {/* Supporting Colors */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400">
                Supporting
              </h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-2">
                  <div className="bg-sage-600 h-20 rounded-lg flex items-end p-3">
                    <span className="text-white text-xs font-mono">sage</span>
                  </div>
                  <div className="bg-sage-400 h-8 rounded"></div>
                  <div className="bg-sage-800 h-8 rounded"></div>
                </div>
                <div className="space-y-2">
                  <div className="bg-wine-600 h-20 rounded-lg flex items-end p-3">
                    <span className="text-white text-xs font-mono">wine</span>
                  </div>
                  <div className="bg-wine-400 h-8 rounded"></div>
                  <div className="bg-wine-800 h-8 rounded"></div>
                </div>
                <div className="space-y-2">
                  <div className="bg-cream-300 h-20 rounded-lg flex items-end p-3">
                    <span className="text-charcoal-700 text-xs font-mono">
                      cream
                    </span>
                  </div>
                  <div className="bg-cream-100 h-8 rounded"></div>
                  <div className="bg-cream-500 h-8 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-3xl font-light text-charcoal-800 dark:text-cream-100 mb-8">
            Typography
          </h2>

          <div className="space-y-8 bg-white dark:bg-charcoal-900 p-8 rounded-xl border border-charcoal-200/20 dark:border-charcoal-800">
            <div>
              <p className="text-sm text-charcoal-500 dark:text-charcoal-400 mb-2 font-mono">
                font-family: 'Montserrat'
              </p>
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-sm text-charcoal-400 w-20">Thin</span>
                  <p className="text-4xl font-thin text-charcoal-800 dark:text-cream-100">
                    Elegance in Every Detail
                  </p>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-sm text-charcoal-400 w-20">Light</span>
                  <p className="text-3xl font-light text-charcoal-800 dark:text-cream-100">
                    Modern Modular Design
                  </p>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-sm text-charcoal-400 w-20">
                    Regular
                  </span>
                  <p className="text-2xl font-normal text-charcoal-800 dark:text-cream-100">
                    Crafted for Living
                  </p>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-sm text-charcoal-400 w-20">Medium</span>
                  <p className="text-xl font-medium text-charcoal-800 dark:text-cream-100">
                    Timeless Sophistication
                  </p>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-sm text-charcoal-400 w-20">
                    Semibold
                  </span>
                  <p className="text-lg font-semibold text-charcoal-800 dark:text-cream-100">
                    Premium Materials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Components Examples */}
        <section>
          <h2 className="text-3xl font-light text-charcoal-800 dark:text-cream-100 mb-8">
            Component Examples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buttons */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400">
                Buttons
              </h3>
              <div className="space-y-3">
                <button className="px-8 py-3 bg-charcoal-800 text-white rounded-lg hover:bg-charcoal-700 transition-colors">
                  Primary Button
                </button>
                <button className="px-8 py-3 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors ml-3">
                  Accent Button
                </button>
                <button className="px-8 py-3 border border-charcoal-300 dark:border-charcoal-600 text-charcoal-700 dark:text-cream-200 rounded-lg hover:border-charcoal-500 transition-colors ml-3">
                  Outline Button
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-charcoal-500 dark:text-charcoal-400">
                Cards
              </h3>
              <div className="bg-white dark:bg-charcoal-900 p-6 rounded-xl border border-charcoal-200/20 dark:border-charcoal-800 shadow-sm">
                <h4 className="text-lg font-medium text-charcoal-800 dark:text-cream-100">
                  Modular Sofa System
                </h4>
                <p className="text-charcoal-600 dark:text-charcoal-400 mt-2">
                  Customize your perfect seating arrangement with our innovative
                  modular design.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-3 py-1 bg-sage-100 dark:bg-sage-900/30 text-sage-700 dark:text-sage-300 text-sm rounded-full">
                    New
                  </span>
                  <span className="px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300 text-sm rounded-full">
                    Premium
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="pb-16">
          <h2 className="text-3xl font-light text-charcoal-800 dark:text-cream-100 mb-8">
            Usage Guidelines
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-charcoal-900 p-6 rounded-xl border border-charcoal-200/20 dark:border-charcoal-800">
              <h3 className="font-medium text-charcoal-800 dark:text-cream-100 mb-3">
                Primary Usage
              </h3>
              <p className="text-sm text-charcoal-600 dark:text-charcoal-400">
                Charcoal serves as the primary color for text, headers, and main
                UI elements. It conveys sophistication and modernity.
              </p>
            </div>

            <div className="bg-white dark:bg-charcoal-900 p-6 rounded-xl border border-charcoal-200/20 dark:border-charcoal-800">
              <h3 className="font-medium text-charcoal-800 dark:text-cream-100 mb-3">
                Accent Elements
              </h3>
              <p className="text-sm text-charcoal-600 dark:text-charcoal-400">
                Gold is used sparingly for premium features, CTAs, and to
                highlight exclusive content. It adds warmth and luxury.
              </p>
            </div>

            <div className="bg-white dark:bg-charcoal-900 p-6 rounded-xl border border-charcoal-200/20 dark:border-charcoal-800">
              <h3 className="font-medium text-charcoal-800 dark:text-cream-100 mb-3">
                Supporting Colors
              </h3>
              <p className="text-sm text-charcoal-600 dark:text-charcoal-400">
                Sage, wine, and cream provide variety while maintaining the
                elegant aesthetic. Use for categories, status, and decorative
                elements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
