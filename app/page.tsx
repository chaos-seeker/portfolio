import { HeroSection } from '@/containers/routes/home/hero-section';
import { SectionDivider } from '@/components/section-divider';
import { Reveal } from '@/components/reveal';
import { About } from '@/containers/routes/home/about';
import { Skills } from '@/containers/routes/home/skills';
import { Works } from '@/containers/routes/home/works';

export default function Home() {
  return (
    <>
      <Reveal>
        <HeroSection />
      </Reveal>
      <SectionDivider />
      <Reveal>
        <About />
      </Reveal>
      <SectionDivider />
      <Reveal>
        <Skills />
      </Reveal>
      <SectionDivider />
      <Reveal>
        <Works />
      </Reveal>
    </>
  );
}
