// src/pages/Services/ServicePages/Babysitting.jsx
import { Link } from "react-router-dom";
import babysitting from "../../../assets/babysitting.jpg";
import HeroSection from "../../../components/HeroSection";

const Babysitting = () => {
  return (
    <div>
      <div>
        <HeroSection
          backgroundImage={babysitting}
          title="Babysitting and Nanny"
          highlightedText="Services"
          description=""
        />

        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* Overview Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Professional Childcare Services
            </h2>
            <p className="text-gray-600 mb-4">
              Our professional babysitting and nanny services provide reliable,
              engaging, and nurturing care for children of all ages. Our
              experienced caregivers are thoroughly screened and trained to
              ensure your children receive the highest quality care in a safe,
              stimulating environment.
            </p>
          </section>

          {/* Services Offered Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Our Childcare Services
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Regular Childcare</h3>
                <p className="text-gray-600">
                  Consistent, scheduled care for ongoing needs
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Occasional Sitting</h3>
                <p className="text-gray-600">
                  Flexible care for date nights or events
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Educational Support</h3>
                <p className="text-gray-600">
                  Homework help and learning activities
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Activity Planning</h3>
                <p className="text-gray-600">
                  Age-appropriate games and activities
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Why Choose Our Childcare Services
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Screened Caregivers</h3>
                  <p className="text-gray-600">
                    Thoroughly vetted and trained professionals
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Engaging Activities</h3>
                  <p className="text-gray-600">
                    Age-appropriate entertainment and learning
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Flexible Scheduling</h3>
                  <p className="text-gray-600">
                    Care available when you need it
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <div className="bg-orange-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Looking for Quality Childcare?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us today to learn more about our babysitting and nanny
              services and how we can support your family's childcare needs.
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

export default Babysitting;
