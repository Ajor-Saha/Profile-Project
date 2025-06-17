import Hero from '../components/home/Hero'
import Skills from '../components/home/Skills'
import Projects from '../components/home/Projects'
import Experience from '../components/home/Experience'
import Education from '../components/home/Education'
import Contact from '../components/home/Contact'

const Home = () => {
  return (
    <div className='w-full'>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}

export default Home
