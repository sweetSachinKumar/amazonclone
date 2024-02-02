import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload.id)

            if(cartItem){
                
                console.log("item is already exist")
            //     const newCart = [...state.cartItems].map(item => {
            //         if(item.id === action.payload.id){
            //             return {...item, amount: cartItem.amount + 1}
            //         } else{
            //             item
            //         }
            //     })
            //  return   state.cartItems = newCart
            } else{

                state.cartItems.unshift(action.payload)
            }
            
            

        },
     
        removeFromCart : (state, action) => {
            console.log(action.payload)
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)

        }
    }
})


export const {addToCart, incrementItem, removeFromCart} = cartSlice.actions

export default cartSlice.reducer