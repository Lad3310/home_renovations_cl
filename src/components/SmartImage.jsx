import { useState } from "react";

// Image wrapper that lazy-loads and falls back to a neutral branded panel
// if the (placeholder) source fails to load — so the layout never looks broken.
export default function SmartImage({ src, alt, className = "", imgClassName = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-warmgray-light ${className}`}>
      {failed ? (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-charcoal to-navy">
          <span className="px-4 text-center font-display text-sm uppercase tracking-wide text-white/70">
            {alt}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  );
}
