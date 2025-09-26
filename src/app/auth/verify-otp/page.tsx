'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { ArrowLeft, Mail, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent } from "@/components/ui/Card"

// Validation schema
const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits").regex(/^\d+$/, "OTP must contain only numbers")
})

type OTPFormData = z.infer<typeof otpSchema>

export default function VerifyOTPPage() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isResending, setIsResending] = React.useState(false)
  const [timeLeft, setTimeLeft] = React.useState(60)
  const [canResend, setCanResend] = React.useState(false)
  const [email] = React.useState("user@example.com") // In real app, get from state/params

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema)
  })

  // Countdown timer
  React.useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [timeLeft])

  const onSubmit = async (data: OTPFormData) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('OTP verification:', data)
      // Handle successful verification - redirect to dashboard or login success
    } catch (error) {
      console.error('OTP verification failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendOTP = async () => {
    if (!canResend) return
    
    setIsResending(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('OTP resent to:', email)
      // Reset timer
      setTimeLeft(60)
      setCanResend(false)
    } catch (error) {
      console.error('Failed to resend OTP:', error)
    } finally {
      setIsResending(false)
    }
  }

  // Auto-focus and move to next input
  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length <= 6) {
      setValue('otp', value)
    }
  }

  const otpValue = watch('otp') || ''

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Signup */}
        <div className="mb-8">
          <Link 
            href="/auth/signup" 
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Signup</span>
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
              
              {/* Email Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary-600" />
                </div>
              </div>

              <h1 className="text-2xl font-bold text-neutral-900 mb-2">
                Verify your email
              </h1>
              <p className="text-neutral-600 mb-4">
                We've sent a 6-digit verification code to
              </p>
              <p className="text-primary-600 font-semibold">
                {email}
              </p>
            </div>

            {/* OTP Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* OTP Input */}
              <div className="space-y-2">
                <label htmlFor="otp" className="text-sm font-medium text-neutral-700 text-center block">
                  Enter verification code
                </label>
                
                <div className="flex justify-center">
                  <Input
                    id="otp"
                    type="text"
                    placeholder="000000"
                    maxLength={6}
                    value={otpValue}
                    onChange={handleOTPChange}
                    error={!!errors.otp}
                    className="text-center text-2xl font-mono tracking-[0.5em] w-48"
                    {...register("otp")}
                  />
                </div>
                
                {errors.otp && (
                  <p className="text-sm text-error-600 text-center">{errors.otp.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={isLoading}
                disabled={isLoading || otpValue.length !== 6}
              >
                Verify Email
              </Button>
            </form>

            {/* Resend Section */}
            <div className="mt-8 text-center space-y-4">
              <p className="text-neutral-600 text-sm">
                Didn't receive the code?
              </p>
              
              {!canResend ? (
                <p className="text-sm text-neutral-500">
                  Resend code in {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </p>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleResendOTP}
                  loading={isResending}
                  disabled={isResending}
                  leftIcon={!isResending ? <RefreshCw className="w-4 h-4" /> : undefined}
                >
                  Resend Code
                </Button>
              )}
            </div>

            {/* Help Text */}
            <div className="mt-8 p-4 bg-neutral-50 rounded-lg">
              <h3 className="text-sm font-medium text-neutral-700 mb-2">Having trouble?</h3>
              <ul className="text-xs text-neutral-600 space-y-1">
                <li>• Check your spam/junk folder</li>
                <li>• Make sure you entered the correct email</li>
                <li>• The code expires in 10 minutes</li>
                <li>• Contact support if you continue having issues</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center">
          <Link
            href="/auth/login"
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Already verified? Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}