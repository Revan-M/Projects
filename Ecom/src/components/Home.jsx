import react,{useContext,useState,setItemOffset} from 'react'
import {ProductContext} from '../ProductContext'
import CategoryCard from '../helper/CategoryCard'
import ProductCard from '../helper/ProductCard'
import ReactPaginate from 'react-paginate'


const Home = (props) => {
    const context = useContext(ProductContext)
    const [category] = context.categoryApi.category || []
    const [products] = context.productApi.product.value || []


    const [itemOffset, setItemOffSet] = useState(0)

         const endOffset= itemOffset + props.itemPerPage
         const CurrentOffset = products.slice(itemOffset,endOffset)
         const pageCount= Math.ceil(products.length / props.itemPerPage) 
                  
         const HandleClick = (event) =>{
             let newOffset = (event.selected * props.itemPerPage) % products.length
             setItemOffSet(newOffset)
         }

    return(
        <div className='container'>
            {
                category.length === 0 ? (
                    <div className='row'>
                <div className='col-md-12 text-center'>
                    <h1 className='text-secondary display-5'>Categories Not Found</h1>
                </div>
                </div>
                ):(
                    <di className="col-md-12 text-center">
                        <div className="display-5 text-success">Categories</div>
                    </di>
                )
            }


            <div className='row'>
                {category.map((item,index) => {
                         return <CategoryCard key={index} value={item}/>
                })}
            </div>

            <div className='row'>
                {
                    products.length === 0 ?(
                        <div className='col-md-12'>
                            <div className="row text-center">
                        
                                  <h5 className="text-secondary display-5">Products Not Found</h5>
                        
                            </div>
                        </div>
                    ):(
                        <div className="col-md-12 text-center">
                            <h5 className="display text-success">Featured Products</h5>
                        </div>
                    )
                }
            </div>
            
            <div className='row'>
                 {CurrentOffset && CurrentOffset.map((item,index) =>{
                    return <ProductCard key={item} {...item}/>
                })} 
            </div>

            <div className='row'>
                <ReactPaginate
                pageCount={pageCount}
                className={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                activeClassName={'active'}
                activeLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                onPageChange={HandleClick}
                />
                

            </div>
            

            </div>
            
            
            
                  )       

    
}
export default Home