import React from "react";

function About() {
  return (
    <div>
      {/* Banner */}
      <div
        className="relative w-full h-60 min-h-[15rem] bg-cover bg-center brightness-75 bg-black flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('/images/gallery-02.jpg')" }}
      >
        {/* Gradient overlay animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 animate-pulse-slow"></div>
        <h1 className="relative font-bold text-5xl md:text-7xl text-white animate-fade-down">About</h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-wrap justify-between items-start w-[90%] mx-auto mt-20">
        {/* Text Content */}
        <div className="w-full md:w-[55%] mb-6 animate-fade-right">
          <h2 className="font-bold text-3xl mb-6 text-gray-800">Our Story</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            consequat consequat enim, sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
            lectus a arcu facilisis.sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
            lectus a arcu facilisis.sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
            lectus a arcu facilisis.sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
            lectus a arcu facilisis. non auctor massa ultrices non.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-[40%] h-96 overflow-hidden rounded-xl shadow-lg mb-6 md:mb-0 group animate-fade-left">
          <div
            className="w-full h-full bg-cover bg-center transform transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-2"
            style={{ backgroundImage: "url('/images/gallery-04.jpg')" }}
          ></div>
        </div>
      </div>

      {/* Content Section 2 */}
      <div className="flex flex-wrap justify-between items-start w-[90%] mx-auto mt-24">
        {/* Image Section */}
        <div className="relative w-full md:w-[40%] h-96 overflow-hidden rounded-xl shadow-lg mb-6 md:mb-0 group animate-fade-left">
          <div
            className="w-full h-full bg-cover bg-center transform transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:-rotate-2"
            style={{ backgroundImage: "url('/images/gallery-08.jpg')" }}
          ></div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-[55%] mb-6 animate-fade-right">
          <h2 className="font-bold text-3xl mb-6 text-gray-800">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            consequat consequat enim, non auctor massa ultrices non. ...lorem sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
            lectus a arcu facilisis.sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
            lectus a arcu facilisis.
          </p>
          <p className="text-gray-600 leading-relaxed mt-5 italic text-lg">
            "Creativity is just connecting things. When you ask creative people how they did something, 
            they feel a little guilty because they didn't really do it, they just saw something. 
            It seemed obvious to them after a while." <br />- Steve Jobs
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
