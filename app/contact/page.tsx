import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free home assessment from Goshen Home Healthcare, or reach our Illinois team. Care available 24/7.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Request a free assessment."
        lede="Tell us a little about the care you're looking for, and our team will reach out to build a plan around your family, for any age, any time."
      />

      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl bg-sage-50 p-8 ring-1 ring-pine-900/8">
              <div className="photo-warm relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl">
                <Image
                  src="/b.jpeg"
                  alt="The Goshen team"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h2 className="font-display text-[1.4rem] font-bold text-pine-900">
                Contact information
              </h2>
              <dl className="mt-5 space-y-5 text-[0.95rem]">
                <div>
                  <dt className="font-semibold text-pine-800">Address</dt>
                  <dd className="mt-1 text-ink-700">
                    {site.address.line1}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-pine-800">Phone</dt>
                  <dd className="mt-1">
                    <a
                      href={site.phoneHref}
                      className="text-ink-700 hover:text-pine-800"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-pine-800">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-ink-700 hover:text-pine-800"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-pine-800">Office hours</dt>
                  <dd className="mt-1 text-ink-700">{site.hours}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-pine-800">
                    Care availability
                  </dt>
                  <dd className="mt-1 text-ink-700">{site.careAvailability}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
