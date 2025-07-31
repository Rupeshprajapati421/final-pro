import React from 'react'
import play from "../assets/icon/play.svg"
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div id="home" className='min-h-screen w-full bg-white flex flex-col md:flex-row items-center justify-center md:mt-[50px] mt-0 px-2' >
      


  <div className="w-full max-w-6xl h-auto bg-white mx-auto px-2 md:px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10 py-8 md:py-16">
    
    
    <div className="flex-1 w-full flex items-center justify-center flex-col text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-[60px] font-bold text-gray-900 leading-tight">
        A New Way of 
        <span className="text-black relative inline-block">
          Digital Literacy
          <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 -z-10 rounded-full"></span>
        </span>
      </h1>

      <p className="text-gray-600 mt-4 text-base md:text-lg font-semibold max-w-md mx-auto md:mx-0">
        A solution for easy and flexible online learning. You can study anywhere through this platform.
      </p>

      <div className="flex flex-col sm:flex-row items-center mt-6 gap-4 md:mr-0">
         <Link to="/allproduct"><button className="bg-blue-500 group text-white p-[12px] w-[150px] rounded-[20px] font-semibold hover:bg-blue-900 cursor-pointer ">
         
         Get Started </button></Link>
        
        <button className="bg-yellow-400 text-white p-3 rounded-full hover:bg-yellow-500 border-0">
          <img src={play} alt="" className='h-5 w-5' />
        </button>
      </div>

      
      <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-gray-700 justify-center md:justify-start">
        <div className="flex items-center gap-2">
          <span className="C"></span>
          Experienced mentor
          <span className='git push -u origin master' >hello</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
          Quality Videos
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
          Affordable prices
        </div>
      </div>
    </div>

    
    <div className="flex-1 w-full min-h-[400px] md:min-h-[400px] bg-cover relative flex items-center justify-center mt-8 md:mt-0">
      <img src="https://img.freepik.com/free-vector/boy-using-laptop-computer-distance-learning-online_1308-67075.jpg?t=st=1753980293~exp=1753983893~hmac=d56f598b5be4174aa9b5408279b19876ef645e2b12d371547cb1af25f458e630&w=740" alt="Girl with books" className="absolute inset-0 w-full h-full object-cover rounded-xl shadow" />
    </div>

  </div>


    </div>
  <hr className='border-b border-gray-400 w-[70%] mx-auto' />
      </>
  )
}
