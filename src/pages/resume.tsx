import type { NextPage } from 'next'
import Head from 'next/head'
import { WorkExperience } from '../components'
import experienceData from '../../data/experience'
import { IExperience } from '../types'
import Education from '../components/section/Education'
import Skills from '../components/section/Skills'
import { Box, Button, Center, Flex, Icon } from '@chakra-ui/react'
import { MdArrowBack } from 'react-icons/md'
import { useRouter } from 'next/router'

interface Props {
  experience: Array<IExperience>
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
  return {
    props: {
      experience: experienceData,
    },
  }
}

const Home: NextPage<Props> = ({ experience }) => {
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
        <ResumeNavigation router={router} />
      </main>
    </Box>
  )
}

export default Home
