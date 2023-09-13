import React from 'react'
import Logo from './img/amazon.png'

const Signin = () => {
  return (
    <div className='flex flex-col items-center my-12'>
      {/* logo  */}
      <div>
        <img src={Logo} className='w-44 my-2' alt="" />
      </div>
      <div className='bg-white rounded-md p-9   w-[350px]'>
        <h2 className='text-2xl font-bold mb-4 '>Sign in</h2>
        <div  className='flex flex-col'>
            <div className='flex flex-col'>
                <label htmlFor="email" className='text-sm font-semibold'>E-mail</label>
                <input type="email" name=""  className="border-2 rounded-sm px-2 border-black" id="email" />
            </div>
            <div className='flex flex-col my-2'>
                <label htmlFor="password" className='text-sm font-semibold'>password</label>
                <input type="password" className="border-2 border-black px-2 rounded-sm"   name="" id="password" />
            </div>
            <button className='bg-[#f0c14b] mt-3 mb-4 text-sm py-.5 border-2 rounded-md border-[#a88734]'>sign in</button>
            <p className='text-sm leading-tight font-semibold'>By signin-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
            <button className='border-2 mt-3 text-sm py-0.5 bg-gray-300/40 rounded-md border-gray-800/60'>Create Your Amazon Account</button>
        </div>
      </div>
    </div>
  )
}

export default Signin
