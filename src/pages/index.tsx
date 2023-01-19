import type { NextPage } from 'next'
import { About, Experience, Projects, Sidebar } from '../components'
import { Box } from '@chakra-ui/react'

import experienceData from '../../data/experience'
import projectsData from '../../data/projects'
import { IJobEntry, IProject } from '../types'

type IndexProps = {
  experience: IJobEntry[]
  projects: IProject[]
}

export async function getStaticProps() {
  return {
    props: {
      experience: experienceData,
      projects: projectsData,
    },
  }
}

const Home: NextPage<IndexProps> = ({ experience, projects }) => {
  return (
    <Box id='body-container' bg='section.bg'>
      <Sidebar sections={['about', 'experience', 'projects']} />
      <main className='main'>
        <Box ml={{ base: '0', xl: '300px' }}>
          <About />
          <Experience experience={experience} />
          {/* <Skills /> */}
          <Projects projects={projects} />
        </Box>
      </main>
    </Box>
  )
}

export default Home
