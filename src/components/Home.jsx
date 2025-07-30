import React from 'react'
import play from "../assets/icon/play.svg"

export default function Home() {
  return (
    <div id="home" className='h-screen w-full bg-white flex items-center justify-center mt-[50px]' >
      


  <div class="w-[76%] h-[95%] bg-white mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-16">
    
    
    <div class="flex-1  h-full w-full flex items-center justify-center justify-evenly flex-col">
      <h1 class="text-4xl md:text-[60px] font-bold text-gray-900 leading-tight">
        A New Way of 
        <span class="text-black relative inline-block">
          Digital Literacy
          <span class="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 -z-10 rounded-full"></span>
        </span>
      </h1>

      <p class="text-gray-600 mt-4 text-lg font-semibold max-w-md">
        A solution for easy and flexible online learning. You can study anywhere through this platform.
      </p>

      <div class="flex items-center mt-6 gap-4 mr-">
        <button class="bg-blue-500 text-white p-[12px] w-[150px] rounded-[20px] font-semibold hover:bg-blue-600">
          Get Started
        </button>
        <button class="bg-yellow-400 text-white p-3 rounded-full hover:bg-yellow-500 border-0">
          <img src={play} alt="" className='h-5 w-5' />
        </button>
      </div>

      
      <div class="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-700">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
          Experienced mentor
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
          Quality Videos
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
          Affordable prices
        </div>
      </div>
    </div>

    
    <div class="flex-1 h-full w-full bg-cover relative">
      <img src="src/assets/boy.png" alt="Girl with books" class="absolute inset-0 w-full h-full object-cover" />
    </div>

  </div>



    </div>
      
  )
}
