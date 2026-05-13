import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MissionVision from '@/components/MissionVision';
import Values from '@/components/Values';
import WhyUs from '@/components/WhyUs';
import Fleet from '@/components/Fleet';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Values />
        <WhyUs />
        <Fleet />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
