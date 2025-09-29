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
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/auth/signup')
  }

  const handleViewCourse = (solutionId: string) => {
    router.push(`/courses/${solutionId}`)
  }

  return (
    <Layout>
      <Hero />
      <SolutionsSection onViewCourse={handleViewCourse} />
      <SkillsSection onGetStarted={handleGetStarted} />
      <StatsSection />
      <CTASection onGetStarted={handleGetStarted} />
      <JourneySection />
    </Layout>
  )
}
