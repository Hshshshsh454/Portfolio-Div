import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with a modern design, product management, and a secure checkout process.',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A responsive task management application to help users organize their work and improve productivity.',
  },
  {
    id: 'project-3',
    title: 'Personal Portfolio Website',
    description: 'A sleek and personal portfolio to showcase projects and skills, built with Next.js and Tailwind CSS.',
  },
];

export function PortfolioProjects() {
  return (
    <section id="projects" className="bg-secondary/50 py-24 sm:py-32">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          My Projects
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <Card key={project.id} className="flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                {projectImage && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint={projectImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow" />
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="ghost" asChild>
                    <Link href="#">Live Demo <ExternalLink className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild className="bg-green-500 text-white hover:bg-green-600">
                    <Link href="#">Source Code</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
