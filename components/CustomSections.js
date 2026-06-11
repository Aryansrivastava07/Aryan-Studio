import Image from "next/image";
import Link from "next/link";
import { assetUrl } from "@/lib/api";

export default function CustomSections({ sections = [] }) {
  if (!sections.length) {
    return null;
  }

  return (
    <section className="px-margin-mobile md:px-margin-desktop py-section-gap bg-surface">
      <div className="max-w-container-max mx-auto space-y-section-gap">
        {sections.map((section, index) => (
          <article key={section.id || `${section.title}-${index}`} className={`grid grid-cols-1 md:grid-cols-2 gap-gutter items-center ${index % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            {section.image && (
              <div className="relative min-h-[340px] overflow-hidden rounded bg-surface-container">
                <Image alt={section.title || "Custom section image"} src={assetUrl(section.image)} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
            )}
            <div className="flex flex-col justify-center">
              {section.kicker && (
                <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-stack-md flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-primary" />
                  {section.kicker}
                </span>
              )}
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md">{section.title}</h2>
              {section.text && <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg leading-relaxed whitespace-pre-line">{section.text}</p>}
              {section.ctaLabel && section.ctaHref && (
                <Link href={section.ctaHref} className="inline-flex items-center text-primary font-label-md text-label-md uppercase tracking-wider hover:text-primary-container transition-colors group">
                  {section.ctaLabel}
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
