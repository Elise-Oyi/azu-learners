'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent } from "@/components/ui/Card"

// Validation schema
const signupSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain uppercase, lowercase, and number"),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine(val => val === true, "You must accept the terms and conditions")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

type SignupFormData = z.infer<typeof signupSchema>

export default function SignupPage() {
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema)
  })

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Signup data:', data)
      // Handle successful signup - redirect to OTP verification
    } catch (error) {
      console.error('Signup failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignup = () => {
    console.log('Google signup clicked')
    // Implement Google OAuth
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-white border-b border-neutral-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <Image
              src="/logo-medium.png"
              alt="GClient Learning Platform"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-neutral-600 hover:text-primary-600">Home</Link>
              <Link href="/courses" className="text-sm font-medium text-neutral-600 hover:text-primary-600">Courses</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="border-primary-600 text-primary-600 hover:bg-primary-50"
            >
              <Link href="/auth/login">
                Login
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
            <Button 
              variant="primary" 
              size="sm" 
              asChild
              className="bg-primary-600 hover:bg-primary-700 rounded-lg"
            >
              <Link href="/auth/signup">
                Sign up
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-white items-center justify-center p-8 relative">
        <div className="relative">
          <Image
            src="/Ellipse 32.png"
            alt="Learning Illustration"
            width={481}
            height={481}
            className="max-w-full h-auto"
          />
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-200 rounded-full opacity-60"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-secondary-200 rounded-full opacity-40"></div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 pt-24">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">
              Sign up to get started
            </h1>
          </div>

          {/* Google Sign Up */}
          <div className="mb-6">
            <Button
              variant="outline"
              size="lg"
              fullWidth
              onClick={handleGoogleSignup}
              className="border-neutral-300 hover:bg-neutral-50"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Signup using Google
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-neutral-300"></div>
            <span className="px-4 text-sm text-neutral-500">or</span>
            <div className="flex-1 border-t border-neutral-300"></div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* First Name */}
            <div className="space-y-2">
              <Input
                id="firstName"
                type="text"
                placeholder="First name"
                leftIcon={<User className="w-5 h-5" />}
                error={!!errors.firstName}
                className="h-12"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-sm text-error-600">{errors.firstName.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Input
                id="lastName"
                type="text"
                placeholder="Last name"
                leftIcon={<User className="w-5 h-5" />}
                error={!!errors.lastName}
                className="h-12"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-sm text-error-600">{errors.lastName.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="Email"
                leftIcon={<Mail className="w-5 h-5" />}
                error={!!errors.email}
                className="h-12"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-error-600">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                leftIcon={<Lock className="w-5 h-5" />}
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-neutral-500 hover:text-neutral-700 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                }
                error={!!errors.password}
                className="h-12"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-error-600">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                leftIcon={<Lock className="w-5 h-5" />}
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-neutral-500 hover:text-neutral-700 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                }
                error={!!errors.confirmPassword}
                className="h-12"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-error-600">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                leftIcon={<Lock className="w-5 h-5" />}
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-neutral-500 hover:text-neutral-700 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                }
                error={!!errors.confirmPassword}
                className="h-12"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-error-600">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                href="/auth/reset-password"
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Forgot password ?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={isLoading}
              disabled={isLoading}
              className="h-12 bg-primary-600 hover:bg-primary-700 mt-6"
            >
              Signup
            </Button>
          </form>

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <p className="text-neutral-600">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}