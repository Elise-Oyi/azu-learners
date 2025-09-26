'use client'

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { avatarVariants } from "@/lib/variants"
import { getInitials } from "@/lib/utils"

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  fallback?: string
  name?: string
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size, src, alt, fallback, name, ...props }, ref) => {
  const displayFallback = fallback || (name ? getInitials(name) : "??")
  
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarVariants({ size }), className)}
      {...props}
    >
      {src && (
        <AvatarPrimitive.Image
          src={src}
          alt={alt || name}
          className="aspect-square h-full w-full rounded-[inherit] object-cover"
        />
      )}
      <AvatarPrimitive.Fallback
        className={cn(
          "flex h-full w-full items-center justify-center rounded-[inherit] bg-neutral-100 text-neutral-900 font-medium",
          size === "sm" && "text-xs",
          size === "md" && "text-sm",
          size === "lg" && "text-base",
          size === "xl" && "text-lg",
          size === "2xl" && "text-xl"
        )}
        delayMs={600}
      >
        {displayFallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
})

Avatar.displayName = "Avatar"

// Avatar Group component for displaying multiple avatars
export interface AvatarGroupProps {
  children: React.ReactNode
  max?: number
  size?: VariantProps<typeof avatarVariants>['size']
  className?: string
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, max = 5, size = "md", className }, ref) => {
    const childrenArray = React.Children.toArray(children)
    const visibleChildren = childrenArray.slice(0, max)
    const remainingCount = Math.max(0, childrenArray.length - max)

    return (
      <div 
        ref={ref}
        className={cn("flex -space-x-2 overflow-hidden", className)}
      >
        {visibleChildren.map((child, index) => (
          <div
            key={index}
            className="ring-2 ring-white rounded-full"
          >
            {React.isValidElement(child) 
              ? React.cloneElement(child as React.ReactElement<AvatarProps>, { 
                  size 
                })
              : child
            }
          </div>
        ))}
        {remainingCount > 0 && (
          <div className="ring-2 ring-white rounded-full">
            <Avatar
              size={size}
              fallback={`+${remainingCount}`}
              className="bg-neutral-200 text-neutral-700"
            />
          </div>
        )}
      </div>
    )
  }
)

AvatarGroup.displayName = "AvatarGroup"

export { Avatar, AvatarGroup, avatarVariants }