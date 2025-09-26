'use client'

import * as React from "react"
import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { User, Mail, BookOpen, Phone, MapPin, FileText, ChevronDown } from "lucide-react"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent } from "@/components/ui/Card"
import { getCourseById } from "@/lib/courses"

// Validation schema
const checkoutSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  course: z.string().min(1, "Course selection is required"),
  gender: z.string().min(1, "Gender is required"),
  phone: z.string().min(10, "Phone number is required"),
  location: z.string().min(2, "Location is required"),
  description: z.string().optional()
})

type CheckoutFormData = z.infer<typeof checkoutSchema>

function CheckoutContent() {
  const searchParams = useSearchParams()
  const courseId = searchParams.get('courseId')
  const course = courseId ? getCourseById(courseId) : null
  const [isLoading, setIsLoading] = React.useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      course: course?.title || ''
    }
  })

  React.useEffect(() => {
    if (course) {
      setValue('course', course.title)
    }
  }, [course, setValue])

  const onSubmit = async (data: CheckoutFormData) => {
    setIsLoading(true)
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000))
      console.log('Payment completed:', data)
      // Handle successful payment - redirect to success page or dashboard
      alert('Payment completed successfully!')
    } catch (error) {
      console.error('Payment failed:', error)
      alert('Payment failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Fallback course data if no course is selected
  const displayCourse = course || {
    title: 'Course',
    price: 350
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16 md:py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Checkout
            </h1>
          </div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                  Complete payment
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="John Doe"
                      leftIcon={<User className="w-5 h-5" />}
                      error={errors.fullName?.message}
                      className="h-12 bg-neutral-50 border-neutral-200"
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-error-600">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="johndoe@gmail.com"
                      leftIcon={<Mail className="w-5 h-5" />}
                      error={errors.email?.message}
                      className="h-12 bg-neutral-50 border-neutral-200"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-sm text-error-600">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Course */}
                  <div className="space-y-2">
                    <Input
                      type="text"
                      value={displayCourse.title}
                      leftIcon={<BookOpen className="w-5 h-5" />}
                      readOnly
                      className="h-12 bg-neutral-50 border-neutral-200"
                      {...register("course")}
                    />
                  </div>

                  {/* Gender */}
                  <div className="space-y-2">
                    <div className="relative">
                      <select
                        className="w-full h-12 pl-12 pr-12 bg-neutral-50 border border-neutral-200 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        {...register("gender")}
                      >
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                      <User className="w-5 h-5 text-neutral-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <ChevronDown className="w-5 h-5 text-neutral-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                    {errors.gender && (
                      <p className="text-sm text-error-600">{errors.gender.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Input
                      type="tel"
                      placeholder="Phone"
                      leftIcon={<Phone className="w-5 h-5" />}
                      error={errors.phone?.message}
                      className="h-12 bg-neutral-50 border-neutral-200"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-sm text-error-600">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Location"
                      leftIcon={<MapPin className="w-5 h-5" />}
                      error={errors.location?.message}
                      className="h-12 bg-neutral-50 border-neutral-200"
                      {...register("location")}
                    />
                    {errors.location && (
                      <p className="text-sm text-error-600">{errors.location.message}</p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <div className="relative">
                      <textarea
                        placeholder="Description"
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        {...register("description")}
                      />
                      <FileText className="w-5 h-5 text-neutral-500 absolute left-3 top-3" />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="shadow-medium">
                  <CardContent className="p-8 text-center space-y-6">
                    {/* Price */}
                    <div>
                      <div className="text-3xl font-bold text-neutral-900 mb-2">
                        $ {displayCourse.price}.00 USD
                      </div>
                      <div className="text-sm text-neutral-500">
                        Select amount
                      </div>
                    </div>

                    {/* Amount Selection */}
                    <div className="relative">
                      <select className="w-full h-12 px-4 bg-neutral-50 border border-neutral-200 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500">
                        <option value="full">100 - Full Amount</option>
                        <option value="partial">50 - Partial Payment</option>
                      </select>
                      <ChevronDown className="w-5 h-5 text-neutral-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
                    </div>

                    {/* Complete Purchase Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      loading={isLoading}
                      disabled={isLoading}
                      onClick={handleSubmit(onSubmit)}
                      className="bg-primary-600 hover:bg-primary-700 h-12"
                    >
                      Complete my purchase
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}