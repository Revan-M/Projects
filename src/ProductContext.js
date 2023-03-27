import CategoryApi from "./api/CategoryApi";
import ProductApi from "./api/ProductApi";
import {createContext} from "react";


 export const ProductContext = createContext()
const ProductProvider = (props) => {
        const Data = {
          categoryApi: CategoryApi(),
           productApi: ProductApi()
        }




       return (
        <ProductContext.Provider value ={Data}>
                              {props.children}

        </ProductContext.Provider>

       )
}
export default ProductProvider 