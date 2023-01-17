import { Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { IJobEntry } from '../types'

const childVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const JobEntry = ({ job }: { job: IJobEntry }) => {
  return (
    <motion.div variants={childVariant} transition={{ duration: 0.5 }}>
      <Flex flexDir={{ sm: 'column', md: 'row' }}>
        <Text
          fontWeight='semibold'
          fontSize={{ sm: 20, md: 24 }}
          color='gray.300'
          mr={1}
        >
          {job.position}
        </Text>
        <Text
          fontWeight='semibold'
          fontSize={{ sm: 18, md: 24 }}
          color='orange.200'
        >
          @ {job.companyName}
        </Text>
      </Flex>
      <Text mb={6} fontWeight='light' fontSize={14} color='gray.300'>
        {job.date}
      </Text>
      <UnorderedList spacing={3}>
        {job.bullets.map((bullet: string, index: number) => (
          <ListItem key={`${job.id}-bullet-${index}`}>{bullet}</ListItem>
        ))}
      </UnorderedList>
    </motion.div>
  )
}

export default JobEntry
