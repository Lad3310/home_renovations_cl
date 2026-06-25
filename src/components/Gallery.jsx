import SectionHeading from "./SectionHeading.jsx";
import GalleryImage from "./GalleryImage.jsx";
import { gallery } from "../data/site.js";

export default function Gallery() {
  return (
    <section id="projects" className="bg-warmgray-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Recent Project Examples"
          intro="A look at the kinds of remodeling, repair, and renovation projects we take on for homeowners across Central Florida."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <GalleryImage key={item.caption} {...item} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm italic text-warmgray">
          Project photos can be replaced with actual before-and-after work as
          the business grows.
        </p>
      </div>
    </section>
  );
}
