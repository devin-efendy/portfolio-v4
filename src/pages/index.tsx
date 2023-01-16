import type { NextPage } from 'next'
import { About, Experience, Projects, Sidebar, Skills } from '../components'
import { Box, Flex } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Flex id='body-container' flexDir='row'>
      <main className='main'>
        <Sidebar sections={['about', 'experience', 'skills', 'projects']} />
        <Box ml='300px'>
          <About />
          <Experience />
          <Skills />
          <Projects />
        </Box>
      </main>
    </Flex>
  )
}

export default Home
