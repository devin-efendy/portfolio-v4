import {
  Center,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  css,
} from '@chakra-ui/react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import JobEntry from '../JobEntry'
import { IJobEntry } from '../../types'

const hideOverflowScrollbarCSS = css({
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    '-webkit-appearance': 'none',
    display: 'none',
    height: 0,
  },
  '-webkit-scrollbar': {
    '-webkit-appearance': 'none',
    display: 'none',
    height: 0,
  },
  '-webkit-appearance': 'none',
  '-webkit-overflow-scrolling': 'touch',
  border: '0 none',
})

const rootVariant = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const childVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Experience = ({ experience }: { experience: IJobEntry[] }) => {
  const filteredExperience = experience
  const container = useRef(null)

  const controls = useAnimation()
  const isInView = useInView(container, { once: true, margin: '-25%' })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <Center id='experience' minH='100vh' p={8} py={16}>
      <motion.div
        ref={container}
        animate={controls}
        initial='hidden'
        variants={rootVariant}
      >
        <Flex flexDir='column' maxW={{ sm: '100vw', md: '1000px' }} px={8}>
          <motion.div variants={childVariant}>
            <Heading
              as='h2'
              fontSize={{ base: 48, xl: 58 }}
              mb={16}
              fontWeight='bold'
            >
              <Text
                display='inline'
                bgGradient='linear(to-br,#F6AD55 45%, #F03801)'
                bgClip='text'
              >
                Experience
              </Text>
            </Heading>
          </motion.div>

          <Tabs colorScheme='orange' variant='soft-rounded'>
            <TabList
              maxW={{ base: '100%', md: '100%' }}
              css={hideOverflowScrollbarCSS}
              overflowX='auto'
            >
              {filteredExperience.map((job) => (
                <motion.div key={job.id} variants={childVariant}>
                  <Tab>
                    <Text fontSize={18} whiteSpace='nowrap'>
                      {job.companyName}
                    </Text>
                  </Tab>
                </motion.div>
              ))}
            </TabList>

            <TabPanels>
              {filteredExperience.map((job) => (
                <TabPanel key={job.id} fontWeight='light' color='gray.400'>
                  <Flex flexDir='column' mt={2}>
                    <JobEntry job={job} />
                  </Flex>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Flex>
      </motion.div>
    </Center>
  )
}

export default Experience
