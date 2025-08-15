export default function Terms() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Terms & Conditions</h1>

      <p className="text-neutral-700 dark:text-neutral-300 mb-4">
        These Terms & Conditions (“Terms”) govern your use of the RADICAL16 website, services, and any related communications. 
        By engaging our services or using our website, you agree to these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3 dark:text-white">1. Services</h2>
      <p className="text-neutral-700 dark:text-neutral-300 mb-4">
        RADICAL16 provides creative technology services including, but not limited to, web design, front-end development, creative direction, and mobile application development.
        Specific project scopes will be outlined in individual client agreements or proposals.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3 dark:text-white">2. Payment & Invoicing</h2>
      <p className="text-neutral-700 dark:text-neutral-300 mb-4">
        Payment terms are agreed upon prior to project start. Late payments may result in project delays or suspension. 
        All fees are non-refundable unless otherwise stated in writing.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3 dark:text-white">3. Intellectual Property</h2>
      <p className="text-neutral-700 dark:text-neutral-300 mb-4">
        Upon full payment, clients will own the final deliverables unless otherwise specified. 
        RADICAL16 retains the right to display completed work in our portfolio, case studies, and marketing materials.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3 dark:text-white">4. Client Responsibilities</h2>
      <p className="text-neutral-700 dark:text-neutral-300 mb-4">
        Clients must provide all required content, feedback, and approvals in a timely manner to avoid delays. 
        RADICAL16 is not responsible for missed deadlines due to client delays.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3 dark:text-white">5. Limitation of Liability</h2>
      <p className="text-neutral-700 dark:text-neutral-300 mb-4">
        RADICAL16 will not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3 dark:text-white">6. Governing Law</h2>
      <p className="text-neutral-700 dark:text-neutral-300 mb-4">
        These Terms are governed by the laws of the State of Texas, United States, without regard to its conflict of law principles.
      </p>

      <p className="mt-10 text-sm text-neutral-500 dark:text-neutral-400">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </section>
  );
}
