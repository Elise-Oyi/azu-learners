'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { BarChart3, Settings, FileText, ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

interface EnrolledCourse {
  id: string
  title: string
  progress: number
  status: 'in-progress' | 'completed' | 'not-started'
}

interface TechnologyCard {
  id: string
  name: string
  image: string
  status: 'registered' | 'not-registered'
}

interface RateCourse {
  id: string
  title: string
  description: string
  image: string
}

const enrolledCourses: EnrolledCourse[] = [
  {
    id: 'software-development',
    title: 'Software Development Track',
    progress: 65,
    status: 'in-progress'
  }
]

const technologies: TechnologyCard[] = [
  {
    id: 'reactjs',
    name: 'Quick Introduction to ReactJS',
    image: '/learners/image 39.png',
    status: 'registered'
  },
  {
    id: 'nodejs',
    name: 'Quick Introduction to NodeJs',
    image: '/learners/image 40.png', 
    status: 'registered'
  },
  {
    id: 'nextjs',
    name: 'Quick Introduction to NextJS',
    image: '/learners/image 41.png',
    status: 'registered'
  },
  {
    id: 'django',
    name: 'Quick Introduction to Django',
    image: '/learners/Frame 169209.png',
    status: 'registered'
  }
]

const rateCourses: RateCourse[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Unlock your potential with comprehensive training in modern software development',
    image: '/courses/Frame 169187.png'
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Gain hands-on experience in cloud architecture, preparing you to manage scalable',
    image: '/courses/Frame 169197.png'
  }
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = React.useState<'dashboard' | 'settings' | 'invoices'>('dashboard')
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false)

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/default-avatar.png'
  }

  const handleTabChange = (tab: 'dashboard' | 'settings' | 'invoices') => {
    if (tab === 'settings') {
      window.location.href = '/settings'
    } else if (tab === 'invoices') {
      window.location.href = '/invoices'
    } else {
      setActiveTab(tab)
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
                <Link href="/courses" className="text-sm font-medium text-neutral-600 hover:text-primary-600">Courses</Link>
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
                  <button className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
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
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'dashboard' 
                  ? 'bg-white/20 text-white' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Dashboard
            </button>
            <button
              onClick={() => handleTabChange('settings')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'settings' 
                  ? 'bg-white/20 text-white' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Settings className="w-4 h-4" />
              Settings
            </button>
            <button
              onClick={() => handleTabChange('invoices')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'invoices' 
                  ? 'bg-white/20 text-white' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <FileText className="w-4 h-4" />
              Invoices
            </button>
          </nav>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-12">
            {/* Enrolled Courses */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Enrolled courses
              </h2>
              <div className="space-y-4">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                            {course.title}
                          </h3>
                          <div className="w-64 bg-neutral-200 rounded-full h-2">
                            <div 
                              className="bg-primary-600 h-2 rounded-full" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-sm text-neutral-600 mt-2">
                            {course.progress}% completed
                          </p>
                        </div>
                        <Badge variant="secondary" className="bg-success-100 text-success-700">
                          {course.status === 'in-progress' ? 'In Progress' : 
                           course.status === 'completed' ? 'Completed' : 'Not Started'}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Technology Introduction Cards */}
            <section>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {technologies.map((tech) => (
                  <Card key={tech.id} className="shadow-soft hover:shadow-medium transition-shadow">
                    <CardContent className="p-4 text-center">
                      <div className="aspect-video relative mb-4 bg-neutral-100 rounded-lg overflow-hidden">
                        <Image
                          src={tech.image}
                          alt={tech.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-neutral-900 mb-3">
                        {tech.name}
                      </h3>
                      <Badge 
                        variant={tech.status === 'registered' ? 'default' : 'secondary'}
                        className={tech.status === 'registered' 
                          ? 'bg-primary-100 text-primary-700' 
                          : 'bg-neutral-100 text-neutral-600'
                        }
                      >
                        {tech.status === 'registered' ? 'Registered' : 'Not registered'}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Rate Us */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Rate us
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {rateCourses.map((course) => (
                  <Card key={course.id} className="shadow-soft hover:shadow-medium transition-shadow">
                    <div className="flex gap-4 p-6">
                      <div className="w-24 h-24 relative bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-neutral-900 mb-2">
                          {course.title}
                        </h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {course.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Settings</h2>
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <p className="text-neutral-600">Settings content coming soon...</p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'invoices' && (
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Invoices</h2>
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <p className="text-neutral-600">Invoices content coming soon...</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Footer - Reuse existing footer component or add custom */}
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