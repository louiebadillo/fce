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
      
      {/* Land Acknowledgement */}
      <div className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Land Acknowledgement</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            In the spirit of respect, reciprocity and truth, we honour and acknowledge Moh'kinsstis, and the traditional Treaty 7 territory and oral practices of the Blackfoot confederacy: Siksika, Kainai, Piikani, Stoney Nakoda Nations: Chiniki, Bearspaw, Goodstoney and Tsuut'ina Nation. We acknowledge that this territory is home to the Otipemisiwak Métis Government of the Métis Nation, Calgary Nose Hill Métis District and Calgary Elbow Métis District. Finally, we acknowledge all Nations – Indigenous and non – who live, work and play on this land, and who honour and celebrate this territory.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home