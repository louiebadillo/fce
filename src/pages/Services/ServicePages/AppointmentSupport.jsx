import { Link } from "react-router-dom";
import appointment from "../../../assets/appointment.jpg";
import HeroSection from "../../../components/HeroSection";

const AppointmentSupport = () => {
  return (
    <div>
      <div>
        <HeroSection
          backgroundImage={appointment}
          title="Appointment and Outing Support"
          highlightedText=""
          description=""
        />
        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* Overview Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Assistance & Companionship
            </h2>
            <p className="text-gray-600 mb-4">
              Our appointment and outing support services provide safe,
              comfortable, and reliable assistance for medical appointments,
              social activities, and community engagements. We offer
              companionship and assistance to ensure a smooth and enjoyable
              experience throughout the outing.
            </p>
          </section>

          {/* Services Offered Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Our Support Services
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Medical Appointments</h3>
                <p className="text-gray-600">
                  Assistance during healthcare visits
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Social Activities</h3>
                <p className="text-gray-600">
                  Support for community events and social gatherings
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Shopping Assistance</h3>
                <p className="text-gray-600">
                  Help with grocery shopping and errands
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Recreational Outings</h3>
                <p className="text-gray-600">
                  Support for leisure activities and entertainment
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Benefits of Our Support Services
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Medication Reminder</h3>
                  <p className="text-gray-600">
                    Safe and timely medication reminder and monitoring
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Personal Assistance</h3>
                  <p className="text-gray-600">
                    Support throughout the entire outing
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Peace of Mind</h3>
                  <p className="text-gray-600">
                    Professional support for worry-free outings
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <div className="bg-orange-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Need Outing/Appointment Support?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to learn more about our appointment and outing support
              services and how we can help you maintain an active lifestyle.
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

export default AppointmentSupport;
