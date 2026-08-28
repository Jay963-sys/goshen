import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";
import { ApplicationForm } from "@/components/ApplicationForm";
import { careerTracks } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Goshen Home Healthcare. Caregiving, nursing and administrative roles in home healthcare across Illinois. Apply online.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Care work worth staying for."
        lede="We're building a team of dependable, compassionate people to care for families across Illinois. If that sounds like you, we'd like to meet you."
      />

      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="mission-quote text-[clamp(1.4rem,2.6vw,2rem)]">
              We hire for kindness first —{" "}
              <em>the skills, we&apos;ll grow together.</em>
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {careerTracks.map((t) => (
                <div key={t.id} className="border-t-2 border-pine-900/16 pt-4">
                  <h3 className="font-display text-[1.3rem]">{t.title}</h3>
                  <p className="mt-2 text-[0.98rem] text-ink-600">{t.blurb}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-20">
        <Container className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">Apply now</p>
            <h2 className="display-md mt-4">Tell us about yourself.</h2>
            <p className="mt-4 text-ink-700">
              Complete the form below and our team will be in touch if
              there&apos;s a fit. Every application is read by a real person.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-10">
            <ApplicationForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
