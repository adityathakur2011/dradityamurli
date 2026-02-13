import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-[var(--color-accent)] !text-white font-semibold shadow-[var(--shadow-soft)] hover:bg-[var(--color-accent-hover)] hover:shadow-[0 6px 12px -2px rgb(0 0 0 / 0.08)] active:scale-[0.98]",
  secondary:
    "border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-semibold bg-transparent hover:bg-[var(--color-accent)] hover:!text-white hover:border-[var(--color-accent-hover)] active:scale-[0.98]",
} as const;

const sizes = {
  sm: "px-3 py-1.5 text-sm rounded-xl",
  md: "px-4 py-2.5 text-sm rounded-[var(--radius)]",
  lg: "px-6 py-3 text-base rounded-[var(--radius)]",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: "button";
  href?: never;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: "link";
  href: string;
  type?: never;
  disabled?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]";

  const combined = cn(base, variants[variant], sizes[size], className);

  if (rest.as === "link" && "href" in rest) {
    return (
      <Link href={rest.href} className={combined}>
        {children}
      </Link>
    );
  }

  /* eslint-disable @typescript-eslint/no-unused-vars -- as/href stripped to avoid passing to DOM */
  const { as: _as, href: _href, type = "button", disabled, ...buttonRest } = rest;
  /* eslint-enable @typescript-eslint/no-unused-vars */
  return (
    <button type={type} disabled={disabled} className={combined} {...buttonRest}>
      {children}
    </button>
  );
}
