import { DollarSign, Smartphone, TrendingUp } from 'lucide-react';

export function WhyKeragreen() {
  const advantages = [
    {
      icon: DollarSign,
      title: "Low-Cost Supply Chain",
      description: "Hair waste is abundant, free, and locally sourced—eliminating expensive raw material costs",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Smartphone,
      title: "App-Based Collection",
      description: "Smart logistics platform connects salons to collection routes, ensuring consistent supply",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: TrendingUp,
      title: "Local & Scalable",
      description: "Decentralized model can be replicated in any region with salons and farms",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">Why INNOVxAMOR Wins</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Our competitive advantages create lasting market dominance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            
            return (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${advantage.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl text-white mb-4">{advantage.title}</h3>
                <p className="text-emerald-100 leading-relaxed">{advantage.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional highlight */}
        <div className="mt-16 bg-amber-500/20 border border-amber-400/30 p-8 rounded-2xl text-center max-w-3xl mx-auto backdrop-blur-sm">
          <p className="text-2xl text-white mb-2">
            <span className="text-amber-300">3x faster</span> time-to-market compared to traditional fertilizer production
          </p>
        </div>
      </div>
    </section>
  );
}