import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/app/components/theme-toggle';

export function PortfolioHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            Divyansh <span className="text-primary">.</span>
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
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="grid gap-4 py-6">
                  <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    Divyansh <span className="text-primary">.</span>
                  </Link>
                  <Link href="#showcase" className="text-lg font-medium">Showcase</Link>
                  <Link href="#about" className="text-lg font-medium">About</Link>
                  <Link href="#skills" className="text-lg font-medium">Skills</Link>
                  <Link href="#projects" className="text-lg font-medium">Projects</Link>
                  <Link href="#contact" className="text-lg font-medium">Contact</Link>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
