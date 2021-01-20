import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Products,Navbar,Cart,Loginform} from '../src/Components';
import { commerce } from './lib/commerce';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';


const App = () => {
  const [products,setProducts] = useState([]);
  const [cart, setCart]        = useState("");
  const [logIn,setLogin]       = useState("");
  
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
  
  const handleLogin = async (phone_number,device_token,device_type) =>{
    try {
      const response = await axios.post( "http://localhost/lunchboxOwebest/lunchbox/api/v1/login",{
        phone_number:phone_number,
        device_token:device_token,
        device_type:device_type
      });
      console.log(response.data.status);
      store.addNotification({
        title: "Wonderful!",
        message: response.data.msg,
        type: response.data.status,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
      setLogin(response) 
    } catch (error) {
      console.log(error);
    }
     
  }
 
 
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])


  
  return (
    
    <Router>
      <div>
      <ReactNotification />
      <Navbar cartCount={cart.total_items} loginButton={handleLogin}/>
       <Switch>
        <Route exact path="/">
            <Products products={products} addToCart={handleCart}/>
        </Route>
        <Route exact path="/cart">
            <Cart cart={cart}/>
        </Route>
        <Route exact path="/login">
            <Loginform/>
        </Route>
      </Switch>
      </div>
    </Router>
  )
}

export default App
