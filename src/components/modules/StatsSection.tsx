'use client'

import * as React from "react"
import { GraduationCap, Users, Clock } from "lucide-react"

interface Stat {
  id: string
  value: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const stats: Stat[] = [
  {
    id: 'courses',
    value: '4+',
    label: 'Courses',
    icon: GraduationCap,
    color: 'text-primary-600'
  },
  {
    id: 'students', 
    value: '200+',
    label: 'Course students',
    icon: Users,
    color: 'text-secondary-600'
  },
  {
    id: 'hours',
    value: '250+', 
    label: 'Hours of content',
    icon: Clock,
    color: 'text-accent-600'
  }
]

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
            We are proud
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We take pride in our achievements and commitment to excellence. Join us in celebrating innovation, growth, and success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 divide-x divide-neutral-200">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="text-center group px-8 md:px-12"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-soft flex items-center justify-center group-hover:shadow-medium transition-shadow duration-300">
                  <stat.icon className={`w-8 h-8 md:w-10 md:h-10 text-primary-600`} />
                </div>
              </div>

              {/* Value */}
              <div className="space-y-2">
                <div className={`text-4xl md:text-5xl lg:text-6xl font-bold text-primary-600 mb-2`}>
                  {stat.value}
                </div>
                <div className="text-lg md:text-xl text-neutral-700 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}