import { Link } from "react-router-dom";
import dementiacare from "../../../assets/dementiacare.jpg";
import HeroSection from "../../../components/HeroSection";

const DementiaCare = () => {
  return (
    <div>
      <div>
        <HeroSection
          backgroundImage={dementiacare}
          title="Dementia Care"
          highlightedText=""
          description=""
        />
        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* Overview Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Specialized Dementia Support
            </h2>
            <p className="text-gray-600 mb-4">
              Our specialized dementia care services are designed to provide
              comprehensive support for individuals living with various forms of
              dementia. We understand the unique challenges faced by both
              individuals and their families, and our trained health care aids and LPNs are
              equipped to provide compassionate, patient-centered care that
              promotes dignity and quality of life.
            </p>
          </section>

          {/* Services Offered Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Comprehensive Care Services
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Daily Living Support</h3>
                <p className="text-gray-600">
                  Assistance with personal care, meals, daily routines, and medication administration/assistance/reminder
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Companionship</h3>
                <p className="text-gray-600">
                Social interaction and genuine
              companionship to maintain mental health,
              happiness, and overall well-being.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Safety Monitoring</h3>
                <p className="text-gray-600">
                  Around the clock supervision and monitoring
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Family Support</h3>
                <p className="text-gray-600">
                  Education and guidance for family members
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Special Services</h3>
                <p className="text-gray-600">
                  Services include Ostomy care, Oxygen therapy, Foley Catheter care, Basic Wound care and Enteral Tube Feeding
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Our Approach to Dementia Care
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Person-Centered Care/ Holistic Approach</h3>
                  <p className="text-gray-600">
                    Individualized care plans that respect personal history and
                    preferences
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Experienced Care Workers</h3>
                  <p className="text-gray-600">
                    HCAs and LPNs trained in dementia care practices
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Family Collaboration</h3>
                  <p className="text-gray-600">
                    Regular communication and support for family members
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <div className="bg-orange-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Get Specialized Support Today
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to learn how our specialized dementia care services can
              support your loved one's journey while providing peace of mind for
              your family.
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

export default DementiaCare;
