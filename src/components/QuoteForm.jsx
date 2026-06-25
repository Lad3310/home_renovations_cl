import { useRef, useState } from "react";
import Icon from "./Icon.jsx";
import SectionHeading from "./SectionHeading.jsx";
import {
  projectTypes,
  timingOptions,
  budgetOptions,
  contactMethods,
} from "../data/site.js";

const initialState = {
  name: "",
  phone: "",
  email: "",
  location: "",
  projectType: "",
  description: "",
  timing: "",
  budget: "",
  contactMethod: "",
};

const requiredFields = {
  name: "Please enter your name.",
  phone: "Please enter a phone number.",
  email: "Please enter your email address.",
  location: "Please enter your project address or city.",
  projectType: "Please select a project type.",
  description: "Please describe your project.",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const labelClass = "block text-sm font-semibold text-charcoal";
const fieldClass =
  "mt-1.5 w-full rounded-lg border border-warmgray/30 bg-white px-3.5 py-2.5 text-charcoal shadow-sm outline-none transition focus:border-copper focus:ring-2 focus:ring-copper/30";

export default function QuoteForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [photos, setPhotos] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const next = {};
    Object.entries(requiredFields).forEach(([field, message]) => {
      if (!values[field].trim()) next[field] = message;
    });
    if (values.email.trim() && !emailPattern.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    return next;
  };

  const handlePhotos = (e) => {
    const files = Array.from(e.target.files || []);
    setPhotos(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Focus the first field with an error for accessibility.
      const first = document.getElementById(`field-${Object.keys(found)[0]}`);
      first?.focus();
      return;
    }
    // No backend wired up — this is where you'd POST the form + photos.
    setSubmitted(true);
    setValues(initialState);
    setPhotos([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <section id="quote" className="bg-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get Started"
          title="Request a Free Project Quote"
          intro="Tell us about your project and the owner will personally follow up to discuss the scope, timing, and next steps."
          light
        />

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-xl sm:p-8">
          {submitted ? (
            <div
              role="status"
              className="flex flex-col items-center py-10 text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-forest">
                <Icon name="check" className="h-9 w-9" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-charcoal">
                Thanks. Your request was received.
              </h3>
              <p className="mt-2 max-w-md text-warmgray">
                We&rsquo;ll review the project details and follow up shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-copper px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-copper-dark"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="field-name"
                  label="Name"
                  required
                  error={errors.name}
                >
                  <input
                    id="field-name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={update("name")}
                    className={fieldClass}
                    aria-invalid={!!errors.name}
                  />
                </Field>

                <Field
                  id="field-phone"
                  label="Phone number"
                  required
                  error={errors.phone}
                >
                  <input
                    id="field-phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={update("phone")}
                    className={fieldClass}
                    aria-invalid={!!errors.phone}
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="field-email"
                  label="Email address"
                  required
                  error={errors.email}
                >
                  <input
                    id="field-email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={update("email")}
                    className={fieldClass}
                    aria-invalid={!!errors.email}
                  />
                </Field>

                <Field
                  id="field-location"
                  label="Project address or city"
                  required
                  error={errors.location}
                >
                  <input
                    id="field-location"
                    type="text"
                    autoComplete="address-level2"
                    value={values.location}
                    onChange={update("location")}
                    className={fieldClass}
                    aria-invalid={!!errors.location}
                  />
                </Field>
              </div>

              <Field
                id="field-projectType"
                label="Project type"
                required
                error={errors.projectType}
              >
                <select
                  id="field-projectType"
                  value={values.projectType}
                  onChange={update("projectType")}
                  className={fieldClass}
                  aria-invalid={!!errors.projectType}
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                id="field-description"
                label="Short project description"
                required
                error={errors.description}
              >
                <textarea
                  id="field-description"
                  rows={4}
                  value={values.description}
                  onChange={update("description")}
                  placeholder="Tell us a little about what you'd like done…"
                  className={fieldClass}
                  aria-invalid={!!errors.description}
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="field-timing" label="Preferred timing">
                  <select
                    id="field-timing"
                    value={values.timing}
                    onChange={update("timing")}
                    className={fieldClass}
                  >
                    <option value="">Select timing</option>
                    {timingOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field id="field-budget" label="Budget range">
                  <select
                    id="field-budget"
                    value={values.budget}
                    onChange={update("budget")}
                    className={fieldClass}
                  >
                    <option value="">Select a budget range</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field id="field-contactMethod" label="Preferred contact method">
                <select
                  id="field-contactMethod"
                  value={values.contactMethod}
                  onChange={update("contactMethod")}
                  className={fieldClass}
                >
                  <option value="">Select contact method</option>
                  {contactMethods.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Photo upload */}
              <div>
                <span className={labelClass}>Upload photos (optional)</span>
                <label
                  htmlFor="field-photos"
                  className="mt-1.5 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-warmgray/30 bg-warmgray-light px-4 py-6 text-center transition hover:border-copper hover:bg-copper/5"
                >
                  <Icon name="arrow" className="h-6 w-6 -rotate-90 text-copper" />
                  <span className="text-sm font-medium text-charcoal">
                    Tap to add photos of your project
                  </span>
                  <span className="text-xs text-warmgray">
                    JPG or PNG — helps us understand the scope
                  </span>
                  <input
                    id="field-photos"
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotos}
                    className="sr-only"
                  />
                </label>
                {photos.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {photos.map((file, i) => (
                      <li
                        key={`${file.name}-${i}`}
                        className="flex items-center gap-2 text-sm text-warmgray"
                      >
                        <Icon name="check" className="h-4 w-4 text-forest" />
                        <span className="truncate">{file.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-copper px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-copper-dark"
              >
                Request My Quote
                <Icon name="arrow" className="h-5 w-5" />
              </button>

              <p className="text-center text-xs text-warmgray">
                Fields marked with an asterisk (*) are required.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// Field wrapper: renders the label, the input (children), and an error message.
function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="text-orange"> *</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-sm text-orange" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
