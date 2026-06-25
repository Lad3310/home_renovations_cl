import SectionHeading from "./SectionHeading.jsx";
import Icon from "./Icon.jsx";
import { serviceAreas } from "../data/site.js";

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-warmgray-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Where We Work"
          title="Serving Melbourne and Surrounding Central Florida Communities"
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* Area list */}
          <div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-charcoal shadow-sm"
                >
                  <Icon name="pin" className="h-4 w-4 shrink-0 text-copper" />
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg border-l-4 border-copper bg-white px-4 py-3 text-sm text-warmgray shadow-sm">
              Not sure if your home is within the service area?{" "}
              <a href="#quote" className="font-semibold text-copper hover:underline">
                Submit a quote request
              </a>{" "}
              and we&rsquo;ll let you know.
            </p>
          </div>

          {/* Stylized service-area graphic (not an interactive map) */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-charcoal p-8 shadow-lg">
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
                <path
                  d="M40 60 L120 40 L200 70 L280 50 L360 90 L340 180 L260 230 L160 250 L80 210 L50 140 Z"
                  fill="none"
                  stroke="#c87941"
                  strokeWidth="2"
                />
                <line x1="120" y1="40" x2="160" y2="250" stroke="#c87941" strokeWidth="1" />
                <line x1="200" y1="70" x2="260" y2="230" stroke="#c87941" strokeWidth="1" />
                <line x1="50" y1="140" x2="360" y2="90" stroke="#c87941" strokeWidth="1" />
              </svg>
            </div>
            <div className="relative text-center text-white">
              <Icon name="pin" className="mx-auto h-12 w-12 text-copper" />
              <p className="mt-4 font-display text-2xl font-bold tracking-wide">
                Central Florida &amp; the Space Coast
              </p>
              <p className="mt-2 text-sm text-white/80">
                Locally based in Melbourne, FL — serving Brevard County, Lake
                Mary, and the surrounding communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
