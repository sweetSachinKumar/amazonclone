import React from 'react'
import Logo from './img/logo_am.png'
import {BiSearch} from 'react-icons/bi'
import {MdShoppingBasket} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

const Header = () => {
  const [{basket}] = useStateValue()
  console.log(basket)


  const navOp =  [
    {
      linkTo:"/signin",
      first:"Hello",
      second:"sign in"
    },
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





  return (
    <div className='bg-neutral-800 flex  items-center' >
      {/* logo */}
      <div className='px-3 mx-1  pt-3 mt-1 mb-1  border-2 border-transparent transition duration-300 hover:border-white  '>
        <Link to="/"><img src={Logo} className=' w-[100px]  ' alt="/"  /></Link>
        </div>

      {/* search  */}
      <div className='flex bg-red-300 flex-1 '>
        <input type="text" className=' w-full h-[30px] px-2 flex-1' placeholder='search items.. ' />
        <span className='bg-[#cd9042]  flex items-center justify-center px-1  h-[30px]  '>
        <BiSearch  size={20}/>
        </span>
      </div>


      {/* 3Link */}
        <div className='flex justify-evenly items-center'>
            

            {navOp.map(item =>{
              return (
                <Link to={item.linkTo} className=' ' key={item.first}>
                <div className='flex text-white flex-col py-1 px-2.5  border-2 border-transparent transition duration-300 hover:border-white '>
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
            <div className='flex text-white items-center px-1 py-4 mr-2 border-2 border-transparent transition duration-300 hover:border-white '>
                <i> <MdShoppingBasket size={20}/> </i>
                <span className='text-sm ml-1'> {basket?.length} </span>
            </div>
         </Link>
    </div>
  )
}

export default Header
