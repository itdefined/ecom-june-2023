import {UseCartContext} from '../contexts/cartContext.js';
let CartItem = (props) => {
    const { removeFromCart} = UseCartContext();
    return (
            <div className="row mb-3 border py-3">
                    <div className="col-md-1">
                        <img src={props.cartedItem.image} className="w-100" alt={props.cartedItem.title}/>
                    </div>
                    <div className="col-md-6">
                        <h5>{props.cartedItem.title}</h5>
                        <p>{props.cartedItem.description}</p>
                    </div>
                    <div className="col-md-1 h6">{props.cartedItem.price}</div>
                    <div className="col-md-1"><i className="fa fa-trash"  onClick={() => removeFromCart(props.cartedItem.id)}></i></div>
            </div>)
    }

export default CartItem;