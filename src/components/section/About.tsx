import { Box, Center, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'

import styled from 'styled-components'

const GradientText = styled.span`
  background: -webkit-linear-gradient(135deg, #dc00ff 1%, #00d4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ImageWrapper = styled(Box)`
  background: -webkit-linear-gradient(135deg, #485461 10%, #28313b 40%);
`

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
          <Heading
            as='h2'
            fontSize={{ base: 48, xl: 58 }}
            mb={5}
            fontWeight='bold'
          >
            <GradientText>Software Developer</GradientText>
          </Heading>

          <Text
            mb={8}
            color='blue.100'
            fontWeight='normal'
            fontSize={32}
            letterSpacing='3px'
          >
            DEVIN EFENDY
          </Text>

          <Text
            as='p'
            fontSize={{ base: 18, xl: 24 }}
            fontWeight='light'
            color='gray.400'
          >
            I build things and solve problems with tech. A recent CS graduate
            with multiple co-ops/internships, working on full-stack applications
            using various technology stacks.
          </Text>
        </Flex>

        <Center>
          <ImageWrapper borderRadius='full' p={2}>
            <Image
              alt='Devin Efendy profile image'
              boxSize={{ sm: '230px', md: '250px', xl: '270px' }}
              borderRadius='full'
              src='/about-img-sqr.png'
            />
          </ImageWrapper>
        </Center>
      </Grid>
    </Center>
  )
}

export default About
