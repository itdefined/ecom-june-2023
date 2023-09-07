
let cartReducer = (state, action) => {
    switch (action.type){
        case 'ADD': 
            {
                let product = action.payload
                return {
                    ...state, cart: [...state.cart, product]
                }
            }
        case 'REMOVE': 
                {  let  updatedCart = state.cart.filter(el => 
                            el && el.id !== action.payload)
                    return {
                        ...state, 
                        cart: [...updatedCart]
                    }
                }
        case 'CALCULATE': 
                {
                    let {total_price} = state.cart.reduce(
                        (total, el) =>  {
                            total.total_price += el.price
                            return total
                        }, {total_price:0})
                    return {
                            ...state, total_price
                          }
            
                }
        default:
                return state
    }
}


export default cartReducer;