import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CategoryCard from '../helper/CategoryCard'
import ProductCard from '../helper/ProductCard'



const url ='https://dummyjson.com'

const Products = () => {
    const [product,setProduct] = useState([])
    const Params = useParams()

           const ReadProducts = async() => {
            const out =await axios.get(`${url}/products/category/${Params.catName}`)
            setProduct(out.data.products)
           }
           useEffect(() => {
            ReadProducts()
           
           },[])

    return(
        <div className='container'>
            <div className='row m-3'>
                <div className='col-md-12 text-center'>
                    <h1 className='text-dark'>products</h1>
                </div>
            </div>
            <div className='row'>
                {product && product.map((item,index) => {
                    return <ProductCard key={item} {...item}/>
                })}
            </div>
        </div>

    )
}
export default Products