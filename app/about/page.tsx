import type { Metadata } from "next";
import Link from "next/link";
// import Image from "next/image"; // enable with real Goshen photos
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero, AssessmentBand } from "@/components/Sections";
import { LinkArrow } from "@/components/LinkArrow";
import { about, founder } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Goshen Home Healthcare is a dedicated team of compassionate professionals delivering personalized home healthcare for all ages across Illinois.",
};

const blobB = { borderRadius: "58% 42% 45% 55% / 52% 56% 44% 48%" } as const;

const differences = [
  {
    label: "Every age",
    text: "From young children to seniors, care is shaped to the person in front of us — not a one-size plan.",
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
    label: "By the book",
    text: "Every service is delivered within the Illinois State Nurse Practice Act, by caregivers trained to a high standard.",
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
              style={blobB}
              className="photo-warm aspect-square w-full overflow-hidden ring-1 ring-pine-900/6"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Our company</p>
            <h2 className="display-md mt-4">Who we are</h2>
            <p className="mt-6 text-ink-700">
              With a focus on{" "}
              <strong>excellence, integrity, and compassion</strong>, we serve
              individuals of all ages — making sure they get the support they
              need to live safely and comfortably at home.
            </p>
            <p className="mt-4 text-ink-700">{about.body}</p>
            <p className="mt-7 text-[0.95rem]">
              <span className="font-semibold text-pine-900">
                {founder.name}
              </span>
              <span className="text-ink-500">
                {" "}
                &nbsp;·&nbsp; {founder.role}
              </span>
            </p>
          </Reveal>
        </Container>
      </section>

      {/* What families notice */}
      <section className="bg-cream py-20 lg:py-24">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Why Goshen</p>
            <h2 className="display-lg mt-4">What families notice.</h2>
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
        </Container>
      </section>

      {/* Founder promise */}
      <section className="py-20 lg:py-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Our promise</p>
            <p className="mission-quote mt-5 text-[clamp(1.4rem,2.6vw,2rem)]">
              {founder.statement}
            </p>
            <p className="mt-6 text-[0.95rem] text-ink-500">
              {founder.name} · {founder.role}
            </p>
            <Link
              href="/contact"
              className="editorial-link mt-8 justify-center"
            >
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
