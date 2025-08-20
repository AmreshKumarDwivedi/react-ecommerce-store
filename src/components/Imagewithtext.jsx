import React from 'react'

function Imagewithtext() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12 bg-[#F9F1E7] w-screen">
      
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
      <div>
        <img
          className="max-w-[400px] w-full h-auto object-cover rounded-lg"
          src="//deyga.in/cdn/shop/files/mobile-banner_1_3a508d1c-01b4-48f6-8512-a979179263bd.png?v=1711714596&width=748"
          alt="Founder"
        />
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center max-w-[500px]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Hi, I’m Arthi Raguram
        </h2>
        <p className="text-gray-800 leading-relaxed mb-6">
          My very own skin is the reason behind the Brand- Deyga. As a teenager,
          I grew up with acne and skin sensitivity. I can never look back to a
          picture without Acne or Filter. I still remember the insecured days.
          Now I am proud that I built my confidence and Deyga together.{" "}
          <span className="font-bold">- Founder</span>
        </p>
        <div>
        <a
          href="#"
          className="px-8 py-3 border-2 border-black rounded-full text-black font-semibold hover:bg-black hover:text-white transition duration-300 inline-block w-auto"
        >
          Know More
        </a>
        </div>
      </div>

    </div>
  )
}

export default Imagewithtext
