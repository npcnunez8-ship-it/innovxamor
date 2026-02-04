import { Zap, DollarSign, Leaf, Droplet } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Solution() {
  return (
    <section id="solution" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-full mb-6">
            Our Solution
          </div>
          <h2 className="text-5xl md:text-6xl text-stone-900 mb-6">
            Meet INNOVxAMOR
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            A revolutionary liquid soil conditioner that transforms waste into wealth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Visual */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-amber-100 flex items-center justify-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763397929062-eb0582008877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNyb3BzJTIwaGVhbHRoeSUyMGZhcm1sYW5kfGVufDF8fHx8MTc3MDE0MDYxOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Healthy crops"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-8 py-4 rounded-full shadow-xl border-4 border-emerald-100">
              <p className="text-emerald-700 font-semibold">100% Natural • Zero Chemicals</p>
            </div>
          </div>

          {/* Product Description */}
          <div>
            <h3 className="text-3xl text-stone-900 mb-6">
              Liquid Soil Conditioner
            </h3>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              INNOVxAMOR is a bio-based soil enhancement solution derived from keratin-rich waste. 
              It enriches soil with essential nutrients, improves structure, and promotes sustainable agriculture—all while reducing environmental waste.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-lg text-stone-900 mb-1">Fast Acting</h4>
                  <p className="text-stone-600">Results in 2-3 weeks</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-lg text-stone-900 mb-1">Affordable</h4>
                  <p className="text-stone-600">60% cheaper than alternatives</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-lg text-stone-900 mb-1">Soil-Friendly</h4>
                  <p className="text-stone-600">Improves long-term health</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Droplet className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h4 className="text-lg text-stone-900 mb-1">Water Retention</h4>
                  <p className="text-stone-600">Reduces irrigation needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}