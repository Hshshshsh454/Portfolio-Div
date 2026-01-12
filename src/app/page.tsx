
import { PortfolioAbout } from '@/app/components/portfolio-about';
import { PortfolioContact } from '@/app/components/portfolio-contact';
import { PortfolioFooter } from '@/app/components/portfolio-footer';
import { PortfolioHeader } from '@/app/components/portfolio-header';
import { PortfolioHero } from '@/app/components/portfolio-hero';
import { PortfolioProjects } from '@/app/components/portfolio-projects';
import { PortfolioSkills } from '@/app/components/portfolio-skills';
import { PortfolioToolkit } from '@/app/components/portfolio-toolkit';
import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { StyleEditor } from './components/style-editor';

export default function Home() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarHeader>
          </SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <StyleEditor />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="flex min-h-screen flex-col">
          <PortfolioHeader />
          <main className="flex-1">
            <PortfolioHero />
            <PortfolioToolkit />
            <PortfolioAbout />
            <PortfolioSkills />
            <PortfolioProjects />
            <PortfolioContact />
          </main>
          <PortfolioFooter />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
