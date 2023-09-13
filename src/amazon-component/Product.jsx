import React from 'react'
import {useStateValue} from  './StateProvider'

const Product = (props) => {
    const {id, title, price, image, rating} = props
    const [, dispatch] = useStateValue()




    const Btn = {
           backgroundColor:" #f0c15b",
            border: "1px solid",
            borderColor: "#a88734 #9c7e31 #845a29",
            marginTop:"10px",
            fontSize: "12px"
     
    }

    const addToCart = (id) => {
    
        dispatch({
          type:"ADD_TO_BASKET",
          item:{id, title, price, image, rating}
        })
    }

  return (
    <div className='z-30  m-2.5 w-full h-full'>
    <div className='flex flex-col p-2.5 h-full   items-center border-2  z-20  bg-white w-full' key={id}>

      <div className='  flex flex-col mb-3 justify-around '>
        <p className=" leading-normal mb-2">{title}</p>
        <span>$  <span className='font-bold  '> {price} </span> </span>
        <div>
        {
            Array(rating).fill().map((_,i )=> <span key={i}>&#11088;</span>)
        }
        </div>
 
      </div>
        <div  className=' w-[200px] h-[300px] flex items-center justify-center'>
            <img src={image} className='w-full h-full object-contain' alt="/" />
        </div>
        <div>
        <button style={Btn} onClick={()=> addToCart(id)} >Add to basket</button>
        </div>
    </div>
    </div>
  )
}

export default Product
