# Space Coast Home Renovations — Website

A modern, mobile-first single-page marketing site for an owner-operated home
remodeling and renovation business based in Melbourne, FL.

Built with **React 18**, **Vite**, and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Editing the site

Almost all content lives in one place:

- **[`src/data/site.js`](src/data/site.js)** — business name, phone, email,
  hours, services, gallery, service areas, and form dropdown options.

### Update contact details

In `src/data/site.js`, edit the `business` object. The phone placeholders
(`phone`, `phoneHref`, `smsHref`) and `email` are set to placeholders — replace
them with the real values before launch. `phoneHref` powers the click-to-call
buttons and should be in `tel:+1XXXXXXXXXX` format.

### Replace the placeholder photos

The `images` object in `src/data/site.js` points at remodeling stock photos as
placeholders. To use your own before-and-after work:

1. Drop image files into `public/images/`.
2. Change the paths in `images`, e.g. `kitchen: "/images/kitchen-after.jpg"`.

If an image fails to load, the layout falls back to a neutral branded panel, so
nothing ever looks broken.

## Section / component map

| Section | Component |
| --- | --- |
| Sticky header + mobile menu | `src/components/Header.jsx` |
| Hero | `src/components/Hero.jsx` |
| Services | `src/components/Services.jsx` (`ServiceCard.jsx`) |
| Owner-operated | `src/components/OwnerOperated.jsx` (`FeatureCard.jsx`) |
| Project gallery | `src/components/Gallery.jsx` (`GalleryImage.jsx`) |
| Why choose us | `src/components/WhyChooseUs.jsx` (`FeatureCard.jsx`) |
| Quote request form | `src/components/QuoteForm.jsx` |
| Service area | `src/components/ServiceArea.jsx` |
| Contact | `src/components/Contact.jsx` |
| Footer | `src/components/Footer.jsx` |

## Notes

- **The quote form has no backend.** It validates required fields and shows a
  confirmation message, but does not yet send anywhere. To make it live, POST
  the form values (and uploaded photos) inside `handleSubmit` in
  `QuoteForm.jsx` to your email service / form endpoint (e.g. Formspree,
  Netlify Forms, or a custom API).
- SEO title, meta description, and local-business structured data live in
  `index.html`.
