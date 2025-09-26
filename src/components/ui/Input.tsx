'use client'

import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { inputVariants } from "@/lib/variants"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string
  error?: string
  success?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  showPasswordToggle?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    variant,
    size,
    type = "text",
    label,
    error,
    success,
    helperText,
    leftIcon,
    rightIcon,
    showPasswordToggle = false,
    disabled,
    ...props
  }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [isFocused, setIsFocused] = React.useState(false)

    // Determine the actual input type
    const inputType = type === "password" && showPasswordToggle 
      ? (showPassword ? "text" : "password") 
      : type

    // Determine variant based on state
    const currentVariant = error ? "error" : success ? "success" : variant

    // Password toggle handler
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword)
    }

    // Status icon
    const statusIcon = error ? (
      <AlertCircle className="h-4 w-4 text-error-500" />
    ) : success ? (
      <CheckCircle className="h-4 w-4 text-success-500" />
    ) : null

    // Right side icon (priority: custom rightIcon > password toggle > status icon)
    const rightSideIcon = rightIcon || (
      type === "password" && showPasswordToggle ? (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="p-1 hover:bg-neutral-100 rounded transition-colors"
          tabIndex={-1}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4 text-neutral-500" />
          ) : (
            <Eye className="h-4 w-4 text-neutral-500" />
          )}
        </button>
      ) : statusIcon
    )

    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-sm font-medium text-neutral-700">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
              {leftIcon}
            </div>
          )}
          <input
            type={inputType}
            className={cn(
              inputVariants({ variant: currentVariant, size }),
              leftIcon && "pl-10",
              (rightSideIcon || (type === "password" && showPasswordToggle)) && "pr-10",
              isFocused && "ring-2 ring-offset-2",
              disabled && "bg-neutral-50",
              className
            )}
            ref={ref}
            disabled={disabled}
            onFocus={(e) => {
              setIsFocused(true)
              props.onFocus?.(e)
            }}
            onBlur={(e) => {
              setIsFocused(false)
              props.onBlur?.(e)
            }}
            {...props}
          />
          {rightSideIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {rightSideIcon}
            </div>
          )}
        </div>
        {(error || success || helperText) && (
          <div className="mt-1 text-sm">
            {error && (
              <p className="text-error-500 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {error}
              </p>
            )}
            {success && !error && (
              <p className="text-success-500 flex items-center gap-1">
                <CheckCircle className="h-3 w-3" />
                {success}
              </p>
            )}
            {helperText && !error && !success && (
              <p className="text-neutral-500">{helperText}</p>
            )}
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input, inputVariants }