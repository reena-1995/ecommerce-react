import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Products,Navbar,Cart} from '../src/Components';
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
    console.log(cart);
    setCart(cart);
  }

  const handleCart = async (productId,quantity) =>{
    const item = await commerce.cart.add(productId,quantity);
    setCart(item.cart);
  }
 
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])


  
  return (
    <Router>
      <div>
      <Navbar cartCount={cart.total_items}/>
       <Switch>
        <Route exact path="/">
            <Products products={products} addToCart={handleCart}/>
        </Route>
        <Route exact path="/cart">
            <Cart cart={cart}/>
        </Route>
      </Switch>
      </div>
    </Router>
  )
}

export default App
