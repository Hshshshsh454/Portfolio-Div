import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

const projects = [
  {
    id: 'project-1',
    title: 'Expense Tracker',
    description: 'Desktop application to track personal expenses with SQL database integration and JavaFX GUI.',
    tags: ['Java', 'Spring Boot', 'JavaFX', 'SQL'],
    link: 'https://github.com/Hshshshsh454/Engineering-Edge.git'
  },
  {
    id: 'project-2',
    title: 'Airline Passenger Refferal Prediction',
    description: 'Predicts passenger referrals using machine learning models with data analysis and evaluation metrics.',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    link: 'https://github.com/Hshshshsh454/Highway-delight.git'
  },
  {
    id: 'project-3',
    title: 'Engineering Edge Services',
    description: 'Generates secure passwords with customizable length and character options using ReactJS.',
    tags: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3'],
    link: '#'
  },
  {
    id: 'project-4',
    title: 'Online Chat Application',
    description: 'Real-time chat app using Java Swing, Socket programming, and Spring Boot backend integration.',
    tags: ['Java', 'Swing', 'Spring Boot', 'Socket'],
    link: '#'
  },
  {
    id: 'project-5',
    title: 'Custom Language Compiler',
    description: 'Developed a custom compiler using Lex and AST to parse and execute a custom programming language.',
    tags: ['C++', 'Lex', 'AST'],
    link: '#'
  },
  {
    id: 'project-6',
    title: 'Advanced Zomato Clustering and Sentiment Analysis',
    description: 'This project analyzes Zomato restaurant data from various cities in India to extract valuable insights about the Indian food industry.',
    tags: ['NLP', 'PCA', 'Machine Learning', 'Sentiment Analysis'],
    link: '#'
  },
];

export function PortfolioProjects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Check out some of my recent work
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <Card key={project.id} className="flex flex-col overflow-hidden">
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
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                    <CardDescription>{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="bg-green-500 text-white hover:bg-green-600 w-full">
                    <Link href={project.link}><Github className="mr-2 h-4 w-4" /> Code</Link>
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
