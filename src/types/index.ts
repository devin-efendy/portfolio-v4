export interface IJobEntry {
  id: string
  position: string
  companyName: string
  date: string
  description: string
  bullets: string[]
  location: string
  technologies: string[]
}

export interface IProject {
  id: string
  projectName: string
  description: string
  technologies: string[]
  imageUrl?: string
  demoUrl: string
  githubUrl: string
}

export interface IEducationItem {
  emoji?: string
  category: string
  content: string
}

export interface IEducation {
  university: string
  degree: string
  items: Array<IEducationItem>
}

export interface ISkill {
  category: string
  content: string
}

export interface ITechnicalSkills {
  items: Array<ISkill>
}
