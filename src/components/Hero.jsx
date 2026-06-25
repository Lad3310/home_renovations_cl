import Icon from "./Icon.jsx";
import { business, images } from "../data/site.js";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={images.hero}
          alt="Recently remodeled residential kitchen"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/95 via-charcoal/85 to-charcoal/60" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36 lg:px-8 lg:pb-36 lg:pt-44">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-copper/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-copper ring-1 ring-copper/30">
            <Icon name="pin" className="h-4 w-4" />
            Melbourne, FL &amp; Central Florida
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Reliable Home Remodeling &amp; Renovation Services in Melbourne, FL
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-white/85">
            From small repairs to full room renovations, we help homeowners
            improve, repair, and upgrade their homes with quality workmanship
            and clear communication.
          </p>

          {/* Trust-building line */}
          <p className="mt-6 rounded-lg border-l-4 border-copper bg-white/10 px-4 py-3 text-base font-semibold text-white backdrop-blur-sm">
            Work performed directly by the owner. No subcontractor handoffs.
            Clear communication from start to finish.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-copper px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-copper-dark"
            >
              Request a Free Quote
              <Icon name="arrow" className="h-5 w-5" />
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-charcoal shadow-lg transition hover:bg-warmgray-light"
            >
              <Icon name="phone" className="h-5 w-5" />
              Call Now
            </a>
          </div>

          <p className="mt-6 flex items-start gap-2 text-sm text-white/75">
            <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
            Serving Melbourne, Brevard County, Lake Mary, and surrounding
            Central Florida communities.
          </p>
        </div>
      </div>
    </section>
  );
}
