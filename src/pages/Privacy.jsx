
export default function Privacy() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 dark:bg-gray-900">

      
      <h1 className="text-3xl font-bold mb-6  dark:text-white">Privacy Policy</h1>

      <p className="text-neutral-700 dark:text-neutral-300 mb-4">
        RADICAL16 values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3 dark:text-white">1. Information We Collect</h2>
      <p className="text-neutral-700 dark:text-neutral-300 mb-4">
        We may collect personal information you provide directly, such as your name, email address, and project details.
        We also collect basic usage data (via analytics tools) to improve our services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3 dark:text-white">2. How We Use Your Information</h2>
      <p className="text-neutral-700 dark:text-neutral-300 mb-4">
        We use your information to respond to inquiries, deliver contracted services, and improve our website.
        We will not sell or rent your personal information to third parties.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3 dark:text-white">3. Data Security</h2>
      <p className="text-neutral-700 dark:text-neutral-300 mb-4">
        We implement reasonable technical and organizational measures to protect your information against unauthorized access or loss.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3 dark:text-white">4. Third-Party Services</h2>
      <p className="text-neutral-700 dark:text-neutral-300 mb-4">
        We may use trusted third-party tools (e.g., analytics, hosting providers) that process your data in accordance with their privacy policies.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3 dark:text-white">5. Your Rights</h2>
      <p className="text-neutral-700 dark:text-neutral-300 mb-4">
        You may request to access, update, or delete your personal information by contacting us at [your email].
      </p>

      <p className="mt-10 text-sm text-neutral-500 dark:text-neutral-400">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </section>
  );
}
