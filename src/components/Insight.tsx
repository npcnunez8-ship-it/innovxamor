import { ArrowRight, Sparkles } from 'lucide-react';

export function Insight() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-emerald-700" />
            <span className="text-emerald-800">The Paradox</span>
          </div>
          <h2 className="text-5xl md:text-6xl text-stone-900 mb-6 leading-tight">
            The cure is being<br />thrown away
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            What cities call waste, farms desperately need
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Hair Waste */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl text-stone-900 mb-2">Hair Waste</h3>
              <p className="text-stone-600">Salons discard tons daily</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center">
              <ArrowRight className="w-12 h-12 text-emerald-600" />
            </div>

            {/* Nitrogen Rich */}
            <div className="bg-emerald-600 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl text-white mb-2">Rich in Nitrogen</h3>
              <p className="text-emerald-100">14% protein content</p>
            </div>
          </div>

          {/* Central Arrow Down */}
          <div className="flex justify-center my-8">
            <div className="w-1 h-16 bg-emerald-600 relative">
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-emerald-600"></div>
              </div>
            </div>
          </div>

          {/* Soil Regeneration */}
          <div className="bg-gradient-to-br from-amber-100 to-emerald-100 p-10 rounded-2xl shadow-xl text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-12 h-12 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl text-stone-900 mb-3">Soil Regeneration</h3>
            <p className="text-lg text-stone-700 max-w-md mx-auto">
              Natural nutrients that restore soil health, improve water retention, and boost crop yields
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
