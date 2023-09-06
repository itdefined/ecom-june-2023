import { createContext, useContext, useEffect, useReducer} from "react"
import cartReducer from "../reducers/cartReducer"
let CartContext = createContext()

let initialState = {
    cart : [],
    totalPrice: 0
}

let CartProvider = ({children}) => {
    let [state, dispatch] = useReducer(cartReducer, initialState)

    let addToCart = (product) => {
        dispatch({type: 'ADD', payload:product})
    }
    let removeFromCart = (id) => {
        dispatch({type: 'REMOVE', payload:id})
    }
    let calcProduct = () => {
        dispatch({type: 'CALCULATE'})
    }

    useEffect(calcProduct, [state.cart]);

    return(
        <CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
        {children}
        </CartContext.Provider>);
    }

const UseCartContext = () => {
    return useContext(CartContext)
  }

export { CartProvider, UseCartContext}
