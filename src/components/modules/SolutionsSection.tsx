'use client'

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/Badge"
// import { Card, CardContent } from "@/components/ui/Card"
import { Calendar } from "lucide-react"

interface Solution {
  id: string
  title: string
  image: string
  price: string
  duration: string
  technologies: string[]
}

const solutions: Solution[] = [
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    image: '/tracks/track1.svg',
    price: '$400',
    duration: '12 weeks',
    technologies: ['Node.js', 'React.js']
  },
  {
    id: 'cloud-computing', 
    title: 'Cloud Computing',
    image: '/tracks/track2.svg',
    price: '$350',
    duration: '12 weeks',
    technologies: ['Azure', 'AWS']
  },
  {
    id: 'data-science',
    title: 'Data Science', 
    image: '/tracks/track3.svg',
    price: '$400',
    duration: '12 weeks',
    technologies: ['PowerBI', 'Python']
  },
  {
    id: 'uiux',
    title: 'UI/UX',
    image: '/tracks/track4.svg',
    price: '$250',
    duration: '8 weeks',
    technologies: ['Figma', 'Sketch']
  }
]

interface SolutionsSectionProps {
  onViewCourse?: (solutionId: string) => void
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
            Our solutions
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Create your account quickly with just your email or social media login, then explore a wide range
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {solutions.map((solution) => (
            <div 
              key={solution.id}
              className="group overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white rounded-3xl"
            >
              {/* Course Illustration */}
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="default" className="bg-white/90 text-neutral-900 font-semibold px-3 py-1 rounded-full">
                    {solution.price}
                  </Badge>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-4">
                  {solution.title}
                </h3>
                
                {/* Duration */}
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-4 h-4 text-neutral-600" />
                  <span className="text-sm text-neutral-600">{solution.duration}</span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {solution.technologies.map((tech, index) => {
                    // Define colors for different technologies
                    const getColorClass = (techName: string) => {
                      const colorMap: Record<string, string> = {
                        'Node.js': 'bg-green-100 text-green-700',
                        'React.js': 'bg-purple-100 text-purple-700',
                        'Azure': 'bg-blue-100 text-blue-700',
                        'AWS': 'bg-orange-100 text-orange-700',
                        'PowerBI': 'bg-pink-100 text-pink-700',
                        'Python': 'bg-blue-100 text-blue-700',
                        'Figma': 'bg-red-100 text-red-700',
                        'Sketch': 'bg-pink-100 text-pink-700'
                      }
                      return colorMap[techName] || 'bg-gray-100 text-gray-700'
                    }

                    return (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        size="sm"
                        className={`${getColorClass(tech)} border-0 hover:opacity-80 rounded-full`}
                      >
                        {tech}
                      </Badge>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}