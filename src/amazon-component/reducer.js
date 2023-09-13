export const initialState = {
    basket:[],
    user:null
}

function reducer(state, action) {
    switch(action.type){
        case "ADD_TO_BASKET":
          let freshItem = action.item
           freshItem.amount = 1
           console.log(state.basket)
            // check if the item is already in the cart
            const newItem = state.basket.find(item => item.id === action.item.id  )
            
            
            if(newItem){
                const cartItem =[...state.basket].map(item => {
                    if(item.id === action.item.id){
                   

                        console.log('alerdy here')
                        return {...item, amount:newItem.amount + 1}
                    }
                    else{
                        return item
                    }
                })
                console.log("cartitem", cartItem)
                return {...state, basket:[cartItem, ...state.basket] }
                
            }else{

                return {...state, basket:[freshItem, ...state.basket] }
            } 

            // return {...state, basket:[action.item , ...state.basket] }
 
        break 
        
        case "REMOVE_FROM_BASKET":
     
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.item.id )
           
            if(index >=0){
                newBasket.splice(index,1)
            }else{
                console.warn('this item is not exitst in our store ')
            }


            return {...state, basket:newBasket}
        break

        default:
            return state
    }
}

export default reducer;
