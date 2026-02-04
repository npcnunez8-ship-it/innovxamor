import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Insight } from './components/Insight';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { TargetUsers } from './components/TargetUsers';
import { WhyKeragreen } from './components/WhyKeragreen';
import { MarketOpportunity } from './components/MarketOpportunity';
import { BusinessModel } from './components/BusinessModel';
import { Impact } from './components/Impact';
import { Founder } from './components/Founder';
import { Vision } from './components/Vision';
import { CallToAction } from './components/CallToAction';

export default function App() {
  return (
    <div className="bg-stone-50">
      <Hero />
      <Problem />
      <Insight />
      <Solution />
      <HowItWorks />
      <TargetUsers />
      <WhyKeragreen />
      <MarketOpportunity />
      <BusinessModel />
      <Impact />
      <Founder />
      <Vision />
      <CallToAction />
    </div>
  );
}
