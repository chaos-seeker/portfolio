import { CardItem } from '@/components/card-item';
import Image from 'next/image';
import Link from 'next/link';

export const Works = () => {
  return (
    <section>
      <div className="container">
        <div>
          <h2 className="text-primary mb-6 font-mono text-2xl font-bold">
            Work
          </h2>
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
          <CardItem
            image="/images/projects-hyphorest.jpg"
            title="hyphorest"
            description="this website runs on the blockchain."
            technologies={["nextjs", "tailwind", "typescript"]}
            live="https://hyphorest.com"
          />
          <CardItem
            image="/images/projects-rebox.jpg"
            title="rebox"
            description="this website operates in the field of buying and selling books."
            technologies={["nextjs", "tailwind", "typescript"]}
            live="https://rebox.ir/"
          />
          <CardItem
            image="/images/projects-brity.jpg"
            title="brity"
            description="this website simulates the TOEFL exam and includes a Leitner box for review.."
            technologies={["nextjs", "tailwind", "typescript"]}
            live="https://brity.vercel.app/"
          />
          <CardItem
            image="/images/projects-alireza-namroodi.jpg"
            title="alireza namroodi"
            description="a personal website developed for an attorney at law."
            technologies={["html", "tailwind", "typescript"]}
            live="https://alireza-namroodi.vercel.app/home.html"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

interface CardItemProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  code?: string;
  live?: string;
}
