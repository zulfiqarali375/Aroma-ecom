import React from "react";

function About() {
  return (
    <div>
      {/* Banner */}
      <div
        className="w-full h-60 min-h-[15rem] bg-cover bg-center bg-black flex items-center justify-center"
        style={{ backgroundImage: "url('/images/gallery-02.jpg')" }}
      >
        <h1 className="font-bold text-5xl md:text-7xl text-white">About</h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-wrap justify-between items-start w-[90%] mx-auto mt-20">
        {/* Text Content */}
        <div className="w-full md:w-[55%] mb-6">
          <h2 className="font-bold text-3xl mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            consequat consequat enim, non auctor massa ultrices non. Morbi sed
            odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Maecenas varius egestas diam, eu sodales metus
            scelerisque congue. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Maecenas gravida
            justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus
            ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt
            vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
            condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a
            tempor elit. Donec gravida lorem elit, quis condimentum ex semper
            sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
            lectus a arcu facilisis, eu sodales lectus sagittis. Etiam
            pellentesque, magna vel dictum rutrum, neque justo eleifend elit,
            vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
            efficitur, quam velit convallis ipsum, et maximus enim ligula ac
            ligula.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-[40%] h-96 overflow-hidden rounded-xl shadow-lg mb-6 md:mb-0">
          <div
            className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-110"
            style={{ backgroundImage: "url('/images/gallery-04.jpg')" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default About;
