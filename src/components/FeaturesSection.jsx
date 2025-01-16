// FeaturesSection.jsx
import { Link } from "react-router-dom";
import { features } from "../constants";

const FeaturesSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[900px]">
      <div className="text-center">
        <h2 className="text-2xl sm:text-4xl lg:text-4xl mt-10 lg:mt-20 tracking-wide">
          Bringing Professional Care Home in Alberta
        </h2>

        <div className="max-w-3xl mx-auto mt-10 mb-16 px-4">
          <p className="text-neutral-600 text-lg mb-6">
            Serving families across Calgary and nearby communities with
            compassionate, reliable home care services that you can trust.
          </p>
          <p className="text-neutral-600 text-lg">
            At Family Care Experts, we understand that every client is unique.
            That's why we go above and beyond to provide personalized care
            solutions that make life easier for both clients and their families.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-10 mb-10 lg:mt-20 gap-6 px-4 sm:px-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <Link
              to={feature.path}
              className="flex group hover:bg-gray-50 rounded-lg p-4 transition-colors border border-gray-200 hover:border-orange-200 min-h-[250px]" // Changed to min-height
            >
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-300 text-orange-700 justify-center items-center rounded-full group-hover:bg-orange-100 transition-colors">
                {feature.icon}
              </div>
              <div className="flex flex-col">
                <h5 className="mt-1 mb-4 text-xl group-hover:text-orange-500 transition-colors">
                  {feature.text}
                </h5>
                <p className="text-md text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* New Staffing Solutions Section */}
      <div className="bg-orange-50 py-16 px-4 sm:px-20 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              Healthcare Facility Staffing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting care facilities with reliable, qualified healthcare
              professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left side: Main content */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-orange-600">
                Professional Staffing Services
              </h3>
              <p className="text-gray-600 mb-6">
                Reliable staffing solutions for care facilities experiencing
                shortages. Our carefully selected healthcare professionals
                ensure continuity of high-quality, person-centred care.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-orange-500">✓</span>
                  <span>Registered Nurses</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500">✓</span>
                  <span>Healthcare Aides</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500">✓</span>
                  <span>Community Support Workers</span>
                </li>
              </ul>
              <Link
                to="/services/staffing-solutions"
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
              >
                Learn More About Staffing Solutions
              </Link>
            </div>

            {/* Right side: Benefits */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-orange-600">
                Why Choose Our Staffing Solutions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Quality Assurance</h4>
                  <p className="text-gray-600">
                    Rigorous screening and continuous training of all healthcare
                    professionals
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Flexible Scheduling</h4>
                  <p className="text-gray-600">
                    Adaptable staffing solutions to meet your facility's unique
                    needs
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Reliable Support</h4>
                  <p className="text-gray-600">
                    Consistent, dependable care delivery to maintain high
                    standards
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-block border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-md hover:bg-orange-500 hover:text-white transition-colors mx-2"
            >
              Contact Us
            </Link>
            <a
              href="tel:14036303717"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors mx-2"
            >
              Call (403) 630-3717
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;