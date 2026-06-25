// Consistent centered section heading with an optional eyebrow + intro.
export default function SectionHeading({ eyebrow, title, intro, light = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <span
          className={`text-sm font-semibold uppercase tracking-[0.18em] ${
            light ? "text-copper" : "text-copper"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-2 font-display text-3xl font-bold tracking-wide sm:text-4xl ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/80" : "text-warmgray"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
