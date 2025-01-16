import { Link } from "react-router-dom";
import staffingImg from "../../../assets/staffing.jpg";
import HeroSection from "../../../components/HeroSection";

const Staffing = () => {
  return (
    <div>
      <div>
        <HeroSection
          backgroundImage={staffingImg}
          title="Staffing Solutions"
          highlightedText=""
          description=""
        />
        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* Overview Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Professional Healthcare Staffing
            </h2>
            <p className="text-gray-600 mb-4">
              Reliable staffing solutions are offered by Family Care Experts to care facilities 
              experiencing staffing shortages. Our trained and caring care providers - including 
              nurses, health care aides and community support workers - are carefully selected 
              to ensure continuity of care and high-quality, person-centred service delivery.
            </p>
          </section>

          {/* Services Offered Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Our Staffing Services
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Nursing Staff</h3>
                <p className="text-gray-600">
                  Qualified nurses for various care settings
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Healthcare Aides</h3>
                <p className="text-gray-600">
                  Experienced aides for direct patient care
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Support Workers</h3>
                <p className="text-gray-600">
                  Community support workers for diverse care needs
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Adaptable staffing solutions for various needs
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Benefits of Our Staffing Solutions
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Quality Care Continuity</h3>
                  <p className="text-gray-600">
                    Maintain high standards of care during staffing transitions
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Vetted Professionals</h3>
                  <p className="text-gray-600">
                    Carefully selected and qualified healthcare providers
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Person-Centered Approach</h3>
                  <p className="text-gray-600">
                    Focus on dignity, respect, and individualized care
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <div className="bg-orange-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Looking for Staffing Solutions?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to learn more about how our staffing solutions can help your facility 
              maintain quality care standards while addressing staffing needs.
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

export default Staffing;