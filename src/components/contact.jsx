import React from 'react'


function Contact() {
  return (
    <>
    <div id='contact' className='min-h-screen w-full bg-white flex items-center justify-center px-2'>
      <div className='w-full max-w-6xl bg-white flex flex-col items-center justify-center gap-8 py-6'>
        <div className='w-full flex flex-col sm:flex-row items-center sm:items-center justify-between'>
          <h1 className='ml-0 sm:ml-[20px] text-center sm:text-left'><span className='text-2xl sm:text-3xl font-extrabold text-blue-600 drop-shadow-lg'>Code</span>
            <span className='text-2xl sm:text-3xl font-extrabold text-amber-400 drop-shadow-lg'>Share</span>
          </h1>
          <button className='mt-4 sm:mt-0 p-[8px] w-[120px] h-[40px] bg-blue-600 text-white font-medium rounded-[20px] flex items-center justify-center'>Contact Us</button>
        </div>

        <div className='w-full bg-white flex flex-col gap-4'>
          <p className='text-xl sm:text-2xl text-gray-600 ml-0 sm:ml-[20px]'>Get Started</p>
          <div className='w-full sm:w-[50%] bg-white mt-[6px] flex flex-col ml-0 sm:ml-[20px]'>
            <h1 className='text-2xl sm:text-4xl font-bold text-gray-900 drop-shadow-lg'>Get in touch with us.</h1>
            <h1 className='text-2xl sm:text-4xl font-bold text-gray-900 drop-shadow-lg'>We're here to assist you</h1>
          </div>
        </div>

        <div className='w-full bg-white flex flex-col md:flex-row items-center justify-center gap-8'>
          {/*left div*/}
          <div className='w-full md:w-[40%] flex items-center justify-center mb-6 md:mb-0'>
            <img src="https://img.freepik.com/premium-vector/customer-service-girl-talking-guy_118167-12044.jpg?w=740" alt="img" className="w-full max-w-xs sm:max-w-sm md:max-w-full h-48 sm:h-64 md:h-full object-cover rounded-xl" />
          </div>
          {/*right div*/}
          <div className='w-full md:w-[60%] flex items-center justify-center'>
            <form className='w-full max-w-md p-3 bg-white rounded-xl shadow flex flex-col gap-3'>
              <h2 className='text-xl sm:text-2xl font-bold text-blue-800 mb-2 text-center'>Contact Form</h2>
              <input type='text' placeholder='Your Name' className='border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
              <input type='email' placeholder='Your Email' className='border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
              <textarea placeholder='Your Message' rows={3} className='border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
              <button type='submit' className='bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Contact