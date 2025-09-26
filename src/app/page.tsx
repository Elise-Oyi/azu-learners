'use client'

import { Layout } from "@/components/layout"
import { 
  Hero, 
  SolutionsSection, 
  SkillsSection, 
  StatsSection, 
  CTASection, 
  JourneySection 
} from "@/components/modules"

export default function Home() {
  const handleGetStarted = () => {
    // Navigate to signup or courses
    console.log('Get started clicked')
  }

  const handleViewCourse = (solutionId: string) => {
    // Navigate to specific course
    console.log('View course:', solutionId)
  }

  return (
    <Layout>
      <Hero />
      <SolutionsSection onViewCourse={handleViewCourse} />
      <SkillsSection onGetStarted={handleGetStarted} />
      <StatsSection />
      <JourneySection />
      <CTASection onGetStarted={handleGetStarted} />
    </Layout>
  )
}
