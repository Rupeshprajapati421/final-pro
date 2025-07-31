import React from 'react'

function Product() {
  return (
    <>
    <div id='product' className='h-screen w-full bg-white flex flex-col items-center justify-center gap-8'>

      <div className='h-[8%] w-full 
      flex items-center justify-center'> 
        <h1 className=' font-bold text-[37px] text-red-800'>Here, You can buy product code</h1>
       
      </div>

      {/*upper div*/}
      <div className='h-[40%] w-[95%] bg-white flex items-center justify-center gap-x-9'>
        
         

        <div className='h-[83%] w-[30%] bg-white l shadow-2xl'>
          <h1 className='font-bold text-3xl ml-[12px] mt-[8px] text-gray-900'>Responsive Navbar</h1>
          <p className=' font-medium text-[20px] ml-[14px] mt-[5px] text-gray-800'>Fully Responsive Navbar using Flexbox and Talwind</p>
          <h1 className='font-medium text-[25px] ml-[14px] mt-[15px] text-blue-500'>$ 20</h1>
          <button className='p-[12px] bg-blue-950 w-[120px] rounded-[5px] ml-[24px] mt-[16px] text-white hover:bg-blue-900 transition cursor-pointer '>Buy Code</button>
        </div>

        <div className='h-[83%] w-[30%] bg-white shadow-2xl'>
            <h1 className='font-bold text-3xl ml-[12px] mt-[8px] text-gray-900 '>Login UI Design</h1>
          <p className=' font-medium text-[20px] ml-[14px] mt-[8px] text-gray-800'>Modern animated login form with validation</p>
          <h1 className='font-medium text-[25px] ml-[14px] mt-[20px] text-blue-500'>$ Free</h1>
          <button className='p-[12px] bg-blue-950 w-[120px] rounded-[5px] ml-[24px] mt-[24px] text-white hover:bg-blue-900 transition cursor-pointer'>Buy Code</button>
        </div>

        <div className='h-[83%] w-[30%] bg-white shadow-2xl '>
           <h1 className='font-bold text-3xl ml-[12px] mt-[8px] text-gray-900'>E-Commerce Product Card</h1>
          <p className=' font-medium text-[20px] ml-[14px] mt-[8px] text-gray-800'>Stylish product card with effects and ratting</p>
          <h1 className='font-medium text-[25px] ml-[14px] mt-[20px] text-blue-500'>$ 57</h1>
          <button className='p-[12px] bg-blue-950 w-[120px] rounded-[5px] ml-[24px] mt-[24px] text-white hover:bg-blue-900 transition cursor-pointer'>Buy Code</button>
        </div>

      </div>

      {/*lower div*/}
      <div className='h-[40%] w-[95%] bg-white flex items-center justify-center gap-x-9'>
        
         

        <div className='h-[83%] w-[30%] bg-white l shadow-2xl'>
          <h1 className='font-bold text-3xl ml-[12px] mt-[8px] text-gray-900'>Responsive Navbar</h1>
          <p className=' font-medium text-[20px] ml-[14px] mt-[5px] text-gray-800'>Fully Responsive Navbar using Flexbox and Talwind</p>
          <h1 className='font-medium text-[25px] ml-[14px] mt-[15px] text-blue-500'>$ 20</h1>
          <button className='p-[12px] bg-blue-950 w-[120px] rounded-[5px] ml-[24px] mt-[16px] text-white hover:bg-blue-900 transition cursor-pointer '>Buy Code</button>
        </div>

        <div className='h-[83%] w-[30%] bg-white shadow-2xl'>
            <h1 className='font-bold text-3xl ml-[12px] mt-[8px] text-gray-900 '>Login UI Design</h1>
          <p className=' font-medium text-[20px] ml-[14px] mt-[8px] text-gray-800'>Modern animated login form with validation</p>
          <h1 className='font-medium text-[25px] ml-[14px] mt-[20px] text-blue-500'>$ Free</h1>
          <button className='p-[12px] bg-blue-950 w-[120px] rounded-[5px] ml-[24px] mt-[24px] text-white hover:bg-blue-900 transition cursor-pointer'>Buy Code</button>
        </div>

        <div className='h-[83%] w-[30%] bg-white shadow-2xl '>
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