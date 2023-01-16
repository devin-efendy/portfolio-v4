import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoIosPaper } from 'react-icons/io'
import { useRouter } from 'next/router'
import { useFeatureToggle } from '../../context/featureToggle'
import styled, { keyframes } from 'styled-components'

// source: https://codepen.io/jakejarvis/pen/pBZWZw
const waveHand = keyframes`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }
`

const WaveHandEmoji = styled.span`
  display: inline-block;
  animation ${waveHand} 2.5s linear infinite;
  transform-origin: 70% 70%;
`

const GradientText = styled.span`
  background: -webkit-linear-gradient(135deg, #ea5455 10%, #feb692 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ImageWrapper = styled(Box)`
  background: -webkit-linear-gradient(135deg, #485461 10%, #28313b 40%);
  // background: linear-gradient(135deg, #485461 10%, #28313b 40%);
`

const About = () => {
  const { enableResumePage } = useFeatureToggle()
  const router = useRouter()

  const buttonVariant = 'outline'

  return (
    <Center
      id='about'
      className='profile--section'
      flexDirection={['column', null, null, null, 'row']}
      height='100vh'
      p={['40px', null, null, null, 0]}
    >
      <Flex direction='column' maxWidth='400px'>
        <Heading as='h1' fontWeight='bold' mb={2}>
          Hi <WaveHandEmoji>👋</WaveHandEmoji>, my name is Devin Efendy!
        </Heading>
        <Heading as='h2' fontSize={24} mb={8} fontWeight='bold'>
          <GradientText>Software Developer</GradientText>
        </Heading>

        <Text mb={6} fontWeight='bold' fontSize='xl'>
          I&apos;m currently looking for a Software Developer role!
        </Text>

        <Text as='p'>
          I am very passionate about tech and I like to build things with it. I
          graduated from the University of Manitoba with a Bachelor of Computer
          Science Honors (Co-op). Through multiple co-op terms, I gained
          industry experience in building full-stack web applications using
          various technology stacks. My areas of interest are full-stack web
          development, cloud, and distributed systems. (I&apos;m excited to
          explore other areas too!)
        </Text>
        <Flex gap={4} mt={10} wrap='wrap'>
          <Link
            href='https://github.com/devin-efendy'
            isExternal
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              p={3}
              id='github--button'
              colorScheme='purple'
              variant={buttonVariant}
            >
              <Icon as={FaGithub} w={5} h={5} />
            </Button>
          </Link>
          <Link
            href='https://www.linkedin.com/in/devinefendy/'
            isExternal
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              p={3}
              id='linkedin--button'
              colorScheme='linkedin'
              variant={buttonVariant}
            >
              <Icon as={FaLinkedinIn} w={5} h={5} />
            </Button>
          </Link>
          <Link
            href='mailto:devinefendy.dev@gmail.com'
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              p={3}
              id='contact-me--button'
              colorScheme='yellow'
              variant={buttonVariant}
            >
              <Icon as={MdEmail} w={5} h={5} />
            </Button>
          </Link>
          {enableResumePage && (
            <Button
              id='contact-me--button'
              colorScheme='teal'
              leftIcon={<Icon as={IoIosPaper} w={5} h={5} />}
              onClick={() => router.push('/resume')}
              variant={buttonVariant}
            >
              Resume
            </Button>
          )}
        </Flex>
      </Flex>
      <Center
        display={['none', null, null, null, 'flex']}
        ml={[0, null, null, '3rem', '5rem']}
        mt={['4rem', 0]}
      >
        <ImageWrapper borderRadius='full' padding={2}>
          <Image
            alt='Devin Efendy profile image'
            boxSize='300px'
            borderRadius='full'
            src='/about-img-sqr.png'
          />
        </ImageWrapper>
      </Center>
    </Center>
  )
}

export default About
