import {createContext,useState} from 'react '
import {productStore} from '../productsStore'
import { Children } from 'react'
const {productsArray} = productStore


{/**
functions and logic to control the behavior of cart in application
*/}

export const cartContext = createContext({
    items:[],
    getProductQuantity: () => {},
    addOneToCart:() =>{},
    removeOneFromCart:() =>{},
    deleteFromCart:() =>{},
    getTotalCost:()=>{}
})

 export function cartProvider({children}){
    const [cartProducts,setCartProducts] = useState([])


    function getProductQuantity(id){
      const quantity = cartProducts.find(product=>product.id === id)?.quantity

        if(quantity === undefined){
            return 0
        }

        return quantity
    }


    function addOneToCart(id){
       const quantity = getProductQuantity(id)
       if(quantity === 0){
        setCartProducts([...cartProducts,
        {
            id:id,
            quantity:1
        }])
       }else{
        setCartProducts(cartProducts.map(
            product => product.id === id ? {...product, quantity:product.quantity + 1} :
            product
        ))
       }
    }
    function removeOneFromCart(id){
        const quantity = getProductQuantity(id)
        if(quantity == 1){
            deleteFromCart(id)
        }else{
            setCartProducts(
                cartProducts.map(
                    product => product.id === id ? {...product, quantity:product.quantity - 1} :
                    product
                )
            )
        }
    }
    function deleteFromCart(id){
{/**
the filter does not  allow the deleted products go into the new array
*/}

        setCartProducts(cartProducts=>cartProducts.filter(currentProduct=>{
            return currentProduct.id !=id
        })
             
             )
    }

    function getTotalCost(id){

    }


const contextValue = {
    items:[],
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
}

    return(
        <cartContext.Provider value={contextValue}>
            {Children}
        </cartContext.Provider>
    )
 }

