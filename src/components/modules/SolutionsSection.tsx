'use client'

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Code, Database, Cloud, Palette } from "lucide-react"

interface Solution {
  id: string
  title: string
  description: string
  image: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  isMostPopular?: boolean
}

const solutions: Solution[] = [
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    description: 'Master modern programming languages and frameworks to build scalable applications.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
    icon: Code,
    color: 'from-blue-400 to-blue-600',
    isMostPopular: true
  },
  {
    id: 'cloud-computing', 
    title: 'Cloud Computing',
    description: 'Learn AWS, Azure, and Google Cloud to deploy and manage applications at scale.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop',
    icon: Cloud,
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: 'data-science',
    title: 'Data Science', 
    description: 'Analyze data and build machine learning models to drive business decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
    icon: Database,
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 'uiux',
    title: 'UI/UX',
    description: 'Design beautiful and intuitive user experiences that users love.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop',
    icon: Palette,
    color: 'from-green-400 to-green-600'
  }
]

interface SolutionsSectionProps {
  onViewCourse?: (solutionId: string) => void
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ 
  onViewCourse 
}) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
            Our solutions
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Choose your career path with our comprehensive courses, each packed with real-world skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {solutions.map((solution) => (
            <Card 
              key={solution.id}
              className="group overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
            >
              <div className="relative">
                {/* Course Image with Gradient Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-85`} />
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Most Popular Badge */}
                  {solution.isMostPopular && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="warning" size="sm" className="text-xs">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {solution.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <CardContent className="p-6">
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {solution.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" size="sm">
                        View
                      </Badge>
                      <Badge variant="outline" size="sm">
                        Join
                      </Badge>
                    </div>
                    
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onViewCourse?.(solution.id)}
                      className="text-primary-600 hover:text-primary-700 hover:bg-primary-50 font-medium"
                    >
                      Explore →
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}