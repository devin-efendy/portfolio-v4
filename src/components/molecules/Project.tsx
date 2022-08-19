import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import { IProject as ProjectProps } from '../../types'

const Experience = ({
  id,
  projectName,
  description,
  technologies,
}: ProjectProps) => {
  return (
    <Box id={id}>
      <Flex fontSize='xl' flexDirection={['column', 'row']}>
        <Text fontWeight='bold'>{projectName}</Text>
        {/* <Text fontWeight='bold' mx={[0, 2]} display={['none', 'flex']}>
          &middot;
        </Text>
        <Text color='gray.500' fontWeight='semibold'>
          {companyName}
        </Text> */}
      </Flex>

      <Text as='p' my={6} textAlign='justify'>
        {description}
      </Text>

      <Text as='p' mt={5} fontSize='14px'>
        🔧 {technologies}
      </Text>
      <Divider mt='30px' />
    </Box>
  )
}

export default Experience
