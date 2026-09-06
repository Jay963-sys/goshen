/**
 * SITE CONTENT - Goshen Home Healthcare.
 * Themed from the same template as LotusCare (this file + the @theme palette).
 * NOTE: copy avoids em-dashes on purpose (they were being stripped on paste).
 */

export const site = {
  name: "Goshen",
  legalName: "Goshen Home Healthcare",
  tagline: "Be in health.",
  description:
    "Goshen Home Healthcare is a dedicated team of compassionate professionals delivering high-quality, personalized home healthcare across Illinois, for all ages, 24/7.",

  // Confirmed by client
  phone: "(630) 634-2833",
  phoneHref: "tel:+16306342833",
  email: "info@goshenhhc.com",
  address: {
    line1: "5901 N Cicero Ave, STE 107",
    city: "Chicago",
    state: "IL",
    zip: "60646",
  },
  hours: "Mon-Fri, 8:30 AM - 5:00 PM",
  careAvailability: "Care available 24/7",

  socials: { facebook: "", instagram: "", linkedin: "" },

  primaryCta: { label: "Request a free assessment", href: "/contact" },
} as const;

// Real company copy. (No founder/CEO section: that attribution was template placeholder.)
export const about = {
  lede: "At Goshen Home Healthcare, we are a dedicated team of compassionate professionals committed to delivering high-quality, personalized home healthcare services.",
  body: "Whether it's help with daily activities, skilled nursing, or specialized care, our caregivers are trained to provide exceptional service tailored to each client's unique needs.",
  promise:
    "With a focus on excellence, integrity, and compassion, we serve individuals of all ages, making sure they get the support they need to live safely and comfortably at home.",
} as const;

export type Service = {
  slug: string;
  title: string;
  group: "Skilled Nursing" | "Personal Care";
  blurb: string;
};

export const services: Service[] = [
  {
    slug: "private-duty-nursing",
    title: "Private Duty Nursing",
    group: "Skilled Nursing",
    blurb:
      "One-to-one skilled nursing at home, from a licensed nurse dedicated to your loved one.",
  },
  {
    slug: "medication-management",
    title: "Medication Management",
    group: "Skilled Nursing",
    blurb:
      "The right medications, taken correctly and on time, coordinated with your physicians.",
  },
  {
    slug: "patient-family-education",
    title: "Patient / Family Education",
    group: "Skilled Nursing",
    blurb:
      "Teaching patients and families to manage a condition confidently at home.",
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
      "Respectful help with bathing, dressing, grooming and mobility: daily support with dignity.",
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
      "A friendly, dependable presence: company, conversation, and a watchful eye when family can't be there.",
  },
];

export const serviceNote =
  "...and other services allowable under the Illinois State Nurse Practice Act. We provide care 24/7.";

export const careerTracks = [
  {
    id: "caregiving",
    title: "Caregiving",
    blurb:
      "Support clients with everyday care, on a schedule that fits your life.",
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
    blurb: "Keep care running smoothly: scheduling, coordination and support.",
  },
] as const;

export const careerLinks = { indeed: "", linkedin: "" } as const;

export const positionOptions = careerTracks.map((t) => t.title);
export const employmentTypes = ["Full-time", "Part-time", "Per diem"] as const;
