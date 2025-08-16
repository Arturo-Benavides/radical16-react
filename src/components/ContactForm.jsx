import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mzzrzvvj");
  const [captcha, setCaptcha] = useState(null);

    const onSubmit = (e) => {
    e.preventDefault();
    if (!captcha) {
      alert("Please verify reCAPTCHA");
      return;
    }
    handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div className="rounded-lg  p-6 ">
        <h3 className="text-lg font-semibold dark:text-neutral-300">Thanks!</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          Your message has been sent. We’ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
      {/* Honeypot (spam protection) */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Optional metadata (shows up in the email) */}
      <input type="hidden" name="_subject" value="New contact from RADICAL16 site" />
      <input type="hidden" name="_format" value="plain" />

      <input
        name="name"
        placeholder="Name"
        required
        className="rounded-lg border px-3 py-2 text-black dark:border-white dark:text-white"
      />

      <div className="flex flex-col">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
          className="rounded-lg border px-3 py-2 dark:border-white dark:text-white"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <input
        name="subject"
        placeholder="Subject"
        className="sm:col-span-2 rounded-lg border px-3 py-2 dark:border-white dark:text-white"
      />

      <div className="sm:col-span-2 flex flex-col">
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Message"
          required
          className="rounded-lg border px-3 py-2 dark:border-white dark:text-white"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* reCAPTCHA widget */}
      <div className="sm:col-span-2">
        <ReCAPTCHA
          sitekey="6LfQkKcrAAAAAGhHDn_oP19S39fox-K3KtH6HAlJ"
          onChange={(val) => setCaptcha(val)}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="sm:col-span-2 rounded-lg bg-blue-900 text-white px-4 py-2 hover:opacity-90 disabled:opacity-60 dark:bg-gray-300 dark:text-black"
      >
        {state.submitting ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
