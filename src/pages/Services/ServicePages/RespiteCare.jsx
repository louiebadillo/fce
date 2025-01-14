import { Link } from "react-router-dom";
import respite from "../../../assets/respite.jpg";
import HeroSection from "../../../components/HeroSection";

const RespiteCare = () => {
  return (
    <div>
      <div>
        {/* Hero Section */}
        <HeroSection
          backgroundImage={respite}
          title="Respite Care"
          highlightedText=""
          description=""
        />
        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* Overview Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Supporting Family Caregivers
            </h2>
            <p className="text-gray-600 mb-4">
              Our respite care services provide temporary relief for primary
              caregivers, allowing them to take necessary breaks while ensuring
              their loved ones receive continuous, quality care. We understand
              the demanding nature of caregiving and offer flexible support to
              help maintain the well-being of both caregivers and care
              recipients.
            </p>
          </section>

          {/* Services Offered Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Our Respite Services
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Temporary Care</h3>
                <p className="text-gray-600">
                  Short-term care coverage for planned breaks
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Emergency Support</h3>
                <p className="text-gray-600">
                  Care coverage for unexpected situations
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Overnight Care</h3>
                <p className="text-gray-600">
                  24-hour supervision and support when needed
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Regular Relief</h3>
                <p className="text-gray-600">
                  Scheduled respite for ongoing support
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Benefits of Respite Care
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Caregiver Relief</h3>
                  <p className="text-gray-600">Time for rest and self-care</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Continuous Care</h3>
                  <p className="text-gray-600">
                    Uninterrupted support for care recipients
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Flexible Options</h3>
                  <p className="text-gray-600">
                    Care available when you need it most
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <div className="bg-orange-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Need a Break?</h3>
            <p className="text-gray-600 mb-6">
              Contact us to learn how our respite care services can support you
              and your loved ones while you take a well-deserved break.
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

export default RespiteCare;
