import { HeroSection } from "../components/homepage/hero-section";
import { MissionSection } from "../components/homepage/mission-section";
import { DataScienceSection } from "../components/homepage/data-science-section";
import { DonateSection } from "../components/homepage/donate-section";
import { ImpactSection } from "../components/homepage/impact-section";
import { StatsSection } from "../components/homepage/stats-section";
import { ContentHubSection } from "../components/homepage/content-hub-section";
import { PartnershipSection } from "../components/homepage/partnership-section";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <MissionSection />
      <DataScienceSection />
      <PartnershipSection />
      <DonateSection />
      <ImpactSection />
      <StatsSection />
      <ContentHubSection />
    </main>
  );
}
