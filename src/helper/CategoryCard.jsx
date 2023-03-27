import react from 'react'
import {NavLink} from 'react-router-dom'

const CategoryCard =(props) => {
    return( 
        <div className='col-md-3'>
            <div className='card m-3'>
                <div className='card-body  text-center m-3'>
                    <NavLink to={`/products/${props.value}`} className="btn text-dark" >{props.value}</NavLink>
                    
                </div>
                
            </div>
        </div>

    )
}
export default CategoryCard