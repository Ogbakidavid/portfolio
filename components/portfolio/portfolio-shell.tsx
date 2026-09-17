import { Navigation } from "@/components/portfolio/navigation";
import { PersistentEnvironment } from "@/components/portfolio/persistent-environment";
import { ViewTransition } from "@/components/portfolio/view-transition";
import { Viewport } from "@/components/portfolio/viewport";

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="portfolio-shell">
      <PersistentEnvironment />
      <Navigation />
      <Viewport>
        <ViewTransition>{children}</ViewTransition>
      </Viewport>
    </div>
  );
}
