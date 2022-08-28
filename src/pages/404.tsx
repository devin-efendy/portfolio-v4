import { Center, Text } from '@chakra-ui/react'
import { NextPage } from 'next'

const PageNotFound: NextPage = () => {
  return (
    <Center height='100vh' fontSize='xl'>
      <Text fontWeight='bold'>404</Text>
      <Text mx={4}>|</Text>
      <Text>Page not found</Text>
    </Center>
  )
}

export default PageNotFound
