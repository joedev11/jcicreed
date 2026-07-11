import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import MissionVisionTeaser from '@/components/MissionVisionTeaser';
import WhyUsTeaser from '@/components/WhyUsTeaser';
import TeamTeaser from '@/components/TeamTeaser';
import Fleet from '@/components/Fleet';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MissionVisionTeaser />
        <Fleet />
        <WhyUsTeaser />
        <TeamTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
