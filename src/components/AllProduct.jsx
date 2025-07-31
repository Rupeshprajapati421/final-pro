import React from 'react'
import img from "../assets/icon/signin.svg"

function AllProduct() {
    return (
      <div className="flex min-h-screen bg-[#3a5c69] items-center justify-center px-4">
      <div className="flex w-[70%] bg-white rounded-2xl shadow-lg overflow-hidden">

       {/* left side */}
        <div className="w-[45%] bg-[#1F485B] text-white flex flex-col flex-col justify-center items-center justify-evenly ">
          <div className='h-[30%] w-[80%] mt-[15px] mr-auto'>
           <h1 className='ml-[20px]'><span className='text-3xl font-extrabold text-blue-600 drop-shadow-lg'>Code</span>
               <span className='text-3xl font-extrabold text-amber-400 drop-shadow-lg'>Share</span>
           </h1>
           <p className='text-4xl font-medium text-gray-400 mt-[10px] ml-[30px]'>Enlight Your Future</p>
           </div>
           <div className=' w-full h-full object-cover  origin-bottom rotate-9.25'>
               <img src={img} alt="" />
           </div>
          
        </div>

        {/* Right side - Form */}
        <div className="w-[70%] p-10 rounded-3xl">
          <div className='h-[100%] w-[90%]  ml-[20px] '>
          <div className="text-right text-sm text-gray-500 mb-4">English (UK)</div>
          <h2 className="text-2xl font-bold mb-6">Create Account</h2>

          {/* Social buttons */}
          <div className="flex gap-4 mb-4">
            <button className="flex items-center justify-center border px-4 py-2 w-full rounded-md text-sm text-gray-700 cursor-pointer">
              <img src="https://img.icons8.com/color/16/google-logo.png" alt="Google" className="mr-2" />
              Sign up with Google
            </button>
            <button className="flex items-center justify-center border px-4 py-2 w-full rounded-md text-sm text-gray-700 cursor-pointer">
              <img src="https://img.icons8.com/ios-filled/16/facebook--v1.png" alt="Facebook" className="mr-2" />
              Sign up with Facebook
            </button>
          </div>

          <div className="text-center  text-gray-400 mb-4">— OR —</div>

          
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none pr-10"
              />
              <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
                
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#20444f] text-white py-2 rounded-md hover:bg-[#1a3740] transition cursor-pointer">
            
              Create Account
            </button>
          </form>

          <p className="text-sm text-center text-gray-500 mt-4">
            Already have an account?{' '}
            <a href="#" className="text-blue-600 font-medium">
              Log In
            </a>
          </p>
          </div>
        </div>
      </div>
    </div>

        
    )
}

export default AllProduct