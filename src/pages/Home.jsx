import Intro from '../components/Intro'
import FeaturesSection from '../components/FeaturesSection'
import WorkFlow from '../components/WorkFlow'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
// import Pricing from '../components/Pricing'
// import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <SEO 
        title="Home"
        description="Bonne Haven provides compassionate, personalized home care services in Calgary. Specializing in senior care, special needs support, companionship, personal care, and more. Trusted care services for families."
        keywords="home care Calgary, senior care, personal care services, companionship care, special needs support, dementia care, respite care, palliative care, home health care Calgary"
      />
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