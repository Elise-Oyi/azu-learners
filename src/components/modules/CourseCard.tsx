'use client'

import * as React from "react"
import Image from "next/image"
import { Star, Users, Clock, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Avatar } from "@/components/ui/Avatar"
import { cn, formatCurrency } from "@/lib/utils"

export interface Course {
  id: string
  title: string
  description: string
  image: string
  price: number
  originalPrice?: number
  currency: string
  duration: string
  rating: number
  reviewCount: number
  studentCount: number
  instructor: {
    id: string
    name: string
    avatar?: string
  }
  category: string
  level: 'beginner' | 'intermediate' | 'advanced'
  isFeatured?: boolean
  tags?: string[]
}

interface CourseCardProps {
  course: Course
  variant?: 'default' | 'compact' | 'featured'
  showProgress?: boolean
  progress?: number
  onEnroll?: (courseId: string) => void
  className?: string
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  variant = 'default',
  showProgress = false,
  progress = 0,
  onEnroll,
  className
}) => {
  const {
    id,
    title,
    description,
    image,
    price,
    originalPrice,
    currency,
    duration,
    rating,
    reviewCount,
    studentCount,
    instructor,
    category,
    level,
    isFeatured,
    tags
  } = course

  const handleEnroll = () => {
    onEnroll?.(id)
  }

  const levelColors = {
    beginner: 'success',
    intermediate: 'warning',
    advanced: 'error'
  } as const

  return (
    <Card 
      className={cn(
        "group overflow-hidden hover:shadow-medium transition-all duration-200",
        variant === 'featured' && "ring-2 ring-primary-500 ring-opacity-50",
        className
      )}
    >
      {/* Course Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-3 left-3">
            <Badge variant="warning" size="sm">
              Featured
            </Badge>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" size="sm">
            {category}
          </Badge>
        </div>

        {/* Progress Bar (if enrolled) */}
        {showProgress && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/20">
            <div className="h-1 bg-primary-500" style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>

      {/* Course Content */}
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Title and Description */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg leading-tight line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Course Stats */}
          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-warning-500 text-warning-500" />
              <span className="font-medium text-neutral-700">{rating}</span>
              <span>({reviewCount})</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>{studentCount.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{duration}</span>
            </div>
          </div>

          {/* Tags & Level */}
          {tags && tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="outline" size="sm">
                  {tag}
                </Badge>
              ))}
              <Badge 
                variant={levelColors[level]} 
                size="sm"
              >
                {level}
              </Badge>
            </div>
          )}

          {/* Instructor */}
          <div className="flex items-center gap-2">
            <Avatar
              size="sm"
              src={instructor.avatar}
              name={instructor.name}
            />
            <span className="text-sm text-neutral-600">
              {instructor.name}
            </span>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-primary-600">
                  {formatCurrency(price, currency)}
                </span>
                {originalPrice && originalPrice > price && (
                  <span className="text-sm text-neutral-500 line-through">
                    {formatCurrency(originalPrice, currency)}
                  </span>
                )}
              </div>
              {originalPrice && originalPrice > price && (
                <div className="text-xs text-success-600 font-medium">
                  Save {formatCurrency(originalPrice - price, currency)}
                </div>
              )}
            </div>
            
            <Button
              variant="primary"
              size="md"
              leftIcon={<BookOpen className="h-4 w-4" />}
              onClick={handleEnroll}
            >
              {showProgress && progress > 0 ? 'Continue' : 'Enroll'}
            </Button>
          </div>

          {/* Progress Text (if enrolled) */}
          {showProgress && (
            <div className="text-xs text-neutral-500 text-center pt-2">
              {progress}% Complete
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}