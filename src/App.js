import React,{useState,useEffect} from 'react'
import {Products,Navbar} from '../src/Components';
import { commerce } from './lib/commerce';


const App = () => {
  const [products,setProducts] = useState([]);
  const [cart, setCart]        = useState("");
  
  const fetchProducts = async () => {
    const {data}= await commerce.products.list();
    setProducts(data);
  }
  const fetchCart = async () =>{
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  }

  const haddleCart = async (productId,quantity) =>{
    const item = await commerce.cart.add(productId,quantity);
    setCart(item.cart);
  }
 
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])
 console.log(cart.total_items);

  
  return (
    <div>
      <Navbar cartCount={cart.total_items}/>
      <Products products={products} addToCart={haddleCart}/>
    </div>
  )
}

export default App
