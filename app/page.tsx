import { HeroSection } from '@/containers/routes/home/hero-section';
import { SectionDivider } from '@/components/section-divider';
import { Reveal } from '@/components/reveal';
import { Skills } from '@/containers/routes/home/skills';
import { Works } from '@/containers/routes/home/works';
import { Projects } from '@/containers/routes/home/projects';

export default function Home() {
  return (
    <>
      <Reveal>
        <HeroSection />
      </Reveal>
      <SectionDivider />
      <Reveal>
        <Skills />
      </Reveal>
      <SectionDivider />
      <Reveal>
        <Works />
      </Reveal>
      <SectionDivider />
      <Reveal>
        <Projects />
      </Reveal>
    </>
  );
}
