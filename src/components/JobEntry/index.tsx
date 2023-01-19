import { Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { IJobEntry } from '../../types'
import IconSet from '../IconSet'
import iconCollection from '../TechIcons'

const techIcons = iconCollection as { [key: string]: IconType }

const childVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const JobEntry = ({ job }: { job: IJobEntry }) => {
  const { position, companyName, date, technologies, bullets } = job

  const icons = technologies.map((tech) => techIcons[tech])

  return (
    <motion.div variants={childVariant} transition={{ duration: 0.5 }}>
      <Flex flexDir={{ sm: 'column', md: 'row' }}>
        <Text
          fontWeight='semibold'
          fontSize={{ sm: 20, md: 24 }}
          color='gray.300'
          mr={1}
        >
          {position}
        </Text>
        <Text
          fontWeight='semibold'
          fontSize={{ sm: 18, md: 24 }}
          color='orange.200'
        >
          @ {companyName}
        </Text>
      </Flex>
      <Text mb={6} fontWeight='light' fontSize={14} color='gray.300'>
        {date}
      </Text>
      <IconSet icons={icons} fontSize={32} />
      <UnorderedList spacing={3} mt={6}>
        {bullets.map((bullet: string, index: number) => (
          <ListItem key={`${job.id}-bullet-${index}`}>{bullet}</ListItem>
        ))}
      </UnorderedList>
    </motion.div>
  )
}

export default JobEntry
