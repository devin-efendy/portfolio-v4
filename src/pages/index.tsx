import type { NextPage } from 'next'
import { About } from '../components'
import experienceData from '../../data/experience'

export async function getStaticProps() {
  return {
    props: {
      experience: experienceData,
    },
  }
}

const Home: NextPage = () => {
  return (
    <div className='container'>
      <main className='main'>
        <About />
      </main>
    </div>
  )
}

export default Home
