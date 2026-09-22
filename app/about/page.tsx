import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero, AssessmentBand } from "@/components/Sections";
import { LinkArrow } from "@/components/LinkArrow";
import { about } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Goshen Home Healthcare is a dedicated team of compassionate professionals delivering personalized home healthcare for all ages across Illinois.",
};

const differences = [
  {
    label: "Every age",
    text: "From young children to seniors, care is shaped to the person in front of us.",
  },
  {
    label: "Around the clock",
    text: "We provide care 24/7, so the right support is there whenever your family needs it.",
  },
  {
    label: "Skilled and personal",
    text: "Clinical nursing and everyday help from one trained team, so nothing falls through the cracks.",
  },
  {
    label: "Licensed & compliant",
    text: "Every service is delivered by trained caregivers in accordance with applicable Illinois Department of Public Health (IDPH) guidelines, ensuring safe, professional, and dependable care.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Home healthcare, tailored to each person."
        lede={about.lede}
      />

      {/* Who we are */}
      <section className="py-20 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div
              className="photo-warm relative aspect-square w-full overflow-hidden"
              style={{ borderRadius: "58% 42% 45% 55% / 52% 56% 44% 48%" }}
            >
              <Image
                src="/11.jpg"
                alt="Goshen caregivers with clients at home"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-pine-900">
              Care shaped around each person.
            </h2>
            <p className="mt-6 text-ink-700">{about.body}</p>
            <p className="mt-4 border-l-2 border-blush-500 pl-4 text-ink-700">
              {about.promise}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* What families notice */}
      <section className="bg-cream py-20 lg:py-24">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Why Goshen</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-pine-900">
              What families notice.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {differences.map((d, i) => (
              <Reveal key={d.label} delay={i * 70}>
                <div className="border-t-2 border-pine-900/15 pt-5">
                  <p className="eyebrow">{d.label}</p>
                  <p className="mt-3 max-w-md text-lg leading-8 text-ink-700">
                    {d.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <Link href="/contact" className="editorial-link mt-12">
              <span>Request a free assessment</span>
              <LinkArrow />
            </Link>
          </Reveal>
        </Container>
      </section>

      <AssessmentBand />
    </>
  );
}
