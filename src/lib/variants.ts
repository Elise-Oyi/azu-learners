import { cva, type VariantProps } from "class-variance-authority"

// Button variants
export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",
        secondary: "bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800",
        outline: "border border-neutral-300 bg-white hover:bg-neutral-50 hover:text-neutral-900",
        ghost: "hover:bg-neutral-100 hover:text-neutral-900",
        link: "text-primary-600 underline-offset-4 hover:underline",
        destructive: "bg-error-500 text-white hover:bg-error-600 active:bg-error-700",
      },
      size: {
        sm: "h-9 rounded-md px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

// Input variants
export const inputVariants = cva(
  "flex w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-300 focus-visible:ring-primary-500",
        error: "border-error-500 focus-visible:ring-error-500",
        success: "border-success-500 focus-visible:ring-success-500",
      },
      size: {
        sm: "h-8 px-2 text-xs",
        md: "h-10 px-3 py-2",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

// Card variants
export const cardVariants = cva(
  "rounded-lg border bg-white text-neutral-950 shadow-sm",
  {
    variants: {
      variant: {
        default: "border-neutral-200",
        outlined: "border-neutral-300 shadow-none",
        elevated: "border-neutral-100 shadow-medium",
        interactive: "border-neutral-200 hover:shadow-medium transition-shadow cursor-pointer",
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

// Badge variants
export const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-neutral-900 text-neutral-50 hover:bg-neutral-900/80",
        secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80",
        success: "bg-success-500 text-white hover:bg-success-600",
        warning: "bg-warning-500 text-white hover:bg-warning-600",
        error: "bg-error-500 text-white hover:bg-error-600",
        info: "bg-info-500 text-white hover:bg-info-600",
        outline: "border border-neutral-200 bg-transparent text-neutral-900",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

// Avatar variants
export const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
        "2xl": "h-20 w-20",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

// Export variant props types
export type ButtonVariants = VariantProps<typeof buttonVariants>
export type InputVariants = VariantProps<typeof inputVariants>
export type CardVariants = VariantProps<typeof cardVariants>
export type BadgeVariants = VariantProps<typeof badgeVariants>
export type AvatarVariants = VariantProps<typeof avatarVariants>