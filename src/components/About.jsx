export default function About() {
  const stats = [
    { label: "Response", value: "<24h" },
    { label: "Timezone", value: "CST" },
    { label: "Availability", value: "Limited" },
  ];

  return (
    <section id="about" className="border-b dark:bg-gray-300 scroll-mt-15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold tracking-tight">About</h2>
          <p className="mt-3 text-neutral-600 max-w-prose">
            We help brands, artists, and startups ship beautiful, fast experiences. From strategy to design to build, we keep things sharp and simple.
          </p>
          <div className="mt-6 inline-flex gap-3">
            {/* <a href="#contact" className="rounded-lg bg-gray-900 text-white px-4 py-2 hover:opacity-90">Start a project</a> */}
          </div>
        </div>
        <dl className="grid grid-cols-3 gap-6 self-start" data-aos="fade-up" data-aos-delay="100">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dd className="text-xl font-extrabold">{s.value}</dd>
              <dt className="text-xs tracking-wide text-neutral-500 mt-1">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}