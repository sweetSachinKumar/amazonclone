import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'

const ProductCard = ({id, title, price, rating, image}) => {
  const {cartItems} = useSelector(state => state.cart)

    const dispatch = useDispatch()

    const Btn = {
        backgroundColor:" #f0c15b",
         border: "1px solid",
         borderColor: "#a88734 #9c7e31 #845a29",
         marginTop:"10px",
         fontSize: "12px"
  
 }
 const addToCarthandler = () => {
  const isExist = cartItems.find(item =>item.id === id)
if(isExist){
  console.log(isExist) 
}

  const dataItem = {id, title, price, rating, image, amount:1}
 
dispatch(addToCart(dataItem))
 }
  return (
    <div className='z-30  m-2.5 sm:min-w-min min-w-[43%] w-full h-full'>
    <div className='flex flex-col p-2.5 h-full   items-center border-2  z-20  bg-white w-full' key={id}>

      <div className='  flex flex-col mb-3 justify-around '>
        <p className=" leading-normal mb-2      text-xs sm:text-sm md:text-base">{title}</p>
        <span>&#x20B9;  <span className='font-bold  text-xs sm:text-sm md:text-base '> {price} </span> </span>
        <div>
        {
            Array(rating).fill().map((_,i )=> <span key={i}>&#11088;</span>)
        }
        </div>
 
      </div>
        {/* <div  className=' w-full sm:w-[120px] md:w-[150px] lg:w-[200px] lg:h-[300px]  flex items-center justify-center'>
            <img src={image} className='w-full   object-contain' alt="/" />
        </div> */}
        {/* <div  className=' w-full sm:w-[120px] md:w-[150px] lg:w-[200px] lg:h-[300px]  flex items-center justify-center'> */}
            <img src={image} className='h-full max-w-[80px] sm:w-[120px] md:w-[150px] lg:w-[200px] lg:h-auto object-cover md:object-contain' alt="/" />
        {/* </div> */}
        <div>
        <button style={Btn} className='active:opacity-70' onClick={()=> addToCarthandler({id, title, price, rating, image})} >Add to basket</button>
        </div>
    </div>
    </div>
  )
}

export default ProductCard