import { Link } from "react-router-dom";
import seniorwithchild_no_bg from "../assets/seniorwithchild_no_bg.png";

const Hero = () => {
  return (
    <div className="relative w-full bg-orange-50 min-h-[550px] overflow-hidden">
      {/* Content Container */}
      <div className="max-w-[1600px] mx-auto relative z-10 h-[550px]">
        {/* Text container - Adjusted top positioning */}
        <div className="absolute top-[10%] md:top-[10%] left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-32 lg:left-40 w-full px-4 md:px-0 md:w-auto md:max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-gray-800">Home is Where </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
              Care Begins
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-[90%] md:max-w-[79%]">
            Personalized home care solutions that empower independence and
            enhance quality of life, right where you want to be.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors inline-block"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="border border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-100 transition-colors inline-block"
            >
              Services
            </Link>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full hidden md:block">
        <img
          src={seniorwithchild_no_bg}
          alt="Hero Background"
          className="object-contain object-bottom h-full w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
