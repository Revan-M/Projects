import react,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../ProductContext'


const ProductCard = (props) => {
    const context = useContext(ProductContext)
    const addToCart = context.productApi.addToCart

    return (
    <div className='col-md-3'>
        <div className='card'>
            <img src={props.thumbnail} alt={props.title} height={200} width={260} className=''/>
            <div className='card-body'>
                <p className='card-title'>{props.title}</p>
                <p className=''>&#8377; {props.price}</p> 
                <details>
                        <summary>Description</summary>
                        <p className='text-dark'>{props.description}</p>
                    </details>  
            </div>     
            <div className="card-footer">
                <NavLink to={`/Product/${props.id}/Category/${props.category}`} className='btn btn-outline-success'>
                    <i className="bi bi-info-circle-fill"></i>
                </NavLink>
                <button className='btn btn-outline-success float-end' onClick={() => addToCart(props)}> 
                    <i className="bi bi-cart"> </i>
                </button>
            </div>
        </div>
    </div>
    )
}
export default ProductCard