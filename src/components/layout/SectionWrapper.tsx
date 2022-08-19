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
    <Center id={id} my='30px' mx='30px'>
      <Flex
        flexDirection='column'
        width='900px'
        px={[3, 5]}
        py='30px'
        {...props}
      >
        <Heading as='h1' color={titleColor ?? 'primary'} mb="30px">
          {title} {emoji}
        </Heading>
        {children}
      </Flex>
    </Center>
  )
}

export default SectionWrapper
