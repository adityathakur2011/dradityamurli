"use client";

import { useState } from "react";
import Link from "next/link";
import { siteContent } from "@/content/siteContent";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/Button";
import { MobileNavDrawer, HamburgerButton } from "@/components/MobileNavDrawer";
import { cn } from "@/lib/cn";

export function Header() {
  const { doctor, nav, cta } = siteContent;
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-30 border-b border-[var(--color-border)] bg-[var(--color-bg)] shadow-[var(--shadow-soft)]"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Link
            href="/"
            className="text-lg font-semibold uppercase tracking-wide text-[var(--color-fg)]"
          >
            {doctor.name.toUpperCase()}
          </Link>

          {/* Desktop nav + CTA + theme */}
          <div className="flex items-center gap-4">
            <nav
              className="hidden items-center gap-6 md:flex"
              aria-label="Main"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden items-center gap-2 md:flex">
              <Button as="link" href="/contact" size="md">
                {cta.bookConsultation}
              </Button>
              <ThemeToggle />
            </div>
            <HamburgerButton
              open={drawerOpen}
              onClick={() => setDrawerOpen((o) => !o)}
              className="shrink-0"
            />
          </div>
        </div>
      </header>

      <MobileNavDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
