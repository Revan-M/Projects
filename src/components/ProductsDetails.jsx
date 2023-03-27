import axios from 'axios'
import React,{useState,useEffect, useContext, useCallback} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ProductContext } from '../ProductContext'

const url = `https://dummyjson.com`

const ProductDetails = (props) => {
    const context = useContext(ProductContext)
    const addToCart = context.productApi.addToCart
    const param= useParams()

    const [details , setDetails] = useState([])

    const ReadDetails = async() => {
        const out = await axios.get(`${url}/products/${param.id}`)
        console.log(out)
        setDetails(out.data)
    }

    const intiValue = useCallback(() => {
        ReadDetails()
    },[])

    useEffect(() => {
        intiValue()
    
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center mt-2 mb-2">
                    <h1 className="display-3 text-success">Product Details</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="card">
                            <div className="card-body">
                            <div className='carousel slide' id='carouselEx' data-bs-ride='carousel'>
                                    <div className='carousel-indicators'>
                                        <button type='button' data-bs-target='#carouselEx' data-bs-slide-to='0' className='active'></button>
                                        <button type='button' data-bs-target='#carouselEx' data-bs-slide-to='1'></button>
                                        <button type='button' data-bs-target='#carouselEx' data-bs-slide-to='2'></button>
                                        <button type='button' data-bs-target='#carouselEx' data-bs-slide-to='3'></button>
                                        <button type='button' data-bs-target='#carouselEx' data-bs-slide-to='4'></button>
                                        <button type='button' data-bs-target='#carouselEx' data-bs-slide-to='5'></button>
                                    </div>

                                    <div className='carousel-inner' style={{height:'300px'}}>
                                                <div className='carousel-item active'>
                                                    <img src={details.thumbnail} className='d-flex' alt='image not found'/>
                                                </div>
                                            
                                            {
                                                details.images && details.images.map((item,index) =>{
                                                    return(
                                                        <div className='carousel-item' key={index} >
                                                        <img src={item} className='d-flex w-100' alt=''/>
                                                    </div>
                                                    )
                                                })
                                            }
                                        
                                        
                                    </div>
                                    <button className='carousel-control-prev' type='button' data-bs-target='#carouselEx' data-bs-slide='prev'>
                                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                                        <span className='visually-hidden'></span>
                                    </button>
                                    <button className='carousel-control-next' type='button' data-bs-target='#carouselEx' data-bs-slide='next'>
                                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                                        <span className='visually-hidden'></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-2 mt-2">
                    <strong className='text-secondary text-info'>{details.category}</strong>
                    <h4 className='text-success'>{details.title}</h4>
                    <div className='mt-2 mb-2'>
                        <h5 className='text-success'>&#8377;{details.price}</h5>
                        <div className='text-warning mt-2'>Discount : {details.discountPerCentage}%
                        
                        </div>
                    </div>
                    <h6 className='text-danger'>Description</h6>
                    <p className='text-secondary text-justify'>{details.description}</p>

                    <div className='mt-2 mb-2'>
                        <p className='float-end'>
                            <strong className='text-primary'>stock</strong>  
                            <span className='text-success'>{details.stock}</span>                          
                        </p>
                    </div>
                    <div className='mt-2 mb-2'>
                        <p className='text-warning'>Rating : <span className='text-success'>{details.rating}</span></p>
                    </div>
                    <p className='text-info'>Brand : <span className='text-dark'>{details.brand}</span></p>
                    <div className='mb-2 mt-2'>
                        <NavLink to={`/products/${details.category}`} className="btn btn-primary">
                            similar Products
                        </NavLink>
                        <button className='btn btn-outline-success float-end' onClick={() => addToCart(props)}> 
                                            Add To Cart
                       </button>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default ProductDetails