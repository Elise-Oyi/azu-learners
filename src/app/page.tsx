import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Azubi Learners Portal
        </h1>
        <p className="text-gray-600 mb-8">
          Your learning journey starts here
        </p>
        <Link 
          href="/courses" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Explore Courses
        </Link>
      </div>
    </div>
  )
}
