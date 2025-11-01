import { CardItem } from '@/components/card-item';

export const Projects = () => {
  return (
    <section>
      <div className="container">
        <div>
          <h2 className="text-primary mb-6 font-mono text-2xl font-bold">
            Work
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <CardItem
              image="/images/projects-killua.jpg"
              title="killua"
              description="local storage management library for react applications."
              technologies={['typescript']}
              code="https://github.com/chaos-seeker/killua"
              live='https://www.npmjs.com/package/killua'
            />
            <CardItem
              image="/images/projects-shopi.jpg"
              title="shopi"
              description="a shopping website."
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/shopi"
              live='https://shopifa.vercel.app/'
            />
            <CardItem
              image="/images/projects-ava-movie.jpg"
              title="ava movie"
              description="a film website."
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/ava-movie"
              live='https://ava-movie.vercel.app/'
            />
            <CardItem
              image="/images/projects-bank-dash.jpg"
              title="bank dash"
              description="a bank dashboard."
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/bankdash"
              live="https://bankdash-swart.vercel.app/dashboard"
            />
            <CardItem
              image="/images/projects-killua-document.jpg"
              title="killua document"
              description="a document for killua."
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/killua"
              live="https://github.com/chaos-seeker/killua/tree/main/websites/document"
            />
            <CardItem
              image="/images/projects-killua-todo-list.jpg"
              title="todo list"
              description="a todo list with killua."
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/killua/tree/main/websites/examples/todo%20list"
              live="https://killua-todo-list.vercel.app/"
            />
            <CardItem
              image="/images/projects-killua-shopping-cart.jpg"
              title="shopping cart"
              description="a shopping cart with killua."
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/killua/tree/main/websites/examples/shopping%20cart"
              live="https://killua-shopping-cart.vercel.app/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
