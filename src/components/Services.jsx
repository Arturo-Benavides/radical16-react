export default function Services() {
  const services = [
    { title: "Design Systems", bullets: ["Tokens & theming", "UI kits", "Docs"] },
    { title: "Web & React", bullets: ["Next.js / Vite", "Headless CMS", "SEO/Perf"] },
    { title: "Motion & 3D", bullets: ["Framer Motion", "GSAP / Three.js", "Micro-interactions"] },
  ];

  return (
    <section id="services" className="border-b dark:bg-gray-900 scroll-mt-15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-3xl font-extrabold tracking-tight dark:text-white" data-aos="fade-up">What We Do</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 ">
          {services.map((s, i) => (
            <div key={s.title} className="rounded-xl border p-6 hover:shadow-sm transition dark:border-white" data-aos="fade-up" data-aos-delay={i * 100}>
              <h3 className="font-semibold dark:text-white">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-200 list-disc list-inside">
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}