import react from 'react'
import {ToastContainer} from "react-toastify"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Menu from './header/Menu'
import Products from './components/Products'
import ProductsDetails from './components/ProductsDetails'
import Cart from './components/Cart'
import Pnf from './Util/Pnf'

    function App() {
     return (
    
    <Router>
      <Menu/>
      <ToastContainer autoClose={4000} position={'top-center'}/>
       <Routes> 
        <Route path={`/`} element={<Home itemPerPage={4}/>}/>
        <Route path={`/Cart`} element={<Cart/>}/>
        <Route path={`/Products/:catName`} element={<Products/>}/>
        <Route path={`/Product/:id/category/:catName`} element={<ProductsDetails/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes> 
    </Router>
    
  
    
  )
}

export default App;
