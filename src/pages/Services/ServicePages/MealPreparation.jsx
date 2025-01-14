import { Link } from "react-router-dom";
import mealprep from "../../../assets/mealprep.jpg";
import HeroSection from "../../../components/HeroSection";

const MealPreparation = () => {
  return (
    <div>
      <div>
        <HeroSection
          backgroundImage={mealprep}
          title="Meal Preparation"
          highlightedText=""
          description=""
        />
        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* Overview Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Personalized Meal Services
            </h2>
            <p className="text-gray-600 mb-4">
              Our meal preparation services ensure that you or your loved ones
              enjoy nutritious, delicious meals tailored to specific dietary
              needs and preferences. From grocery shopping to cooking and
              cleanup, we handle everything to make healthy eating effortless
              and enjoyable.
            </p>
          </section>

          {/* Services Offered Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Comprehensive Meal Services
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Meal Planning</h3>
                <p className="text-gray-600">
                  Custom menu planning based on dietary needs and preferences
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Grocery Shopping</h3>
                <p className="text-gray-600">
                  Selection of fresh, quality ingredients
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Meal Preparation</h3>
                <p className="text-gray-600">Cooking fresh, nutritious meals</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Special Diets</h3>
                <p className="text-gray-600">
                  Accommodating dietary restrictions and preferences
                </p>
              </div>
            </div>
          </section>

          {/* Special Diets Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Special Diet Accommodation
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  Diabetic-Friendly Meals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  Low-Sodium Options
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  Gluten-Free Dishes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  Heart-Healthy Choices
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  Vegetarian/Vegan Meals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">•</span>
                  Texture-Modified Foods
                </li>
              </ul>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Benefits of Our Meal Services
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Nutritional Balance</h3>
                  <p className="text-gray-600">
                    Well-balanced meals that meet dietary needs and promote
                    health
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Time-Saving</h3>
                  <p className="text-gray-600">
                    No need to worry about shopping, cooking, or cleanup
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Variety & Flexibility</h3>
                  <p className="text-gray-600">
                    Diverse menu options that can be adjusted to your
                    preferences
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 mt-1 text-orange-500">✓</div>
                <div>
                  <h3 className="font-semibold">Fresh Ingredients</h3>
                  <p className="text-gray-600">
                    Quality ingredients selected for optimal nutrition and taste
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <div className="bg-orange-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Ready for Healthy, Delicious Meals?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us today to learn more about our meal preparation services
              and how we can help you maintain proper nutrition with delicious,
              home-cooked meals.
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

export default MealPreparation;
