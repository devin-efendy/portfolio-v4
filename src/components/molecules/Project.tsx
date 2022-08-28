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
