/**
 * Resolves the site's canonical URL, used for metadata and link previews.
 * 1. NEXT_PUBLIC_SITE_URL, if set (explicit override)
 * 2. Vercel's production domain, provided automatically on Vercel builds
 *    (includes a custom domain once one is added)
 * 3. localhost, for local development
 */
function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Portfolio Creator",
  tagline: "Custom portfolio sites for artists.",
  description:
    "We design and build custom portfolio sites for artists, designers, and makers.",
  url: getSiteUrl(),
  nav: [
    { label: "Work", href: "#work" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
