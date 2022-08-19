import { Box } from '@chakra-ui/react'
import { IProject } from '../../types'
import SectionWrapper from '../layout/SectionWrapper'
import Project from '../molecules/Project'

interface Props {
  projects: Array<IProject>
}

const Projects = ({ projects }: Props) => {
  return (
    <SectionWrapper
      id='projects--section'
      title='Projects'
      emoji='🖥'
      titleColor='red.400'
    >
      {projects.map((project) => (
        <Box key={project.id} mt='15px'>
          <Project {...project} />
        </Box>
      ))}
    </SectionWrapper>
  )
}

export default Projects
