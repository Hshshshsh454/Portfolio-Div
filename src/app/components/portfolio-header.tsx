import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import Link from 'next/link';

export function PortfolioHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="md:hidden" />
          <Link href="/" className="font-headline text-xl font-bold">
            John Doe
          </Link>
        </div>
        <nav className="hidden items-center gap-2 md:flex">
          <Button variant="link" asChild>
            <Link href="#about">About</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="#projects">Projects</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
