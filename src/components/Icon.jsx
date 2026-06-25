// Lightweight inline SVG icon set. Add new icons by name as needed.
const paths = {
  kitchen: (
    <>
      <path d="M3 9h18" />
      <path d="M5 9V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
      <path d="M5 9v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9" />
      <path d="M9 13h.01M9 17h.01" />
    </>
  ),
  bathroom: (
    <>
      <path d="M4 12V5a2 2 0 0 1 2-2 2 2 0 0 1 2 2" />
      <path d="M3 12h18v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
      <path d="M7 18v2M17 18v2" />
    </>
  ),
  interior: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
      <path d="M9 9v.01M9 13v.01M9 17v.01" />
    </>
  ),
  exterior: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  punchlist: (
    <>
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </>
  ),
  custom: (
    <>
      <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z" />
    </>
  ),
  hammer: (
    <>
      <path d="M14 7l-8.5 8.5a2.1 2.1 0 0 0 3 3L17 10" />
      <path d="M11 5l6 6" />
      <path d="M14.5 2.5l5 5-2 2-5-5z" />
    </>
  ),
  handshake: (
    <>
      <path d="M11 17l-2 2a1.5 1.5 0 0 1-2-2l4-4" />
      <path d="M3 12l4-4 4 4 2-2 4 4" />
      <path d="M13 11l3 3 2-2 3 3" />
    </>
  ),
  chat: (
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </>
  ),
  pin: (
    <>
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  check: (
    <>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="M5 7l-3 6h6zM19 7l-3 6h6z" />
      <path d="M8 21h8" />
    </>
  ),
  doc: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6M9 17h6" />
    </>
  ),
  phone: (
    <>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 6L2 7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  menu: (
    <>
      <path d="M3 12h18M3 6h18M3 18h18" />
    </>
  ),
  close: (
    <>
      <path d="M18 6L6 18M6 6l12 12" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
};

export default function Icon({ name, className = "h-6 w-6", strokeWidth = 1.8 }) {
  const content = paths[name];
  if (!content) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {content}
    </svg>
  );
}
