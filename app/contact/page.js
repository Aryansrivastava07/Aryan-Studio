import InquiryForm from "@/components/InquiryForm";
import CustomSections from "@/components/CustomSections";
import { getData } from "@/lib/api";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Contact Us | Aryan Studio",
};

export default async function ContactPage() {
  const data = await getData("/api/contact");

  return (
    <main className="flex-grow pt-[120px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <div className="mb-section-gap max-w-3xl">
        <h1 className="font-headline-xl text-headline-xl text-on-surface mb-stack-md hidden md:block">
          Let's Frame Your Story
        </h1>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-stack-md md:hidden">
          Let's Frame Your Story
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Whether it's a traditional family celebration or a grand cinematic
          production, we are here to capture the essence of your moments. Reach
          out to discuss your vision.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-5 space-y-gutter flex flex-col">
          <div className="bg-surface-container-lowest p-8 border border-outline-variant/30 shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative overflow-hidden group hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-primary group-hover:scale-110 transition-transform duration-500">
              <span
                className="material-symbols-outlined text-8xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                forum
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm relative z-10">
              Instant Connect
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg relative z-10">
              The fastest way to reach us. Drop a message to discuss dates,
              packages, or general inquiries.
            </p>
            <a
              className="inline-flex items-center justify-center bg-secondary-container text-on-secondary-container px-6 py-4 w-full font-label-md text-label-md uppercase tracking-wide hover:bg-secondary-fixed-dim transition-colors min-h-[48px] relative z-10"
              href={data.whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined mr-2">chat</span>
              Message on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30 flex flex-col justify-between">
              <span className="material-symbols-outlined text-primary mb-stack-md">
                call
              </span>
              <div>
                <h4 className="font-label-md text-label-md uppercase text-on-surface-variant mb-2">
                  Call Studio
                </h4>
                {data.phones.map((phone) => (
                  <p
                    key={phone}
                    className="font-body-md text-body-md text-on-surface"
                  >
                    {phone}
                  </p>
                ))}
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30 flex flex-col justify-between">
              <span className="material-symbols-outlined text-primary mb-stack-md">
                location_on
              </span>
              <div>
                <h4 className="font-label-md text-label-md uppercase text-on-surface-variant mb-2">
                  Visit Us
                </h4>
                {data.address.map((line) => (
                  <p
                    key={line}
                    className="font-body-md text-body-md text-on-surface"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-surface-container-lowest p-8 lg:p-12 border border-outline-variant/30 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <h3 className="font-headline-lg text-headline-lg text-on-surface mb-stack-lg hidden lg:block">
            Send an Inquiry
          </h3>
          <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-stack-lg lg:hidden">
            Send an Inquiry
          </h3>
          <InquiryForm eventTypes={data.eventTypes} />
        </div>
      </div>

      <div className="mt-section-gap w-full h-[400px] bg-surface-container-low border border-outline-variant/30 overflow-hidden relative group">
        <iframe
          title="Studio Location"
          className="w-full h-full border-0"
          loading="lazy"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(data.map.location)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        />
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-surface-container-lowest p-4 border border-outline-variant/30 glass-nav">
          <p className="font-label-md text-label-md text-on-surface uppercase mb-1">
            {data.map.label}
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {data.map.location}
          </p>
        </div>
      </div>
      <CustomSections sections={data.customSections} />
    </main>
  );
}
