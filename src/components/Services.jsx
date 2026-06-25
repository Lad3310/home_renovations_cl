import SectionHeading from "./SectionHeading.jsx";
import ServiceCard from "./ServiceCard.jsx";
import { services } from "../data/site.js";

export default function Services() {
  return (
    <section id="services" className="bg-warmgray-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Home Remodeling & Repair Services"
          intro="Whether you need a small repair, a punch list completed, or a larger renovation, you will work directly with the owner from the first conversation through the finished project."
        />

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
