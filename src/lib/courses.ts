export interface Course {
  id: string
  title: string
  description: string
  image: string
  rating: number
  price: number
  category: string
  instructor: string
  enrolledStudents: number
  duration: string
  coursesCount: number
  date: string
  fullDescription: string
  learningOutcomes: string[]
  technologies: string[]
}

export const courses: Course[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Unlock your potential with comprehensive training in modern software development',
    fullDescription: 'Unlock your potential with comprehensive training in modern software development. Become a Full-Stack Web Developer with a single comprehensive course covering HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3, and DApps.',
    image: '/courses/Frame 169187.png',
    rating: 4.0,
    price: 350,
    category: 'Software Engineering',
    instructor: 'John Doe',
    enrolledStudents: 50,
    duration: '12 weeks',
    coursesCount: 4,
    date: '03/2025',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'PostgreSQL', 'Web3', 'DApps'],
    learningOutcomes: [
      'Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.',
      'After the course you will be able to build ANY website you want.',
      'Build fully-fledged websites and web apps for your startup or business.',
      'Master frontend development with React, NextJs, HTML, CSS, Vue and Angular',
      'Master backend development with Node, PHP, Python etc.'
    ]
  },
  {
    id: 'data-science-mastery',
    title: 'Data Science Mastery',
    description: 'Equip yourself with the skills to analyze, interpret, and leverage data.',
    fullDescription: 'Equip yourself with the skills to analyze, interpret, and leverage data, becoming an expert in data science methodologies and tools.',
    image: '/courses/Frame 169196.png',
    rating: 4.0,
    price: 350,
    category: 'Data Science',
    instructor: 'Jane Smith',
    enrolledStudents: 75,
    duration: '14 weeks',
    coursesCount: 5,
    date: '03/2025',
    technologies: ['Python', 'R', 'SQL', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    learningOutcomes: [
      'Master Python for data analysis and machine learning',
      'Build predictive models using advanced algorithms',
      'Create compelling data visualizations and dashboards',
      'Work with big data technologies and cloud platforms',
      'Apply statistical analysis to real-world datasets'
    ]
  },
  {
    id: 'cloud-computing-expertise',
    title: 'Cloud Computing Expertise',
    description: 'Gain hands-on experience in cloud preparing you to manage scalable..',
    fullDescription: 'Gain hands-on experience in cloud architecture, preparing you to manage scalable, secure, and efficient cloud solutions.',
    image: '/courses/Frame 169197.png',
    rating: 4.0,
    price: 350,
    category: 'Cloud Computing',
    instructor: 'Mike Johnson',
    enrolledStudents: 60,
    duration: '10 weeks',
    coursesCount: 3,
    date: '03/2025',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    learningOutcomes: [
      'Design and implement cloud architectures on AWS, Azure, and GCP',
      'Master containerization with Docker and Kubernetes',
      'Implement DevOps practices and CI/CD pipelines',
      'Manage cloud security and compliance requirements',
      'Optimize cloud costs and performance'
    ]
  }
]

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id)
}

export function getRelatedCourses(currentCourseId: string): Course[] {
  return courses.filter(course => course.id !== currentCourseId).slice(0, 2)
}