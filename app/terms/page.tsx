import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-4xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-8">
          Terms of Service
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-12">Last updated: July 14, 2025</p>

        <section className="space-y-8 text-gray-800 dark:text-gray-200">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">
              1. Acceptance of Terms
            </h2>
            <p>
              Welcome to Mangalam Shaadi! These Terms of Service ("Terms") govern your access to and use of the Mangalam
              Shaadi website (
              <Link href="/" className="text-blue-600 hover:underline">
                www.mangalamshaadi.com
              </Link>
              ) and its related services (collectively, the "Service"). By accessing or using the Service, you agree to
              be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use the
              Service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">2. Eligibility</h2>
            <p>
              You must be at least 18 years old and of legal marriageable age as per the laws of your country to
              register and use the Service. By using the Service, you represent and warrant that you have the right,
              authority, and capacity to enter into these Terms and to abide by all of the terms and conditions set
              forth herein.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">
              3. Your Account
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Registration:</strong> You agree to provide accurate, current, and complete information during
                the registration process and to update such information to keep it accurate, current, and complete.
              </li>
              <li>
                <strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your
                account password and are fully responsible for all activities that occur under your account. You agree
                to notify Mangalam Shaadi immediately of any unauthorized use of your account or any other breach of
                security.
              </li>
              <li>
                <strong>Single Account:</strong> You may only create one account. If we discover that you have created
                multiple accounts, we reserve the right to terminate any or all of your accounts.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">
              4. User Conduct and Content
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Prohibited Conduct:</strong> You agree not to use the Service for any unlawful purpose or in any
                way that could damage, disable, overburden, or impair the Service. Prohibited activities include, but
                are not limited to:
                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                  <li>Harassment, abuse, or stalking of other users.</li>
                  <li>Posting false, misleading, or defamatory content.</li>
                  <li>Engaging in commercial activities without our prior written consent.</li>
                  <li>Collecting personal data of other users for commercial or unlawful purposes.</li>
                  <li>Impersonating any person or entity.</li>
                </ul>
              </li>
              <li>
                <strong>Content Responsibility:</strong> You are solely responsible for the content and information you
                publish or display (hereinafter, "post") on the Service, or transmit to other users.
              </li>
              <li>
                <strong>Content License:</strong> By posting content to any public area of the Service, you
                automatically grant to Mangalam Shaadi an irrevocable, perpetual, non-exclusive, fully paid, worldwide
                license to use, copy, perform, display, and distribute such information and content and to prepare
                derivative works of, or incorporate into other works, such information and content.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">
              5. Membership and Payments
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Free and Paid Services:</strong> Mangalam Shaadi offers both free and paid membership options.
                Features and access levels vary based on your membership plan.
              </li>
              <li>
                <strong>Payment:</strong> If you choose to purchase a paid membership, you agree to pay all fees and
                charges associated with your chosen plan. All payments are non-refundable unless otherwise stated in our
                refund policy.
              </li>
              <li>
                <strong>Automatic Renewal:</strong> Some membership plans may automatically renew unless you cancel your
                subscription before the end of the current billing period.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">
              6. Disclaimers and Limitation of Liability
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>No Guarantees:</strong> Mangalam Shaadi does not guarantee the accuracy, completeness, or
                usefulness of any information on the Service, nor does it endorse or accept responsibility for the
                accuracy or reliability of any opinion, advice, or statement made by any party other than Mangalam
                Shaadi.
              </li>
              <li>
                <strong>"As Is" Basis:</strong> The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Mangalam
                Shaadi expressly disclaims all warranties of any kind, whether express or implied, including, but not
                limited to, the implied warranties of merchantability, fitness for a particular purpose, and
                non-infringement.
              </li>
              <li>
                <strong>Limitation of Liability:</strong> In no event shall Mangalam Shaadi be liable for any indirect,
                incidental, special, consequential, or punitive damages, including, without limitation, loss of profits,
                data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or
                inability to access or use the Service; (ii) any conduct or content of any third party on the Service;
                (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your
                transmissions or content, whether based on warranty, contract, tort (including negligence), or any other
                legal theory, whether or not we have been informed of the possibility of such damage.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">
              7. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold Mangalam Shaadi, its subsidiaries, affiliates, officers, agents, and
              employees harmless from any claim or demand, including reasonable attorneys' fees, made by any third party
              due to or arising out of your breach of these Terms or your violation of any law or the rights of a third
              party.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">
              8. Governing Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its
              conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">
              9. Changes to Terms
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion. By continuing to access or use
              our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">10. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <p className="mt-4">
              Email:{" "}
              <a href="mailto:support@mangalamshaadi.com" className="text-blue-600 hover:underline">
                support@mangalamshaadi.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+918160856133" className="text-blue-600 hover:underline">
                +91-8160856133
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
