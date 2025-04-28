import React from 'react'

function About() {
  return (
    <div>
      {/* Banner */}
      <div
        className="w-full h-60 bg-cover bg-center brightness-75 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/gallery-07.jpg')" }}>
        <h1 className="font-bold text-5xl md:text-7xl text-white">About</h1>   
      </div>

      <h1 className='w-[90%] ml-24 mt-10 mb-7 font-bold text-2xl '>Our Story</h1>

    <div className='flex justify-around w-[90%] m-auto'>
    <p className='w-[50%] text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.</p>

        <div className="h-80  brightness-75 bg-cover w-[40%]"
        style={{ backgroundImage: "url('/images/gallery-04.jpg')" }}>
            <div className=' border w-60 absolute h-80 mt-20'></div>
        </div>




    </div>

      

    </div>
  )

}

export default About
