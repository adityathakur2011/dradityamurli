import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { siteContent } from "@/content/siteContent";
import { cn } from "@/lib/cn";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-murali-704108173/", // placeholder
    icon: LinkedInIcon,
  },
  // {
  //   label: "X (Twitter)",
  //   href: "https://x.com/", // placeholder
  //   icon: TwitterIcon,
  // },
] as const;

export function Footer() {
  const { footer, cta, disclaimer } = siteContent;

  return (
    <footer
      className={cn(
        "bg-[var(--color-footer-bg)] text-white",
        "border-t border-[var(--color-footer-border)]"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        {/* Quote */}
        <blockquote className="mb-4 text-center text-lg font-medium italic sm:text-xl">
          {footer.quote}
        </blockquote>

        {/* Disclaimer */}
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm opacity-90 sm:text-base">
          {disclaimer}
        </p>

        {/* Bottom row: copyright | CTA + social */}
        <div className="flex flex-col items-center gap-6 border-t border-white/20 pt-8 sm:flex-row sm:justify-between sm:gap-4">
          <p className="text-sm opacity-90 order-2 sm:order-1">
            {footer.copyright}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 order-1 sm:order-2">
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center rounded-[var(--radius)] border-2 border-white bg-white px-5 py-2.5 text-sm font-medium text-[var(--color-footer-bg)]",
                "shadow-[var(--shadow-soft)] transition hover:bg-white/90 hover:border-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-footer-bg)]"
              )}
            >
              {cta.bookConsultation}
            </Link>
            <div className="flex items-center gap-2" aria-label="Social links">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-[var(--radius)] text-white opacity-90 transition hover:opacity-100 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-footer-bg)]"
                  )}
                  aria-label={label}
                >
                  <Icon sx={{ fontSize: 24, color: "white" }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
