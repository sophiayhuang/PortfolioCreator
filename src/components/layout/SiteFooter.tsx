import { siteConfig } from "@/lib/site";

// Cache Components requires time-dependent values to be cached or deferred.
// The year is baked in at build time, which is fine for a copyright line.
async function getCopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const year = await getCopyrightYear();

  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm opacity-70">
        © {year} {siteConfig.name}
      </div>
    </footer>
  );
}
