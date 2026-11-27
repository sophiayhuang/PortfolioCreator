type Props = {
  id: string;
  title: string;
};

/** Temporary stand-in for sections that haven't been designed yet. */
export function PlaceholderSection({ id, title }: Props) {
  return (
    <section
      id={id}
      className="mx-auto max-w-6xl scroll-mt-20 border-t border-foreground/10 px-6 py-24"
    >
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-4 opacity-60">Coming soon.</p>
    </section>
  );
}
