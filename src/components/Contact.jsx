import Icon from "./Icon.jsx";
import { business } from "../data/site.js";

const details = [
  { icon: "phone", label: "Phone", value: business.phone, href: business.phoneHref },
  { icon: "mail", label: "Email", value: business.email, href: `mailto:${business.email}` },
  { icon: "pin", label: "Location", value: business.city },
  { icon: "clock", label: "Hours", value: business.hours },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal to-navy shadow-xl">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:gap-12">
            {/* Left: heading + details */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
                Get In Touch
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-wide text-white sm:text-4xl">
                Ready to Talk About Your Project?
              </h2>

              <dl className="mt-8 space-y-4">
                {details.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-copper/20 text-copper">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-white/60">
                        {item.label}
                      </dt>
                      <dd className="text-base font-medium text-white">
                        {item.href ? (
                          <a href={item.href} className="transition hover:text-copper">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right: CTAs + trust statement */}
            <div className="flex flex-col justify-center gap-3 rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-copper px-6 py-3.5 text-base font-semibold text-white shadow transition hover:bg-copper-dark"
              >
                <Icon name="phone" className="h-5 w-5" />
                Call Now
              </a>
              <a
                href={business.smsHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-charcoal shadow transition hover:bg-warmgray-light"
              >
                <Icon name="chat" className="h-5 w-5" />
                Text for a Quote
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                <Icon name="doc" className="h-5 w-5" />
                Submit Project Details
              </a>

              <p className="mt-3 flex items-start gap-2 text-sm text-white/80">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                You will communicate directly with the owner, not a call center
                or sales office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
