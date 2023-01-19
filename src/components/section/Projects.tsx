import { Center, Flex, Heading, Text } from '@chakra-ui/react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { IProject } from '../../types'
import ProjectEntry from '../ProjectEntry'

const rootVariant = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const childVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Projects = ({ projects }: { projects: IProject[] }) => {
  const container = useRef(null)

  const controls = useAnimation()
  const isInView = useInView(container, { once: true, margin: '-25%' })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <Center id='projects' minH='100vh' p={8} py={16}>
      <motion.div
        ref={container}
        animate={controls}
        initial='hidden'
        variants={rootVariant}
      >
        <Flex flexDir='column' maxW={{ sm: '100vw', md: '1100px' }} px={8}>
          <motion.div variants={childVariant}>
            <Heading
              as='h2'
              fontSize={{ base: 48, xl: 58 }}
              mb={16}
              fontWeight='bold'
            >
              <Text
                display='inline'
                bgGradient='linear(to-br, #dc00ff, #F6AD55)'
                bgClip='text'
              >
                Projects
              </Text>
            </Heading>
          </motion.div>
          <Flex
            flexWrap='wrap'
            justifyContent='center'
            id='wrap-project'
            gap={6}
          >
            {projects.map((entry) => (
              <motion.div key={entry.id} variants={childVariant}>
                <ProjectEntry entry={entry} {...entry} />
              </motion.div>
            ))}
          </Flex>
        </Flex>
      </motion.div>
    </Center>
  )
}

export default Projects
