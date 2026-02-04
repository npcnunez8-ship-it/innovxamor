import { Sparkles, Globe, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Vision() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-600 via-green-600 to-lime-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1595956481935-a9e254951d49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhcm1lciUyMGFncmljdWx0dXJlJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NzAxNDA2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Happy farmer"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 via-green-600/95 to-lime-600/90"></div>

      {/* Floating circles decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-12">
          <Sparkles className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
          <h2 className="text-5xl md:text-6xl text-white mb-6 leading-tight">
            Our Vision for the Future
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-2xl md:text-3xl text-white/95 mb-8 leading-relaxed">
            A regenerative future powered by circular systems
          </p>
          <p className="text-xl text-emerald-100 leading-relaxed">
            Where cities and farms thrive together—urban waste becomes rural wealth, 
            degraded land transforms into carbon sinks, and every community has access 
            to affordable, sustainable agriculture
          </p>
        </div>

        {/* Vision pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl text-white mb-3">Global Scale</h3>
            <p className="text-emerald-100">
              Replicating our model in 50+ countries by 2035
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl text-white mb-3">Community First</h3>
            <p className="text-emerald-100">
              Empowering 10 million farmers with knowledge and tools
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl text-white mb-3">Zero Waste</h3>
            <p className="text-emerald-100">
              Making waste obsolete through circular innovation
            </p>
          </div>
        </div>

        {/* Call to join */}
        <div className="bg-white/20 backdrop-blur-lg border-2 border-white/30 p-10 rounded-3xl max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl text-white mb-6">
            Join us in building a world where prosperity and sustainability are inseparable
          </p>
          <p className="text-xl text-emerald-100">
            The future is circular. The future is INNOVxAMOR.
          </p>
        </div>
      </div>
    </section>
  );
}