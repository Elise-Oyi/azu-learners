'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Avatar } from "@/components/ui/Avatar"

interface HeaderProps {
  user?: {
    id: string
    name: string
    email: string
    avatar?: string
  }
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Tracks', href: '/courses' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo-medium.png"
                alt="GClient Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side - Auth buttons or User menu */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                {/* User Menu */}
                <div className="relative">
                  <button className="flex items-center gap-2 rounded-md p-2 hover:bg-neutral-100 transition-colors">
                    <Avatar
                      size="sm"
                      src={user.avatar}
                      name={user.name}
                    />
                    <span className="hidden md:inline-block text-sm font-medium text-neutral-700">
                      {user.name}
                    </span>
                    <ChevronDown className="h-4 w-4 text-neutral-500" />
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="md"
                    asChild
                  >
                    <Link href="/auth/login">Login</Link>
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    asChild
                  >
                    <Link href="/auth/signup">Sign up</Link>
                  </Button>
                </div>
              </>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-neutral-100 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {!user && (
                <>
                  <div className="pt-4 border-t border-neutral-200 space-y-3">
                    <Button
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button
                      variant="primary"
                      className="w-full"
                      asChild
                    >
                      <Link href="/signup">Sign up</Link>
                    </Button>
                  </div>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}