import { Link } from "react-router-dom";
import palliative from "../../../assets/palliative.jpg";
import HeroSection from "../../../components/HeroSection";

const PalliativeCare = () => {
  return (
    <div>
      <div>
        <HeroSection
          backgroundImage={palliative}
          title="Palliative Care"
          highlightedText=""
          description=""
        />

        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* Overview Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Compassionate End-of-Life Care
            </h2>
            <p className="text-gray-600 mb-4">
              Our palliative care services focus on providing comfort, dignity,
              and quality of life for individuals facing serious illness. We
              work alongside medical professionals to ensure comprehensive care
              that addresses physical comfort, emotional well-being, and
              spiritual needs while supporting both the individual and their
              family members.
            </p>
          </section>

          {/* Services Offered Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Care Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Pain Management</h3>
                <p className="text-gray-600">
                  Monitoring and supporting comfort measures
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Emotional Support and Companionship</h3>
                <p className="text-gray-600">
                  Compassionate care for both patient and family
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Personal Care</h3>
                <p className="text-gray-600">
                  Dignified assistance with daily needs
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Family Support</h3>
                <p className="text-gray-600">
                  Guidance and respite for family caregivers
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Our Palliative Care Approach
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Holistic Care</h3>
                  <p className="text-gray-600">
                    Addressing physical, emotional, and spiritual needs
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Coordinated Support</h3>
                  <p className="text-gray-600">
                    Working alongside healthcare providers
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Family-Centered Care</h3>
                  <p className="text-gray-600">
                    Supporting both patient and family needs
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <div className="bg-orange-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Learn More About Our Care Services
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to discuss how our palliative care services can support
              you and your loved ones during this important time.
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

export default PalliativeCare;
