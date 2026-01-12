
import { PortfolioAbout } from '@/app/components/portfolio-about';
import { PortfolioFooter } from '@/app/components/portfolio-footer';
import { PortfolioHeader } from '@/app/components/portfolio-header';
import { PortfolioHero } from '@/app/components/portfolio-hero';
import { PortfolioProjects } from '@/app/components/portfolio-projects';
import { PortfolioToolkit } from '@/app/components/portfolio-toolkit';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <PortfolioHeader />
      <main className="flex-1">
        <PortfolioHero />
        <PortfolioToolkit />
        {/* The other sections are commented out to match the image, but can be added back. */}
        {/* <PortfolioAbout /> */}
        {/* <PortfolioProjects /> */}
      </main>
      <PortfolioFooter />
    </div>
  );
}

