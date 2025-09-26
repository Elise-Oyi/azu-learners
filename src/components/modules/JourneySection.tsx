'use client'

import * as React from "react"
import { UserPlus, BookOpen, GraduationCap, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"

interface JourneyStep {
  id: string
  step: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const journeySteps: JourneyStep[] = [
  {
    id: 'signup',
    step: 1,
    title: 'Sign Up and Choose Your Course',
    description: 'Create your account quickly and get your email verified so you can access your course materials.',
    icon: UserPlus,
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'onboarding',
    step: 2,
    title: 'Onboarding',
    description: 'Get expert mentorship with a smooth onboarding session and get essential and life-practical skills.',
    icon: BookOpen,
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'learning',
    step: 3,
    title: 'Start Learning',
    description: 'Start your learning journey with practical, hands-on experience. Develop the skills needed to build, implement, and manage effective solutions.',
    icon: GraduationCap,
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 'certification',
    step: 4,
    title: 'Get Certified',
    description: 'Complete your course and receive a professional certificate to showcase your new skills to employers.',
    icon: Trophy,
    color: 'from-yellow-400 to-yellow-600'
  }
]

export const JourneySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
            Your Learning Journey
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From enrollment to certification, we'll guide you through every step of your learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {journeySteps.map((step, index) => (
            <Card 
              key={step.id}
              className="relative overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center space-y-4">
                {/* Step Number */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-neutral-600">{step.step}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-neutral-900 line-clamp-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed line-clamp-4">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line (except for last item) */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-px bg-neutral-200 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-neutral-300 rounded-full"></div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Illustration */}
        <div className="mt-16 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary-50 rounded-full border border-primary-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary-700">Average completion time: 8-12 weeks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}