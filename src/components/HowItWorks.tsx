import { Scissors, FlaskConical, Droplets, Sprout } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Scissors,
      title: "Collection",
      description: "Partner salons collect hair waste through our app-based system",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: FlaskConical,
      title: "Processing",
      description: "Keratin extraction and bio-conversion into liquid concentrate",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Droplets,
      title: "Product",
      description: "Liquid soil conditioner ready for agricultural application",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sprout,
      title: "Application",
      description: "Farmers apply to fields, boosting soil health and yields",
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-stone-900 mb-4">How It Works</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            A simple four-step process that closes the loop between urban waste and rural wealth
          </p>
        </div>

        <div className="relative">
          {/* Desktop: Horizontal flow */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-stone-100 rounded-full mb-4">
                        <span className="text-stone-700">{index + 1}</span>
                      </div>
                      <h3 className="text-xl text-stone-900 mb-3">{step.title}</h3>
                      <p className="text-stone-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile: Vertical flow */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="flex items-center justify-center w-6 h-6 bg-stone-100 rounded-full text-sm text-stone-700">
                            {index + 1}
                          </span>
                          <h3 className="text-lg text-stone-900">{step.title}</h3>
                        </div>
                        <p className="text-stone-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-2">
                      <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
