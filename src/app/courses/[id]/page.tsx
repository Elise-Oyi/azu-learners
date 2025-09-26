'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Clock, BookOpen, User, Calendar, Star } from "lucide-react"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { getCourseById, getRelatedCourses } from "@/lib/courses"

interface CourseDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const resolvedParams = React.use(params)
  const course = getCourseById(resolvedParams.id)
  const relatedCourses = getRelatedCourses(resolvedParams.id)

  if (!course) {
    notFound()
  }

  const handleEnroll = () => {
    window.location.href = `/checkout?courseId=${course.id}`
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-8 md:py-12">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <Link href="/courses" className="text-white/80 hover:text-white transition-colors">
              Tracks
            </Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white">{course.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {course.title} Track
              </h1>
              
              <p className="text-lg text-white/90 leading-relaxed">
                {course.fullDescription}
              </p>

              {/* Course Meta */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div>
                  <div className="text-sm text-white/70 mb-1">Instructor</div>
                  <div className="font-semibold">{course.instructor}</div>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Enrolled students</div>
                  <div className="font-semibold">{course.enrolledStudents}</div>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">1 review</div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <Star className="w-4 h-4 text-white/40" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Course Image */}
            <div className="relative">
              <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What you'll learn */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                What you'll learn
              </h2>
              <div className="space-y-4">
                {course.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-neutral-700 leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Explore related courses */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Explore related courses
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedCourses.map((relatedCourse) => (
                  <Card key={relatedCourse.id} className="overflow-hidden shadow-soft hover:shadow-medium transition-shadow">
                    <div className="aspect-video relative bg-neutral-100">
                      <Image
                        src={relatedCourse.image}
                        alt={relatedCourse.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-neutral-900 mb-2">
                        {relatedCourse.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {relatedCourse.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-medium">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-lg font-bold text-neutral-900">
                    Course Details
                  </h3>

                  {/* Course Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-neutral-500" />
                      <div>
                        <div className="text-sm text-neutral-500">Duration</div>
                        <div className="font-medium">{course.duration}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-neutral-500" />
                      <div>
                        <div className="text-sm text-neutral-500">Courses</div>
                        <div className="font-medium">{course.coursesCount}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-neutral-500" />
                      <div>
                        <div className="text-sm text-neutral-500">Instructor</div>
                        <div className="font-medium">{course.instructor}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-neutral-500" />
                      <div>
                        <div className="text-sm text-neutral-500">Date</div>
                        <div className="font-medium">{course.date}</div>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center pt-4 border-t border-neutral-200">
                    <div className="text-2xl font-bold text-primary-600 mb-4">
                      ${course.price}.00
                    </div>
                    
                    <Button
                      variant="primary"
                      size="lg"
                      fullWidth
                      onClick={handleEnroll}
                      className="bg-primary-600 hover:bg-primary-700"
                    >
                      Enroll
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}