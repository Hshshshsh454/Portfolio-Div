import { PortfolioAbout } from '@/app/components/portfolio-about';
import { PortfolioFooter } from '@/app/components/portfolio-footer';
import { PortfolioHeader } from '@/app/components/portfolio-header';
import { PortfolioHero } from '@/app/components/portfolio-hero';
import { PortfolioProjects } from '@/app/components/portfolio-projects';

export default function Home() {
  return (
    <div className="bg-background">
      <PortfolioHeader />
      <main>
        <PortfolioHero />
        <PortfolioAbout />
        <PortfolioProjects />
      </main>
      <PortfolioFooter />
    </div>
  );
}
