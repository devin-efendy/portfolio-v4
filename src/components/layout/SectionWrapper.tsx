import { Center, Flex, Heading } from '@chakra-ui/react'

interface Props {
  id: string
  title: string
  titleColor?: string
  children: any
  emoji?: string
}
const SectionWrapper = ({
  title,
  titleColor,
  children,
  emoji,
  id,
  ...props
}: Props) => {
  return (
    <Center id={id} my='50px' mx='30px'>
      <Flex flexDirection='column' width='900px' {...props}>
        <Heading as='h1' px={[3, 5]} mb={5} color={titleColor ?? 'primary'}>
          {title} {emoji}
        </Heading>
        {children}
      </Flex>
    </Center>
  )
}

export default SectionWrapper
