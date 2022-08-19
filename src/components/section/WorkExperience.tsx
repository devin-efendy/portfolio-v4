import { IExperience } from '../../types'
import SectionWrapper from '../layout/SectionWrapper'
import Experience from '../molecules/Experience'

interface Props {
  experience: Array<IExperience>
}
const WorkExperience = ({ experience }: Props) => {
  return (
    <SectionWrapper title='Work Experience 👔' titleColor='blue.600'>
      {experience.map((exp) => (
        <Experience key={exp.id} {...exp} />
      ))}
    </SectionWrapper>
  )
}

export default WorkExperience
