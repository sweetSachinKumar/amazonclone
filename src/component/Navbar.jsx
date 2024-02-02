import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BiSearch} from "react-icons/bi"
import {MdShoppingBasket} from "react-icons/md"
import Logo from "./img/logo_am.png"
import { useSelector } from 'react-redux'

const Navbar = () => {
    const basket = useSelector(state => state.cart.cartItems)

    const navOp =  [ 
        {
          linkTo:"/",
          first:"Return",
          second:"& Order"
        },
        {
          linkTo:"/",
          first:"Your",
          second:"Prime"
        },
      ]

      const [isActive, setIsActive] = useState(false)
      window.addEventListener('scroll', ()=> {
        window.scrollY > 120 ? setIsActive(true): setIsActive(false)
      })
    
  return (
    <>
    <div className='bg-neutral-800 '>
     <div className='flex  items-center justify-between ' >
      {/* logo */}
      <div className='px-3 mx-1  pt-3 mt-1 mb-1  border-2 border-transparent transition duration-300 sm:hover:border-white  '>
        <Link to="/"><img src={Logo} className='w-[66px] sm:w-[100px]  ' alt="/"  /></Link>
        </div>
        <div className='flex items-center flex-1 justify-end'>

      {/* search  */}
      <div className='hidden sm:flex bg-red-300 flex-1 '>
        <input type="text" className=' w-full h-[30px] px-2 flex-1' placeholder='search items.. ' />
        <span className='bg-[#cd9042]  flex items-center justify-center px-1  h-[30px]  '>
        <BiSearch  size={20}/>
        </span>
      </div>


      {/* 3Link */}
        <div className='flex justify-evenly items-center'>
            
        <Link to="/signin" key="/signin">
                <div className='flex text-white flex-col py-1 px-2.5  border-2 border-transparent transition duration-300 sm:hover:border-white '>
                    <span className='sm:text-xs text-[8px]'>Hello</span>
                    <span className='sm:text-sm font-bold text-[10px]'>sign in </span>
                </div>
            </Link>
            {navOp.map(item =>{
              return (
                <Link to={item.linkTo} key={item.first}>
                <div className='sm:flex hidden text-white flex-col py-1 px-2.5  border-2 border-transparent transition duration-300 hover:border-white '>
                    <span className='sm:text-xs text-[8px]'>{item.first}</span>
                    <span className='sm:text-sm font-bold text-[10px]'>{item.second} </span>
                </div>
            </Link>
              )
            } )
             
            }

            
            
        </div>

      {/* cart */}
        <Link to="/checkout"> 
            <div className='flex text-white items-center px-1 py-4 mr-2 border-2 border-transparent transition duration-300 sm:hover:border-white '>
                <i> <MdShoppingBasket size={20}/> </i>
                <span className='text-sm ml-1'> {basket?.length} </span>
            </div>
         </Link>
        </div>
    </div>

    
      {/* search  */}
      <div className='sm:hidden pb-3 w-11/12 mx-auto  flex flex-1 '>
        <input type="text" className=' w-full h-[30px] px-2 flex-1  rounded-tl-md rounded-bl-md' placeholder='search items.. ' />
        <span className='bg-[#cd9042]  flex items-center justify-center px-1  h-[30px]   rounded-tr-md rounded-br-md'>
        <BiSearch  size={20}/>
        </span>
      </div>

    </div>

    <div className={`mt-2 sm:hidden bg-neutral-800 fixed ${!isActive? "-top-16" : "-top-2 duration-300"} left-0 right-0  z-[2323] transition-all `}>
    <div className='flex  items-center justify-between ' >
      {/* logo */}
      <div className='px-3 mx-1  pt-3 mt-1 mb-1  border-2 border-transparent transition duration-300 sm:hover:border-white  '>
        <Link to="/"><img src={Logo} className='w-[66px] sm:w-[100px]  ' alt="/"  /></Link>
        </div>
        

      {/* search  */}
      <div className='flex flex-1 '>
        <input type="text" className='rounded-bl-md rounded-tl-md w-full h-[30px] px-2 flex-1' placeholder='search items.. ' />
        <span className='bg-[#cd9042]  flex items-center justify-center px-1 rounded-tr-md rounded-br-md  h-[30px]  '>
        <BiSearch  size={20}/>
        </span>
      </div>

   {/* cart */}
   <Link to="/checkout"> 
            <div className='flex text-white items-center px-1 py-4 mr-2 border-2 border-transparent transition duration-300 sm:hover:border-white '>
                <i> <MdShoppingBasket size={20}/> </i>
                <span className='text-sm ml-1'> {basket?.length} </span>
            </div>
         </Link>

      </div>
    </div>


    </>
  )
}

export default Navbar

