'use client'

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/Button"

interface SkillsSectionProps {
  onGetStarted?: () => void
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ 
  onGetStarted 
}) => {
  return (
    <section className="py-16 md:py-24 bg-primary-800 text-white relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                What will be next step
              </h2>
              <p className="text-lg text-primary-100 leading-relaxed">
                Discover our diverse stack of solutions, including software development, data science, and cloud tools. Sign up today and kickstart your journey!
              </p>
            </div>

            {/* Technology Grid */}
            <div className="grid grid-cols-4 gap-3 max-w-xl">
              {[
                { name: 'ReactJs', color: 'border-blue-400' },
                { name: 'NextJs', color: 'border-gray-400' },
                { name: 'NodeJs', color: 'border-green-400' },
                { name: 'Django', color: 'border-red-400' },
                { name: 'MongoDB', color: 'border-green-400' },
                { name: 'VueJs', color: 'border-green-500' },
                { name: 'AWS', color: 'border-orange-400' },
                { name: 'Azure', color: 'border-blue-500' },
                { name: 'PowerBI', color: 'border-yellow-400' },
                { name: 'Python', color: 'border-blue-400' },
                { name: 'Excel', color: 'border-green-500' },
                { name: 'Tableau', color: 'border-orange-500' }
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className={`px-2 py-3 text-sm font-medium text-center text-white border ${tech.color} min-h-[44px] flex items-center justify-center rounded-md`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* Right Device Images */}
          <div className="relative flex justify-center items-center">
            {/* Mobile Device - much smaller and overlapping the desktop */}
            <div className="absolute left-44 bottom-24 z-10">
              <Image
                src="/what-next2.png"
                alt="Mobile device showing learner platform"
                width={70}
                height={120}
                className="object-contain"
              />
            </div>
            
            {/* Desktop/Monitor - main device */}
            <div className="relative">
              <Image
                src="/what-next1.png"
                alt="Desktop computer showing learner platform"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}