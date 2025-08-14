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
            At Bonne Haven, we understand that every client is unique.
            That's why we go above and beyond to provide personalized care
            solutions that make life easier for both clients and their families.
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-4xl mt-10 lg:mt-20 tracking-wide">
          Explore Our Home Care Services
        </h2>
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

    </div>
  );
};

export default FeaturesSection;
