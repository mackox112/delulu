export default function SectionHeading({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">{children}</h2>
      {subtitle && (
        <p className="mt-3 text-warm-gray text-lg">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-16 h-0.5 bg-accent" />
    </div>
  );
}
