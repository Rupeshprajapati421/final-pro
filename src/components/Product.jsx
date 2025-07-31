import React from 'react'

function Product() {
  return (
    <>
    <div id='product' className='min-h-screen w-full bg-white flex flex-col items-center justify-center gap-8 px-2'>

      <div className='w-full flex items-center justify-center py-4'>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-[37px] text-red-800 text-center'>Here, You can buy product code offer for more</h1>
      </div>

      {/*upper div*/}
      <div className='w-full max-w-6xl bg-white flex flex-col md:flex-row items-center justify-center gap-6 md:gap-x-9'>
        
         

        <div className='w-full md:w-[30%] bg-white shadow-2xl mb-6 md:mb-0 rounded-xl flex flex-col justify-between p-4'>
          <h1 className='font-bold text-3xl ml-[12px] mt-[8px] text-gray-900'>Responsive Navbar</h1>
          <p className=' font-medium text-[20px] ml-[14px] mt-[5px] text-gray-800'>Fully Responsive Navbar using Flexbox and Talwind</p>
          <h1 className='font-medium text-[25px] ml-[14px] mt-[15px] text-blue-500'>$ 20</h1>
          <button className='p-[12px] bg-blue-950 w-[120px] rounded-[5px] ml-[24px] mt-[16px] text-white hover:bg-blue-900 transition cursor-pointer '>Buy Code</button>
        </div>

        <div className='w-full md:w-[30%] bg-white shadow-2xl mb-6 md:mb-0 rounded-xl flex flex-col justify-between p-4'>
            <h1 className='font-bold text-3xl ml-[12px] mt-[8px] text-gray-900 '>Login UI Design</h1>
          <p className=' font-medium text-[20px] ml-[14px] mt-[8px] text-gray-800'>Modern animated login form with validation</p>
          <h1 className='font-medium text-[25px] ml-[14px] mt-[20px] text-blue-500'>$ Free</h1>
          <button className='p-[12px] bg-blue-950 w-[120px] rounded-[5px] ml-[24px] mt-[24px] text-white hover:bg-blue-900 transition cursor-pointer'>Buy Code</button>
        </div>

        <div className='w-full md:w-[30%] bg-white shadow-2xl rounded-xl flex flex-col justify-between p-4'>
           <h1 className='font-bold text-3xl ml-[12px] mt-[8px] text-gray-900'>E-Commerce Product Card</h1>
          <p className=' font-medium text-[20px] ml-[14px] mt-[8px] text-gray-800'>Stylish product card with effects and ratting</p>
          <h1 className='font-medium text-[25px] ml-[14px] mt-[20px] text-blue-500'>$ 57</h1>
          <button className='p-[12px] bg-blue-950 w-[120px] rounded-[5px] ml-[24px] mt-[24px] text-white hover:bg-blue-900 transition cursor-pointer'>Buy Code</button>
        </div>

      </div>

      {/*lower div*/}
      <div className='w-full max-w-6xl bg-white flex flex-col md:flex-row items-center justify-center gap-6 md:gap-x-9 mt-6'>
        
         

        <div className='w-full md:w-[30%] bg-white shadow-2xl mb-6 md:mb-0 rounded-xl flex flex-col justify-between p-4'>
          <h1 className='font-bold text-3xl ml-[12px] mt-[8px] text-gray-900'>Responsive Navbar</h1>
          <p className=' font-medium text-[20px] ml-[14px] mt-[5px] text-gray-800'>Fully Responsive Navbar using Flexbox and Talwind</p>
          <h1 className='font-medium text-[25px] ml-[14px] mt-[15px] text-blue-500'>$ 20</h1>
          <button className='p-[12px] bg-blue-950 w-[120px] rounded-[5px] ml-[24px] mt-[16px] text-white hover:bg-blue-900 transition cursor-pointer '>Buy Code</button>
        </div>

        <div className='w-full md:w-[30%] bg-white shadow-2xl mb-6 md:mb-0 rounded-xl flex flex-col justify-between p-4'>
            <h1 className='font-bold text-3xl ml-[12px] mt-[8px] text-gray-900 '>Login UI Design</h1>
          <p className=' font-medium text-[20px] ml-[14px] mt-[8px] text-gray-800'>Modern animated login form with validation</p>
          <h1 className='font-medium text-[25px] ml-[14px] mt-[20px] text-blue-500'>$ Free</h1>
          <button className='p-[12px] bg-blue-950 w-[120px] rounded-[5px] ml-[24px] mt-[24px] text-white hover:bg-blue-900 transition cursor-pointer'>Buy Code</button>
        </div>

        <div className='w-full md:w-[30%] bg-white shadow-2xl rounded-xl flex flex-col justify-between p-4'>
           <h1 className='font-bold text-3xl ml-[12px] mt-[8px] text-gray-900'>E-Commerce Product Card</h1>
          <p className=' font-medium text-[20px] ml-[14px] mt-[8px] text-gray-800'>Stylish product card with effects and ratting</p>
          <h1 className='font-medium text-[25px] ml-[14px] mt-[20px] text-blue-500'>$ 57</h1>
          <button className='p-[12px] bg-blue-950 w-[120px] rounded-[5px] ml-[24px] mt-[24px] text-white hover:bg-blue-900 transition cursor-pointer'>Buy Code</button>
        </div>

      </div>

    </div>
    <hr className='border-b border-gray-400 w-[70%] mx-auto' />
    </>
  )
}

export default Product