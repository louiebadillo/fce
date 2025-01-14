import { Link } from 'react-router-dom';
import housekeeping from "../../../assets/housekeeping.jpg";
import HeroSection from "../../../components/HeroSection";

const Housekeeping = () => {
  return (
    <div>
      <div>
      <HeroSection
          backgroundImage={housekeeping}
          title="Housekeeping Services"
          highlightedText=""
          description=""
        />
        <div className="container mx-auto max-w-4xl px-4 py-12">

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Professional Home Care Services</h2>
          <p className="text-gray-600 mb-4">
            Our professional housekeeping services ensure a clean, organized, and safe living 
            environment for our clients. We understand that maintaining a home can become 
            challenging, and our dedicated team is here to provide thorough, reliable cleaning 
            services that promote comfort and well-being.
          </p>
        </section>

        {/* Services Offered Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Cleaning Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Regular Cleaning</h3>
              <p className="text-gray-600">Dusting, vacuuming, mopping, and surface cleaning</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Kitchen Care</h3>
              <p className="text-gray-600">Thorough cleaning of counters, appliances, and 
              floors</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Bathroom Sanitization</h3>
              <p className="text-gray-600">Deep cleaning and sanitizing of bathroom 
              facilities</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Laundry Services</h3>
              <p className="text-gray-600">Washing, drying, folding, and organizing clothes</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Benefits of Professional Housekeeping</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
              <div>
                <h3 className="font-semibold">Healthy Environment</h3>
                <p className="text-gray-600">Regular cleaning reduces allergens and promotes 
                better health</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
              <div>
                <h3 className="font-semibold">Stress Reduction</h3>
                <p className="text-gray-600">Let us handle the cleaning while you focus on what 
                matters</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
              <div>
                <h3 className="font-semibold">Consistent Service</h3>
                <p className="text-gray-600">Regular scheduled cleaning maintains a consistently 
                clean home</p>
              </div>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <div className="bg-orange-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready for a Cleaner Home?</h3>
          <p className="text-gray-600 mb-6">
            Contact us today to schedule your housekeeping services and enjoy the comfort of a 
            clean, well-maintained home.
          </p>
          <div className="space-x-4">
            <Link 
              to="/contact"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/services"
              className="inline-block border border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-50 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Housekeeping;