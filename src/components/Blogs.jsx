import React from 'react';

function Blogs() {
  return (
    <div className="w-full py-4 flex items-center justify-center ">
      <div className="w-[92%] flex flex-col  md:flex-row justify-between items-start gap-4 md:gap-10 mt-16 ">

        {/* Blog Card 1 */}
        <div
          className="w-full group relative  hover:bg-indigo-50 transition  duration-300 md:flex-1 h-60  bg-cover border-t-indigo-300 bg-center rounded-md p-4 text-black border cursor-pointer  blog-style"
          style={{ backgroundImage: "url('/images/banner-05.png')"}}
        >
          <h3 className="text-3xl font-extrabold mb-2 ">Man</h3>
          <p className="text-md">Spring 2025</p>

          <button className="mt-24 text-lg font-semibold hidden group-hover:block text-black relative group/button transition duration-300">
          Shop Now
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-black transition-all duration-300 group-hover/button:w-full"></span>
          </button>

        </div>

        {/* Blog Card 2 */}
        <div
          className="w-full group relative  hover:bg-indigo-50  transition  duration-300 md:flex-1 h-60  bg-cover border-t-indigo-300 bg-center rounded-md p-4 text-black border cursor-pointer  blog-style"
          style={{ backgroundImage: "url('/images/banner-04.png')"}}
        >
          <h3 className="text-3xl font-extrabold mb-2 ">Woman</h3>
          <p className="text-md">Spring 2025</p>
          <button className="mt-24 text-lg font-semibold hidden group-hover:block text-black relative group/button transition duration-300">
          Shop Now
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-black transition-all duration-300 group-hover/button:w-full"></span>
          </button>
        </div>

      {/* Blog Card 3 */}
      <div
          className="w-full group relative  hover:bg-indigo-50 transition  duration-300 md:flex-1 h-60  bg-cover border-t-indigo-300 bg-center rounded-md p-4 text-black border cursor-pointer  blog-style"
          style={{ backgroundImage: "url('/images/banner-03.png')"}}
        >
          <h3 className="text-3xl font-extrabold mb-2 ">Accessories</h3>
          <p className="text-md">New Trand</p>
          <button className="mt-24 text-lg font-semibold hidden group-hover:block text-black relative group/button transition duration-300">
          Shop Now
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-black transition-all duration-300 group-hover/button:w-full"></span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Blogs;