/**
 * SITE CONTENT — Goshen Home Healthcare.
 *
 * Themed from the same template as LotusCare: this file + the @theme palette
 * in globals.css are the only things that change between the two sites.
 *
 * IMPORTANT — confirm with client before launch:
 *  - Phone/address/email below are placeholders. The old template site showed a
 *    fake number ("123 456 78 90") and a New York address that isn't Goshen's.
 *    Goshen operates in ILLINOIS (per the "Illinois State Nurse Practice Act"
 *    reference in their services). Get the real Chicago/IL NAP.
 */

export const site = {
  name: "Goshen",
  legalName: "Goshen Home Healthcare",
  tagline: "Be in health.",
  description:
    "Goshen Home Healthcare is a dedicated team of compassionate professionals delivering high-quality, personalized home healthcare across Illinois — for all ages, 24/7.",

  // --- Contact / NAP — TODO: CONFIRM WITH CLIENT (placeholders below) ---
  phone: "(000) 000-0000",
  phoneHref: "tel:+10000000000",
  email: "info@goshenhhc.com",
  address: {
    line1: "TODO — street address",
    city: "TODO — city",
    state: "IL",
    zip: "TODO",
  },
  hours: "Care provided 24/7",

  socials: {
    // Old template linked Facebook / Twitter / Instagram / YouTube — TODO: real handles
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  primaryCta: {
    label: "Request a free assessment",
    href: "/contact",
  },
} as const;

// Founder — real, from the old site (drop the template's "CEO of evermed")
export const founder = {
  name: "Olivia Michelle",
  role: "Founder & CEO",
  statement:
    "With a focus on excellence, integrity, and compassion, we serve individuals of all ages — making sure they get the support they need to live safely and comfortably at home.",
} as const;

// The old site's real "who we are" copy
export const about = {
  lede: "At Goshen Home Healthcare, we are a dedicated team of compassionate professionals committed to delivering high-quality, personalized home healthcare services.",
  body: "Whether it's help with daily activities, skilled nursing, or specialized care, our caregivers are trained to provide exceptional service tailored to each client's unique needs.",
} as const;

export type Service = {
  slug: string;
  title: string;
  group: "Skilled Nursing" | "Personal Care";
  blurb: string;
};

// The real 8 services from the old site (lorem ipsum replaced with concrete copy)
export const services: Service[] = [
  {
    slug: "private-duty-nursing",
    title: "Private Duty Nursing",
    group: "Skilled Nursing",
    blurb:
      "One-to-one skilled nursing at home — ongoing clinical care from a licensed nurse dedicated to your loved one.",
  },
  {
    slug: "medication-management",
    title: "Medication Management",
    group: "Skilled Nursing",
    blurb:
      "The right medications, taken correctly and on time — set up, monitored, and coordinated with your physicians.",
  },
  {
    slug: "patient-family-education",
    title: "Patient / Family Education",
    group: "Skilled Nursing",
    blurb:
      "Teaching patients and families to manage a condition confidently at home, so no one is left to figure it out alone.",
  },
  {
    slug: "surgical-after-care",
    title: "Surgical After Care",
    group: "Skilled Nursing",
    blurb:
      "Wound care and recovery support after an operation, so healing happens safely at home.",
  },
  {
    slug: "infusion-therapy",
    title: "Infusion Therapy",
    group: "Skilled Nursing",
    blurb:
      "In-home IV and infusion care, administered and monitored by skilled nurses.",
  },
  {
    slug: "personal-care",
    title: "Personal Care Services",
    group: "Personal Care",
    blurb:
      "Respectful help with bathing, dressing, grooming and mobility — daily support with dignity.",
  },
  {
    slug: "home-making",
    title: "Home Making Services",
    group: "Personal Care",
    blurb:
      "Meals, light housekeeping and errands that keep the home safe, clean and comfortable.",
  },
  {
    slug: "companionship",
    title: "Companionship / Sitter Services",
    group: "Personal Care",
    blurb:
      "A friendly, dependable presence — company, conversation, and a watchful eye when family can't be there.",
  },
];

// Real closing note from the old services section
export const serviceNote =
  "…and other services allowable under the Illinois State Nurse Practice Act. We provide care 24/7.";

// Careers — mirrors the LotusCare template (Goshen trains caregivers too).
// TODO: confirm Goshen actually recruits before publishing this page.
export const careerTracks = [
  {
    id: "caregiving",
    title: "Caregiving",
    blurb:
      "Support clients with everyday care — on a schedule that fits your life.",
  },
  {
    id: "nursing",
    title: "Nursing",
    blurb:
      "Bring your skilled-nursing training into the homes that need it most.",
  },
  {
    id: "administrative",
    title: "Administrative",
    blurb: "Keep care running smoothly — scheduling, coordination and support.",
  },
] as const;

export const positionOptions = careerTracks.map((t) => t.title);
export const employmentTypes = ["Full-time", "Part-time", "Per diem"] as const;
