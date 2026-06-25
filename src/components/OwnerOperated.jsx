import FeatureCard from "./FeatureCard.jsx";
import SmartImage from "./SmartImage.jsx";
import Icon from "./Icon.jsx";
import { ownerFeatures, images } from "../data/site.js";

export default function OwnerOperated() {
  return (
    <section id="owner" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
              The Difference
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-wide text-charcoal sm:text-4xl">
              Owner-Operated. Hands-On. Accountable.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-warmgray">
              This is not a large remodeling company where a salesperson books
              the job and then sends out a rotating crew. The owner is directly
              involved in the work, communicates with the homeowner, and stays
              accountable for the project from start to finish.
            </p>
          </div>
          <SmartImage
            src={images.owner}
            alt="Contractor working on a home improvement project"
            className="aspect-[4/3] w-full rounded-2xl shadow-lg"
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ownerFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-lg bg-warmgray-light px-5 py-4 text-sm leading-relaxed text-warmgray">
          <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
          For specialty work that requires a licensed trade, such as certain
          electrical, plumbing, HVAC, or roofing work, any outside specialty
          involvement will be clearly discussed upfront.
        </p>
      </div>
    </section>
  );
}
