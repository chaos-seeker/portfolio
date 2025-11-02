import { CardItem } from '@/components/card-item';
import Link from 'next/link';

export const Works = () => {
  return (
    <section>
      <div className="container">
        <div>
        <div className="flex items-center gap-2 mb-6">
            <Link href="#works" id="works" className="text-muted-foreground font-mono text-2xl font-bold">
              #
            </Link>
            <h2 className="text-primary font-mono text-2xl font-bold">
              works
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <CardItem
              image="/images/works-hyphorest.jpg"
              title="hyphorest"
              description="this website runs on the blockchain."
              technologies={['nextjs', 'tailwind', 'typescript']}
              live="https://hyphorest.com"
            />
            <CardItem
              image="/images/works-rebox.jpg"
              title="rebox"
              description="this website operates in the field of buying and selling books."
              technologies={['nextjs', 'tailwind', 'typescript']}
              live="https://rebox.ir/"
            />
            <CardItem
              image="/images/works-brity.jpg"
              title="brity"
              description="this website simulates the TOEFL exam and includes a Leitner box for review.."
              technologies={['nextjs', 'tailwind', 'typescript']}
              live="https://brity.vercel.app/"
            />
            <CardItem
              image="/images/works-alireza-namroodi.jpg"
              title="alireza namroodi"
              description="a personal website developed for an attorney at law."
              technologies={['html', 'tailwind', 'typescript']}
              live="https://alireza-namroodi.vercel.app/home.html"
            />
            <CardItem
              image="/images/works-doctormoo.jpg"
              title="doctor moo"
              description="a personal website developed for an attorney at law."
              technologies={['wordpress', 'elementor']}
              live="https://doctormoo.ir/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
