import Link from "next/link"
import { Home, Users, MessageCircle, Shield, Info, Map } from "lucide-react"

export default function SitemapPage() {
  const sitemapSections = [
    {
      title: "Main Navigation",
      icon: Home,
      links: [
        { href: "/", label: "Home" },
        { href: "/search", label: "Browse Profiles" },
        { href: "/matches", label: "My Matches" },
        { href: "/success-stories", label: "Success Stories" },
        { href: "/membership", label: "Membership Plans" },
        { href: "/blog", label: "Blog" },
      ],
    },
    {
      title: "Account & Profile",
      icon: Users,
      links: [
        { href: "/register", label: "Register Free" },
        { href: "/login", label: "Login" },
        { href: "/profile/[id]", label: "View Profile (Dynamic)" },
        { href: "/verification", label: "Profile Verification" },
      ],
    },
    {
      title: "Communication",
      icon: MessageCircle,
      links: [
        { href: "/messages", label: "Messages" },
        { href: "/help", label: "Live Chat" },
      ],
    },
    {
      title: "Support & Legal",
      icon: Shield,
      links: [
        { href: "/help", label: "Help Center" },
        { href: "/faq", label: "FAQ" },
        { href: "/contact", label: "Contact Us" },
        { href: "/safety", label: "Safety Tips" },
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/cookies", label: "Cookie Policy" },
      ],
    },
    {
      title: "About Mangalam Shaadi",
      icon: Info,
      links: [
        { href: "/about", label: "About Us" },
        { href: "/careers", label: "Careers" },
        { href: "/press", label: "Press & Media" },
      ],
    },
    {
      title: "Admin Panel",
      icon: Map,
      links: [
        { href: "/admin/login", label: "Admin Login" },
        { href: "/admin", label: "Admin Dashboard" },
        { href: "/admin/users", label: "User Management" },
        { href: "/admin/profiles", label: "Profile Approval" },
        { href: "/admin/subscriptions", label: "Subscriptions" },
        { href: "/admin/reports", label: "Reports & Analytics" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-5xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-8">
          Sitemap
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-12">
          A comprehensive overview of all pages on Mangalam Shaadi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapSections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <section.icon className="h-6 w-6 text-rose-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors text-base flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 text-gray-600 dark:text-gray-400">
          <p>
            If you are looking for something specific and cannot find it here, please{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              contact our support team
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

import { ArrowRight } from "lucide-react" // Added import for ArrowRight
