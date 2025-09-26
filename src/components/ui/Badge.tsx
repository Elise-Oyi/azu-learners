'use client'

import * as React from "react"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { badgeVariants } from "@/lib/variants"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

function Badge({ 
  className, 
  variant, 
  size, 
  leftIcon, 
  rightIcon, 
  children, 
  ...props 
}: BadgeProps) {
  return (
    <div 
      className={cn(badgeVariants({ variant, size }), className)} 
      {...props}
    >
      {leftIcon && <span className="mr-1">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-1">{rightIcon}</span>}
    </div>
  )
}

export { Badge, badgeVariants }