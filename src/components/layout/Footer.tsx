import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    menu: [
      { label: 'Home', href: '/' },
      { label: 'Courses', href: '/courses' },
      { label: 'New Rates', href: '/rates' },
      { label: 'Ghana', href: '/ghana' },
      { label: 'Accra', href: '/accra' },
    ],
    contact: [
      { icon: Phone, label: '+233486600100', href: 'tel:+233486600100' },
      { icon: Mail, label: 'support@gclient.com', href: 'mailto:support@gclient.com' },
      { 
        icon: MapPin, 
        label: 'New Road, Ghana, Accra', 
        href: '#',
        isAddress: true 
      },
    ],
    social: [
      { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
      { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
    ],
  }

  return (
    <footer className="bg-primary-800 text-white">
      <div className="container">
        <div className="py-8 md:py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Brand Section */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
              <Link href="/" className="inline-block">
                <Image
                  src="/logo-medium.png"
                  alt="GClient Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
              
              {/* Menu Links - Horizontal */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <div>
                  <h3 className="text-base font-semibold mb-3 lg:mb-0 lg:mr-6">Menu</h3>
                </div>
                <nav className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                  {footerLinks.menu.slice(0, 2).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-neutral-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Contact & Social - Right Side */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
              {/* Contact */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <div>
                  <h3 className="text-base font-semibold mb-3 lg:mb-0 lg:mr-6">Contact</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-neutral-300">+23341002000</div>
                  <div className="text-sm text-neutral-300">New Reiss ,Ghana, Accra</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <div>
                  <h3 className="text-base font-semibold mb-3 lg:mb-0 lg:mr-6">Social</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-300 hover:text-white transition-colors underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-300 hover:text-white transition-colors underline"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">
              © copyright {currentYear} - G-client, All rights reserved
            </p>
            <Link 
              href="#top" 
              className="text-sm text-neutral-300 hover:text-white transition-colors flex items-center gap-1"
            >
              Back to top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}