import Link from "next/link";
// import Image from "next/image"; // enable when real Goshen photos are ready
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { LinkArrow } from "@/components/LinkArrow";
import { site, services, about, founder, serviceNote } from "@/content/site";

// Soft organic "blob" frames — Goshen's signature shape (vs LotusCare's arcs).
const blobA = { borderRadius: "46% 54% 57% 43% / 47% 44% 56% 53%" } as const;
const blobB = { borderRadius: "58% 42% 45% 55% / 52% 56% 44% 48%" } as const;

export default function HomePage() {
  const skilled = services.filter((s) => s.group === "Skilled Nursing");
  const personal = services.filter((s) => s.group === "Personal Care");

  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 50% at 90% 0%, var(--color-sage-100), transparent 60%), radial-gradient(45% 45% at 0% 100%, var(--color-blush-100), transparent 60%)",
          }}
        />
        <Container className="grid items-center gap-12 pt-20 pb-16 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16 lg:pt-24 lg:pb-20">
          <div>
            <Reveal>
              <p className="eyebrow">Home healthcare &middot; Illinois</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display-xl mt-6">
                Personalized home healthcare,{" "}
                <span className="text-blush-600">for every age.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lede mt-7 max-w-lg">{about.lede}</p>
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
                  or call us today
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="proof mt-9 max-w-lg text-[0.98rem]">
                Serving <b>all ages across Illinois, 24/7</b> — every service
                allowable under the Illinois State Nurse Practice Act.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            {/* Swap for a real Goshen photo:
                <Image src="/hero.jpg" alt="A Goshen caregiver with a client at home"
                       fill className="object-cover" /> inside a relative wrapper */}
            <div
              style={blobA}
              className="photo-warm aspect-[4/5] w-full overflow-hidden ring-1 ring-pine-900/6"
            />
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------------ Who we are */}
      <section className="py-24 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div
              style={blobB}
              className="photo-warm mx-auto aspect-square w-full max-w-md overflow-hidden ring-1 ring-pine-900/6"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Our company</p>
            <h2 className="display-lg mt-4">Who we are</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink-700">
              With a focus on{" "}
              <strong>excellence, integrity, and compassion</strong>, we serve
              individuals of all ages — making sure they get the support they
              need to live safely and comfortably at home.
            </p>
            <p className="mt-4 max-w-xl text-ink-700">{about.body}</p>
            <p className="mt-7 text-[0.95rem]">
              <span className="font-semibold text-pine-900">
                {founder.name}
              </span>
              <span className="text-ink-500">
                {" "}
                &nbsp;·&nbsp; {founder.role}
              </span>
            </p>
            <Link href="/services" className="editorial-link mt-6">
              <span>See what we do</span>
              <LinkArrow />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------------ Services */}
      <section className="bg-cream py-24 lg:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What we offer</p>
            <h2 className="display-lg mt-4">Care that meets the whole need.</h2>
          </Reveal>

          <div className="mt-12">
            <Reveal>
              <div className="chapter-head">
                <h3 className="font-display text-[clamp(1.4rem,2.4vw,1.9rem)] text-pine-700">
                  Skilled Nursing
                </h3>
                <span className="text-[0.8rem] uppercase tracking-[0.14em] text-ink-500">
                  Clinical &middot; Licensed
                </span>
              </div>
            </Reveal>
            {skilled.map((s, i) => (
              <Reveal key={s.slug} delay={i * 55}>
                <Link href={`/services#${s.slug}`} className="srow">
                  <span className="st">{s.title}</span>
                  <span className="sd">{s.blurb}</span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <Reveal>
              <div className="chapter-head">
                <h3 className="font-display text-[clamp(1.4rem,2.4vw,1.9rem)] text-pine-700">
                  Personal Care
                </h3>
                <span className="text-[0.8rem] uppercase tracking-[0.14em] text-ink-500">
                  Everyday &middot; Support
                </span>
              </div>
            </Reveal>
            {personal.map((s, i) => (
              <Reveal key={s.slug} delay={i * 55}>
                <Link href={`/services#${s.slug}`} className="srow">
                  <span className="st">{s.title}</span>
                  <span className="sd">{s.blurb}</span>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Real differentiator, featured */}
          <Reveal delay={80}>
            <div className="mt-12 flex flex-col gap-2 rounded-2xl bg-pine-800 px-7 py-6 text-white sm:flex-row sm:items-center sm:gap-5">
              <span className="font-display text-xl font-semibold">
                Care, around the clock.
              </span>
              <span className="text-sage-200">{serviceNote}</span>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* --------------------------------------------------- Founder quote */}
      <section className="bg-pine-900 py-24 text-sage-100 lg:py-28">
        <Container className="max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-6 text-blush-200">Our promise</p>
            <blockquote className="font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-medium leading-[1.25] tracking-tight text-white">
              {founder.statement}
            </blockquote>
            <cite className="mt-8 block not-italic text-sage-200">
              <span className="font-semibold text-white">{founder.name}</span> —{" "}
              {founder.role}, {site.legalName}
            </cite>
          </Reveal>
        </Container>
      </section>

      {/* --------------------------------------------------- Closing CTA */}
      <section className="py-24 lg:pt-28">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-pine-800 px-8 py-16 text-center text-white sm:px-12">
              <p className="eyebrow text-blush-200">Get started</p>
              <h2 className="display-lg mt-4 text-white">
                Call us today for a free assessment!
              </h2>
              <p className="lede mx-auto mt-5 max-w-xl text-sage-200">
                Tell us about your family&apos;s needs and we&apos;ll build a
                care plan around them — for any age, any time.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" size="lg" variant="onDark">
                  Contact us
                </Button>
                <a
                  href={site.phoneHref}
                  className="text-lg font-semibold text-white/90 hover:text-white"
                >
                  or call us today
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
