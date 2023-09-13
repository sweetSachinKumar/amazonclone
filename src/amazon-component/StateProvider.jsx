// setup data layer 

import { createContext, useContext, useReducer } from "react";

// this is data layer 
export const StateContext = createContext()

export const getBasketTotal = (basket) => basket.reduce((amount, item) => item.price + amount, 0 ) 

// build a provider 
export const StateProvider = ({children, reducer, initialState})=> (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
)

// just call function useStateValue and use it 
export const useStateValue = () => useContext(StateContext)

