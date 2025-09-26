'use client'

import * as React from "react"
import { Loader2 } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "animate-spin",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-12 w-12",
      },
      variant: {
        default: "text-neutral-500",
        primary: "text-primary-600",
        white: "text-white",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
)

export interface LoaderProps
  extends VariantProps<typeof spinnerVariants> {
  className?: string
  text?: string
}

const Loader: React.FC<LoaderProps> = ({ 
  size, 
  variant, 
  className, 
  text 
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Loader2 className={cn(spinnerVariants({ size, variant }), className)} />
      {text && (
        <p className="text-sm text-neutral-600 animate-pulse">{text}</p>
      )}
    </div>
  )
}

// Loading Skeleton component
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-neutral-200",
        className
      )}
      {...props}
    />
  )
}

// Page Loading component
export interface PageLoaderProps {
  text?: string
}

const PageLoader: React.FC<PageLoaderProps> = ({ 
  text = "Loading..." 
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <Loader size="xl" variant="primary" />
      <div className="text-center">
        <h3 className="text-lg font-medium text-neutral-900 mb-1">
          Please wait
        </h3>
        <p className="text-neutral-600">{text}</p>
      </div>
    </div>
  )
}

// Loading overlay component
export interface LoadingOverlayProps {
  isLoading: boolean
  text?: string
  children: React.ReactNode
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  text = "Loading...",
  children
}) => {
  return (
    <div className="relative">
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
          <Loader size="lg" variant="primary" text={text} />
        </div>
      )}
    </div>
  )
}

// Card loading skeleton
const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200 p-6 space-y-4">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-2/3" />
      <div className="flex justify-between items-center pt-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-24" />
      </div>
    </div>
  )
}

// Course card skeleton
const CourseCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="flex items-center space-x-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-12" />
        </div>
        <div className="flex justify-between items-center pt-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-9 w-24" />
        </div>
      </div>
    </div>
  )
}

export { 
  Loader, 
  Skeleton, 
  PageLoader, 
  LoadingOverlay, 
  CardSkeleton,
  CourseCardSkeleton,
  spinnerVariants 
}