import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function PortfolioAbout() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-me');

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Me
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              I&apos;m a Backend developer specializing in crafting scalable and intelligent systems.
            </p>
            <p className="text-lg leading-8 text-muted-foreground">
              I design and build robust, high-performance web applications that power exceptional user experiences. My expertise includes developing secure APIs, managing databases, and implementing best practices for clean, optimized, and scalable code. I am proficient in languages like Java and and frameworks such as Spring Boot.
            </p>
            <p className="text-lg leading-8 text-muted-foreground">
              When I&apos;m not coding, you can find me exploring new technologies or enjoying sketching and painting.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-green-500 text-white hover:bg-green-600">Contact Me</Button>
              <Button size="lg" variant="outline">Download Resume</Button>
            </div>
          </div>
          <div className="relative mx-auto h-80 w-80 md:h-96 md:w-96">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="rounded-full object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
