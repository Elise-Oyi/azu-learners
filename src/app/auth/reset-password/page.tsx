'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { ArrowLeft, Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent } from "@/components/ui/Card"

// Validation schema
const resetSchema = z.object({
  email: z.string().email("Please enter a valid email address")
})

type ResetFormData = z.infer<typeof resetSchema>

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [email, setEmail] = React.useState("")

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ResetFormData>({
    resolver: zodResolver(resetSchema)
  })

  const onSubmit = async (data: ResetFormData) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Reset password for:', data.email)
      setEmail(data.email)
      setIsSuccess(true)
    } catch (error) {
      console.error('Reset password failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleBackToLogin = () => {
    setIsSuccess(false)
    setEmail("")
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="shadow-medium">
            <CardContent className="p-8">
              {/* Logo and Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/logo-medium.png"
                    alt="GClient Learning Platform"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
                
                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-success-600" />
                  </div>
                </div>

                <h1 className="text-2xl font-bold text-neutral-900 mb-2">
                  Check your email
                </h1>
                <p className="text-neutral-600 mb-4">
                  We&apos;ve sent password reset instructions to
                </p>
                <p className="text-primary-600 font-semibold mb-6">
                  {email}
                </p>
              </div>

              {/* Instructions */}
              <div className="space-y-6">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="text-sm font-medium text-neutral-700 mb-2">Next steps:</h3>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>1. Check your email inbox</li>
                    <li>2. Click the reset password link</li>
                    <li>3. Create a new password</li>
                    <li>4. Sign in with your new password</li>
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={handleBackToLogin}
                  >
                    Back to Sign In
                  </Button>

                  <Button
                    variant="ghost"
                    size="lg"
                    fullWidth
                    onClick={() => setIsSuccess(false)}
                  >
                    Try a different email
                  </Button>
                </div>
              </div>

              {/* Help Text */}
              <div className="mt-8 p-4 bg-warning-50 rounded-lg border border-warning-200">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-warning-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-warning-800 mb-1">
                      Didn&apos;t receive the email?
                    </h3>
                    <p className="text-xs text-warning-700">
                      Check your spam folder or contact support if you don&apos;t receive the email within 5 minutes.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Login */}
        <div className="mb-8">
          <Link 
            href="/auth/login" 
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Sign In</span>
          </Link>
        </div>

        <Card className="shadow-medium">
          <CardContent className="p-8">
            {/* Logo and Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <Image
                  src="/logo-medium.png"
                  alt="GClient Learning Platform"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              
              <h1 className="text-2xl font-bold text-neutral-900 mb-2">
                Reset your password
              </h1>
              <p className="text-neutral-600">
                Enter your email address and we&apos;ll send you a link to reset your password
              </p>
            </div>

            {/* Reset Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  leftIcon={<Mail className="w-5 h-5" />}
                  error={errors.email?.message}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-error-600">{errors.email.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={isLoading}
                disabled={isLoading}
              >
                Send Reset Instructions
              </Button>
            </form>

            {/* Alternative Actions */}
            <div className="mt-8 text-center space-y-4">
              <div className="text-neutral-600 text-sm">
                Remember your password?{" "}
                <Link
                  href="/auth/login"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Sign in
                </Link>
              </div>

              <div className="text-neutral-600 text-sm">
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/signup"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Sign up for free
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Note */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-soft">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="text-sm font-medium text-neutral-700 mb-1">Security Note</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                For your security, password reset links expire after 1 hour. If you don&apos;t receive an email, 
                check your spam folder or ensure you entered the correct email address.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}