import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import PawIcon from "../components/PawIcon";

const initialForm = { name: "", email: "", subject: "", message: "" };

const contactInfo = [
  { label: "Email", value: "hello@catenergy.com" },
  { label: "Phone", value: "+1 (555) 019-2842" },
  { label: "Studio", value: "412 Harbor Row, Portland, OR" },
  { label: "Hours", value: "Mon–Fri, 9am–6pm PT" },
];

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Tell us your name.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That email doesn't look right.";
  }
  if (!values.subject.trim()) errors.subject = "Give us a quick subject line.";
  if (!values.message.trim()) {
    errors.message = "Let us know what's on your mind.";
  } else if (values.message.trim().length < 10) {
    errors.message = "A few more details would help (10+ characters).";
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) {
      setErrors(validate(next));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      setValues(initialForm);
      setTouched({});
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Questions about your cat's next bowl?"
        description="Whether it's a plan tweak, a shipping hiccup, or you just want to talk about cats — we read every message."
      />

      <section className="py-24 bg-cream">
        <div className="container grid lg:grid-cols-[1fr_1.3fr] gap-16">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl text-ink mb-6">
                Reach us directly
              </h2>
            </Reveal>
            <div className="space-y-6">
              {contactInfo.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.06}>
                  <div className="flex items-start gap-4 pb-6 border-b border-ink/10">
                    <span className="grid place-items-center w-10 h-10 rounded-full bg-moss-100 shrink-0">
                      <PawIcon className="w-4 h-4" color="#4C5A3F" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-ink-300 mb-1">
                        {c.label}
                      </p>
                      <p className="text-ink font-medium">{c.value}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-cream-100 border border-ink/10 rounded-blob p-8 md:p-10"
            >
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 bg-moss text-cream rounded-2xl px-5 py-4 text-sm overflow-hidden"
                  >
                    Message sent — we'll get back to you within one business day.
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field
                  label="Your name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && errors.name}
                  placeholder="Alex Rivera"
                />
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
                  placeholder="alex@email.com"
                />
              </div>

              <div className="mt-6">
                <Field
                  label="Subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.subject && errors.subject}
                  placeholder="Question about my plan"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-ink mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us a bit about your cat, and what's going on..."
                  className={`w-full px-4 py-3 rounded-2xl border bg-cream text-sm outline-none transition-colors resize-none ${
                    touched.message && errors.message
                      ? "border-tabby-500"
                      : "border-ink/15 focus:border-ink"
                  }`}
                />
                {touched.message && errors.message && (
                  <p className="mt-2 text-xs text-tabby-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-8 w-full sm:w-auto inline-flex items-center justify-center bg-ink text-cream font-semibold text-sm rounded-full px-8 py-3.5 hover:bg-tabby hover:text-ink transition-all duration-300 hover:-translate-y-0.5 shadow-crisp-sm hover:shadow-none"
              >
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, value, onChange, onBlur, error, placeholder, type = "text" }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-2xl border bg-cream text-sm outline-none transition-colors ${
          error ? "border-tabby-500" : "border-ink/15 focus:border-ink"
        }`}
      />
      {error && <p className="mt-2 text-xs text-tabby-500">{error}</p>}
    </div>
  );
}
