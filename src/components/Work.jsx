export default function Work() {
  const items = [
    {
      title: "lifelyy",
      tag: "iOS / App",
      img: "/assets/lifelyy-logo.png", 
    },
    {
      title: "shot on eyephone",
      tag: "Brand / Site",
      img: "/assets/safaribrowser.png", 

    },
    {
      title: "Toby's Journal",
      tag: "iOS / App",
      img: "/assets/tobylogo.png", // no import needed
    },
  ];

  return (
    <section id="work" className="border-b dark:bg-gray-300 scroll-mt-15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-3xl font-extrabold tracking-tight" data-aos="fade-up">Our Work</h2>
        <p className="mt-2 text-neutral-600 max-w-2xl" data-aos="fade-up" data-aos-delay="80">
          A few recent projects across web apps and iOS.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <div key={p.title} className="rounded-xl overflow-hidden border hover:shadow-xl transition-transform duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="aspect-[4/3] bg-neutral-100" style={{ backgroundImage: `url(${p.img})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.title}</h3>
                  <span className="text-xs text-neutral-500">{p.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}