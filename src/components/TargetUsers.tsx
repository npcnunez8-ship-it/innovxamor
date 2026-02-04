import { Users, Scissors, Home } from 'lucide-react';

export function TargetUsers() {
  const users = [
    {
      icon: Users,
      title: "Smallholder Farmers",
      pain: "Struggling with expensive fertilizers and declining soil quality",
      benefit: "Affordable, effective soil improvement that increases yields",
      color: "emerald"
    },
    {
      icon: Scissors,
      title: "Salons & Barbershops",
      pain: "High waste disposal costs and environmental concerns",
      benefit: "Turn waste into revenue while supporting sustainability",
      color: "purple"
    },
    {
      icon: Home,
      title: "Rural Communities",
      pain: "Limited access to quality agricultural inputs and training",
      benefit: "Local supply chain, jobs, and agricultural knowledge sharing",
      color: "amber"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-stone-900 mb-4">Who We Serve</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Creating value across the entire circular economy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {users.map((user, index) => {
            const Icon = user.icon;
            const bgColor = user.color === 'emerald' ? 'bg-emerald-50' : user.color === 'purple' ? 'bg-purple-50' : 'bg-amber-50';
            const iconBgColor = user.color === 'emerald' ? 'bg-emerald-600' : user.color === 'purple' ? 'bg-purple-600' : 'bg-amber-600';
            const borderColor = user.color === 'emerald' ? 'border-emerald-200' : user.color === 'purple' ? 'border-purple-200' : 'border-amber-200';
            
            return (
              <div 
                key={index} 
                className={`${bgColor} border-2 ${borderColor} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 ${iconBgColor} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl text-stone-900 mb-4">{user.title}</h3>
                
                <div className="mb-6">
                  <p className="text-sm text-stone-500 mb-2">Pain Point:</p>
                  <p className="text-stone-700 leading-relaxed">{user.pain}</p>
                </div>
                
                <div>
                  <p className="text-sm text-stone-500 mb-2">How We Help:</p>
                  <p className="text-stone-900 leading-relaxed font-medium">{user.benefit}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
