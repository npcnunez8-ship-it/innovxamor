import { Trash2, TrendingDown, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-stone-900 mb-4">The Problem</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Urban Waste */}
          <div className="relative group">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1672256914772-7e87450fe452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHdhc3RlJTIwY2l0eSUyMGVudmlyb25tZW50fGVufDF8fHx8MTc3MDE0MDYxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Urban waste"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl text-white mb-4">Urban Crisis</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-stone-100">
                    <Trash2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Tons of organic waste discarded daily</span>
                  </div>
                  <div className="flex items-start gap-3 text-stone-100">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Clogged drains and environmental pollution</span>
                  </div>
                  <div className="flex items-start gap-3 text-stone-100">
                    <TrendingDown className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>High disposal costs for businesses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rural Struggle */}
          <div className="relative group">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768775517205-7f4bc1b3f771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnklMjBzb2lsJTIwYWdyaWN1bHR1cmUlMjBmYXJtZXJ8ZW58MXx8fHwxNzcwMTQwNjE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dry soil agriculture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl text-white mb-4">Rural Struggle</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-stone-100">
                    <TrendingDown className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>Degraded soil with low nutrients</span>
                  </div>
                  <div className="flex items-start gap-3 text-stone-100">
                    <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>Expensive chemical fertilizers</span>
                  </div>
                  <div className="flex items-start gap-3 text-stone-100">
                    <Trash2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>Declining crop yields and income</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
