import type { NextPage } from 'next'
import Head from 'next/head'
import { Education, Projects, Skills, WorkExperience } from '../components'
import { experienceData, projectsData } from '../../data'
import { IExperience, IProject } from '../types'
import { Box, Button, Center, Flex, Icon } from '@chakra-ui/react'
import { MdArrowBack } from 'react-icons/md'
import { useRouter } from 'next/router'
import fetchFeatureToggle from '../utils/fetchFeatureToggle'

interface Props {
  experience: Array<IExperience>
  projects: Array<IProject>
}

const ResumeNavigation = ({ router }: any) => {
  return (
    <Center>
      <Flex width='1100px' px={[3, 5]}>
        <Button
          variant='link'
          leftIcon={<Icon as={MdArrowBack} w={5} h={5} />}
          onClick={() => {
            router.push('/')
          }}
          fontSize='18px'
        >
          Go back
        </Button>
      </Flex>
    </Center>
  )
}

export async function getStaticProps() {
  const { enableResumePage } = fetchFeatureToggle()

  if (enableResumePage) {
    return {
      props: {
        experience: experienceData,
        projects: projectsData,
      },
    }
  } else {
    return {
      notFound: true,
    }
  }
}

const Home: NextPage<Props> = ({ experience, projects }) => {
  const router = useRouter()
  return (
    <Box className='resume--section' py='100px'>
      <Head>
        <title>Resume</title>
        <meta name='description' content='Devin Efendy Resume' />
      </Head>
      <main className='main'>
        <ResumeNavigation router={router} />
        <Education />
        <Skills />
        <WorkExperience experience={experience} />
        <Projects projects={projects} />
        <ResumeNavigation router={router} />
      </main>
    </Box>
  )
}

export default Home
