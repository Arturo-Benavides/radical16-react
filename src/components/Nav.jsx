import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // hide menus on legal pages
  const isLegal = pathname === "/privacy" || pathname === "/terms";

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b ${
        open
          ? "bg-white dark:bg-gray-900"
          : "bg-white/10 dark:bg-gray-500/30 backdrop-blur"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand always visible */}
        <Link
          to="/"
          className="font-black tracking-tight text-xl text-black dark:text-white"
        >
          radical<strong className="text-blue-900 dark:text-gray-100">16</strong>
        </Link>

        {/* Desktop nav (hidden on legal pages) */}
        {!isLegal && (
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:opacity-70 transition text-black dark:text-gray-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center rounded-lg px-4 py-2 bg-blue-900 text-white hover:opacity-90 dark:bg-gray-300 dark:text-black"
            >
              Get in touch
            </a>
          </nav>
        )}

        {/* Mobile menu button (hidden on legal pages) */}
        {!isLegal && (
          <button
            className="md:hidden p-2 rounded-lg border bg-white dark:bg-gray-900/80 backdrop-blur ring-1 ring-black/5"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-black dark:text-white" />
          </button>
        )}
      </div>

      {/* Mobile sheet (hidden on legal pages) */}
      {!isLegal && open && (
        <div className="md:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <aside className="ml-auto h-full w-80 bg-white/80 backdrop-blur dark:bg-gray-900/90 text-black dark:text-white shadow-2xl p-6 relative">
            <button
              className="absolute right-4 top-4 p-2 rounded-lg border bg-white dark:bg-gray-800"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5 text-black dark:text-white" />
            </button>
            <Link
              to="/"
              className="font-black tracking-tight text-xl text-black dark:text-white"
              onClick={() => setOpen(false)}
            >
              radical<strong className="text-blue-900 dark:text-gray-100">16</strong>
            </Link>
            <nav className="mt-4 grid gap-1">
              {nav.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 hover:bg-neutral-50 dark:hover:bg-gray-800 active:bg-neutral-100"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg px-3 py-2 bg-blue-900 text-white dark:bg-gray-300 dark:text-black text-center"
              >
                Get in touch
              </a>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
