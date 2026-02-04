import { Mail, Rocket, TrendingUp, ChevronRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section id="cta" className="py-24 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-6 leading-tight">
            Ready to Transform Agriculture?
          </h2>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto mb-12">
            Whether you're an investor, partner, or changemaker—let's build the circular future together
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="group px-8 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105 text-lg">
              <TrendingUp className="w-6 h-6" />
              Invest in INNOVxAMOR
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group px-8 py-5 bg-amber-600 hover:bg-amber-500 text-white rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105 text-lg">
              <Rocket className="w-6 h-6" />
              Start a Pilot
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group px-8 py-5 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 rounded-full transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm hover:scale-105 text-lg">
              <Mail className="w-6 h-6" />
              Partner With Us
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Value props for each CTA */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-white mb-3">For Investors</h3>
            <ul className="space-y-2 text-stone-300">
              <li>• Strong unit economics (70% margins)</li>
              <li>• Scalable across emerging markets</li>
              <li>• ESG-aligned with measurable impact</li>
              <li>• Proven traction with pilot programs</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-white mb-3">For Pilot Partners</h3>
            <ul className="space-y-2 text-stone-300">
              <li>• Test in your region with support</li>
              <li>• Co-develop localized solutions</li>
              <li>• Access to training and tech</li>
              <li>• Shared revenue opportunities</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-white mb-3">For Collaborators</h3>
            <ul className="space-y-2 text-stone-300">
              <li>• Agri-tech co-innovation</li>
              <li>• Sustainability partnerships</li>
              <li>• Research collaboration</li>
              <li>• Distribution network synergy</li>
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className="text-center bg-gradient-to-r from-emerald-600/20 to-amber-600/20 border border-emerald-500/30 p-8 rounded-2xl backdrop-blur-sm">
          <p className="text-lg text-white mb-2">
            Questions? Get in touch
          </p>
          <a 
            href="mailto:hello@innovxamor.com" 
            className="text-2xl text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-2"
          >
            hello@innovxamor.com
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <div className="mb-4">
            <h3 className="text-3xl font-bold text-white mb-2">INNOVxAMOR</h3>
            <p className="text-emerald-400">Turning Urban Waste into Rural Wealth</p>
          </div>
          <p className="text-stone-400">
            © 2026 INNOVxAMOR. Building a regenerative future, one farm at a time.
          </p>
        </div>
      </div>
    </section>
  );
}