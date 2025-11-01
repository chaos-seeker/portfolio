import Image from 'next/image';
import { AnimatedShinyText } from '@/ui/animated-shiny-text';

export const HeroSection = () => {
  return (
    <section>
      <div className="container">
        <div className="mt-29 flex flex-col items-center gap-7 lg:flex-row-reverse lg:justify-between">
          <Image
            src="/images/avatar.png"
            alt="Hero"
            width={150}
            height={150}
            className="rounded-full lg:size-[250px] lg:rounded-xl"
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-center lg:items-start">
              <p className="mb-1 text-3xl font-bold lg:text-[33px]">
                hello, I&apos;m{' '}
                <span className="text-primary">hamid shahsavani</span>
              </p>
              <h2 className="text-muted-foreground mb-2 font-mono text-xl font-medium">
                front-end developer
              </h2>
            </div>
            <div className="space-y-0.5">
              <AnimatedShinyText>
                <p className="text-mdp text-center lg:text-left">
                  i design with precision and obsessive attention to detail,
                  then translate those designs into production-ready interfaces.
                </p>
              </AnimatedShinyText>
              <AnimatedShinyText>
                <p className="text-mdp text-center lg:text-left">
                  my code follows best practices, emphasizes performance, and
                  remains clean, readable, and easy to maintain.
                </p>
              </AnimatedShinyText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
