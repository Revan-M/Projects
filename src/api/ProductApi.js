import React,{ useState,useMemo,useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const url ='https://dummyjson.com'

const ProductApi = () => {
    const [data, setData] = useState([])
     const [products, setProducts] = useState([])
     const [cart, setCart] = useState([])

    // Calculation of Cart
    const [subTotal,setSubTotal] = useState(0)
    const [discount,setDiscount] = useState(0)
    const [dc,setDc] = useState(5)
    const [gst,setGst] = useState(5)

    const ReadProduct = async() => {
    const out = await axios.get(`${url}/products`)
     setData(out.data.products)

    }

    const IntValue = useMemo(() => (
        
    {value: [data,setData]}

     ))

    useEffect(() => {
        ReadProduct()
    
    },[])
    //add product to cart
    const addToCart = async(product) => {
      //console.log(product)
      const check = cart.every(item => {
        return item.id !== product.id;

      });
      
      if(check){
      toast.success('product add to cart')
      setCart([...cart,{...product, quantity: 1}])
    }else{
        toast.warning('product already i cart')
    }


    }


    return{
        product : IntValue,
        cart: [cart,setCart],
        addToCart:addToCart,
        subTotal:[subTotal,setSubTotal],
        discount: [discount,setDiscount],
        dc: [dc,setDc],
        gst:[gst,setGst]

    }

    
}
export default ProductApi