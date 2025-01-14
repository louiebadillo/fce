import React from "react";
import cdhciphoto from "../../assets/cdhciphoto.jpg";
import HeroSection from "../../components/HeroSection";

const CDHCI = () => {
  return (
    <div>
      <HeroSection
        backgroundImage={cdhciphoto}
        title="Client Directed Home Care Invoicing"
        titleColor="#EC5800"
        highlightedText=""
        description=""
      />

      <div className="container mx-auto px-4 py-12 pt-0">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* What is Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              What is Client Directed Invoicing?
            </h2>
            <p className="text-gray-600 mb-8">
              Client-Directed Home Care Invoicing is an innovative program
              through Alberta Blue Cross that empowers individuals to take
              control of their home care services. This program offers
              flexibility and autonomy by allowing clients to personally manage
              their care arrangements and financial aspects. Unlike traditional
              care models where funding goes directly to service providers, this
              program puts you in charge of selecting your care providers and
              managing service payments.
            </p>
          </section>

          {/* Eligibility Requirements Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              Eligibility Requirements
            </h2>
            <p className="text-gray-600 mb-4">
              To qualify for Client-Directed Home Care Invoicing, you must meet
              the following criteria:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
              <li>Be a permanent resident of Alberta</li>
              <li>
                Complete and pass an Alberta Health Services assessment for home
                care services
              </li>
              <li>
                Demonstrate ability to manage care plans and provider
                relationships independently
              </li>
              <li>
                Be willing and capable of handling invoice management and
                reimbursement processes
              </li>
              <li>
                Meet specific care requirements as determined by the assessment
              </li>
            </ul>
          </section>

          {/* Benefits Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              Benefits of Client Directed Invoicing
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Benefit Cards */}
              <div className="bg-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  1. Personalized Care Selection
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • Choose care providers that align with your preferences
                  </li>
                  <li>
                    • Build trusted relationships with selected caregivers
                  </li>
                  <li>• Ensure cultural and personal values are respected</li>
                </ul>
              </div>

              <div className="bg-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  2. Enhanced Flexibility
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Create schedules that work for your lifestyle</li>
                  <li>• Adjust services based on changing needs</li>
                  <li>• Customize care plans to your specific requirements</li>
                </ul>
              </div>

              <div className="bg-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  3. Financial Control
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Direct oversight of care expenses</li>
                  <li>• Transparent budget management</li>
                  <li>• Clear understanding of service costs</li>
                </ul>
              </div>

              <div className="bg-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  4. Improved Care Quality
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • Select providers based on experience and compatibility
                  </li>
                  <li>• Maintain consistency in care delivery</li>
                  <li>
                    • Better health outcomes through personalized attention
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Can Help Section */}
          <section className="bg-orange-300 p-8 rounded-lg">
            <h2 className="text-3xl font-semibold mb-6">
              How Family Care Experts Can Help
            </h2>
            <p className="text-gray-600 mb-4">
              At Family Care Experts, we understand that managing home care
              services can be complex. Our dedicated team is here to support you
              through:
            </p>
            <ul className="space-y-2 text-gray-600 mb-8">
              <li>
                • Explaining the Client-Directed Invoicing program in detail
              </li>
              <li>• Assisting with eligibility assessment preparation</li>
              <li>• Providing qualified and experienced care providers</li>
              <li>• Supporting invoice management and documentation</li>
              <li>• Offering guidance on care plan development</li>
              <li>• Ensuring smooth communication between all parties</li>
            </ul>
            <p className="text-gray-600">
              We're committed to making your home care experience as seamless as
              possible. Our experienced team can help you navigate the program
              requirements while ensuring you receive the highest quality care
              that meets your unique needs.
            </p>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <p className="text-gray-600 mb-6">
              Have questions about Client-Directed Home Care Invoicing? Contact
              Family Care Experts today. We're here to help you understand your
              options and make informed decisions about your care needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
            >
              Contact Us Today
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CDHCI;
