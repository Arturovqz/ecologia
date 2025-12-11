import ProblemSection from './components/ProblemSection';
import ImpactSection from './components/ImpactSection';
import SolutionsSection from './components/SolutionsSection';
import ActionSection from './components/ActionSection';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <ImpactSection />
      <SolutionsSection />
      <ActionSection />
      <Footer />
    </div>
  );
}
