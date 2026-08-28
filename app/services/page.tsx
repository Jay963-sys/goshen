import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero, AssessmentBand } from "@/components/Sections";
import { LinkArrow } from "@/components/LinkArrow";
import { services, serviceNote } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Skilled nursing and personal care from Goshen Home Healthcare — private duty nursing, medication management, personal care, companionship and more, 24/7 across Illinois.",
};

const groups = [
  {
    name: "Skilled Nursing",
    note: "Clinical · Licensed",
    intro:
      "Clinical care delivered at home by licensed nurses — for recovery, ongoing conditions, and everything in between.",
  },
  {
    name: "Personal Care",
    note: "Everyday · Support",
    intro:
      "Everyday help that keeps daily life comfortable, safe and dignified — with a familiar, dependable presence.",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Care that meets the whole need."
        lede="From skilled clinical nursing to everyday support, Goshen shapes care around each person — for any age, around the clock."
      />

      {/* Which one? prompt */}
      <section className="py-14">
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

      {/* Chapters */}
      <section className="pb-10 lg:pb-14">
        <Container>
          {groups.map((group) => (
            <div key={group.name} className="mt-16 first:mt-0">
              <Reveal>
                <div className="chapter-head">
                  <h2 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] text-pine-700">
                    {group.name}
                  </h2>
                  <span className="text-[0.8rem] uppercase tracking-[0.14em] text-ink-500">
                    {group.note}
                  </span>
                </div>
              </Reveal>

              <Reveal>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-700">
                  {group.intro}
                </p>
              </Reveal>

              <div className="mt-4">
                {services
                  .filter((s) => s.group === group.name)
                  .map((s, i) => (
                    <Reveal key={s.slug} delay={i * 55}>
                      <article id={s.slug} className="srow scroll-mt-28">
                        <span className="st">{s.title}</span>
                        <span className="sd">{s.blurb}</span>
                      </article>
                    </Reveal>
                  ))}
              </div>
            </div>
          ))}

          {/* 24/7 + Illinois note */}
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

      <AssessmentBand />
    </>
  );
}
