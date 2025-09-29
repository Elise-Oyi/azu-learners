'use client'

import * as React from "react"
import { UserPlus, BookOpen, GraduationCap, ArrowDown, Shield, CheckCircle, Monitor, Database, Cloud, Code } from "lucide-react"

interface JourneyStep {
  id: string
  step: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  iconColor: string
  bgColor: string
}

interface Course {
  id: string
  title: string
  description: string
  price: string
  icon: React.ComponentType<{ className?: string }>
  iconColor: string
  bgColor: string
}

const journeySteps: JourneyStep[] = [
  {
    id: 'signup',
    step: 1,
    title: 'Sign Up and Choose Your Course',
    description: 'Create your account quickly with just your email or social media login, then explore a wide range',
    icon: UserPlus,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'onboarding',
    step: 2,
    title: 'Onboarding',
    description: 'Get started seamlessly with a smooth onboarding experience. Learn the essentials and set yourself up for success from day one.',
    icon: BookOpen,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'learning',
    step: 3,
    title: 'Start Learning',
    description: 'Start your learning journey with practical, hands-on experience. Develop the skills needed to build, implement, and manage effective solutions.',
    icon: GraduationCap,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50'
  }
]

const courses: Course[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Unlock your potential with comprehensive training in modern software development.',
    price: 'Price: $300',
    icon: Code,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'data-science',
    title: 'Data Science Mastery',
    description: 'Focus yourself with the skills to analyze, interpret, and leverage data, becoming an expert.',
    price: 'Price: $350',
    icon: Database,
    iconColor: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing Expertise',
    description: 'Gain hands-on experience in cloud architectures, preparing you to manage scalable solutions.',
    price: 'Price: $390',
    icon: Cloud,
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
]

export const JourneySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Steps */}
          <div className="space-y-8">
            {journeySteps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center border-2 border-blue-200`}>
                      <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Vertical Arrow */}
                {index < journeySteps.length - 1 && (
                  <div className="absolute left-14 -bottom-4 z-10">
                    <ArrowDown className="w-8 h-8 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - Visual Elements with Illustrations */}
          <div className="relative space-y-12 pt-8">
            {/* Step 1 Visual - Secure Login & Authentication */}
            <div className="flex gap-12 justify-center items-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-800 mb-2">1</div>
                <div className="text-sm font-medium text-gray-700 mb-4">Secure Login</div>
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-2">
                    <div className="relative">
                      <Monitor className="w-12 h-12 text-blue-600" />
                      <Shield className="w-6 h-6 text-blue-700 absolute -top-1 -right-1 bg-white rounded-full p-1" />
                    </div>
                  </div>
                  {/* Character illustration placeholder */}
                  <div className="absolute -bottom-2 -left-6 w-12 h-16 bg-gradient-to-t from-blue-600 to-blue-400 rounded-full opacity-20"></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-800 mb-2">2</div>
                <div className="text-sm font-medium text-gray-700 mb-4">Authentication</div>
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-2">
                    <div className="relative">
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                  </div>
                  {/* Character illustration placeholder */}
                  <div className="absolute -bottom-2 -right-6 w-12 h-16 bg-gradient-to-t from-green-600 to-green-400 rounded-full opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Step 2 Visual - Choose a course */}
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-800 mb-2">3</div>
              <div className="text-sm font-medium text-gray-700 mb-6">Choose a course</div>
              
              {/* Course Cards */}
              <div className="grid grid-cols-1 gap-4">
                {courses.map((course) => (
                  <div key={course.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${course.bgColor} rounded-xl flex items-center justify-center`}>
                        <course.icon className={`w-6 h-6 ${course.iconColor}`} />
                      </div>
                      <div className="text-left flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{course.title}</h4>
                        <p className="text-xs text-gray-600 mb-1">{course.description}</p>
                        <div className="text-xs font-medium text-blue-600">{course.price}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}