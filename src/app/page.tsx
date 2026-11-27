import { Hero } from "@/components/sections/Hero";
import { PlaceholderSection } from "@/components/sections/PlaceholderSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PlaceholderSection id="work" title="Work" />
      <PlaceholderSection id="how-it-works" title="How it works" />
      <PlaceholderSection id="pricing" title="Pricing" />
      <PlaceholderSection id="contact" title="Contact" />
    </>
  );
}
