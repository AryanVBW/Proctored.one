import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Position from '@/components/Position';
import MonitoringStack from '@/components/MonitoringStack';
import Platform from '@/components/Platform';
import Stats from '@/components/Stats';
import Compare from '@/components/Compare';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Position />
      <MonitoringStack />
      <Platform />
      <Stats />
      <Compare />
      <Features />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
