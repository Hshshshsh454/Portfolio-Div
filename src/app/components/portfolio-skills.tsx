
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Coffee, Database, GitCommitHorizontal, Leaf, Code } from 'lucide-react';

const skills = [
  {
    name: 'Java',
    level: 85,
    icon: <Coffee className="h-10 w-10 text-red-500" />,
    color: 'from-blue-400 to-purple-500',
  },
  {
    name: 'Spring Boot',
    level: 80,
    icon: <Leaf className="h-10 w-10 text-green-500" />,
    color: 'from-blue-400 to-purple-500',
  },
  {
    name: 'React',
    level: 75,
    icon: (
        <svg className="h-10 w-10 text-blue-400" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
            <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
            </g>
        </svg>
    ),
    color: 'from-blue-400 to-purple-500',
  },
  {
    name: 'SQL',
    level: 90,
    icon: <Database className="h-10 w-10 text-blue-500" />,
    color: 'from-blue-400 to-purple-500',
  },
  {
    name: 'Git',
    level: 85,
    icon: (
        <svg className="h-10 w-10 text-orange-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.2 10.51_a_1.3 1.3 0 0_0_-1.11-.64h-3.37a1.3 1.3 0 0_0-1.11.64l-2.73 4.54a.65.65 0 0_1_-1.1 0L9.84 9.87a.65.65 0 0_0_-.55-.29.65.65 0 0_0_-.55.29L6.5 13.06H3.81a1.3 1.3 0 1_0_0 2.6h3.24a.65.65 0 0_0_.55-.29.65.65 0 0_0_.55-.29l2.24-3.19 2.94 4.88a.65.65 0 0_0_1.1 0l2.73-4.54h2.53a1.3 1.3 0 1_0_0-2.6Z" fill="currentColor"></path>
        </svg>
    ),
    color: 'from-blue-400 to-purple-500',
  },
  {
    name: 'REST API',
    level: 90,
    icon: <GitCommitHorizontal className="h-10 w-10 text-purple-500" />,
    color: 'from-blue-400 to-purple-500',
  },
];

export function PortfolioSkills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Skills
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Technologies and tools I use to bring products to life
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col p-6 transition-transform duration-300 hover:-translate-y-2">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <h3 className="text-xl font-bold">{skill.name}</h3>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                  {skill.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative h-2 rounded-full bg-muted">
                    <div className="absolute h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" style={{ width: `${skill.level}%` }}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
