export const siteConfig = {
  name: "Portfolio Creator",
  tagline: "Custom portfolio sites for artists.",
  description:
    "We design and build custom portfolio sites for artists, designers, and makers.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  nav: [
    { label: "Work", href: "#work" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
