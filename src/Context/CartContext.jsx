import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export let CartContext = createContext(0);

export function CartcontextProvider({ children }) {
  let [cartItems, setCartItems] = useState(null);
  let [cartId,setCardId] = useState('')
  let [cartItemsCount,setCartItemsCount] = useState('')
  let headers = {
    token: localStorage.getItem("userToken"),
  };


  async function addToCart(productId) {
    try {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId: productId,
        },
        {
          headers,
        }
      );
      toast.success(data.message);
      setCartItems(data);
      setCartItemsCount(data?.numOfCartItems)
      setCardId(data.data._id)
      setFavIcon(<i className="iconHeart fa-solid fa-heart text-red-700 text-2xl wish-icon"></i>)
    } catch (error) {}
  }

  async function getLoggedCart() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          headers,
        }
      ); 

      setCartItemsCount(data?.numOfCartItems)
      setCardId(data.data._id)    
      return data;
    } catch (error) {}
  }


  async function updateQty(productId, count) {
    try {
      let { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { count },
        { headers }
      );
      setCardId(data.data._id)  
      setCartItemsCount(data?.numOfCartItems)  
      return data;
    } catch (error) {}
  }

  async function deleteFromCart(productId, count) {
        try {
            let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers})
            setCartItemsCount(data?.numOfCartItems)
            return data;
        } catch (error) {
            
        }
  }



  async function clearcart() {
    try {
        let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{headers})
        setCartItemsCount(data?.numOfCartItems)
        setCartItems(null);
        return data;
    } catch (error) {
        
    }
}
  useEffect(() => {
    getLoggedCart();
  }, []);

  return (
    <CartContext.Provider value={{addToCart, clearcart, cartItems,setCartItems, getLoggedCart , updateQty , deleteFromCart,headers, cartId, cartItemsCount}}>
      {children}
    </CartContext.Provider>
  );
}
