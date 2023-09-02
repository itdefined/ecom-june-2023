import {NavLink} from "react-router-dom"
function ProductImage(props){
    return(
        <div className='col-md-2 my-2 '>
            <NavLink to={'/electronics'} className="nav-item">
                <div className="shadow rounded pt-2" style={{height:"380px"}}>
                    <img src={props.product.image} 
                    style={{height:"230px"}}
                    alt="..." 
                    className="w-100"
                    />
                    <div className="p-3">
                        <h5 className="text-truncate">{props.product.title}</h5>
                        <p className="text-truncate">{props.product.description}</p>
                        <div className="d-flex justify-content-between">
                            <p className="badge bg-success fs-6">
                                    &#8377; {props.product.price}
                            </p>
                            <p>
                                    2344 Bought this
                            </p>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
  }
  
  export default ProductImage;