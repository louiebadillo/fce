// HeroSection.jsx
const HeroSection = ({
  backgroundImage,
  title,
  highlightedText,
  description,
  opacity = 0.65,
  brightness = 0.9,
  descriptionColor = "text-gray-200",
}) => {
  return (
    <div className="relative w-full pb-10">
      {" "}
      {/* Wrapper with padding for shadow */}
      <div
        className="relative w-full"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 90%, 65% 90%, 50% 100%, 35% 90%, 0 90%)",
          filter: "drop-shadow(0 12px 10px rgb(0 0 0 / 0.25))", // Changed to filter for shadow
        }}
      >
        <div className="h-[400px] w-full flex items-center justify-center">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: `brightness(${brightness})`,
            }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-white"
              style={{ opacity: opacity }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-2xl sm:text-6xl lg:text-7xl font-bold tracking-wide mb-6">
              {/* Regular title text */}
              <span
                className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500
      drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
      "
              >
                {title}
              </span>

              {/* Highlighted text with dramatic effect */}
              <span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400
      drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
      "
              >
                {highlightedText}
              </span>
            </h1>

            <p
              className={`mt-6 text-lg text-center ${descriptionColor} max-w-3xl mx-auto`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
