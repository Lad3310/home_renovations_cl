import Icon from "./Icon.jsx";
import SmartImage from "./SmartImage.jsx";

// Reusable card for the Services section: image + icon + title + description.
export default function ServiceCard({ title, description, image, icon }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-warmgray/15 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <SmartImage src={image} alt={title} className="h-44 w-full" />
        <span className="absolute -bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-lg bg-copper text-white shadow-md">
          <Icon name={icon} className="h-6 w-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-6 pt-8">
        <h3 className="font-display text-xl font-semibold tracking-wide text-charcoal">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-warmgray">{description}</p>
      </div>
    </article>
  );
}
