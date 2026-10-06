import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

import { cn } from "./cn";

const variants = {
  default:
    "bg-[var(--primary)] text-[var(--primary-foreground)] hover:brightness-110",
  secondary:
    "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:brightness-110",
  outline:
    "border border-[var(--primary)] bg-transparent text-[var(--primary)] hover:bg-[var(--surface)]",
  inverse:
    "border border-white/80 bg-white/10 text-white hover:bg-white/20",
} as const;

const sizes = {
  md: "min-h-11 px-4 py-2 text-sm",
  lg: "min-h-12 px-5 py-2.5 text-sm",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold no-underline transition-colors";

export function Button({
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <button
      className={cn(baseClass, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "default",
  size = "md",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <a
      className={cn(baseClass, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
