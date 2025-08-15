




export default function Contact() {
  return (
    <section id="contact" className="border-w bg-gray-300 dark:bg-gray-900 scroll-mt-15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border p-6 dark:border-white" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold tracking-tight text-black dark:text-white">Contact</h2>
          <form action="https://formspree.io/f/YOUR_CONTACT_ID" method="POST" className="mt-6 grid sm:grid-cols-2 gap-4 ">
            <input name="name" className="rounded-lg border px-3 py-2 text-black dark:border-white dark:text-white" placeholder="Name" required />
            <input name="email" type="email" className="rounded-lg border px-3 py-2 dark:border-white dark:text-white" placeholder="Email" required />
            <input name="subject" className="sm:col-span-2 rounded-lg border px-3 py-2 dark:border-white dark:text-white" placeholder="Subject" />
            <textarea name="message" rows={4} className="sm:col-span-2 rounded-lg border px-3 py-2 dark:border-white dark:text-white" placeholder="Message" />
            <button type="submit" className="sm:col-span-2 rounded-lg bg-blue-900 text-white  px-4 py-2 hover:opacity-90 dark:bg-gray-300 dark:text-black">Send</button>
          </form>
        </div>
        <div className="rounded-xl border p-6 dark:border-white" data-aos="fade-up" data-aos-delay="100">
          <h3 className="font-semibold dark:text-white">Studio</h3>
          <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-300">Houston & remote</p>
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