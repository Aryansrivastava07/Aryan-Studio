import PortfolioGrid from "@/components/PortfolioGrid";
import CustomSections from "@/components/CustomSections";
import { getData } from "@/lib/api";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Portfolio - Aryan Studio",
};

export default async function PortfolioPage() {
  const data = await getData("/api/portfolio");

  return (
    <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <header className="text-center mb-section-gap">
        <h1 className="font-headline-xl text-headline-xl text-primary mb-stack-md">
          Our Portfolio
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          A curated collection of cinematic moments, capturing the grandeur,
          tradition, and intimate emotions of your special days.
        </p>
      </header>

      <PortfolioGrid data={data} />
      <CustomSections sections={data.customSections} />
    </main>
  );
}
