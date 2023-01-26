import { Flex, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

const IconSet = ({
  icons,
  fontSize = 24,
  gap = 6,
  color = 'gray.500',
}: {
  icons: IconType[]
  fontSize?: number
  gap?: number
  color?: string
}) => {
  return (
    <Flex flexWrap='wrap' gap={gap}>
      {icons.map((icon, index) => (
        <Icon key={index} fontSize={fontSize} color={color} as={icon} />
      ))}
    </Flex>
  )
}

export default IconSet
