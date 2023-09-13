import React from 'react'
import cartImg from './img/amazonCart.jpg'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { getBasketTotal } from './StateProvider'

const Checkout = () => {
    const [{ basket }] = useStateValue()
let totalMoney = getBasketTotal(basket)
    const cartImgs = {
        height: "300px",
        objectFit: "cover",
        width: "100%",
        objectPosition: "center"
    }


console.log(totalMoney)
    return (
        <div className='grid lg:grid-cols-5 overflow-hidden'>
            <div className=' col-span-4'>
                <div>
                    <img src={cartImg} className="object-cover h-[200px] md:h-[300px] w-full object-left" alt="/" />
                </div>

                <div>
                    <h2 className='text-xl my-8 ps-4 font-bold md:text-3xl'>  {basket.length >1 ? "Your shopping items": "Your shopping items is Empty"}   </h2>
                    {
                        basket.map(item => {
                            return <CheckoutProduct item={item} key={item.id} />
                        })
                    }
                </div>
            </div>

            <div className=' lg:grid-cols-1 h-[170px] lg:h-[150px]  flex flex-col   w-full ' >
                <div className='mx-4  bg-white my-7 p-4 rounded-lg'>
                <h2 className='text-xl'>SubTotal({basket.length} {basket.length >1 ? "items": "item"}): <span className='font-bold'>$ {totalMoney} </span></h2>
                <p><input type="checkbox" name="" id="check" /> <label htmlFor="check"> This Order contains a gift</label> </p>
                 <button className='bg-yellow-400/80 px-6 rounded-md py-1 my-3 w-full '>Proceed to checkout</button>
                </div>
            </div>


        </div>
    )
}

export default Checkout
