'use client'

import * as React from "react"
import { CourseCard, type Course } from "./CourseCard"
import { CourseCardSkeleton } from "@/components/ui/Loader"
import { cn } from "@/lib/utils"

interface CourseGridProps {
  courses: Course[]
  loading?: boolean
  variant?: 'default' | 'compact' | 'featured'
  columns?: 2 | 3 | 4
  showProgress?: boolean
  onEnroll?: (courseId: string) => void
  className?: string
}

export const CourseGrid: React.FC<CourseGridProps> = ({
  courses,
  loading = false,
  variant = 'default',
  columns = 3,
  showProgress = false,
  onEnroll,
  className
}) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }

  if (loading) {
    return (
      <div className={cn(
        "grid gap-6",
        gridCols[columns],
        className
      )}>
        {Array.from({ length: columns * 2 }).map((_, index) => (
          <CourseCardSkeleton key={index} />
        ))}
      </div>
    )
  }

  if (courses.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-neutral-400 text-lg mb-2">
          No courses found
        </div>
        <p className="text-neutral-500 text-sm">
          Try adjusting your search or filter criteria
        </p>
      </div>
    )
  }

  return (
    <div className={cn(
      "grid gap-6",
      gridCols[columns],
      className
    )}>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          variant={variant}
          showProgress={showProgress}
          onEnroll={onEnroll}
        />
      ))}
    </div>
  )
}