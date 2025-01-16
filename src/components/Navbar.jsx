import { Menu, X, ChevronDown } from "lucide-react"; // Added ChevronDown
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import "./Navbar.css";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false); // Added state for resources dropdown

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Filter out the "Contact Us" item from navItems
  const filteredNavItems = navItems.filter(
    (item) => item.label !== "Contact Us"
  );

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img className="h-20 w-50 mr-2" src={logo} alt="logo" />
          </Link>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <Link to="/">Home</Link>
            </li>
            {filteredNavItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
            {/* Resources Dropdown */}
            <li className="relative group">
              <button
                className="flex items-center gap-1"
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                Resources{" "}
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-200 ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* Desktop Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2
                    transform transition-all duration-200 ease-in-out
                    ${
                      resourcesOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <Link
                  to="/resources/cdhci"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 transition-colors duration-150"
                >
                  CDHCI - Alberta Blue Cross
                </Link>
                <Link
                  to="/resources/financial-aid"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 transition-colors duration-150"
                >
                  Financial Aid Resources
                </Link>
                <Link
                  to="/services/staffing"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 transition-colors duration-150"
                >
                  Facility Staffing Solutions
                </Link>
                <Link
                  to="/resources/faq"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 transition-colors duration-150"
                >
                  FAQ
                </Link>
              </div>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center items-center">
            <Link
              to="/contact"
              className="py-2 px-3 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed right-0 z-20 bg-neutral-200 w-full p-12 flex flex-col justify-center items-center lg:hidden
              transform transition-all duration-300 ease-in-out
              ${
                mobileDrawerOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-full pointer-events-none"
              }`}
        >
          <ul>
            <li className="py-4">
              <Link to="/" onClick={toggleNavbar}>
                Home
              </Link>
            </li>
            {filteredNavItems.map((item, index) => (
              <li key={index} className="py-4">
                <Link to={item.href} onClick={toggleNavbar}>
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Mobile Resources Dropdown */}
            <li className="py-4">
              <button
                className="flex items-center gap-1"
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                Resources{" "}
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-200 ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <ul
                className={`pl-4 overflow-hidden transition-all duration-200 ease-in-out
                    ${
                      resourcesOpen
                        ? "max-h-48 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
              >
                <li className="py-2">
                  <Link
                    to="/resources/cdhci"
                    onClick={toggleNavbar}
                    className="text-gray-700 hover:text-orange-600 transition-colors duration-150"
                  >
                    CDHCI - Alberta Blue Cross
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    to="/resources/financial-aid"
                    onClick={toggleNavbar}
                    className="text-gray-700 hover:text-orange-600 transition-colors duration-150"
                  >
                    Financial Aid Resources
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    to="/services/staffing"
                    onClick={toggleNavbar}
                    className="text-gray-700 hover:text-orange-600 transition-colors duration-150"
                  >
                    Facility Staffing Solutions
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    to="/resources/faq"
                    onClick={toggleNavbar}
                    className="text-gray-700 hover:text-orange-600 transition-colors duration-150"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </li>
            <li className="py-4">
              <Link to="/careers" onClick={toggleNavbar}>
                Careers
              </Link>
            </li>
          </ul>
          <div className="mt-6 flex items-center space-y-4">
            <Link
              to="/contact"
              className="py-2 px-3 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300"
              onClick={toggleNavbar}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
