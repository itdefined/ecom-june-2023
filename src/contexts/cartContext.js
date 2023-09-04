import { createContext, useContext, useEffect, useReducer} from "react"
let CartContext = createContext()

let initialState = {
    cart : [],
    totalPrice: 0
}


let CartProvider = (children) => {
    let [state, dispatch] = useReducer(cartReducer, initialState)

    let addToCart = (product) => {
        dispatch({type: 'ADD', payload:product})
    }
    let removeFromCart = (product) => {
        dispatch({type: 'REMOVE', payload:product})
    }
    let calcProduct = () => {
        dispatch({type: 'CALCULATE'})
    }

    useEffect(calcProduct, [state.cart]);

    return(
        <CartContext.Provider value={{...state, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>);
    }

let UseCartContext = () => useContext(CartContext)



export { CartProvider, UseCartContext}
