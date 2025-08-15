import { Code, Wand2, Smartphone } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="border-b bg-gray-300 dark:bg-gray-900 scroll-mt-15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Section header */}
        <div className="flex items-start justify-between gap-8" data-aos="fade-up">
          <div className="max-w-2xl">

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight dark:text-white">
              What we do
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-200">
              We design and build crisp interfaces—and shape the visual language behind them.
            </p>
          </div>

          {/* Optional CTA on larger screens */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-lg px-4 py-2 bg-black text-white hover:opacity-90 dark:bg-white dark:text-black"
          >
            Start a project
          </a>
        </div>

        {/* Two-service layout */}
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          {/* Front-End Development */}
          <div
            className="rounded-2xl border dark:border-white p-6"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 grid place-content-center rounded-xl bg-blue-900 dark:bg-gray-300">
                <Code className="h-5 w-5 text-neutral-200 dark:text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold dark:text-white">Front-End Development</h3>
            </div>

            <p className="mt-3 text-sm text-neutral-800 dark:text-neutral-300">
              Fast, accessible, and pixel-sharp interfaces with modern stacks (React / Vite / Tailwind).
            </p>

            <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "Responsive, mobile-first layouts",
                "Modern UI/UX implementation",
                "Animations & micro-interactions",
                "SEO-friendly structure",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-neutral-600 dark:text-neutral-200"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900 dark:bg-neutral-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>


          {/* Creative Direction */}
          <div
            className="rounded-2xl border dark:border-white p-6"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 grid place-content-center rounded-xl bg-blue-900 dark:bg-gray-300">
                <Wand2 className="h-5 w-5 text-neutral-300 dark:text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold dark:text-white">Creative Direction</h3>
            </div>

            <p className="mt-3 text-sm text-neutral-800 dark:text-neutral-300">
              Concept to execution—visual systems that feel current and on-brand.
            </p>

            <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "Brand & visual language",
                "Art direction & moodboards",
                "Design systems & guidelines",
                "Content & asset strategy",
                "Prototype storytelling",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-neutral-600 dark:text-neutral-200"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900 dark:bg-neutral-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* iOS Apps */}

          <div
            className="rounded-2xl border dark:border-white p-6"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 grid place-content-center rounded-xl bg-blue-900 dark:bg-gray-300">
                <Smartphone className="h-5 w-5 text-neutral-300 dark:text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold dark:text-white">iOS Mobile Apps</h3>
            </div>

            <p className="mt-3 text-sm text-neutral-800 dark:text-neutral-300">
              Native Swift/SwiftUI apps for iPhone & iPad — fast, accessible, and App Store–ready.
            </p>

            <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "Swift & SwiftUI (UIKit when needed)",
                "Offline storage & sync (Core Data/Realm)",
                "Push notifications & deep links",
                "Secure auth (Sign in with Apple, OAuth)",
                "API integration (REST/GraphQL)",
                "App Store submission & TestFlight",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-neutral-600 dark:text-neutral-200"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900 dark:bg-neutral-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Mobile CTA */}
        <div className="mt-8 sm:hidden" data-aos="fade-up" data-aos-delay="120">
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg px-4 py-2 bg-blue-900 text-white hover:opacity-90 dark:bg-white dark:text-black"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}