// ---------------------------------------------------------------------------
// Central site content. Edit values here to update copy, contact details,
// services, and image paths across the whole site.
// ---------------------------------------------------------------------------

export const business = {
  name: "Space Coast Home Renovations",
  city: "Melbourne, Florida",
  // Placeholders — replace with the real phone/email before going live.
  phone: "(321) XXX-XXXX",
  phoneHref: "tel:+1321XXXXXXX",
  smsHref: "sms:+1321XXXXXXX",
  email: "info@example.com",
  hours: "Monday through Saturday, by appointment",
  serviceAreaSummary:
    "Melbourne, Brevard County, Lake Mary, and surrounding Central Florida communities",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Service Area", href: "#service-area" },
  { label: "Request a Quote", href: "#quote" },
  { label: "Contact", href: "#contact" },
];

// Remodeling / renovation photos used as replaceable placeholders.
// Swap these paths for your own /images/*.jpg files when ready.
export const images = {
  hero: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=80",
  kitchen:
    "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=900&q=80",
  bathroom:
    "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80",
  interior:
    "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80",
  exterior:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  punchlist:
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80",
  custom:
    "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=900&q=80",
  owner:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1100&q=80",
  flooring:
    "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=900&q=80",
  trim:
    "https://images.unsplash.com/photo-1503594384566-461fe158e797?auto=format&fit=crop&w=900&q=80",
  renovation:
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=900&q=80",
};

export const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Cabinet upgrades, countertops, flooring, lighting, backsplashes, and full kitchen updates.",
    image: images.kitchen,
    icon: "kitchen",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Vanities, tile, showers, tubs, flooring, fixtures, and complete bathroom renovations.",
    image: images.bathroom,
    icon: "bathroom",
  },
  {
    title: "Interior Renovations",
    description:
      "Drywall, flooring, trim, doors, painting, layout updates, and general home improvements.",
    image: images.interior,
    icon: "interior",
  },
  {
    title: "Exterior Repairs & Upgrades",
    description:
      "Siding, decks, patios, trim repair, exterior painting, and weather-related home repairs.",
    image: images.exterior,
    icon: "exterior",
  },
  {
    title: "Punch List & Handyman Projects",
    description:
      "Small jobs, repair lists, home sale prep, rental property repairs, and general maintenance.",
    image: images.punchlist,
    icon: "punchlist",
  },
  {
    title: "Custom Projects",
    description:
      "For unique projects, homeowners can submit project details and request an estimate.",
    image: images.custom,
    icon: "custom",
  },
];

export const ownerFeatures = [
  {
    title: "Owner-Performed Work",
    description:
      "The owner is directly involved in the job and performs the work himself rather than simply handing the project off to subcontractors.",
    icon: "hammer",
  },
  {
    title: "No Subcontractor Runaround",
    description:
      "Homeowners deal directly with the person doing the work, which helps keep communication clear, expectations aligned, and accountability in one place.",
    icon: "handshake",
  },
  {
    title: "Direct Communication",
    description:
      "From the first quote request to the final walkthrough, customers work directly with the owner.",
    icon: "chat",
  },
];

export const gallery = [
  { src: images.kitchen, caption: "Kitchen remodels", alt: "Remodeled residential kitchen with new cabinets and countertops" },
  { src: images.bathroom, caption: "Bathroom remodels", alt: "Renovated bathroom with new tile and vanity" },
  { src: images.flooring, caption: "Flooring installation", alt: "New flooring being installed in a home" },
  { src: images.exterior, caption: "Exterior repairs", alt: "Exterior home repair and siding work" },
  { src: images.trim, caption: "Trim and paint work", alt: "Interior trim and fresh paint detail" },
  { src: images.renovation, caption: "General home renovation", alt: "General home renovation project in progress" },
];

export const whyChooseUs = [
  {
    title: "Owner-Operated and Hands-On",
    description:
      "You are not dealing with a sales team or a rotating list of subcontractors. The owner personally handles the work and stays directly involved in each project.",
    icon: "hammer",
  },
  {
    title: "Local and Responsive",
    description:
      "Based in Melbourne, FL and familiar with homes throughout the surrounding area.",
    icon: "pin",
  },
  {
    title: "Clear Communication",
    description:
      "Homeowners know what to expect before work begins, including scope, timing, and next steps.",
    icon: "chat",
  },
  {
    title: "Quality Workmanship",
    description: "Projects are handled carefully, cleanly, and professionally.",
    icon: "check",
  },
  {
    title: "Flexible Project Sizes",
    description:
      "Available for small repairs, punch list jobs, larger renovations, and ongoing property improvement needs.",
    icon: "scale",
  },
  {
    title: "Straightforward Quotes",
    description:
      "Submit project details online and receive a follow-up to discuss scope, timing, and pricing.",
    icon: "doc",
  },
];

export const serviceAreas = [
  "Melbourne",
  "Palm Bay",
  "Viera",
  "Rockledge",
  "Cocoa",
  "Merritt Island",
  "Satellite Beach",
  "Indialantic",
  "Titusville",
  "Lake Mary",
  "Surrounding Central Florida areas",
];

export const projectTypes = [
  "Kitchen",
  "Bathroom",
  "Flooring",
  "Interior Renovation",
  "Exterior Repair",
  "Handyman/Punch List",
  "Other",
];

export const timingOptions = [
  "ASAP",
  "Within 30 days",
  "1 to 3 months",
  "Just planning",
];

export const budgetOptions = [
  "Under $1,000",
  "$1,000 to $5,000",
  "$5,000 to $15,000",
  "$15,000+",
  "Not sure",
];

export const contactMethods = ["Call", "Text", "Email"];
