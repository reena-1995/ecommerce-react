import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom'
import {Products,Navbar,Cart,Login,Loader,Register} from './Components';
import { commerce } from './lib/commerce';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import {history} from './history'; 
import { useSelector } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"





const Router1 = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const isLoader        = useSelector(state => state.auth.isLoading)
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
   
    <Router history={history}>
      {
        isLoader ? <Loader/> : 
        isAuthenticated ?
          <div>
          <ReactNotification />
           <Navbar cartCount={cart.total_items}/> 
           <Switch>
            <Route exact path="/">
                <Products products={products} addToCart={handleCart}/>
            </Route>
          </Switch>
          </div>
         : 
         <div>
          <ReactNotification />
          <Switch>
          <Route exact path="/login"> 
           <Login/>
          </Route>
          <Route exact path="/register"> 
           <Register/>
          </Route>
          <Redirect to="/login"/>
         </Switch>
         </div>
         
      }
      
    </Router>
 
  )
}

export default Router1
