import { Box, Flex, Text } from '@chakra-ui/react'
import SectionWrapper from '../layout/SectionWrapper'

interface IEducationItem {
  category: string
  content: string
}

const SkillCategory = ({ category, content }: IEducationItem) => {
  return (
    <Flex flexDirection='column' my={1}>
      <Text fontSize='lg' fontWeight='bold' mb={2}>
        {category}:{' '}
      </Text>
      {content}
    </Flex>
  )
}

const Skills = () => {
  return (
    <SectionWrapper
      id='technical-skills--section'
      title='Technical Skills'
      emoji='👨‍💻'
      titleColor='purple.500'
    >
      <Flex flexDirection='column' gap={3}>
        <SkillCategory
          category='Languages'
          content='JavaScript, TypeScript, Java, Python, C, C#, HTML, CSS, MySQL, PostgreSQL'
        />
        <SkillCategory
          category='Frameworks'
          content='React, Node.js, GraphQL, Express, Next.js, Remix, .NET/Core'
        />
        <SkillCategory
          category='Developer Tools'
          content='Git, GitLab, Docker, AWS (Amplify, S3), Azure DevOps, Storybook, Okta, Jira, Unix'
        />
      </Flex>
    </SectionWrapper>
  )
}

export default Skills
