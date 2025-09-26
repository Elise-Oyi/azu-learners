'use client'

import * as React from "react"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Sparkles } from "lucide-react"

interface CTASectionProps {
  onGetStarted?: () => void
}

export const CTASection: React.FC<CTASectionProps> = ({ 
  onGetStarted 
}) => {
  return (
    <section className="py-16 md:py-24 bg-primary-800 text-white relative overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Sparkles Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              It&apos;s time to start investing in yourself
            </h2>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-2xl mx-auto">
              Online courses were the opportunity to learn from anyone, regardless of their scheduling or 
              geographic constraints.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              variant="secondary"
              rightIcon={<ArrowRight className="h-5 w-5" />}
              onClick={onGetStarted}
              className="text-base px-8 py-4 bg-white text-primary-800 hover:bg-primary-50 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Get started
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-primary-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-400 rounded-full"></div>
                <span>Free trial available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-400 rounded-full"></div>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-400 rounded-full"></div>
                <span>Certificate included</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-secondary-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse delay-500"></div>
    </section>
  )
}