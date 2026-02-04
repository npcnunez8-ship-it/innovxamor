import { Leaf } from 'lucide-react';

export function Impact() {
  const sdgs = [
    {
      number: 2,
      title: "Zero Hunger",
      description: "Improving crop yields and food security for smallholder farmers",
      color: "bg-amber-500"
    },
    {
      number: 8,
      title: "Decent Work",
      description: "Creating green jobs in waste collection and agricultural support",
      color: "bg-red-500"
    },
    {
      number: 12,
      title: "Responsible Consumption",
      description: "Transforming urban waste into valuable agricultural resources",
      color: "bg-amber-600"
    },
    {
      number: 15,
      title: "Life on Land",
      description: "Restoring soil health and promoting sustainable land management",
      color: "bg-emerald-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full mb-6">
            <Leaf className="w-5 h-5" />
            <span>Impact & UN SDGs</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-stone-900 mb-4">
            Measurable Impact
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Aligning profit with planetary and social progress
          </p>
        </div>

        {/* Impact Numbers */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <p className="text-4xl font-bold text-emerald-600 mb-2">10K+</p>
            <p className="text-stone-700">Tonnes waste diverted</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <p className="text-4xl font-bold text-emerald-600 mb-2">5000+</p>
            <p className="text-stone-700">Farmers reached</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <p className="text-4xl font-bold text-emerald-600 mb-2">30%</p>
            <p className="text-stone-700">Average yield increase</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <p className="text-4xl font-bold text-emerald-600 mb-2">2000</p>
            <p className="text-stone-700">Hectares regenerated</p>
          </div>
        </div>

        {/* SDG Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sdgs.map((sdg, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className={`${sdg.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center font-bold text-xl">
                    {sdg.number}
                  </div>
                  <h3 className="text-lg font-semibold">{sdg.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-stone-600 leading-relaxed">{sdg.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="mt-16 bg-white p-10 rounded-2xl shadow-xl text-center max-w-4xl mx-auto border-t-4 border-emerald-600">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="w-8 h-8 text-emerald-600" />
            <Leaf className="w-8 h-8 text-emerald-600" />
            <Leaf className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="text-2xl md:text-3xl text-stone-900 mb-4">
            By 2030, we aim to regenerate 1 million hectares of farmland
          </h3>
          <p className="text-lg text-stone-600">
            Sequestering carbon, restoring biodiversity, and empowering communities across the globe
          </p>
        </div>
      </div>
    </section>
  );
}
