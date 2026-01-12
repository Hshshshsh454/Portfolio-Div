import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Moon } from 'lucide-react';

export function PortfolioHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            ShuklaJi <span className="text-primary">.</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-2 md:flex">
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
        <div className='flex items-center gap-4'>
            <Button variant="outline" size="icon">
                <Moon className="h-5 w-5" />
            </Button>
        </div>
      </div>
    </header>
  );
}
