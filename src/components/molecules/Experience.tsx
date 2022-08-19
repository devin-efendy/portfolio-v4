import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import { IExperience as ExperienceProps } from '../../types'

const Experience = ({
  id,
  position,
  companyName,
  date,
  description,
  location,
  technologies,
}: ExperienceProps) => {
  return (
    <Box id={id}>
      <Flex fontSize='xl' flexDirection={['column', 'row']}>
        <Text fontWeight='bold'>{position}</Text>
        <Text fontWeight='bold' mx={[0, 2]} display={['none', 'flex']}>
          &middot;
        </Text>
        <Text color='gray.500' fontWeight='semibold'>
          {companyName}
        </Text>
      </Flex>

      <Flex mt={1} flexDirection={['column', 'row']} fontSize='14px'>
        <Text mb={[1, 0]}>🗓 {date}</Text>
        <Text ml={[0, 2]}>📍{location}</Text>
      </Flex>

      <Text as='p' my={6} textAlign='justify'>
        {description}
      </Text>

      <Text as='p' mt={5} fontSize='14px'>
        🔧 {technologies}
      </Text>
      <Divider mt='30px'/>
    </Box>
  )
}

export default Experience
