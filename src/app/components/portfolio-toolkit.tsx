
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, BrainCircuit, Link2, Code2 } from 'lucide-react';

const toolkitItems = [
  {
    icon: <Server className="h-8 w-8 text-green-500" />,
    title: 'Scalable Backend Systems',
    description: 'Creating powerful and secure server-side applications with a focus on efficiency and maintainability.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-blue-500" />,
    title: 'AI & Machine Learning',
    description: 'Creating intelligent models for smarter, data-driven experiences.',
  },
  {
    icon: <Link2 className="h-8 w-8 text-purple-500" />,
    title: 'API Development',
    description: 'Crafting robust and well-documented APIs to ensure seamless communication between services.',
  },
  {
    icon: <Code2 className="h-8 w-8 text-cyan-500" />,
    title: 'Clean Code',
    description: 'Writing maintainable, efficient code following best practices and modern development standards.',
  },
];

export function PortfolioToolkit() {
  return (
    <section id="toolkit" className="py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What&apos;s in my Toolkit
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything needed to build great products on the web.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {toolkitItems.map((item, index) => (
            <Card key={index} className="flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                    {item.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
