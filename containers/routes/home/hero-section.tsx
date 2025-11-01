import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section>
      <div className="container">
        <div className="mt-34 flex flex-col items-center gap-7 lg:flex-row-reverse lg:justify-between">
          <Image
            src="/images/avatar.jpg"
            alt="Hero"
            width={150}
            height={150}
            className="rounded-full lg:size-[250px] lg:rounded-xl"
          />
          <div className="flex flex-col items-center lg:items-start">
            <p className="mb-2 text-3xl font-bold lg:text-[33px]">
              hello, I&apos;m <span className="text-primary">hamid shahsavani</span>
            </p>
            <h2 className="text-muted-foreground mb-4 font-mono text-xl font-medium">
              front-end developer
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
