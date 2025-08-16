import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black">
      <ScrollToTop />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
