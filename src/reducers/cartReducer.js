
let cartReducer = (state, action) => {
    switch (action.type){
        case 'ADD': 
            {
                let product = action.payload
                return {
                    ...state,
                    cart: [...state.cart, product]
                }
            }
        case 'REMOVE': 
                {
                    let updatedCart = state.cart.filter(el => el.product.id !== action.payload.id)
                    return {
                        ...state,
                        cart: [updatedCart]
                    }
                }
        case 'CALCULATE': 
                {
                    let total_price = state.cart.reduce(
                        (total, el) =>  {
                            return total.price += el.price
                        }, {total_price:0})
                    return {
                            ...state,
                            totalPrice:total_price
                        }
            
                }
    }






}