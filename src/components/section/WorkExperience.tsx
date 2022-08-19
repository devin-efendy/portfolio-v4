import { Box } from '@chakra-ui/react'
import { IExperience } from '../../types'
import SectionWrapper from '../layout/SectionWrapper'
import Experience from '../molecules/Experience'

interface Props {
  experience: Array<IExperience>
}
const WorkExperience = ({ experience }: Props) => {
  return (
    <SectionWrapper
      id='work-experience--section'
      title='Work Experience'
      emoji='👔'
      titleColor='blue.600'
    >
      {experience.map((exp) => (
        <Box key={exp.id} pb='30px'>
          <Experience {...exp} />
        </Box>
      ))}
    </SectionWrapper>
  )
}

export default WorkExperience
