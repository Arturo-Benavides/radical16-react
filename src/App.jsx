import { useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  // AOS init once
  useEffect(() => {
    (async () => {
      const AOS = (await import("aos")).default;
      AOS.init({ once: true, duration: 800, easing: "ease-out-cubic" });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}