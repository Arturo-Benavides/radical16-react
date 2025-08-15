import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
        <div className="flex items-center gap-6">
          <Link to="/terms" className="hover:text-black dark:hover:text-blue-900">terms & conditions</Link>
          <Link to="/privacy" className="hover:text-black dark:hover:text-blue-900">privacy policy</Link>
        </div>
        <p>© {new Date().getFullYear()} radical16, inc. all rights reserved.</p>
      </div>
    </footer>
  );
}
