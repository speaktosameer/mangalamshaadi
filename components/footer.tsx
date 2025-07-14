import Link from "next/link"
import { Heart, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Mangalam Shaadi</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest success stories, matrimonial tips, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 whitespace-nowrap">
                Subscribe <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">Mangalam Shaadi</span>
                <p className="text-sm text-rose-400">Perfect Matches</p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              India's most trusted matrimonial platform helping millions find their perfect life partner. We combine
              traditional values with modern technology to create meaningful connections that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 bg-gray-800 hover:bg-rose-500 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 hover:bg-rose-500 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 hover:bg-rose-500 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 hover:bg-rose-500 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-rose-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/search"
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Search Profiles
                </Link>
              </li>
              <li>
                <Link
                  href="/matches"
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  My Matches
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-rose-400">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help"
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  FAQ
                </Link>
              </li>
              <li>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-rose-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p className="font-medium">Head Office</p>
                  <p>123 Business Center,</p>
                  <p>Andheri East, Mumbai</p>
                  <p>Maharashtra 400069</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-rose-500 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p className="font-medium">+91-8160856133</p>
                  <p className="text-xs text-gray-400">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-rose-500 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p className="font-medium">support@mangalamshaadi.com</p>
                  <p className="text-xs text-gray-400">Response within 2-4 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-400 text-sm">© {currentYear} Mangalam Shaadi. All rights reserved.</p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>Made with</span>
                <Heart className="h-3 w-3 text-rose-500" />
                <span>in India</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
