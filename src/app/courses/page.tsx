'use client'

import * as React from "react"
import Image from "next/image"
import { Search, Star } from "lucide-react"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent } from "@/components/ui/Card"
import { courses } from "@/lib/courses"

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [filteredCourses, setFilteredCourses] = React.useState(courses)

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    const filtered = courses.filter(course =>
      course.title.toLowerCase().includes(value.toLowerCase()) ||
      course.description.toLowerCase().includes(value.toLowerCase()) ||
      course.category.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredCourses(filtered)
  }

  const handlePreviewCourse = (courseId: string) => {
    window.location.href = `/courses/${courseId}`
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16 md:py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Tracks
            </h1>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search Track"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                leftIcon={<Search className="w-5 h-5" />}
                className="h-14 text-base bg-neutral-50 border-neutral-200 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">
              Top Tracks
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden shadow-soft hover:shadow-medium transition-shadow">
                <div className="aspect-video relative bg-neutral-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <CardContent className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {course.description}
                  </p>

                  {/* Rating and Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {/* Stars */}
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        <Star className="w-4 h-4 text-neutral-300" />
                      </div>
                      <span className="text-sm font-medium text-neutral-700 ml-2">
                        {course.rating}
                      </span>
                    </div>

                    <div className="text-right">
                      <div className="text-sm text-neutral-500">Price:</div>
                      <div className="text-lg font-bold text-primary-600">
                        ${course.price}
                      </div>
                    </div>
                  </div>

                  {/* Preview Button */}
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={() => handlePreviewCourse(course.id)}
                    className="bg-primary-600 hover:bg-primary-700"
                  >
                    Preview course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-neutral-400 mb-4">
                <Search className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-600 mb-2">
                No courses found
              </h3>
              <p className="text-neutral-500">
                Try adjusting your search terms or browse all available tracks.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}