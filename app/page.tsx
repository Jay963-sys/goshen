import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { site, services, about, serviceNote } from "@/content/site";

const blob = { borderRadius: "42% 58% 57% 43% / 47% 44% 56% 53%" } as const;

const trust = [
  {
    n: "01",
    title: "Every age",
    text: "Children, adults and seniors. Care shaped to the person in front of us.",
  },
  {
    n: "02",
    title: "Around the clock",
    text: "We provide care 24/7, so support is there whenever your family needs it.",
  },
  {
    n: "03",
    title: "Licensed & compliant",
    text: "Every service allowable under the Illinois State Nurse Practice Act.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden py-14 lg:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">Home healthcare &middot; Illinois</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-[clamp(2.6rem,6vw,4.6rem)] font-bold leading-[1.02] tracking-tight text-pine-900">
                Care for <span className="text-blush-600">every age</span>, any
                hour.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-[1.2rem] leading-relaxed text-ink-700">
                From children to seniors, Goshen delivers skilled and personal
                home care across Illinois, tailored to each person and available
                around the clock.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href={site.primaryCta.href} size="lg">
                  {site.primaryCta.label}
                </Button>
                <a
                  href={site.phoneHref}
                  className="link-underline text-lg font-semibold text-pine-800"
                >
                  or call {site.phone}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Circular hero visual: coral blob behind, photo in circle, 24/7 badge */}
          <Reveal delay={180}>
            <div className="relative mx-auto aspect-square w-[min(420px,90%)]">
              <div
                aria-hidden
                className="absolute right-2 top-[8%] z-0 aspect-square w-4/5 bg-blush-500 opacity-90"
                style={blob}
              />
              <div className="relative z-10 aspect-square w-full overflow-hidden rounded-full shadow-[0_30px_60px_-30px_rgba(14,63,58,0.4)]">
                <Image
                  src="/3.jpg"
                  alt="A Goshen caregiver with a client at home"
                  fill
                  priority
                  sizes="(min-width: 960px) 420px, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-[12%] left-[2%] z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-pine-900 text-white shadow-[0_16px_30px_-14px_rgba(0,0,0,0.5)]">
                <b className="font-display text-2xl leading-none">24/7</b>
                <small className="mt-0.5 text-[0.6rem] tracking-[0.12em] text-sage-200">
                  ALWAYS ON
                </small>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------------ Trust band */}
      <section className="bg-pine-900 text-white">
        <Container className="grid gap-8 py-12 md:grid-cols-3 md:gap-10 lg:py-14">
          {trust.map((t, i) => (
            <Reveal key={t.n} delay={i * 80}>
              <div className="flex items-start gap-4">
                <span className="font-display text-[1.6rem] font-bold leading-none text-blush-500">
                  {t.n}
                </span>
                <div>
                  <h3 className="font-display text-[1.15rem] font-bold text-white">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-sage-200">
                    {t.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* ------------------------------------------------------ Who we are */}
      <section className="py-20 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div
              className="photo-warm relative aspect-[5/6] w-full overflow-hidden"
              style={{
                borderRadius: "68% 42% 55% 65% / 52% 56% 44% 48%",
                objectPosition: "left 10%",
              }}
            >
              <Image
                src="/k.jpeg"
                alt="Goshen caregivers supporting a family"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.8rem)] font-bold leading-tight tracking-tight text-pine-900">
              Care shaped around each person, at every age.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink-700">
              {about.lede}
            </p>
            <p className="mt-4 max-w-xl text-ink-700">{about.body}</p>
            <p className="mt-6 max-w-xl border-l-2 border-blush-500 pl-4 text-ink-700">
              {about.promise}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------------ Services grid */}
      <section className="bg-cream py-20 lg:py-24">
        <Container>
          <Reveal className="mb-10 max-w-2xl">
            <p className="eyebrow">What we offer</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-pine-900">
              Skilled nursing and everyday care, in one place.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-pine-900/12 ring-1 ring-pine-900/12 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="flex h-full flex-col bg-ivory p-6 transition-colors hover:bg-surface"
                >
                  <span className="font-display text-[0.85rem] font-bold text-blush-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-[1.1rem] font-bold leading-tight text-pine-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-500">
                    {s.blurb}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-8 text-center text-[0.95rem] text-ink-500">
              <b className="text-pine-700">Care, around the clock.</b>{" "}
              {serviceNote}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------------ CTA */}
      <section className="pt-20">
        <div className="relative overflow-hidden rounded-t-[2.5rem] bg-pine-800 py-20 text-center text-white">
          <Container>
            <Reveal>
              <p className="eyebrow text-blush-200">Get started</p>
              <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-tight text-white">
                Call us today for a free assessment!
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-sage-200">
                Tell us about your family&apos;s needs and we&apos;ll build a
                care plan around them, for any age, any time.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" size="lg" variant="onDark">
                  Contact us
                </Button>
                <a
                  href={site.phoneHref}
                  className="text-lg font-semibold text-white/90 hover:text-white"
                >
                  or call {site.phone}
                </a>
              </div>
            </Reveal>
          </Container>
        </div>
      </section>
    </>
  );
}
