import type { NextPage } from 'next'
import { About, Experience, Projects, Sidebar, Skills } from '../components'
import { Box } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Box id='body-container'>
      <Sidebar sections={['about', 'experience', 'skills', 'projects']} />
      <main className='main'>
        <Box ml={{ base: '0', xl: '300px' }}>
          <About />
          <Experience />
          <Skills />
          <Projects />
        </Box>
      </main>
    </Box>
  )
}

export default Home
