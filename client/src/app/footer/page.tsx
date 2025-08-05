import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Twitter, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/entpiclogo.png"
                alt="Entrex Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              We are one of the leading Travel operators in South India with our registered office at Madipakkam,
              Chennai. We serve leading corporate clients in Chennai and Bangalore regions.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Compliance Control
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Security Control
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Tours</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/sales-software" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Sales software
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/privacy-security" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Privacy and security
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Status
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ASK Towers 1st floor, 183-184, 3rd Main Rd,
                  <br />
                  Sri Sai Nagar, Thoraipakkam, Tamil Nadu 600096
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <Link
                  href="mailto:bookings@entrex.in"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  bookings@entrex.in
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <Link href="tel:+914449530055" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  +91 44 4953 0055
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">Copyright © 2025 Entrex. All Rights Reserved.</div>
            <div className="flex items-center space-x-6">
              <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Cookies
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
