'use client'

import * as React from "react"
import Image from "next/image" 
import Link from "next/link"
import { Button } from "@/components/ui/Button"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero/hero1.jpg"
        alt="Professional woman with glasses and backpack representing success in learning"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-400/15" />
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container">
          <div className="max-w-xl ml-8 md:ml-12 lg:ml-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Unlock Your Potential with Industry-Leading Courses!
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              &ldquo;Join thousands of learners gaining real-world skills and advancing their careers. Our expert-led courses are designed to empower you to succeed.&rdquo;
            </p>
            <Button
              asChild
              size="lg"
              variant="primary"
              className="text-base px-8 py-3"
            >
              <Link href="/auth/signup">
                Get started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}