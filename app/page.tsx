import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { site, services, about, serviceNote } from "@/content/site";

const trust = [
  {
    n: "01",
    title: "Every age",
    text: "Children, adults and seniors. Care shaped to the person in front of us.",
  },
  {
    n: "02",
    title: "Around the clock",
    text: "Support is available 24/7, whenever your family needs it.",
  },
  {
    n: "03",
    title: "Licensed & compliant",
    text: "Care delivered within the requirements of the Illinois State Nurse Practice Act.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="home-hero relative overflow-hidden">
        <Container>
          <div className="home-hero-grid">
            {/* Hero copy */}
            <div className="home-hero-copy">
              <Reveal>
                <p className="eyebrow">Home healthcare · Illinois</p>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="home-hero-title">
                  Care for <span className="hero-word">every age</span>
                  <br className="hidden sm:block" />{" "}
                  <span className="hero-title-light">any hour.</span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="home-hero-lede">
                  From children to seniors, Goshen delivers skilled and personal
                  home care across Illinois — tailored to each person and
                  available around the clock.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="home-hero-actions">
                  <Button href={site.primaryCta.href} size="lg">
                    {site.primaryCta.label}
                  </Button>

                  <a
                    href={site.phoneHref}
                    className="hero-phone link-underline"
                  >
                    <span>or call</span> {site.phone}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="hero-reassurance">
                  <span className="hero-reassurance-line" />
                  <span>
                    Compassionate care, delivered in the comfort of home.
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Hero visual */}
            <Reveal delay={160}>
              <div className="home-hero-visual">
                <div className="hero-photo-frame">
                  <Image
                    src="/1.jpg"
                    alt="A Goshen caregiver with a client at home"
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="hero-photo-label">
                  <span className="hero-photo-label-number">24/7</span>
                  <span className="hero-photo-label-text">
                    Care when you need it
                  </span>
                </div>

                <div className="hero-photo-caption">
                  <span>Goshen Home Healthcare</span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============================================================
          INTRODUCTION / BRAND STATEMENT
      ============================================================ */}
      <section className="statement-section">
        <Container>
          <div className="statement-grid">
            <Reveal>
              <p className="eyebrow">A more personal approach</p>
            </Reveal>

            <Reveal delay={100}>
              <div>
                <h2 className="statement-heading">
                  The right care should feel <span>personal.</span>
                </h2>

                <div className="statement-bottom">
                  <p>
                    Every person has different needs, routines and
                    circumstances. We believe quality home healthcare starts
                    with understanding the individual — not simply the
                    condition.
                  </p>

                  <Link href="/about" className="statement-link link-underline">
                    More about Goshen
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============================================================
          TRUST / REASSURANCE
      ============================================================ */}
      <section className="trust-section">
        <Container>
          <div className="trust-intro">
            <Reveal>
              <p className="eyebrow eyebrow-light">Why families choose us</p>
            </Reveal>

            <Reveal delay={80}>
              <h2>
                Care that is dependable,
                <br className="hidden sm:block" /> personal and always there.
              </h2>
            </Reveal>
          </div>

          <div className="trust-list">
            {trust.map((item, index) => (
              <Reveal key={item.n} delay={index * 90}>
                <div className="trust-item">
                  <span className="trust-number">{item.n}</span>

                  <div className="trust-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <span className="trust-rule" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================
          WHO WE ARE
      ============================================================ */}
      <section className="about-section">
        <Container>
          <div className="about-grid">
            <Reveal>
              <div className="about-image-wrap">
                <div className="about-image">
                  <Image
                    src="/9.jpg"
                    alt="Goshen caregivers supporting a family"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="about-image-note">
                  <span>Care built around people</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="about-copy">
                <p className="eyebrow">Who we are</p>

                <h2>Care shaped around each person, at every age.</h2>

                <p className="about-lede">{about.lede}</p>

                <p className="about-body">{about.body}</p>

                <div className="about-promise">
                  <span className="about-promise-mark" />
                  <p>{about.promise}</p>
                </div>

                <Link href="/about" className="about-link link-underline">
                  Discover Goshen
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SERVICES
      ============================================================ */}
      <section className="services-section">
        <Container>
          <div className="services-heading">
            <Reveal>
              <p className="eyebrow">What we offer</p>
            </Reveal>

            <Reveal delay={80}>
              <h2>
                Skilled care.
                <br />
                Everyday support.
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p>
                From skilled nursing to everyday personal care, our services are
                designed to support individuals and families at home.
              </p>
            </Reveal>
          </div>

          <div className="service-list">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 50}>
                <Link
                  href={`/services#${service.slug}`}
                  className="service-row"
                >
                  <span className="service-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="service-main">
                    <span className="service-title">{service.title}</span>

                    <span className="service-description">{service.blurb}</span>
                  </span>

                  <span className="service-arrow" aria-hidden>
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="services-note">
              <span className="services-note-line" />
              <p>
                <strong>Care, around the clock.</strong> {serviceNote}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============================================================
          CLOSING IMAGE / STATEMENT
      ============================================================ */}
      <section className="closing-section">
        <Container>
          <div className="closing-grid">
            <Reveal>
              <div className="closing-image">
                <Image
                  src="/10.jpg"
                  alt="Goshen home healthcare support"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="closing-copy">
                <p className="eyebrow">Here when it matters</p>

                <h2>Because good care is about more than treatment.</h2>

                <p>
                  It is about comfort, dignity, familiarity and having someone
                  there when you need them.
                </p>

                <Link href="/contact" className="closing-link link-underline">
                  Talk with Goshen
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============================================================
          CTA
      ============================================================ */}
      <section className="cta-section">
        <div className="cta-shell">
          <Container>
            <div className="cta-content">
              <Reveal>
                <p className="eyebrow eyebrow-light">Get started</p>
              </Reveal>

              <Reveal delay={80}>
                <h2>
                  Let&apos;s find the right
                  <br className="hidden sm:block" /> care for your family.
                </h2>
              </Reveal>

              <Reveal delay={140}>
                <p>
                  Tell us about your family&apos;s needs and we&apos;ll help
                  build a care plan around them — for any age, any time.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="cta-actions">
                  <Button href="/contact" size="lg" variant="onDark">
                    Contact us
                  </Button>

                  <a href={site.phoneHref} className="cta-phone">
                    or call {site.phone}
                  </a>
                </div>
              </Reveal>
            </div>
          </Container>

          <div className="cta-decoration" aria-hidden />
        </div>
      </section>
    </>
  );
}
