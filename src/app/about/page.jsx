import Nav from '@/components/Nav';
import About from '@/components/About';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us — JCICREED Delivery Services',
  description:
    'Learn about JCICREED Delivery Services — our company profile, mission, vision, values, and why clients trust us.',
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-[68px]">
        <About />
        <Team />
      </main>
      <Footer />
    </>
  );
}
