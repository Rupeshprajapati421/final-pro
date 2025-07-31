import React from 'react'


function Contact() {
  return (
    <>
    <div id='contact' className='h-screen w-full bg-white flex items-center justify-center'>
      <div className='h-[100%] w-[85%] bg-white flex flex-col items-center justify-center gap-8'>
      <div className='h-[10%] w-[95%] bg-white flex items-center justify-between'>
        <h1 className='ml-[20px]'><span className='text-3xl font-extrabold text-blue-600 drop-shadow-lg'>Code</span>
               <span className='text-3xl font-extrabold text-amber-400 drop-shadow-lg'>Share</span>
           </h1>
           <button className='p-[8px] w-[120px] h-[40px] bg-blue-600 text-white font-medium rounded-[20px] items-center justify-center'>Contact Us</button>
      </div>

      <div className='h-[25%] w-[95%] bg-white flex flex-col  gap-4'>
       
          <p className='text-2xl text-gray-600 ml-[20px]'>Get Started</p>
          <div className='h-[50%] w-[50%] bg-white mt-[6px] flex flex-col ml-[20px]'>
              <h1 className=' text-4xl font-bold text-gray-900 drop-shadow-lg'>Get in touch with us.</h1>
              <h1 className='text-4xl font-bold text-gray-900 drop-shadow-lg'>We're are here to assist you</h1>
          </div>
      </div>

      <div className='h-[50%] w-[95%] bg-white flex items-center justify-center'>

      {/*left div8*/}
        <div className='h-full w-[40%] bg-white flex items-center justify-center'>
          <img src="src/assets/girl.png" alt="img" className="w-full h-full object-cover rounded-xl" />
        </div>

      {/*right div*/}
          <div className='h-full w-[60%] white flex items-center justify-center shadow-2xs'>
            <form className='w-full p-3  bg-white rounded-xl shadow flex flex-col gap-3 '>
              <h2 className='text-2xl font-bold text-blue-800 mb-2 text-center'>Contact Form</h2>
              <input type='text' placeholder='Your Name' className='border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
              <input type='email' placeholder='Your Email' className='border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
              <textarea placeholder='Your Message' rows={3} className='border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
              <button type='submit' className='bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition '>Send</button>
            </form>
          </div>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default Contact