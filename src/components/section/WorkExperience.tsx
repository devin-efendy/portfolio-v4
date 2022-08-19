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
        <Experience key={exp.id} {...exp} />
      ))}
    </SectionWrapper>
  )
}

export default WorkExperience
