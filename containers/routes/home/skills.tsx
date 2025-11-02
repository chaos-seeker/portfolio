import { Progress } from '@/ui/progress';
import Link from 'next/link';

export const Skills = () => {
  return (
    <section>
      <div className="container">
        <div>
        <div className="flex items-center gap-2 mb-6">
            <Link href="#skills" id="skills" className="text-muted-foreground font-mono text-2xl font-bold">
              #
            </Link>
            <h2 className="text-primary font-mono text-2xl font-bold">
              skills
            </h2>
          </div>
          <div className="grid grid-cols-1 flex-col gap-4 lg:grid-cols-2">
            <ProgressItem title="HTML" value={90} />
            <ProgressItem title="CSS" value={90} />
            <ProgressItem title="JavaScript" value={90} />
            <ProgressItem title="TypeScript" value={80} />
            <ProgressItem title="React" value={90} />
            <ProgressItem title="Next.js" value={85} />
            <ProgressItem title="Tailwind" value={98} />
            <ProgressItem title="Git" value={80} />
            <ProgressItem title="Shadcnui" value={97} />
            <ProgressItem title="daisyui" value={95} />
            <ProgressItem title="heroui" value={95} />
            <ProgressItem title="npm" value={90} />
            <ProgressItem title="figma" value={70} />
            <ProgressItem title="wordpress" value={70} />
            <ProgressItem title="elmentor" value={60} />
            <ProgressItem title="linux" value={75} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProgressItemProps {
  title: string;
  value: number;
}

const ProgressItem = (props: ProgressItemProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex w-full items-center justify-between gap-2">
        <span className="text-smp font-medium">{props.title}</span>
        <span className="text-smp font-medium">{props.value}%</span>
      </div>
      <Progress value={props.value} />
    </div>
  );
};
