import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero, AssessmentBand } from "@/components/Sections";
import { LinkArrow } from "@/components/LinkArrow";
import { services, serviceNote } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Skilled nursing and personal care from Goshen Home Healthcare across Illinois, for all ages, 24/7.",
};

const skilled = services.filter((s) => s.group === "Skilled Nursing");
const personal = services.filter((s) => s.group === "Personal Care");

function List({ items }: { items: typeof services }) {
  return (
    <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {items.map((s, i) => (
        <Reveal key={s.slug} delay={i * 50}>
          <article
            id={s.slug}
            className="scroll-mt-28 border-t-2 border-pine-900/15 pt-4"
          >
            <h3 className="font-display text-[1.2rem] font-bold text-pine-900">
              {s.title}
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-600">
              {s.blurb}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Skilled nursing and everyday care, in one place."
        lede="From clinical nursing to everyday support, Goshen shapes care around each person, for any age, around the clock."
      />

      {/* Which one? prompt */}
      <section className="py-12">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-4 border-y border-pine-900/12 py-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-lg text-ink-700">
                Not sure which kind of care your family needs? That&apos;s what
                the free assessment is for.
              </p>
              <Link href="/contact" className="editorial-link">
                <span>Start with an assessment</span>
                <LinkArrow />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Skilled Nursing */}
      <section className="py-14 lg:py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div
                className="photo-warm relative aspect-[4/3] w-full overflow-hidden"
                style={{ borderRadius: "58% 42% 45% 55% / 52% 56% 44% 48%" }}
              >
                <Image
                  src="/12.jpg"
                  alt="A Goshen nurse providing clinical care at home"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="eyebrow">Skilled Nursing</p>
              <h2 className="mt-3 font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-bold text-pine-700">
                Clinical care, delivered at home.
              </h2>
              <p className="mt-4 text-ink-700">
                Licensed nurses handle recovery, ongoing conditions, and
                everything in between, coordinating with your family and
                physicians.
              </p>
            </Reveal>
          </div>
          <List items={skilled} />
        </Container>
      </section>

      {/* Personal Care */}
      <section className="py-14 lg:py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={100} className="order-2 lg:order-1">
              <p className="eyebrow">Personal Care</p>
              <h2 className="mt-3 font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-bold text-pine-700">
                Everyday help that keeps home comfortable.
              </h2>
              <p className="mt-4 text-ink-700">
                A familiar, dependable presence for the day-to-day: meals,
                bathing, mobility and company, delivered with dignity.
              </p>
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <div
                className="photo-warm relative aspect-[4/3] w-full overflow-hidden"
                style={{ borderRadius: "42% 58% 57% 43% / 47% 44% 56% 53%" }}
              >
                <Image
                  src="/7.jpg"
                  alt="A Goshen caregiver helping a client at home"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <List items={personal} />
        </Container>
      </section>

      {/* 24/7 note */}
      <section className="pb-6">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-2 rounded-2xl bg-pine-800 px-7 py-6 text-white sm:flex-row sm:items-center sm:gap-5">
              <span className="font-display text-xl font-bold">
                Care, around the clock.
              </span>
              <span className="text-sage-200">{serviceNote}</span>
            </div>
          </Reveal>
        </Container>
      </section>

      <AssessmentBand />
    </>
  );
}
