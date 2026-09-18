import { Navigation } from "@/components/portfolio/navigation";
import { CustomCursor } from "@/components/portfolio/custom-cursor";
import { PersistentEnvironment } from "@/components/portfolio/persistent-environment";
import { ViewTransition } from "@/components/portfolio/view-transition";
import { Viewport } from "@/components/portfolio/viewport";
import { ContactProvider } from "@/components/portfolio/contact/contact-context";
import { IntroLoader } from "@/components/portfolio/intro-loader";

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  return (
    <ContactProvider>
      <div className="portfolio-shell">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <IntroLoader />
        <PersistentEnvironment />
        <CustomCursor />
        <Navigation />
        <Viewport><ViewTransition>{children}</ViewTransition></Viewport>
      </div>
    </ContactProvider>
  );
}
