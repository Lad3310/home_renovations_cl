import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import { business, navLinks } from "../data/site.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle shadow/solid background once the user scrolls past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled || open
          ? "bg-charcoal/95 shadow-lg backdrop-blur"
          : "bg-charcoal/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2 text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-copper">
            <Icon name="hammer" className="h-5 w-5 text-white" />
          </span>
          <span className="font-display text-lg font-bold leading-tight tracking-wide sm:text-xl">
            Space Coast
            <span className="block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-copper">
              Home Renovations
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 transition hover:text-copper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop call button */}
        <a
          href={business.phoneHref}
          className="hidden items-center gap-2 rounded-lg bg-copper px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-copper-dark lg:inline-flex"
        >
          <Icon name="phone" className="h-4 w-4" />
          Call Now
        </a>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={business.phoneHref}
            aria-label="Call now"
            className="inline-flex items-center gap-1.5 rounded-lg bg-copper px-3 py-2 text-sm font-semibold text-white shadow transition hover:bg-copper-dark"
          >
            <Icon name="phone" className="h-4 w-4" />
            Call
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10"
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/10 bg-charcoal transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-[26rem]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-md px-3 py-3 text-base font-medium text-white/90 transition hover:bg-white/10 hover:text-copper"
            >
              {link.label}
            </a>
          ))}
          <a
            href={business.phoneHref}
            onClick={closeMenu}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-copper px-4 py-3 text-base font-semibold text-white"
          >
            <Icon name="phone" className="h-5 w-5" />
            {business.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
