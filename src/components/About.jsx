import React from 'react'
import book from "../assets/icon/book.svg"
import search from "../assets/icon/search.svg"
import chair from "../assets/icon/chair.svg"
function about() {
  return (
    <>
    <div id='about' className="bg-white text-gray-800 h-[950px] w-full" >


      <section className="max-w-7xl mx-auto px-6 py-16 " >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How is work</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {/* Card 1 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-2xl">
            <div className="text-3xl mb-4"><img src={book} alt="" className='h-10 w-10 ml-[40%] border-[1px] rounded-full text-blue-400 bg-blue-400' /></div>
            <h3 className="font-semibold text-lg">Set Your Plan</h3>
            <p className="text-sm text-gray-600 mt-2">
              We always stay organized for what we want to teach people. It always good.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow-2xl">
            <div className="text-3xl mb-4"><img src={search} alt="" className='h-10 w-10 ml-[40%] border-[1px] rounded-full text-yellow-400 bg-yellow-400' /></div>
            <h3 className="font-semibold text-lg">Find Your Course</h3>
            <p className="text-sm text-gray-600 mt-2">
              We always stay organized for what we want to teach people. It always good.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-purple-50 p-6 rounded-xl shadow-2xl">
            <div className="text-3xl mb-4">            <div className="text-3xl mb-4"><img src={chair} alt="" className='h-10 w-10 ml-[40%] border-[1px] rounded-full text-white bg-purple-400' /></div>
            </div>
            <h3 className="font-semibold text-lg">Book Your Seat</h3>
            <p className="text-sm text-gray-600 mt-2">
              We always stay organized for what we want to teach people. It always good.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-pink-50 p-6 rounded-xl shadow-2xl">
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="font-semibold text-lg">Get Certificate</h3>
            <p className="text-sm text-gray-600 mt-2">
              We always stay organized for what we want to teach people. It always good.
            </p>
          </div>
        </div>
      </section>

      {/* --- ACCESS TO EVERYTHING SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Image */}
        <div className="h-[450px] w-[50%] bg-amber-200 relative flex items-center justify-center">
          <img 
            src="src/assets/aboutus.png"
            alt="Girl with tablet"
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Access to everything <br /> for everyone
          </h2>
          <p className="text-gray-600 text-base mb-6">
            Easy secure access to digital learning resources should be the status in the education.
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span> World-class
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span> Flexible
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span> Affordable
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span> Job-relevant
            </div>
          </div>

          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 cursor-pointer">
            Explore
          </button>
        </div>

      </section>
       
    </div>
     <hr className='border-b border-gray-400 w-[70%] mx-auto' />
    </>
    
  );
};



export default about