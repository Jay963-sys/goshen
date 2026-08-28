import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free home assessment from Goshen Home Healthcare, or reach our Illinois team — care available 24/7.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Request a free assessment."
        lede="Tell us a little about the care you're looking for, and our team will reach out to build a plan around your family — for any age, any time."
      />

      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl bg-sage-50 p-8 ring-1 ring-pine-900/8">
              <h2 className="display-sm">Contact information</h2>
              <dl className="mt-6 space-y-5 text-[0.95rem]">
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
                  <dt className="font-semibold text-pine-800">Availability</dt>
                  <dd className="mt-1 text-ink-700">{site.hours}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
