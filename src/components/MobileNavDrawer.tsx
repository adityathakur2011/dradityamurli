"use client";

import Link from "next/link";
import { useEffect } from "react";
import { siteContent } from "@/content/siteContent";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 0 1-1.06 1.06L12 13.06 6.53 18.53a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
  );
}

interface MobileNavDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNavDrawer({ open, onClose }: MobileNavDrawerProps) {
  const { nav, cta } = siteContent;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        role="presentation"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div
        aria-modal="true"
        aria-label="Mobile menu"
        role="dialog"
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-[min(320px,85vw)] flex-col border-l border-[var(--color-border)] bg-[var(--color-bg)] shadow-[var(--shadow-card)] transition-transform duration-200 ease-out md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-4">
          <span className="text-sm font-medium text-[var(--color-muted)]">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-[var(--radius)] text-[var(--color-fg)] hover:bg-[var(--color-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            aria-label="Close menu"
          >
            <XIcon className="size-6" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-[var(--radius)] px-4 py-3 text-base font-medium text-[var(--color-fg)] hover:bg-[var(--color-border)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-3 border-t border-[var(--color-border)] p-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-[var(--color-muted)]">Theme</span>
            <ThemeToggle />
          </div>
          <Button as="link" href="/contact" className="w-full justify-center" size="lg">
            {cta.bookConsultation}
          </Button>
        </div>
      </div>
    </>
  );
}

interface HamburgerButtonProps {
  open: boolean;
  onClick: () => void;
  className?: string;
}

export function HamburgerButton({ open, onClick, className }: HamburgerButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-[var(--radius)] text-[var(--color-fg)] hover:bg-[var(--color-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] md:hidden",
        className
      )}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      {open ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
    </button>
  );
}
