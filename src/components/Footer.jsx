import Icon from "./Icon.jsx";
import { business, navLinks } from "../data/site.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-deep text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + tagline */}
          <div>
            <div className="flex items-center gap-2 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-copper">
                <Icon name="hammer" className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-lg font-bold tracking-wide">
                {business.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Owner-operated remodeling, renovation, and home repair services
              for Melbourne, Brevard County, Lake Mary, and surrounding Central
              Florida communities.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-base font-semibold uppercase tracking-wide text-white">
              Explore
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-copper">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-base font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="phone" className="h-4 w-4 text-copper" />
                <a href={business.phoneHref} className="transition hover:text-copper">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="mail" className="h-4 w-4 text-copper" />
                <a href={`mailto:${business.email}`} className="transition hover:text-copper">
                  {business.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="pin" className="h-4 w-4 text-copper" />
                {business.city}
              </li>
              <li className="flex items-center gap-2">
                <Icon name="clock" className="h-4 w-4 text-copper" />
                {business.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          &copy; {year} {business.name}. All rights reserved. &nbsp;|&nbsp;{" "}
          {business.city}
        </div>
      </div>
    </footer>
  );
}
