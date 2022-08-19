import { Box, Flex, Text } from '@chakra-ui/react'
import SectionWrapper from '../layout/SectionWrapper'

interface IEducationItem {
  emoji: string
  category: string
  content: string
}

const EducationItem = ({ emoji, category, content }: IEducationItem) => {
  return (
    <Flex flexDirection='column' my={1}>
      <Text fontSize='lg' fontWeight='bold' mb={2}>
        {emoji} {category}:{' '}
      </Text>
      {content}
    </Flex>
  )
}

const Education = () => {
  return (
    <SectionWrapper
      id='education--section'
      title='Education'
      emoji='🎓'
      titleColor='teal.500'
    >
      <Box px={[3, 5]} py='30px'>
        <Text fontSize='2xl' fontWeight='bold'>
          Bachelor of Computer Science Honours (Co-op)
        </Text>

        <Flex
          fontSize='xl'
          flexDirection={['column', 'row']}
          textAlign='justify'
        >
          <Text color='gray.500' fontWeight='semibold'>
            University of Manitoba
          </Text>
          <Text fontWeight='bold' mx={[0, 2]} display={['none', 'flex']}>
            &middot;
          </Text>
          <Text color='gray.500' fontWeight='semibold'>
            Expected Graduation December 2022
          </Text>
        </Flex>

        <Flex flexDirection='column' mt={5} gap={3}>
          <EducationItem emoji='📈' category='GPA' content='4.11 / 4.5' />
          <EducationItem
            emoji='🏆'
            category='Awards'
            content="3x Dean's Honours List, 2x International Undergraduate
            Student Scholarship"
          />
          <EducationItem
            emoji='📚'
            category='Coursework'
            content='Distributed Computing, Human‐Computer Interaction, Software Engineering, Object-Oriented Design, Data Compression, Data Mining, Machine Learning, Data Structures and Algorithms, Project Management'
          />
          <EducationItem
            emoji='👨‍🏫'
            category='Teaching Assitant'
            content='Programming Practices'
          />
          <EducationItem
            emoji='✍️'
            category='Grader'
            content='Introduction to Computer Science 2, Operating Systems'
          />
        </Flex>
      </Box>
    </SectionWrapper>
  )
}

export default Education
