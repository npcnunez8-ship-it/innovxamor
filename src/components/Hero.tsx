import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-800">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circular-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="50" cy="50" r="10" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circular-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h3 className="text-emerald-300 tracking-wider mb-2">INNOVxAMOR</h3>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
          Turning Urban Waste<br />into Rural Wealth
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-3xl mx-auto">
          Transforming salon waste into powerful soil conditioners that regenerate farmland and empower communities
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <button 
            onClick={() => scrollToSection('solution')}
            className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Solution
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('cta')}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-105"
          >
            Partner With Us
          </button>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection('problem')}
          className="animate-bounce text-emerald-300 hover:text-white transition-colors"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
}