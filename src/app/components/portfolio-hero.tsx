import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';

export function PortfolioHero() {
  return (
    <section id="showcase" className="relative w-full py-24 text-center md:py-32 lg:py-40">
      <div className="container mx-auto">
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            The <span className="text-green-500">Backend</span> <span className="text-purple-500">Developer</span> & <span className="text-cyan-400">AI/ML</span> <span className="text-purple-500">Enthusiast</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Creating scalable web apps with Java and Spring Boot with best practices for exceptional user experience.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="bg-green-500 text-white hover:bg-green-600">
              View Projects
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div className="rounded-xl border bg-card shadow-lg">
            <div className="flex h-10 items-center gap-2 border-b px-4">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                <span className="text-green-400">$</span>
                <p>https://leetcode.com/u/SiddharthShukla34/</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
