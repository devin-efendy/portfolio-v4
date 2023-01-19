import { Flex, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

const IconSet = ({
  icons,
  fontSize = 24,
  gap = 6,
}: {
  icons: IconType[]
  fontSize?: number
  gap?: number
}) => {
  return (
    <Flex flexWrap='wrap' gap={gap}>
      {icons.map((icon, index) => (
        <Icon key={index} fontSize={fontSize} color='gray.500' as={icon} />
      ))}
    </Flex>
  )
}

export default IconSet
