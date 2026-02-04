import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Founder() {
  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-30">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1732123280078-27d7997ab0fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGZhcm1sYW5kJTIwc3Vuc2V0JTIwbmF0dXJlfGVufDF8fHx8MTc3MDE0MDYxOXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Rural farmland"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/95 to-emerald-900/80"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">The Founder Story</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-emerald-400 mb-6" />
            
            <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
              "I grew up watching my family struggle with depleted soil and rising input costs. 
              Every season, we borrowed more for fertilizers that barely worked. When I learned 
              about the nutrient potential in urban waste, I knew this was the solution our 
              community needed—a way to heal both cities and farms."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold">
                I
              </div>
              <div>
                <p className="text-lg font-semibold text-white">Founder, INNOVxAMOR</p>
                <p className="text-emerald-300">Lived farming experience • Climate innovator</p>
              </div>
            </div>
          </div>

          {/* Additional context */}
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <p className="text-3xl font-bold text-emerald-400 mb-2">10+</p>
              <p className="text-white/80">Years farming background</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <p className="text-3xl font-bold text-emerald-400 mb-2">3</p>
              <p className="text-white/80">Agricultural awards</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <p className="text-3xl font-bold text-emerald-400 mb-2">100%</p>
              <p className="text-white/80">Community-driven</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}