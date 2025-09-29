'use client'

import * as React from "react"
import { Button } from "@/components/ui/Button"

interface CTASectionProps {
  onGetStarted?: () => void
}

export const CTASection: React.FC<CTASectionProps> = ({ 
  onGetStarted 
}) => {
  return (
    <section className="py-12 md:py-16 bg-primary-700 text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              It&apos;s time to start investing in yourself
            </h2>
            <p className="text-base md:text-lg text-primary-100 max-w-2xl">
              Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Button
              size="lg"
              variant="secondary"
              onClick={onGetStarted}
              className="text-base px-8 py-3 bg-transparent text-white hover:bg-white/10 font-medium border-2 border-white hover:border-white"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}