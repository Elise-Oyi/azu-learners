// User types
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'learner' | 'instructor' | 'admin'
  createdAt: string
  updatedAt: string
}

// Course types
export interface Course {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  thumbnail: string
  price: number
  originalPrice?: number
  currency: string
  duration: string
  level: 'beginner' | 'intermediate' | 'advanced'
  rating: number
  reviewCount: number
  studentCount: number
  instructor: Instructor
  category: Category
  tags: string[]
  skills: string[]
  curriculum: Module[]
  requirements: string[]
  whatYouWillLearn: string[]
  isPublished: boolean
  isFeatured: boolean
  createdAt: string
  updatedAt: string
}

// Instructor types
export interface Instructor {
  id: string
  name: string
  title: string
  bio: string
  avatar: string
  rating: number
  studentCount: number
  courseCount: number
  socialLinks: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

// Category types
export interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  color: string
  courseCount: number
}

// Module and Lesson types
export interface Module {
  id: string
  title: string
  description: string
  duration: string
  lessons: Lesson[]
  isCompleted?: boolean
  completedLessons?: number
}

export interface Lesson {
  id: string
  title: string
  description: string
  type: 'video' | 'text' | 'quiz' | 'assignment'
  duration: string
  videoUrl?: string
  content?: string
  resources: Resource[]
  isCompleted?: boolean
  isLocked?: boolean
}

// Resource types
export interface Resource {
  id: string
  title: string
  type: 'pdf' | 'doc' | 'link' | 'code'
  url: string
  size?: string
}

// Enrollment types
export interface Enrollment {
  id: string
  courseId: string
  userId: string
  course: Course
  progress: number
  completedModules: string[]
  completedLessons: string[]
  currentModule?: string
  currentLesson?: string
  startedAt: string
  completedAt?: string
  certificateUrl?: string
}

// Review types
export interface Review {
  id: string
  courseId: string
  userId: string
  user: Pick<User, 'id' | 'name' | 'avatar'>
  rating: number
  comment: string
  isRecommended: boolean
  createdAt: string
}

// Payment types
export interface Payment {
  id: string
  userId: string
  courseId: string
  amount: number
  currency: string
  status: 'pending' | 'completed' | 'failed' | 'refunded'
  paymentMethod: string
  transactionId?: string
  createdAt: string
}

// Search and Filter types
export interface SearchFilters {
  query?: string
  categories?: string[]
  levels?: string[]
  priceRange?: {
    min: number
    max: number
  }
  duration?: string[]
  rating?: number
  isFree?: boolean
  sortBy?: 'newest' | 'oldest' | 'price_low' | 'price_high' | 'rating' | 'popular'
}

export interface SearchResult {
  courses: Course[]
  total: number
  page: number
  limit: number
  filters: SearchFilters
}

// Dashboard types
export interface DashboardStats {
  totalCourses: number
  completedCourses: number
  inProgressCourses: number
  certificates: number
  totalLearningTime: number
  currentStreak: number
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  errors?: Record<string, string[]>
}

export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

// Form types
export interface LoginForm {
  email: string
  password: string
}

export interface SignupForm {
  name: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
}

export interface ResetPasswordForm {
  email: string
}

export interface NewPasswordForm {
  password: string
  confirmPassword: string
  token: string
}

export interface OTPForm {
  otp: string
}

export interface ProfileForm {
  name: string
  email: string
  avatar?: File
  bio?: string
}

export interface ChangePasswordForm {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

// Component prop types
export interface BaseProps {
  className?: string
  children?: React.ReactNode
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

// Theme types
export type Theme = 'light' | 'dark' | 'system'

// Notification types
export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}