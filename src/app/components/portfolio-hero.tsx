import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function PortfolioHero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative flex h-[60vh] min-h-[400px] w-full items-center justify-center text-center text-white md:h-[80vh]">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 animate-fade-in-up p-4">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          Hi, I&apos;m John Doe
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
          A passionate full-stack developer creating beautiful and functional web experiences.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
