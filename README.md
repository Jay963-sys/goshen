# LotusCare

Marketing + lead-gen site for LotusCare, a Chicago home health agency.
Built as a **reusable template** — the same codebase themes into the Goshen site by
swapping one content file and the palette tokens.

Stack: **Next.js 15 (App Router) · TypeScript · Tailwind v4 · Drizzle ORM + Neon
Postgres · Resend**.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in when ready (site runs without it)
npm run dev                  # http://localhost:3000
```

The site runs immediately with **no env vars**. Forms still work in dev — without
`RESEND_API_KEY` they log the payload to the console instead of emailing; without
`DATABASE_URL` they skip the DB write. Wire both up when the client confirms details.

---

## Project structure

```
app/
  layout.tsx        Fonts (Fraunces + Hanken Grotesk), metadata, header/footer, JSON-LD
  page.tsx          Home (the showcase)
  about|services|careers|contact/   inner pages
  api/contact/route.ts   Enquiry endpoint (zod → Drizzle → Resend)
  api/apply/route.ts     Application endpoint
  globals.css       ← DESIGN SYSTEM (all palette/type/motion tokens live here)
components/          Header, Footer, Button, forms, cards, Reveal, LotusMark…
content/site.ts     ← ALL COPY + NAP (single source of truth)
db/                 Drizzle schema + Neon client + drizzle config
lib/                cn() helper, Resend wrapper
```

## The two editable layers

Everything a non-developer would change lives in exactly two places:

1. **`content/site.ts`** — business name, phone, address, services, testimonials,
   career tracks, CTA labels.
2. **`app/globals.css` → `@theme`** — the colour palette and font variables.

Components never hard-code copy or colour, so both sites stay in sync structurally.

## Spinning up the Goshen site

1. Copy the repo.
2. Replace the values in `content/site.ts` with Goshen's.
3. Override the palette in `globals.css @theme` (e.g. a different accent) and, if
   desired, the two `--font-*` faces in `layout.tsx`.
4. Deploy as a separate project. Done — no component edits.

---

## ⚠️ Before launch — confirm with client

The old LotusCare site had **inconsistent contact details** (3 phone numbers, 2
addresses). Every NAP value in `content/site.ts` is a placeholder marked `TODO`.
Confirm the correct set — it also drives the `HomeAndConstructionBusiness` JSON-LD
(local SEO) in `layout.tsx`.

Other launch items:

- [ ] Confirm NAP (address / phone / fax / email / hours)
- [ ] Real logo (SVG) + replace the `LotusMark` placeholder if they have brand marks
- [ ] Real photography (hero + section blocks use warm placeholders — search
      `photo-warm` and the `{/* Replace with a real client photo */}` note)
- [ ] Confirm stat numbers (220 / 490 / 120)
- [ ] Real social links in `content/site.ts` (or they stay hidden)
- [ ] **Chat widget** — the client asked for one. Recommended: drop in a hosted
      live-chat widget (Tawk.to / Crisp) so enquiries land in their inbox. Add the
      snippet in `app/layout.tsx` before `</body>`. (Not a custom AI bot — confirm.)
- [ ] Set `metadataBase` and OG image in `layout.tsx`
- [ ] Point the domain at the deployment (DNS) once approved

## Database (when ready)

```bash
# after setting DATABASE_URL in .env.local
npm run db:push        # creates the enquiries + applications tables on Neon
```

Submissions are stored in `enquiries` and `applications`. Email notifications go to
`LEADS_INBOX` via Resend regardless of the DB.

## Deploy

Vercel is the natural fit (this doesn't need the client's current hosting). Add the
env vars in the Vercel dashboard, connect the repo, and point the domain's DNS at
the deployment at go-live.

```
goshen
├─ app
│  ├─ about
│  │  └─ page.tsx
│  ├─ api
│  │  ├─ apply
│  │  │  └─ route.ts
│  │  └─ contact
│  │     └─ route.ts
│  ├─ apple-icon.png
│  ├─ careers
│  │  └─ page.tsx
│  ├─ contact
│  │  └─ page.tsx
│  ├─ globals.css
│  ├─ icon.png
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ services
│     └─ page.tsx
├─ components
│  ├─ ApplicationForm.tsx
│  ├─ Button.tsx
│  ├─ Cards.tsx
│  ├─ ChatWidget.tsx
│  ├─ ContactForm.tsx
│  ├─ Container.tsx
│  ├─ Field.tsx
│  ├─ Footer.tsx
│  ├─ Header.tsx
│  ├─ LinkArrow.tsx
│  ├─ LotusMark.tsx
│  ├─ Reveal.tsx
│  └─ Sections.tsx
├─ content
│  └─ site.ts
├─ db
│  ├─ index.ts
│  └─ schema.ts
├─ lib
│  ├─ cn.ts
│  └─ email.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ 1.jpg
│  ├─ 10.jpg
│  ├─ 11.jpg
│  ├─ 12.jpg
│  ├─ 13.jpg
│  ├─ 2.jpg
│  ├─ 4.jpg
│  ├─ 7.jpg
│  ├─ 8.jpg
│  ├─ 9.jpg
│  └─ goshen-badge.png
├─ README.md
└─ tsconfig.json

```