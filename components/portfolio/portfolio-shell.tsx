import { Navigation } from "@/components/portfolio/navigation";
import { ViewTransition } from "@/components/portfolio/view-transition";
import { Viewport } from "@/components/portfolio/viewport";

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="portfolio-shell">
      <Navigation />
      <Viewport>
        <ViewTransition>{children}</ViewTransition>
      </Viewport>
    </div>
  );
}
