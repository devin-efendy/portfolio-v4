import {
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  theme,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  position: relative;

  ::before,
  .profile-image-decor {
    content: '';
    position: absolute;
    z-index: -1;
  }

  .image-decor-0 {
    border-width: 3px 0 0 3px;
    border-style: solid;
    border-color: ${theme.colors.gray[400]};
    width: 130px;
    height: 130px;
    transform: translate(-30px, -30px);
  }

  ::before {
    border: 3px solid ${theme.colors.gray[400]};
    background: none;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    transform: translate(40px, 40px);
  }

  z-index: 1;
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
          <Flex direction='column' px={8} mb={{ sm: 12, md: 0 }}>
            <motion.div initial={childTextInitial} variants={childVariants}>
              <Heading
                as='h2'
                fontSize={{ base: 48, xl: 58 }}
                mb={5}
                fontWeight='bold'
              >
                <Text
                  display='inline'
                  bgGradient='linear(to-r, #00d4ff, #587fff, #dc00ff)'
                  bgClip='text'
                >
                  Software Developer.
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
              <ImageWrapper id='image-wrapper'>
                <div className='profile-image-decor image-decor-0' />
                <Image
                  alt='Devin Efendy profile image'
                  boxSize={{ sm: '230px', md: '230px', xl: '230px' }}
                  borderRadius='inherit'
                  src='/about-img-sqr.png'
                  // src='/LogoDE512.png'
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
