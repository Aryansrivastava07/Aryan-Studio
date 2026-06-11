import Link from "next/link";
import Image from "next/image";
import CustomSections from "@/components/CustomSections";
import { getData } from "@/lib/api";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Services - Aryan Studio",
};

export default async function ServicesPage() {
  const data = await getData("/api/services");

  return (
    <main className="pt-24 pb-section-gap">
      <section className="relative min-h-[512px] flex items-center justify-center px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Wedding service background"
            className="object-cover opacity-40 mix-blend-multiply"
            src={data.hero.image}
            fill
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto mt-20">
          <h1 className="font-headline-xl text-headline-xl md:text-[56px] text-on-background mb-stack-md">
            {data.hero.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {data.hero.text}
          </p>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {data.packages.map((service) => (
          <div
            key={service.title}
            className={`service-card flex flex-col ${service.reverse ? "md:flex-row-reverse" : "md:flex-row"} bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden mb-section-gap`}
          >
            <div className="w-full md:w-1/2 image-zoom-container h-80 md:h-auto min-h-[400px]">
              <div className="relative w-full h-full">
                <Image
                  alt={service.title}
                  className="object-cover"
                  src={service.image}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-margin-mobile md:p-12 flex flex-col justify-center bg-surface-container-lowest">
              <div className="mb-stack-sm flex items-center gap-2">
                <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-md text-[12px] uppercase tracking-wider">
                  {service.tag}
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-background mb-stack-md">
                {service.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg leading-relaxed">
                {service.description}
              </p>
              <div className="mb-stack-lg border-t border-outline-variant/30 pt-stack-md">
                {service.details.map((detail) => (
                  <div
                    key={detail.text}
                    className="flex items-center gap-3 mb-2"
                  >
                    <span className="material-symbols-outlined text-outline">
                      {detail.icon}
                    </span>
                    <span className="font-body-md text-body-md text-on-surface">
                      {detail.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {service.price && service.priceLabel && (
                  <div>
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase block mb-1">
                      {service.priceLabel}
                    </span>
                    <span className="font-headline-md text-headline-md text-primary">
                      {service.price}
                    </span>
                  </div>
                )}
                <Link
                  href="/contact"
                  className="m-auto w-full sm:w-auto bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md hover:bg-primary-container transition-colors min-h-[48px] text-center"
                >
                  {service.cta || "Inquire Now"}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-section-gap text-center">
        <div className="bg-surface-container-low p-8 md:p-16 rounded-xl border border-outline-variant/50 max-w-4xl mx-auto">
          <span className="material-symbols-outlined text-4xl text-primary mb-4">
            mail
          </span>
          <h3 className="font-headline-md text-headline-md text-on-background mb-stack-sm">
            Need a Custom Package?
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg max-w-lg mx-auto">
            Every family's story is unique. Let us design a bespoke service
            package tailored exactly to your traditions and requirements.
          </p>
          <Link
            href="/contact"
            className="bg-tertiary text-on-tertiary px-10 py-4 rounded-DEFAULT font-label-md text-label-md hover:bg-tertiary-container hover:text-on-tertiary-container transition-colors min-h-[48px] inline-flex items-center gap-2"
          >
            Contact Our Studio
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
      <CustomSections sections={data.customSections} />
    </main>
  );
}
