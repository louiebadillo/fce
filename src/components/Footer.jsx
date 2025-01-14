import {
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "../constants";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-700 bg-slate-100">
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-center">
          {" "}
          {/* Added flex container */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 max-w-4xl">
            {" "}
            {/* Added max-width and increased gap */}
            <div>
              {" "}
              {/* Added text-center */}
              <h3 className="text-md font-semibold mb-4">Pages</h3>
              <ul className="space-y-2 text-sm">
                {resourcesLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-orange-500"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                {platformLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-orange-500"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              {" "}
              {/* Added flex and items-center */}
              <img src={logo} alt="logo" className="h-14 w-40 mb-2" />
              <ul className="space-y-2 pt-2 text-sm">
                {communityLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-orange-500"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="text-sm text-orange-500 border border-neutral-400 hover:border-orange-500 hover:text-orange-500 px-4 py-2 rounded-md mt-4 inline-block w-fit"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-slate-400 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8 text-sm">
            <p>2024 Family Care Experts</p>
            <p>|</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
