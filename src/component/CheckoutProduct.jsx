import React from 'react'
import {IoMdAdd, IoMdRemove} from "react-icons/io"
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/slices/cartSlice'





const decrementAmount = {
        
}
const increaseAmount = {

}


const CheckoutProduct = ({item}) => {
const dispatch = useDispatch()
    const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id))

    }

    const Btn = {
        backgroundColor:" #f0c15b",
         border: "1px solid",
         borderColor: "#a88734 #9c7e31 #845a29",
        fontSize: "14px"
  
 }
 console.log(item)
  return (
    <>
    <div className='flex items-center md:items-start my-3 p-2 space-y-2 sm:space-x-3  bg-white '>
    <div className='w-4/12 sm:w-auto '>
        <img src={item.image} className='w-full sm:w-[150px]' alt="" />

    </div>

    <div className='w-8/12 sm:w-auto'>
        <h1>{item.title}</h1>
        <div className='my-3'>
            {
                Array(item.rating).fill().map((_, i) => <span key={i}>&#11088;</span>)
            }
        </div> 
<div className='h-[36px] text-sm flex'>


<div className='flex items-center font-semibold flex-1 justify-around text-neutral-500 '>$ {item.price}</div>

{/* item final price  */}
<div className='flex items-center font-bold text-blue-950 flex-1 justify-around'>$ {item.price * item.amount}</div>
</div>

      
        
    

    <div className='my-5 text-center sm:text-left '>
    <button style={Btn} onClick={()=> removeFromCartHandler(item.id)} >Remove from cart</button>
    </div>
    </div>
</div>

</>

  )
}


export default CheckoutProduct
