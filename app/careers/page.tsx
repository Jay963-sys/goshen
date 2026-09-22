import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";
import { ApplicationForm } from "@/components/ApplicationForm";
import { LinkArrow } from "@/components/LinkArrow";
import { careerTracks, careerLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Goshen Home Healthcare. Caregiving, nursing and administrative roles in home healthcare across Illinois. Apply online.",
};

export default function CareersPage() {
  const hasIndeed = Boolean(careerLinks.indeed);

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Care work worth staying for."
        lede="We're building a team of dependable, compassionate people to care for families across Illinois. If that sounds like you, we'd like to meet you."
      />

      {/* Intro + image */}
      <section className="py-16 lg:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div
              className="photo-warm relative aspect-[4/3] w-full overflow-hidden"
              style={{ borderRadius: "58% 42% 45% 55% / 52% 56% 44% 48%" }}
            >
              <Image
                src="/8.jpg"
                alt="The Goshen caregiving team"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold leading-tight tracking-tight text-pine-900">
              We hire for kindness first. The skills, we&apos;ll grow together.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {careerTracks.map((t) => (
                <div key={t.id} className="border-t-2 border-pine-900/16 pt-4">
                  <h3 className="font-display text-[1.2rem] font-bold">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] text-ink-600">{t.blurb}</p>
                </div>
              ))}
            </div>
            {hasIndeed && (
              <a
                href={careerLinks.indeed}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link mt-8"
              >
                <span>Browse current openings on Indeed</span>
                <LinkArrow />
              </a>
            )}
          </Reveal>
        </Container>
      </section>

      {/* Primary apply CTA → in-page application form, emailed to the team */}
      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <ApplicationForm siteName="Goshen Home Healthcare" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
