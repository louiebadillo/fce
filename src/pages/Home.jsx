import Intro from '../components/Intro'
import FeaturesSection from '../components/FeaturesSection'
import WorkFlow from '../components/WorkFlow'
import Hero from '../components/Hero'
// import Pricing from '../components/Pricing'
// import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Intro/>
      <FeaturesSection />
      <WorkFlow />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
    </div>
  )
}

export default Home