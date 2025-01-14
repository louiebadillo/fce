import { Link } from "react-router-dom";
import personalcare from "../../../assets/personalcare.jpg";
import HeroSection from "../../../components/HeroSection";

const PersonalCare = () => {
  return (
    <div>
      <div>
        <HeroSection
          backgroundImage={personalcare}
          title="Personal"
          highlightedText="Care"
          description=""
        />

        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* Overview Section */}
          <section className="mb-12">
            <h1>Personal Care Service</h1>
            <h2 className="text-2xl font-semibold mb-4">
              Comprehensive Personal Care Support
            </h2>
            <p className="text-gray-600 mb-4">
              Our personal care services are designed to support individuals
              with daily activities that may become challenging due to age,
              illness, or disability. We provide compassionate, dignified
              assistance that helps maintain independence while ensuring safety
              and comfort in the familiar environment of your home.
            </p>
          </section>

          {/* Services Offered Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Services We Provide</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Bathing & Hygiene</h3>
                <p className="text-gray-600">
                  Assistance with personal hygiene, including bathing,
                  showering, and grooming
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Dressing Assistance</h3>
                <p className="text-gray-600">
                  Help with dressing and choosing appropriate clothing for the
                  day
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Mobility Support</h3>
                <p className="text-gray-600">
                  Safe assistance with walking, transfers, and positioning
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Toileting & Incontinence</h3>
                <p className="text-gray-600">
                  Dignified assistance with toileting needs and incontinence
                  care
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Meal Support</h3>
                <p className="text-gray-600">
                  Assistance with meal prepation, cooking and activities.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Light Housekeeping</h3>
                <p className="text-gray-600">
                  Light housekeeping services that include tasks such as
                  sweeping and mopping floors, dusting, vacuuming, doing
                  laundry, cleaning surfaces like counters, cupboards, handles,
                  and appliances, as well as bathroom cleaning.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <div className="relative w-screen -ml-[50vw] left-[50%] bg-gradient-to-l from-gray-500 to-white py-12">
            {" "}
            {/* Full-width background */}
            <div className="max-w-4xl mx-auto px-4">
              {" "}
              {/* Centered content */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Benefits of Our Personal Care Services
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                    <div>
                      <h3 className="font-semibold">Maintained Independence</h3>
                      <p className="text-gray-600">
                        Support that helps you continue living independently in
                        your own home
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                    <div>
                      <h3 className="font-semibold">Personalized Care Plans</h3>
                      <p className="text-gray-600">
                        Care tailored to your specific needs and preferences
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                    <div>
                      <h3 className="font-semibold">
                        Professional Caregivers and HCA's
                      </h3>
                      <p className="text-gray-600">
                        Experienced, trained, and compassionate care staff
                      </p>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <section className="mb-12 pt-5">
            <h2 className="text-2xl font-semibold mb-4">
              Why Choose Family Care Experts
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-600">
                <li>
                  ✓ Experienced and thoroughly screened leath care workers
                </li>
                <li>✓ Customized care plans to meet individual needs</li>
                <li>✓ Regular care plan reviews and updates</li>
                <li>✓ 24/7 availability for support</li>
                <li>✓ Continuous communication with family members</li>
              </ul>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-orange-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Learn More?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us today to schedule a free consultation and learn how our
              personal care services can help you or your loved one maintain
              independence and quality of life.
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

export default PersonalCare;
