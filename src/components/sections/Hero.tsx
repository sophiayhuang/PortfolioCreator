import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32">
      <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
        {siteConfig.tagline}
      </h1>
      <p className="mt-6 max-w-xl text-lg opacity-70">
        {siteConfig.description}
      </p>
      <a
        href="#contact"
        className="mt-10 inline-flex h-12 items-center rounded-full bg-foreground px-6 font-medium text-background hover:opacity-90"
      >
        Get in touch
      </a>
    </section>
  );
}
