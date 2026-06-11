import Link from "next/link";
import CustomSections from "@/components/CustomSections";
import ProtectedImage from "@/components/ProtectedImage";
import { getData } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const data = await getData("/api/home");

  return (
    <main>
      <section className="relative h-screen w-full overflow-hidden bg-tertiary">
        <div className="absolute inset-0 w-full h-full hero-zoom">
          <ProtectedImage
            alt="Cinematic Wedding Moment"
            className="object-cover opacity-80"
            src={data.hero.image}
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tertiary/40 via-transparent to-tertiary/80" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-margin-mobile md:px-margin-desktop">
          <span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-[0.2em] mb-stack-md">
            {data.hero.kicker}
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-tertiary max-w-4xl mb-stack-lg drop-shadow-lg">
            {data.hero.title}
          </h1>
          <p className="font-body-lg text-body-lg text-tertiary-fixed mb-stack-lg max-w-2xl">
            {data.hero.text}
          </p>
          <div className="flex flex-col sm:flex-row gap-stack-md">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider h-12 px-8 rounded hover:bg-primary-container transition-colors duration-300"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-outline-variant text-on-tertiary font-label-md text-label-md uppercase tracking-wider h-12 px-8 rounded hover:bg-outline-variant/20 transition-colors duration-300"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-[3/4] overflow-hidden rounded bg-surface-container">
              <div className="relative w-full h-full">
                <ProtectedImage
                  alt="Elegant Bride Portrait"
                  className="object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
                  src={data.about.image}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary-container rounded p-6 hidden md:flex flex-col justify-center items-center text-center shadow-lg">
              <span className="font-headline-lg text-headline-lg text-on-secondary-container block mb-2">
                10+
              </span>
              <span className="font-label-md text-label-md text-on-secondary-container uppercase tracking-wider block">
                Years of
                <br />
                Excellence
              </span>
            </div>
          </div>
          <div className="order-1 md:order-2 md:pl-gutter flex flex-col justify-center">
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-stack-md flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary" />
              {data.about.kicker}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-lg">
              {data.about.title}
            </h2>
            {data.about.text.map((paragraph) => (
              <p
                key={paragraph}
                className="font-body-md text-body-md text-on-surface-variant mb-stack-md leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <Link
              href="/portfolio"
              className="inline-flex items-center text-primary font-label-md text-label-md uppercase tracking-wider hover:text-primary-container transition-colors group"
            >
              Discover Our Story
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-section-gap">
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-stack-sm block">
              Our Expertise
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Curated Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-[300px]">
            {data.expertise.map((item) => (
              <Link
                key={item.title}
                href="/services"
                className={`${item.wide ? "md:col-span-2" : ""} relative group overflow-hidden rounded bg-surface`}
              >
                <ProtectedImage
                  alt={item.title}
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  src={item.image}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-stack-lg w-full">
                  <span className="inline-block bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md px-3 py-1 rounded mb-stack-sm">
                    {item.tag}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-tertiary">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CustomSections sections={data.customSections} />
    </main>
  );
}
