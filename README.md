# Farinacci Fitness

Marketing site for a personal training business — built and shipped as a freelance project for a friend's training studio.

> **Live:** [farinaccifitness.com](https://www.farinaccifitness.com/) (also [farinacci-fitness.vercel.app](https://farinacci-fitness.vercel.app))

## What it does

- **Home** — hero, brand, calls to action
- **About** — trainer bio + credentials
- **Programs** — training program offerings
- **Reviews** — client testimonials
- **Contact** — form that emails the trainer via Nodemailer 
- Mobile-responsive throughout

## Tech Stack

Built on the T3 stack:

| Layer | Tech |
|---|---|
| Framework | Next.js 13 (Pages Router) |
| API | tRPC |
| Email | Nodemailer (contact form) |
| ORM | Prisma (SQLite for simplicity) |
| Validation | Zod |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Hosting | Vercel + custom domain |

## Project Structure

```
src/
├── pages/         # _app, index, about, programs, reviews, contact
├── components/    # shared UI
├── server/        # tRPC routers (contact form submission)
├── utils/         # tRPC client
├── styles/        # global CSS
└── videoData.ts   # workout video metadata

prisma/
└── schema.prisma  # minimal — site is mostly static + email
```

## Getting Started

```bash
npm install
cp .env.example .env
# Fill: DATABASE_URL, EMAIL_USER, EMAIL_PASS (Nodemailer SMTP creds)
npx prisma db push
npm run dev
```

## Roadmap

- [ ] Booking / scheduling integration (Calendly embed or custom)
- [ ] Online program purchases (Stripe)
- [ ] Blog / content section
- [ ] Image gallery with optimization
- [ ] Simple analytics dashboard for the trainer

## What I Learned

- Working with a real client — scoping, feedback loops, shipping to production
- T3 stack for a content-heavy site (probably overkill, but learned the patterns)
- Nodemailer for  form submissions
- Embedded Facebook videos in React / NextJS
- Domain config and DNS for a custom-domain Vercel deploy
- Designing for a real person's brand, not my own taste
