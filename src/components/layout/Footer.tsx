import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

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
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/logo-medium.png"
                  alt="GClient Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
                We take pride in our achievements and contribution to excellence, crafting in unleashing innovation, growth, and success.
              </p>
            </div>

            {/* Menu Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Menu</h3>
              <nav className="flex flex-col space-y-3">
                {footerLinks.menu.map((link) => (
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

            {/* Contact & Social */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {footerLinks.contact.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <item.icon className="h-4 w-4 mt-0.5 text-neutral-400" />
                    {item.isAddress ? (
                      <span className="text-sm text-neutral-300">{item.label}</span>
                    ) : (
                      <a
                        href={item.href}
                        className="text-sm text-neutral-300 hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="text-sm font-medium mb-3">Social</h4>
                <div className="flex items-center gap-3">
                  {footerLinks.social.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md bg-primary-700 hover:bg-primary-600 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">
              © copyright {currentYear} - G-client, All rights reserved.
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