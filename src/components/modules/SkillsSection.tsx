'use client'

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"

const technologies = [
  { name: 'React.js', color: 'bg-blue-100 text-blue-800', popular: true },
  { name: 'Node.js', color: 'bg-green-100 text-green-800', popular: true },
  { name: 'Python', color: 'bg-yellow-100 text-yellow-800', popular: true },
  { name: 'MongoDB', color: 'bg-green-100 text-green-800' },
  { name: 'Next.js', color: 'bg-neutral-100 text-neutral-800' },
  { name: 'AWS', color: 'bg-orange-100 text-orange-800', popular: true },
  { name: 'Docker', color: 'bg-blue-100 text-blue-800' },
  { name: 'PostgreSQL', color: 'bg-blue-100 text-blue-800' },
  { name: 'TypeScript', color: 'bg-blue-100 text-blue-800' },
  { name: 'Power BI', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Python', color: 'bg-green-100 text-green-800' },
  { name: 'Excel', color: 'bg-green-100 text-green-800' },
  { name: 'Tableau', color: 'bg-orange-100 text-orange-800' },
  { name: 'Azure', color: 'bg-blue-100 text-blue-800' }
]

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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                What will be next step
              </h2>
              <p className="text-lg text-primary-100 leading-relaxed">
                Discover the cutting-edge technologies and tools that will define your career path. 
                From frontend frameworks to cloud computing, master the skills that industry leaders demand.
              </p>
            </div>

            {/* Technology Tags */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Popular Technologies:</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <Badge
                    key={`${tech.name}-${index}`}
                    className={`${tech.color} px-4 py-2 text-sm font-medium rounded-full border-0 hover:scale-105 transition-transform cursor-pointer ${
                      tech.popular ? 'ring-2 ring-white/30' : ''
                    }`}
                  >
                    {tech.name}
                    {tech.popular && (
                      <span className="ml-2 w-2 h-2 bg-current rounded-full inline-block animate-pulse" />
                    )}
                  </Badge>
                ))}
              </div>
            </div>

            <Button
              size="lg"
              variant="secondary"
              onClick={onGetStarted}
              className="text-base px-8 py-4 bg-white text-primary-800 hover:bg-primary-50 font-semibold"
            >
              Get started
            </Button>
          </div>

          {/* Right Image/Illustration */}
          <div className="relative">
            <div className="relative">
              {/* Main Device Image */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop"
                  alt="Technology workspace with multiple screens showing code and data"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
                
                {/* Floating Code Window */}
                <div className="absolute -top-4 -left-4 bg-neutral-900 rounded-lg p-4 shadow-2xl border border-neutral-700 max-w-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs font-mono text-green-400">
                    <div>function buildCareer() {`{`}</div>
                    <div className="ml-2 text-blue-300">learn();</div>
                    <div className="ml-2 text-yellow-300">practice();</div>
                    <div className="ml-2 text-pink-300">succeed();</div>
                    <div>{`}`}</div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">12+</div>
                    <div className="text-xs text-neutral-600">Technologies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary-400/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}