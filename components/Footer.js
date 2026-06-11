import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-section-gap bg-tertiary border-t border-outline-variant/10 text-on-tertiary font-body-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col gap-stack-md">
          <span className="font-headline-lg text-headline-lg text-secondary-fixed flex items-center gap-2">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              camera
            </span>
            Aryan Studio
          </span>
          <p className="text-tertiary-fixed-dim max-w-xs">
            Elevating rural storytelling to a premium global standard. Creating
            eternal memories with sophistication and art.
          </p>
        </div>
        <div className="flex flex-col gap-stack-sm md:items-center">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/portfolio"
              className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/services"
              className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-stack-sm md:items-end">
          <nav className="flex flex-col gap-3 md:text-right">
            <a
              href="#"
              className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors flex items-center gap-2 md:justify-end"
            >
              <span className="material-symbols-outlined text-sm">
                photo_camera
              </span>{" "}
              Instagram
            </a>
            <a
              href="#"
              className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors flex items-center gap-2 md:justify-end"
            >
              <span className="material-symbols-outlined text-sm">groups</span>{" "}
              Facebook
            </a>
            <a
              href="#"
              className="text-tertiary-fixed-dim hover:text-secondary-fixed transition-colors flex items-center gap-2 md:justify-end"
            >
              <span className="material-symbols-outlined text-sm">chat</span>{" "}
              WhatsApp
            </a>
          </nav>
        </div>
      </div>
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-stack-lg pt-stack-md border-t border-tertiary-container flex flex-col md:flex-row justify-between items-center gap-stack-sm">
        <p className="text-tertiary-fixed-dim text-sm">
          © 2024 Aryan Studio . All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-tertiary-fixed-dim hover:text-on-tertiary text-sm transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-tertiary-fixed-dim hover:text-on-tertiary text-sm transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
