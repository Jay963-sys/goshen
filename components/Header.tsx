"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Container } from "./Container";
import { Button } from "./Button";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

/** Goshen brand lockup: circular badge + wordmark. */
function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5"
      aria-label={`${site.legalName} home`}
      onClick={onClick}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink">
        <Image
          src="/goshen-logo.png"
          alt=""
          width={512}
          height={512}
          priority
          className="h-11 w-11"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.2rem] font-bold tracking-tight text-pine-900">
          Goshen
        </span>
        <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink-500">
          Home Healthcare
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          // border-b in the base so the layout never jumps between states
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-pine-900/10 bg-ivory/92 shadow-[0_8px_30px_rgba(14,63,58,0.05)] backdrop-blur-xl"
            : "border-transparent bg-ivory/75 backdrop-blur-md",
        )}
      >
        <Container className="flex h-[4.75rem] items-center justify-between gap-5">
          <Brand onClick={() => setOpen(false)} />

          <nav
            className="hidden items-center gap-9 md:flex"
            aria-label="Primary"
          >
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative text-[0.92rem] font-medium transition-colors",
                    active
                      ? "text-pine-900"
                      : "text-ink-700 hover:text-pine-900",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-2.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blush-600 transition-all duration-300",
                      active
                        ? "scale-100 opacity-100"
                        : "scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-60",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href={site.phoneHref}
              className="hidden text-[0.88rem] font-semibold text-pine-800 lg:block"
            >
              {site.phone}
            </a>
            <Button href={site.primaryCta.href} size="md">
              Free assessment
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "relative z-50 flex h-11 w-11 items-center justify-center rounded-full border transition-all md:hidden",
              open
                ? "border-pine-900 bg-pine-900 text-white"
                : "border-pine-900/10 bg-white text-pine-900",
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-5 bg-current transition-all duration-300",
                  open ? "top-1.5 rotate-45" : "top-0.5",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-5 bg-current transition-all duration-300",
                  open ? "top-1.5 -rotate-45" : "top-[0.65rem]",
                )}
              />
            </span>
          </button>
        </Container>
      </header>

      {/* Full-bleed mobile overlay - kept OUTSIDE <header> so the header's
          backdrop-filter doesn't trap this fixed element. */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 bottom-0 top-[4.75rem] z-40 flex flex-col bg-ivory md:hidden",
          "transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 40% at 90% 0%, var(--color-blush-100), transparent 60%), radial-gradient(60% 40% at 0% 100%, var(--color-sage-100), transparent 60%)",
          }}
        />
        <Container className="relative flex h-full flex-col overflow-y-auto py-8">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className="flex items-center justify-between border-b border-pine-900/10 py-5"
                >
                  <span className="flex items-center gap-3.5">
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full transition-all duration-300",
                        active
                          ? "scale-100 bg-blush-600"
                          : "scale-0 bg-transparent",
                      )}
                    />
                    <span
                      className={cn(
                        "font-display text-[1.75rem] leading-none",
                        active ? "text-pine-900" : "text-pine-900/85",
                      )}
                    >
                      {item.label}
                    </span>
                  </span>
                  <span className="text-blush-600" aria-hidden>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
              Talk to our team
            </p>
            <a
              href={site.phoneHref}
              className="font-display text-2xl text-pine-900"
            >
              {site.phone}
            </a>
            <div className="mt-5">
              <Button href={site.primaryCta.href} size="lg" className="w-full">
                {site.primaryCta.label}
              </Button>
            </div>
            <p className="mt-8 text-sm italic text-ink-500">…be in health.</p>
          </div>
        </Container>
      </div>
    </>
  );
}
