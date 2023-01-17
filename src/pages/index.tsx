import type { NextPage } from 'next'
import { About, Experience, Projects, Sidebar, Skills } from '../components'
import { Box } from '@chakra-ui/react'

import experienceData from '../../data/experience'
import { IJobEntry } from '../types'

type IndexProps = {
  experience: IJobEntry[]
}

export async function getStaticProps() {
  return {
    props: {
      experience: experienceData,
    },
  }
}

const Home: NextPage<IndexProps> = ({ experience }) => {
  return (
    <Box id='body-container'>
      <Sidebar sections={['about', 'experience', 'skills', 'projects']} />
      <main className='main'>
        <Box ml={{ base: '0', xl: '300px' }}>
          <About />
          <Experience experience={experience} />
          <Skills />
          <Projects />
        </Box>
      </main>
    </Box>
  )
}

export default Home
