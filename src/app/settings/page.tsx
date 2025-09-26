'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { BarChart3, Settings, FileText, ChevronDown, User, Phone, MapPin, Lock, LogOut } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent } from "@/components/ui/Card"

// Validation schema
const profileSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z.string().min(10, "Phone number is required"),
  location: z.string().min(2, "Location is required")
})

const passwordSchema = z.object({
  newPassword: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password confirmation is required")
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

type ProfileFormData = z.infer<typeof profileSchema>
type PasswordFormData = z.infer<typeof passwordSchema>

export default function SettingsPage() {
  const [activeTab, setActiveTab] = React.useState<'dashboard' | 'settings' | 'invoices'>('settings')
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false)
  const [isSavingProfile, setIsSavingProfile] = React.useState(false)
  const [isSavingPassword, setIsSavingPassword] = React.useState(false)

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Learner',
    avatar: '/default-avatar.png'
  }

  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    formState: { errors: profileErrors }
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
      phone: '+1234567890',
      location: 'New York, USA'
    }
  })

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: passwordErrors },
    reset: resetPassword
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema)
  })

  const handleTabChange = (tab: 'dashboard' | 'settings' | 'invoices') => {
    if (tab === 'dashboard') {
      window.location.href = '/dashboard'
    } else if (tab === 'invoices') {
      // Navigate to invoices page when created
      setActiveTab(tab)
    } else {
      setActiveTab(tab)
    }
  }

  const onSubmitProfile = async (data: ProfileFormData) => {
    setIsSavingProfile(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Profile updated:', data)
      alert('Profile updated successfully!')
    } catch (error) {
      console.error('Profile update failed:', error)
      alert('Failed to update profile. Please try again.')
    } finally {
      setIsSavingProfile(false)
    }
  }

  const onSubmitPassword = async (data: PasswordFormData) => {
    setIsSavingPassword(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Password changed:', data)
      alert('Password changed successfully!')
      resetPassword()
    } catch (error) {
      console.error('Password change failed:', error)
      alert('Failed to change password. Please try again.')
    } finally {
      setIsSavingPassword(false)
    }
  }

  const handleLogout = () => {
    // Implement logout logic
    if (confirm('Are you sure you want to logout?')) {
      window.location.href = '/auth/login'
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
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-white/20 text-white"
            >
              <Settings className="w-4 h-4" />
              Settings
            </button>
            <button
              onClick={() => handleTabChange('invoices')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-white/80 hover:text-white hover:bg-white/10"
            >
              <FileText className="w-4 h-4" />
              Invoices
            </button>
          </nav>
        </div>
      </div>

      {/* Settings Content */}
      <div className="container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <Card className="shadow-soft">
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className="w-32 h-32 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-16 h-16 text-neutral-400" />
                </div>
                
                {/* User Info */}
                <h2 className="text-xl font-bold text-neutral-900 mb-1">
                  {user.name}
                </h2>
                <p className="text-neutral-600">
                  {user.role}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Profile Form and Password Change */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Information */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">
                  Profile
                </h3>
                
                <form onSubmit={handleSubmitProfile(onSubmitProfile)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <Input
                        type="text"
                        placeholder="First name"
                        leftIcon={<User className="w-5 h-5" />}
                        error={!!profileErrors.firstName}
                        className="h-12 bg-neutral-50 border-neutral-200"
                        {...registerProfile("firstName")}
                      />
                      {profileErrors.firstName && (
                        <p className="text-sm text-error-600">{profileErrors.firstName.message}</p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div className="space-y-2">
                      <Input
                        type="text"
                        placeholder="Last name"
                        leftIcon={<User className="w-5 h-5" />}
                        error={!!profileErrors.lastName}
                        className="h-12 bg-neutral-50 border-neutral-200"
                        {...registerProfile("lastName")}
                      />
                      {profileErrors.lastName && (
                        <p className="text-sm text-error-600">{profileErrors.lastName.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Input
                        type="tel"
                        placeholder="Phone"
                        leftIcon={<Phone className="w-5 h-5" />}
                        error={!!profileErrors.phone}
                        className="h-12 bg-neutral-50 border-neutral-200"
                        {...registerProfile("phone")}
                      />
                      {profileErrors.phone && (
                        <p className="text-sm text-error-600">{profileErrors.phone.message}</p>
                      )}
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                      <Input
                        type="text"
                        placeholder="Location"
                        leftIcon={<MapPin className="w-5 h-5" />}
                        error={!!profileErrors.location}
                        className="h-12 bg-neutral-50 border-neutral-200"
                        {...registerProfile("location")}
                      />
                      {profileErrors.location && (
                        <p className="text-sm text-error-600">{profileErrors.location.message}</p>
                      )}
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Change Password */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">
                  Change Password
                </h3>
                
                <form onSubmit={handleSubmitPassword(onSubmitPassword)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* New Password */}
                    <div className="space-y-2">
                      <Input
                        type="password"
                        placeholder="New password"
                        leftIcon={<Lock className="w-5 h-5" />}
                        error={!!passwordErrors.newPassword}
                        className="h-12 bg-neutral-50 border-neutral-200"
                        {...registerPassword("newPassword")}
                      />
                      {passwordErrors.newPassword && (
                        <p className="text-sm text-error-600">{passwordErrors.newPassword.message}</p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                      <Input
                        type="password"
                        placeholder="Confirm password"
                        leftIcon={<Lock className="w-5 h-5" />}
                        error={!!passwordErrors.confirmPassword}
                        className="h-12 bg-neutral-50 border-neutral-200"
                        {...registerPassword("confirmPassword")}
                      />
                      {passwordErrors.confirmPassword && (
                        <p className="text-sm text-error-600">{passwordErrors.confirmPassword.message}</p>
                      )}
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <Button
                variant="primary"
                size="lg"
                loading={isSavingProfile || isSavingPassword}
                disabled={isSavingProfile || isSavingPassword}
                onClick={() => {
                  handleSubmitProfile(onSubmitProfile)()
                  handleSubmitPassword(onSubmitPassword)()
                }}
                className="bg-primary-600 hover:bg-primary-700"
              >
                Save changes
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={handleLogout}
                leftIcon={<LogOut className="w-5 h-5" />}
                className="text-neutral-600 hover:text-neutral-800"
              >
                Logout
              </Button>
            </div>
          </div>
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