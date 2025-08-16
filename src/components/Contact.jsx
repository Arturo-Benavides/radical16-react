import ContactForm from "./ContactForm";


export default function Contact() {
  return (
    <section id="contact" className="border-w bg-gray-300 dark:bg-gray-900 scroll-mt-15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border p-6 dark:border-white" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold tracking-tight text-black dark:text-white">Contact</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-prose">
            Tell us about your project and we’ll reply within 1–2 business days.
          </p>
          <ContactForm />
        </div>
        <div className="rounded-xl border p-6 dark:border-white" data-aos="fade-up" data-aos-delay="100">
          <h3 className="font-semibold dark:text-white">Location</h3>
          <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-300">Houston</p>
          <h3 className="mt-6 font-semibold dark:text-white">Links</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <a className="inline-flex items-center rounded-lg border px-3 py-2 text-sm hover:border-black dark:border-white, text-neutral-800 dark:text-neutral-300">Instagram</a>
            <a className="inline-flex items-center rounded-lg border px-3 py-2 text-sm hover:border-black dark:border-white, text-neutral-800 dark:text-neutral-300" href="#contact">Email us</a>
          </div>
        </div>
      </div>
    </section>
  );
}