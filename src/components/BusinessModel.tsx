import { ArrowRight, RefreshCw } from 'lucide-react';

export function BusinessModel() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-stone-900 mb-4">Business Model</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            A sustainable revenue model powered by repeat customers
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Flow diagram */}
          <div className="relative bg-gradient-to-br from-emerald-50 to-stone-50 p-8 md:p-12 rounded-3xl shadow-xl">
            <div className="grid md:grid-cols-5 gap-4 md:gap-2 items-center">
              {/* Step 1: Waste Collection */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">♻️</span>
                </div>
                <h4 className="font-semibold text-stone-900 mb-1">Waste</h4>
                <p className="text-sm text-stone-600">Free collection from salons</p>
              </div>

              <div className="hidden md:flex justify-center">
                <ArrowRight className="w-6 h-6 text-emerald-600" />
              </div>

              {/* Step 2: Production */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🧪</span>
                </div>
                <h4 className="font-semibold text-stone-900 mb-1">Product</h4>
                <p className="text-sm text-stone-600">Process into conditioner</p>
              </div>

              <div className="hidden md:flex justify-center">
                <ArrowRight className="w-6 h-6 text-emerald-600" />
              </div>

              {/* Step 3: Sale to Farmers */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌾</span>
                </div>
                <h4 className="font-semibold text-stone-900 mb-1">Farmer</h4>
                <p className="text-sm text-stone-600">Direct-to-farmer sales</p>
              </div>
            </div>

            {/* Revenue streams */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-600 text-white p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💰</span>
                  </div>
                  <h4 className="text-lg font-semibold">Primary Revenue</h4>
                </div>
                <p className="text-emerald-100 mb-2">Direct product sales to farmers</p>
                <p className="text-2xl font-bold">৳180/liter</p>
              </div>

              <div className="bg-amber-600 text-white p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-semibold">Repeat Usage</h4>
                </div>
                <p className="text-amber-100 mb-2">Seasonal application cycle</p>
                <p className="text-2xl font-bold">2-3x per year</p>
              </div>
            </div>

            {/* Additional revenue streams */}
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-stone-200">
                <p className="text-sm text-stone-700 mb-1">Subscription Model</p>
                <p className="text-xs text-stone-600">Monthly delivery for regular users</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-stone-200">
                <p className="text-sm text-stone-700 mb-1">B2B Partnerships</p>
                <p className="text-xs text-stone-600">Bulk sales to agricultural co-ops</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-stone-200">
                <p className="text-sm text-stone-700 mb-1">Carbon Credits</p>
                <p className="text-xs text-stone-600">Additional revenue from impact</p>
              </div>
            </div>
          </div>

          {/* Unit economics highlight */}
          <div className="mt-8 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl mb-4">Strong Unit Economics</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-emerald-200 mb-1">Production Cost</p>
                <p className="text-3xl font-bold">৳69-79/L</p>
              </div>
              <div>
                <p className="text-emerald-200 mb-1">Selling Price</p>
                <p className="text-3xl font-bold">৳180/L</p>
              </div>
              <div>
                <p className="text-emerald-200 mb-1">Gross Margin</p>
                <p className="text-3xl font-bold">50-60%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}