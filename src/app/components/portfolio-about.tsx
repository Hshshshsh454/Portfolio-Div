import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export function PortfolioAbout() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-me');

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About Me
        </h2>
        <div className="mt-12 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="text-lg leading-8 text-muted-foreground">
              I&apos;m a passionate and results-oriented full-stack developer with experience in building and maintaining web applications. I have a strong foundation in both front-end and back-end technologies, and I thrive on solving complex problems and creating intuitive, user-friendly experiences.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, and hiking in the great outdoors. I&apos;m always eager to learn and grow as a developer.
            </p>
          </div>
          <div className="relative order-1 h-80 w-full md:order-2 md:h-96">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="rounded-xl object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
