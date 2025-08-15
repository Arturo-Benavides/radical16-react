export default function Footer() {
  return (
    <footer className="border-t dark:bg-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
        <div className="flex items-center gap-6">
          <a href="/terms.html" className="hover:text-black">terms & conditions</a>
          <a href="/privacy.html" className="hover:text-black">privacy policy</a>
        </div>
        <p>© {new Date().getFullYear()} radical16, inc. all rights reserved.</p>
      </div>
    </footer>
  );
}