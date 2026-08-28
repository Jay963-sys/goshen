import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-3 focus-visible:outline-offset-3 disabled:opacity-60 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-blush-600 text-white shadow-[0_10px_30px_-12px_rgba(163,74,87,0.7)] hover:bg-blush-700 hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-pine-800 ring-1 ring-pine-800/25 hover:ring-pine-800/60 hover:bg-pine-900/[0.03]",
  ghost: "bg-transparent text-pine-800 hover:bg-pine-900/[0.05]",
  onDark:
    "bg-white text-pine-900 hover:bg-cream hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps &
  ({ href: string } | { href?: undefined }) &
  React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, sizes[size], variants[variant], className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
