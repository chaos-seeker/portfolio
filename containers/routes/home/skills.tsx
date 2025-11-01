import { Progress } from '@/ui/progress';

export const Skills = () => {
  return (
    <section>
      <div className="container">
        <div>
          <h2 className="text-primary mb-6 font-mono text-2xl font-bold">
            Skills
          </h2>
          <div className="flex grid grid-cols-1 flex-col gap-4 lg:grid-cols-2">
            <ProgressItem title="HTML" value={90} />
            <ProgressItem title="CSS" value={80} />
            <ProgressItem title="JavaScript" value={70} />
            <ProgressItem title="React" value={60} />
            <ProgressItem title="Next.js" value={50} />
            <ProgressItem title="Node.js" value={40} />
            <ProgressItem title="Express" value={30} />
            <ProgressItem title="MongoDB" value={20} />
            <ProgressItem title="MySQL" value={10} />
            <ProgressItem title="PostgreSQL" value={5} />
            <ProgressItem title="Redis" value={3} />
            <ProgressItem title="Docker" value={2} />
            <ProgressItem title="Kubernetes" value={1} />
            <ProgressItem title="Git" value={0} />
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
