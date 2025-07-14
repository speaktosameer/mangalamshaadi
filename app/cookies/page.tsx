export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-4xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-8">
          Cookie Policy
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-12">Last updated: July 14, 2025</p>

        <section className="space-y-8 text-gray-800 dark:text-gray-200">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">
              1. What are Cookies?
            </h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently, as well as to provide information to the
              owners of the site. Cookies enable the website to remember your actions and preferences (such as login,
              language, font size, and other display preferences) over a period of time, so you don't have to keep
              re-entering them whenever you come back to the site or browse from one page to another.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">
              2. How We Use Cookies
            </h2>
            <p className="mb-4">We use cookies for several purposes, including:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Essential Cookies:</strong> These cookies are strictly necessary for the operation of our
                website. They enable you to navigate around the site and use its features, such as accessing secure
                areas. Without these cookies, services like logging in or adding items to a cart cannot be provided.
              </li>
              <li>
                <strong>Performance and Analytics Cookies:</strong> These cookies collect information about how you use
                our website, such as which pages you visit most often, and if you encounter any error messages. These
                cookies do not collect information that identifies you. All information these cookies collect is
                aggregated and therefore anonymous. It is only used to improve how our website works.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make
                (such as your username, language, or the region you are in) and provide enhanced, more personal
                features. For instance, a website may be able to provide you with local weather reports or traffic news
                by storing in a cookie the region in which you are currently located.
              </li>
              <li>
                <strong>Advertising and Targeting Cookies:</strong> These cookies are used to deliver advertisements
                more relevant to you and your interests. They are also used to limit the number of times you see an
                advertisement as well as help measure the effectiveness of the advertising campaign. They are usually
                placed by advertising networks with the website operator's permission.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">
              3. Third-Party Cookies
            </h2>
            <p>
              In addition to our own cookies, we may also use various third-parties cookies to report usage statistics
              of the Service, deliver advertisements on and through the Service, and so on. These third-party cookies
              are governed by the privacy policies of the third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">
              4. Your Choices Regarding Cookies
            </h2>
            <p className="mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
              by:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their
                settings. You can usually find these settings in the "options" or "preferences" menu of your browser.
                For more information on how to manage cookies in your browser, please refer to your browser's help
                documentation.
              </li>
              <li>
                <strong>Opt-out Links:</strong> Some third-party advertisers and service providers offer opt-out
                mechanisms for their cookies. You can visit the Network Advertising Initiative opt-out page or the
                Digital Advertising Alliance opt-out page to learn more.
              </li>
            </ul>
            <p className="mt-4">
              Please note that if you choose to disable cookies, some parts of our website may not function properly or
              may not be accessible.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">
              5. Changes to Our Cookie Policy
            </h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
              Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes.
              Changes to this Cookie Policy are effective when they are posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-rose-600 dark:text-rose-400">6. Contact Us</h2>
            <p>If you have any questions about this Cookie Policy, please contact us:</p>
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
