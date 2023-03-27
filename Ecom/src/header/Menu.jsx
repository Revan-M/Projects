import react, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../ProductContext'


const Menu = () => {
    const context = useContext(ProductContext)
    const [cart,setCart] = context.productApi.cart
    
    return(
        <nav className='navbar navbar-expand-md navbar-warning bg-warning'>
            <div className='container'>
                <NavLink className='navbar-brand'>E-SHOP</NavLink>

                    <button className='navbar-toggler 'type='button' data-bs-target='#nav' data-bs-toggle='collapse'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse justify-content-between' id="nav">
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to={`/`}className='btn'>Home</NavLink>
                        </li>
                    </ul>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to={`/cart`}className='btn'>Cart
                                <span className="badge text-bg-dark ms-2">
                                    {cart.length > 0 ? cart.length : 0}
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                    </div>


            </div>
            
        </nav>

    )
}
export default Menu