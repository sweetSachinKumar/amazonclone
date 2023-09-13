import React from 'react'
import { useStateValue } from './StateProvider'
import {IoMdRemove, IoMdAdd } from 'react-icons/io'

const CheckoutProduct = ({item}) => {

const [, dispatch] = useStateValue()

    const removeFromCart = (id) => {
        
        dispatch({
            type: "REMOVE_FROM_BASKET",
            item:{id}
        })
     } 
    
     const Btn = {
        backgroundColor:" #f0c15b",
         border: "1px solid",
         borderColor: "#a88734 #9c7e31 #845a29",
        fontSize: "14px"
  
 }
 console.log(item)


  return (
    <div className='flex items-center md:items-start my-3 p-2 space-y-2 sm:space-x-3 flex-col sm:flex-row bg-white '>
    <div>
        <img src={item.image} className='w-[150px] md:w-[150px]' alt="" />
    </div>

    <div>
        <h1>{item.title}</h1>
        <p className='font-bold my-2'> $ {item.price}</p>
        <div>
            {
                Array(item.rating).fill().map((_, i) => <span key={i}>&#11088;</span>)
            }
        </div>

         {/*    <div className='flex  max-w-[400px] mt-5 '>
                <div className='flex  flex-1 justify-center '>
                    <div className='flex border-2 border-gray-400/30 w-[100px]  '>
                    <div className='flex flex-1 items-center justify-center  '>
                        <IoMdRemove/>
                    </div>
                    <div>
                      $  434
                    </div>
                    <div className='flex flex-1 items-center justify-center '>
                        <IoMdAdd/>
                    </div>
                    </div>
                </div>
                 <div className='flex  flex-1 justify-center' >435</div>
            </div>

            */ }

    <div className='my-5 text-center sm:text-left '>
    <button style={Btn} onClick={()=> removeFromCart(item.id)} >Remove from cart</button>
    </div>
    </div>
</div>
  )
}

export default CheckoutProduct
