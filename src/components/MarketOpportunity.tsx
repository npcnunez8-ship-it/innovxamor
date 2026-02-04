import { TrendingUp } from 'lucide-react';

export function MarketOpportunity() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-stone-900 mb-4">Market Opportunity</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Tapping into the growing sustainable agriculture revolution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TAM-SAM-SOM Visualization */}
          <div className="relative">
            <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto">
              {/* TAM - Outer circle */}
              <circle cx="200" cy="200" r="180" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
              <text x="200" y="80" textAnchor="middle" className="text-sm fill-emerald-800 font-semibold">TAM</text>
              <text x="200" y="100" textAnchor="middle" className="text-xs fill-emerald-700">$45B</text>
              <text x="200" y="115" textAnchor="middle" className="text-xs fill-emerald-600">Global Bio-fertilizer</text>
              
              {/* SAM - Middle circle */}
              <circle cx="200" cy="200" r="120" fill="#a7f3d0" stroke="#059669" strokeWidth="2" />
              <text x="200" y="160" textAnchor="middle" className="text-sm fill-emerald-800 font-semibold">SAM</text>
              <text x="200" y="180" textAnchor="middle" className="text-xs fill-emerald-700">$8B</text>
              <text x="200" y="195" textAnchor="middle" className="text-xs fill-emerald-600">Regional Organic</text>
              
              {/* SOM - Inner circle */}
              <circle cx="200" cy="200" r="60" fill="#34d399" stroke="#047857" strokeWidth="2" />
              <text x="200" y="245" textAnchor="middle" className="text-sm fill-white font-semibold">SOM</text>
              <text x="200" y="265" textAnchor="middle" className="text-xs fill-white">$500M</text>
              <text x="200" y="280" textAnchor="middle" className="text-xs fill-emerald-50">Initial Target</text>
            </svg>
          </div>

          {/* Market Details */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xl text-stone-900 mb-2">Total Addressable Market</h3>
                  <p className="text-stone-600 mb-2">$45 billion global bio-fertilizer and soil conditioner market</p>
                  <p className="text-sm text-emerald-700">Growing at 11% CAGR through 2030</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-emerald-800" />
                </div>
                <div>
                  <h3 className="text-xl text-stone-900 mb-2">Serviceable Addressable Market</h3>
                  <p className="text-stone-600 mb-2">$8 billion regional organic agriculture sector</p>
                  <p className="text-sm text-emerald-700">Focus on emerging markets with high adoption rates</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-emerald-900" />
                </div>
                <div>
                  <h3 className="text-xl text-stone-900 mb-2">Serviceable Obtainable Market</h3>
                  <p className="text-stone-600 mb-2">$500 million initial target segment</p>
                  <p className="text-sm text-emerald-700">Smallholder farmers in pilot regions (3-5 years)</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-emerald-100 p-6 rounded-xl">
              <p className="text-lg text-stone-900">
                <span className="font-semibold">Rising demand:</span> Climate-conscious consumers and regenerative agriculture policies are driving exponential growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
