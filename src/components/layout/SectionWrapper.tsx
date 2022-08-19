import { Center, Flex, Heading } from '@chakra-ui/react'

interface Props {
  title: string
  titleColor?: string
  children: any
}
const SectionWrapper = ({ title, titleColor, children, ...props }: Props) => {
  return (
    <Center className='work-experience--section' my='50px' mx='30px'>
      <Flex flexDirection='column' width='900px' {...props}>
        <Heading as='h1' px={[3, 5]} mb={5} color={titleColor ?? 'primary'}>
          {title}
        </Heading>
        {children}
      </Flex>
    </Center>
  )
}

export default SectionWrapper
