import { NavLink } from "react-router-dom"
import {UseCartContext} from "contexts/cartContext"


function AddToCart(props) {
    let addToCart = UseCartContext()
    return (
      <NavLink to='/cart/' onClick={()=>addToCart(props.product)}>
        <input type={"button"} className="btn btn-success" value={"Add to Cart"} />
      </NavLink>
    );
  }
  export default AddToCart;
  