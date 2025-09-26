import * as React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

interface LayoutProps {
  children: React.ReactNode
  user?: {
    id: string
    name: string
    email: string
    avatar?: string
  }
  showHeader?: boolean
  showFooter?: boolean
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  user,
  showHeader = true,
  showFooter = true
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <Header user={user} />}
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  )
}