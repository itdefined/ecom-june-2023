import { useState, useEffect } from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import AddToCart from '../components/AddToCart'

function ProductDetail() {
    let {product_id} = useParams()
    let products_url_api =`https://fakestoreapi.com/products/${product_id}/`
    let [product, setProduct] = useState(null)

    useEffect( () => {
        axios.get(products_url_api).then((res) => setProduct(res.data))
    }, []);

    if (!product) return null;

    return (
        <div className="container">
            <div className="row mt-5 ">
                <div className="col-md-12 shadow">
                    <div className="row p-3">
                     <div className="col-md-4 rounded">
                        <img src={product.image} 
                        alt="..." 
                        className="w-100"
                        />
                    </div>
                     <div className="col-md-8">
                        <h4>{product.title}</h4>    
                        <p className="text-warning"><i class="fa fa-star" aria-hidden="true"></i> 
                            {product.rating.rate} {product.rating.count} 
                         </p>
                         <h5>{product.price} </h5>
                         <p>
                         {product.description}
                         </p>

                         <AddToCart product={product}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  export default ProductDetail;
  