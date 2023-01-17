import { Box, Center, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const ImageWrapper = styled(Box)`
  background: -webkit-linear-gradient(135deg, #485461 10%, #28313b 40%);
`

const rootVariants = {
  onRender: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const childVariants = {
  onRender: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const childTextInitial = { y: 30, opacity: 0 }

const About = () => {
  return (
    <Center
      id='about'
      p={2}
      flexDir={{ base: 'column', md: 'row' }}
      minH='100vh'
      bg='section.bg'
      color='section.primary'
    >
      <motion.div variants={rootVariants} animate='onRender'>
        <Grid
          p={{ base: 8, md: 0 }}
          templateAreas={{
            base: `"about" "profile-image"`,
            md: `"about profile-image"`,
          }}
          gridTemplateColumns={{ base: '', md: 'fit-content(800px) 286px' }}
          gap={{ base: 12, md: 0 }}
        >
          <Flex direction='column' px={8}>
            <motion.div initial={childTextInitial} variants={childVariants}>
              <Heading
                as='h2'
                fontSize={{ base: 48, xl: 58 }}
                mb={5}
                fontWeight='bold'
              >
                <Text bgGradient='linear(to-l, #dc00ff, #00d4ff)' bgClip='text'>
                  Software Developer
                </Text>
              </Heading>
            </motion.div>
            <motion.div initial={childTextInitial} variants={childVariants}>
              <Text
                mb={8}
                color='blue.100'
                fontWeight='normal'
                fontSize={32}
                letterSpacing='3px'
              >
                DEVIN EFENDY
              </Text>
            </motion.div>

            <motion.div initial={childTextInitial} variants={childVariants}>
              <Text
                as='p'
                fontSize={{ base: 18, xl: 24 }}
                fontWeight='light'
                color='gray.400'
              >
                I build things and solve problems with tech. A recent CS
                graduate with multiple co-ops/internships, working on full-stack
                applications using various technology stacks.
              </Text>
            </motion.div>
          </Flex>

          <Center>
            <motion.div initial={{ opacity: 0 }} variants={childVariants}>
              <ImageWrapper borderRadius='full' p={2}>
                <Image
                  alt='Devin Efendy profile image'
                  boxSize={{ sm: '230px', md: '250px', xl: '270px' }}
                  borderRadius='full'
                  src='/about-img-sqr.png'
                />
              </ImageWrapper>
            </motion.div>
          </Center>
        </Grid>
      </motion.div>
    </Center>
  )
}

export default About
