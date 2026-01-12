import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export function PortfolioAbout() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-me');

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">
          About Me
        </h2>
        <Card className="overflow-hidden border-none bg-secondary/50 shadow-lg">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 items-center md:grid-cols-2">
              <div className="relative h-64 w-full md:h-full">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                )}
              </div>
              <div className="p-8 md:p-12">
                <p className="mb-4 text-lg leading-relaxed text-foreground/80">
                  I&apos;m a passionate and results-oriented full-stack developer with experience in building and maintaining web applications. I have a strong foundation in both front-end and back-end technologies, and I thrive on solving complex problems and creating intuitive, user-friendly experiences.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80">
                  When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, and hiking in the great outdoors. I&apos;m always eager to learn and grow as a developer.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
