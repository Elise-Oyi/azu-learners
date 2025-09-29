'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui"
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. 
            The page may have been moved or doesn&apos;t exist.
          </p>
          <div className="space-x-4">
            <Button onClick={() => router.push('/')}>
              Go Home
            </Button>
            <Button 
              variant="outline" 
              onClick={() => router.back()}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}