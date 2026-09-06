import { Container } from "./Container";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { site } from "@/content/site";

/** Closing CTA band - Goshen's real "free assessment" line. */
export function AssessmentBand() {
  return (
    <section className="relative mt-24">
      <div className="rounded-t-[2.5rem] bg-pine-800 pt-20 pb-24">
        <Container className="text-center">
          <Reveal>
            <p className="eyebrow text-blush-200">Get started</p>
            <h2 className="display-lg mt-4 text-white">
              Call us today for a free assessment.
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl text-sage-200">
              Tell us about your family&apos;s needs and we&apos;ll build a care
              plan around them, for any age, any time.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={site.primaryCta.href} size="lg" variant="onDark">
                {site.primaryCta.label}
              </Button>
              <a
                href={site.phoneHref}
                className="text-lg font-semibold text-white/90 hover:text-white"
              >
                or call us today
              </a>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}

/** Inner-page hero header. */
export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="border-b border-pine-900/8 bg-cream/50 py-16 sm:py-20">
      <Container>
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-lg mt-4 max-w-3xl">{title}</h1>
          {lede && <p className="lede mt-5 max-w-2xl">{lede}</p>}
        </Reveal>
      </Container>
    </section>
  );
}
