import SmartImage from "./SmartImage.jsx";

// Reusable gallery tile with a caption overlay.
export default function GalleryImage({ src, alt, caption }) {
  return (
    <figure className="group relative overflow-hidden rounded-xl shadow-sm">
      <SmartImage
        src={src}
        alt={alt}
        className="aspect-[4/3] w-full"
        imgClassName="transition duration-300 group-hover:scale-105"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 to-transparent p-4">
        <span className="font-display text-base font-semibold uppercase tracking-wide text-white">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}
