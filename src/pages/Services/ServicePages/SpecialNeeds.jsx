import { Link } from "react-router-dom";
import specialneeds from "../../../assets/specialneeds.jpg";
import HeroSection from "../../../components/HeroSection";

const SpecialNeeds = () => {
  return (
    <div>
      <div>
        <HeroSection
          backgroundImage={specialneeds}
          title="Special Needs Care"
          highlightedText=""
          description=""
        />
        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* Overview Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Specialized Care & Support
            </h2>
            <p className="text-gray-600 mb-4">
              We provide comprehensive support services for individuals with
              special needs, focusing on their unique requirements and
              developmental goals. Our health care and social workers are
              trained to provide nurturing care that promotes growth, learning,
              and independence in a safe and supportive environment.
            </p>
          </section>

          {/* Services Offered Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Care Worker Services for Special Needs
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Companionship</h3>
                <p className="text-gray-600">
                  Care delivered in the home with tasks including light
                  housekeeping, meal preparation, babysitting, etc.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Respite Care</h3>
                <p className="text-gray-600">
                  Care relief if you or your care workers are going away to ensure
                  continued care.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">24/7 Support Care</h3>
                <p className="text-gray-600">
                  Includes monitoring vitals, symptoms when needed.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Social Skills</h3>
                <p className="text-gray-600">
                  Development of communication and social interactions
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Licensed Practical Nurse Care Services
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">
                  Medication Administration
                </h3>
                <p className="text-gray-600">
                  Professional administration of prescribed medications,
                  ensuring proper dosage, timing, and monitoring of potential
                  side effects while maintaining detailed medication records.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Enteral Tube Feeding</h3>
                <p className="text-gray-600">
                  Specialized care for patients requiring tube feeding,
                  including proper administration of nutrients, tube
                  maintenance, and monitoring for complications while ensuring
                  optimal nutrition.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Ostomy Care</h3>
                <p className="text-gray-600">
                  Expert management and maintenance of ostomy sites, including
                  cleaning, changing of appliances, skin care, and prevention of
                  complications while promoting patient comfort and
                  independence.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Oxygen Therapy</h3>
                <p className="text-gray-600">
                  Professional management of oxygen delivery systems, monitoring
                  oxygen levels, ensuring proper equipment function, and
                  educating patients on safe oxygen use while maintaining
                  respiratory comfort.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Glucose Level Monitoring</h3>
                <p className="text-gray-600">
                  Regular blood sugar testing and monitoring, tracking patterns,
                  maintaining detailed records, and coordinating with healthcare
                  providers to ensure optimal diabetes management.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Benefits of Our Special Needs Care
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Individualized Care</h3>
                  <p className="text-gray-600">
                    Care plans tailored to each child's unique needs
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Skill Development</h3>
                  <p className="text-gray-600">
                    Focus on building life skills and independence
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Family Support</h3>
                  <p className="text-gray-600">
                    Guidance and resources for family members
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <div className="bg-orange-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Get Specialized Support
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to learn how our specialized care services can support
              development and well-being.
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

export default SpecialNeeds;
