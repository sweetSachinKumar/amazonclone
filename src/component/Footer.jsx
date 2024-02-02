import React from 'react'

const Footer = () => {
    // #232F3E
  return (
    <div className='bg-[#232f3e]  text-white mt-24'>
        <div onClick={()=> window.scrollTo(0,0)} className='bg-[#37475A] hover:bg-[#37475A]/80  text-center p-3 text-sm md:text-base '>
            Back to Top
        </div>
        <div className=' py-8 px-4 hidden sm:flex justify-between'>
            <div>
            <h3 className='text-lg font-semibold mb-1'>Get to Know Us</h3>
            <ul className='text-sm font-normal text-gray-100 space-y-1'>
                <li>About Us</li>
                <li>Careers</li>
                <li>Press Releases</li>
                <li>Amazon Science</li>
            </ul>
            </div>


            <div className='hidden lg:block'>
            <h3 className='text-lg font-semibold mb-1'>Connect with Us</h3>
            <ul className='text-sm font-normal text-gray-100 space-y-1'>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
            </div>


            <div>
            <h3 className='text-lg font-semibold mb-1'>Make Money with Us</h3>
            <ul className='text-sm font-normal text-gray-100 space-y-1'>
                <li>Sell on Amazone</li>
                <li>Sell under Amazon Accelerator</li>
                <li>Amazon Global Selling</li>
                <li>Become an Affiliate</li>
            </ul>
            </div>


            <div>
            <h3 className='text-lg font-semibold mb-1'>Let Us Help You</h3>
            <ul className='text-sm font-normal text-gray-100 space-y-1'>
                <li>Your Accoutn</li>
                <li>Careers</li>
                <li>100% Purchase Protection</li>
                <li>Amazon App Download</li>
                <li>help</li>
            </ul>
            </div>


        </div>

        <div className='sm:hidden flex text-sm px-4 py-7'>
            <ul className='flex-1 space-y-3 leading-tight'>
                <li>Your Amazon.in</li>
                <li>Amazon Pay</li>
                <li>Your Recently Viewed Item</li>
                <li>Sell</li>
            </ul>
            <ul className='flex-1 space-y-3 leading-tight'>
                <li>Your Orders</li>
                <li>Amazon App Download</li>
                <li>Return</li>
                <li>Customer Service</li>
            </ul>
        </div>
        <div className='text-[11px] p-5 bg-[#0d141e]'>
            <div className='flex gap-1 justify-center'>
                <span>Conditions of User</span>
                <span>Privacy Notice</span>
                <span>Interest-Based Ads</span>
            </div>
            <p className='text-center mt-2'>@ 1996-2024, Amazon.com, inc. and its affiliates</p>
        </div>
      
    </div>
  )
}

export default Footer
