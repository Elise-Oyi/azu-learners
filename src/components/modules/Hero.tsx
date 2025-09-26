'use client'

import * as React from "react"
import Image from "next/image" 
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Play } from "lucide-react"

interface HeroProps {
  onGetStarted?: () => void
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px] py-16 lg:py-24">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Unlock Your Potential with{" "}
                <span className="text-primary-600">
                  Industry-Leading Courses!
                </span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl">
                Join thousands of learners gaining real-world skills and advancing their careers. Our 
                expert-led courses are designed to get you job-ready in today's competitive market.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                variant="primary"
                className="text-base px-8 py-4"
              >
                <Link href="/auth/signup">
                  Get Started
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                leftIcon={<Play className="h-5 w-5" />}
                className="text-base px-8 py-4"
              >
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">4+</div>
                <div className="text-sm text-neutral-600">Courses</div>
              </div>
              <div className="w-px h-8 bg-neutral-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">200+</div>
                <div className="text-sm text-neutral-600">Students</div>
              </div>
              <div className="w-px h-8 bg-neutral-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">250+</div>
                <div className="text-sm text-neutral-600">Hours of Content</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&auto=format"
                alt="Professional woman with glasses holding a laptop, representing success in learning"
                width={600}
                height={400}
                className="object-cover"
                priority
              />
              
              {/* Floating elements */}
              <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Classes</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg">
                <div className="text-sm">
                  <div className="font-semibold text-primary-600">95%</div>
                  <div className="text-neutral-600">Job Success Rate</div>
                </div>
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-200 rounded-full opacity-60 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-200 rounded-full opacity-40 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}