import { Button } from '@/components/ui/button';
import { Github, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function PortfolioFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                Divyansh <span className="text-green-500">.</span>
            </Link>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-2 text-center text-sm md:flex-nowrap md:gap-4">
          <Button variant="link" asChild>
            <Link href="#showcase">Showcase</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="#about">About</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="#skills">Skills</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="#projects">Projects</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
      <div className="mt-6 border-t pt-6 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Divyansh Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
