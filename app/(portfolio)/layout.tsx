import { PortfolioShell } from "@/components/portfolio/portfolio-shell";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PortfolioShell>{children}</PortfolioShell>;
}
