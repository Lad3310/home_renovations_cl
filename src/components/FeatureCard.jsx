import Icon from "./Icon.jsx";

// Reusable icon + title + description card used in the owner-operated and
// "why choose us" sections.
export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-warmgray/15 bg-white p-6 shadow-sm transition duration-200 hover:border-copper/40 hover:shadow-md">
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-copper/10 text-copper">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 font-display text-xl font-semibold tracking-wide text-charcoal">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-warmgray">{description}</p>
    </div>
  );
}
