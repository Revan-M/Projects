import axios from 'axios'
import react from 'react'
import { useState,useCallback,useEffect } from 'react'


const url ="https://dummyjson.com"

const CategoryApi =() => {
    const [categories, SetCategories] = useState([])
    const ReadProduct = async() =>{
        const out=await axios.get(`${url}/products/categories`)
        SetCategories(out.data)
    }
       const IntValue =useCallback(() => {
        ReadProduct()
            
        },[])
        useEffect(() => {
            IntValue()
        
        },[])
    
    return {
        category : [categories, SetCategories] 

    }
    
}
export default CategoryApi