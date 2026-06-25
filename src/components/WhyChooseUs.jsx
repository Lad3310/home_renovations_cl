import SectionHeading from "./SectionHeading.jsx";
import FeatureCard from "./FeatureCard.jsx";
import { whyChooseUs } from "../data/site.js";

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Us"
          title="Why Homeowners Choose Us"
          intro="A straightforward, local approach built on doing the work well and keeping you in the loop."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
