'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { BarChart3, Settings, FileText, ChevronDown, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

interface Invoice {
  id: number
  date: string
  amount: number
  status: 'paid' | 'pending' | 'overdue'
  courseTitle?: string
}

const invoices: Invoice[] = [
  {
    id: 1,
    date: '2025-03-15',
    amount: 350.00,
    status: 'paid',
    courseTitle: 'Software Development Track'
  },
  {
    id: 2,
    date: '2025-03-15',
    amount: 350.00,
    status: 'paid',
    courseTitle: 'Data Science Mastery'
  },
  {
    id: 3,
    date: '2025-03-15',
    amount: 350.00,
    status: 'paid',
    courseTitle: 'Cloud Computing Expertise'
  }
]

export default function InvoicesPage() {
  const [, setActiveTab] = React.useState<'dashboard' | 'settings' | 'invoices'>('invoices')
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false)

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/default-avatar.png'
  }

  const handleTabChange = (tab: 'dashboard' | 'settings' | 'invoices') => {
    if (tab === 'dashboard') {
      window.location.href = '/dashboard'
    } else if (tab === 'settings') {
      window.location.href = '/settings'
    } else {
      setActiveTab(tab)
    }
  }

  const handleViewInvoice = (invoiceId: number) => {
    console.log('View invoice:', invoiceId)
    // Navigate to invoice detail view or open modal
    alert(`View invoice #${invoiceId}`)
  }

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      window.location.href = '/auth/login'
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-success-100 text-success-700">Paid</Badge>
      case 'pending':
        return <Badge className="bg-warning-100 text-warning-700">Pending</Badge>
      case 'overdue':
        return <Badge className="bg-error-100 text-error-700">Overdue</Badge>
      default:
        return <Badge className="bg-neutral-100 text-neutral-700">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Custom Header for Dashboard */}
      <header className="bg-white border-b border-neutral-200">
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
                />
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-sm font-medium text-neutral-600 hover:text-primary-600">Home</Link>
                <Link href="/courses" className="text-sm font-medium text-neutral-600 hover:text-primary-600">Tracks</Link>
              </nav>
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-3 p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span className="text-sm font-medium text-neutral-700">{user.name}</span>
                <ChevronDown className="w-4 h-4 text-neutral-500" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 py-2 z-50">
                  <Link href="/profile" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
                    Profile
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
                    Settings
                  </Link>
                  <hr className="my-2 border-neutral-200" />
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Navigation */}
      <div className="bg-primary-600 text-white">
        <div className="container">
          <nav className="flex items-center gap-1 py-4">
            <button
              onClick={() => handleTabChange('dashboard')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-white/80 hover:text-white hover:bg-white/10"
            >
              <BarChart3 className="w-4 h-4" />
              Dashboard
            </button>
            <button
              onClick={() => handleTabChange('settings')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-white/80 hover:text-white hover:bg-white/10"
            >
              <Settings className="w-4 h-4" />
              Settings
            </button>
            <button
              onClick={() => handleTabChange('invoices')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-white/20 text-white"
            >
              <FileText className="w-4 h-4" />
              Invoices
            </button>
          </nav>
        </div>
      </div>

      {/* Invoices Content */}
      <div className="container py-8">
        <div className="max-w-5xl mx-auto">
          {/* Past Invoices */}
          <section>
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              Past Invoices
            </h2>

            <Card className="shadow-soft">
              <CardContent className="p-0">
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-neutral-200">
                        <th className="text-left py-4 px-6 font-semibold text-neutral-700">#</th>
                        <th className="text-left py-4 px-6 font-semibold text-neutral-700">Date</th>
                        <th className="text-left py-4 px-6 font-semibold text-neutral-700">Amount</th>
                        <th className="text-left py-4 px-6 font-semibold text-neutral-700">Status</th>
                        <th className="text-right py-4 px-6 font-semibold text-neutral-700">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((invoice, index) => (
                        <tr key={invoice.id} className={index < invoices.length - 1 ? 'border-b border-neutral-100' : ''}>
                          <td className="py-4 px-6 font-medium text-neutral-900">
                            {invoice.id}
                          </td>
                          <td className="py-4 px-6 text-neutral-700">
                            {invoice.date}
                          </td>
                          <td className="py-4 px-6 font-semibold text-neutral-900">
                            $ {invoice.amount.toFixed(2)}
                          </td>
                          <td className="py-4 px-6">
                            {getStatusBadge(invoice.status)}
                          </td>
                          <td className="py-4 px-6 text-right">
                            <button
                              onClick={() => handleViewInvoice(invoice.id)}
                              className="p-2 text-neutral-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                              title="View invoice"
                            >
                              <Eye className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden">
                  {invoices.map((invoice, index) => (
                    <div 
                      key={invoice.id} 
                      className={`p-6 ${index < invoices.length - 1 ? 'border-b border-neutral-100' : ''}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-semibold text-neutral-900">
                          Invoice #{invoice.id}
                        </div>
                        <button
                          onClick={() => handleViewInvoice(invoice.id)}
                          className="p-2 text-neutral-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-neutral-500">Date:</span>
                          <span className="text-neutral-700">{invoice.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-500">Amount:</span>
                          <span className="font-semibold text-neutral-900">$ {invoice.amount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-neutral-500">Status:</span>
                          {getStatusBadge(invoice.status)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Empty State (if no invoices) */}
            {invoices.length === 0 && (
              <Card className="shadow-soft">
                <CardContent className="p-12 text-center">
                  <FileText className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-600 mb-2">
                    No invoices yet
                  </h3>
                  <p className="text-neutral-500">
                    Your payment history will appear here once you enroll in courses.
                  </p>
                </CardContent>
              </Card>
            )}
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary-600 text-white py-12 mt-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Image
                src="/logo-medium.png"
                alt="GClient Logo"
                width={200}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-4">Menu</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-white/80 hover:text-white">Home</Link></li>
                <li><Link href="/courses" className="text-white/80 hover:text-white">Courses</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-white/80">+233410002000</p>
              <p className="text-sm text-white/80">New Reiss, Ghana, Accra</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 mt-8 flex items-center justify-between">
            <p className="text-sm text-white/80">copyright 2025 - G-client, All rights reserved</p>
            <button className="text-sm text-white/80 hover:text-white">Back to top ↑</button>
          </div>
        </div>
      </footer>
    </div>
  )
}