import { Link } from "react-router-dom";
import companionship from "../../../assets/companionship.jpg";
import HeroSection from "../../../components/HeroSection";

const Companionship = () => {
  return (
    <div>
      <div>
        <HeroSection
          backgroundImage={companionship}
          title="Companionship Care"
          highlightedText=""
          description=""
        />

        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* Overview Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Meaningful Companionship Support
            </h2>
            <p className="text-gray-600 mb-4">
              Our companionship services focus on creating meaningful
              connections and emotional support for seniors and individuals who
              may feel isolated. We believe that social interaction and genuine
              companionship are essential for maintaining mental health,
              happiness, and overall well-being.
            </p>
          </section>

          {/* Services Offered Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Social Interaction</h3>
                <p className="text-gray-600">
                  Engaging conversations and meaningful activities that
                  stimulate both mind and spirit
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Hobby Support</h3>
                <p className="text-gray-600">
                  Assistance with favorite hobbies and learning new activities
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Community Engagement</h3>
                <p className="text-gray-600">
                  Support in maintaining community connections and social
                  activities
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Emotional Support</h3>
                <p className="text-gray-600">
                  Compassionate listening and meaningful friendship
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Benefits of Companionship Care
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Promotes Social Engagemment</h3>
                  <p className="text-gray-600">
                    Regular social interaction and meaningful connections
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Improved Mental Health</h3>
                  <p className="text-gray-600">
                  Improved mood and a lower risk of emotional imbalance.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Cognitive Stimulation</h3>
                  <p className="text-gray-600">
                    Engaging activities that keep the mind active
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <div className="bg-orange-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Start Your Journey With Us
            </h3>
            <p className="text-gray-600 mb-6">
              Let us help you or your loved one enjoy meaningful companionship
              and support. Contact us today to learn more about our
              companionship services.
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

export default Companionship;
