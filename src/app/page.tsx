import { PortfolioAbout } from '@/app/components/portfolio-about';
import { PortfolioFooter } from '@/app/components/portfolio-footer';
import { PortfolioHeader } from '@/app/components/portfolio-header';
import { PortfolioHero } from '@/app/components/portfolio-hero';
import { PortfolioProjects } from '@/app/components/portfolio-projects';
import { StyleEditor } from '@/app/components/style-editor';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar';

export default function Home() {
  return (
    <SidebarProvider>
      <div className="bg-background">
        <Sidebar>
          <SidebarHeader>
            <h1 className="p-2 text-center font-headline text-2xl font-bold tracking-tight">
              PortfolioPilot
            </h1>
          </SidebarHeader>
          <SidebarContent>
            <StyleEditor />
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <PortfolioHeader />
          <main>
            <PortfolioHero />
            <PortfolioAbout />
            <PortfolioProjects />
          </main>
          <PortfolioFooter />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
