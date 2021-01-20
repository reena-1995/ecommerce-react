import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom'
import {Products,Navbar,Cart,Login} from './Components';
import { commerce } from './lib/commerce';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import {history} from './history'; 

const ConfigRoute = (props)=>{
    return (
      <div>
        {props.isAuthenticated?<Route {...props}>
          {props.children}
        </Route>:<Redirect to="/login"/>}
      </div>
    )
}
// const mapStateToProps=(state)=>{
//   return{
//     isAuthenticated: state.auth.isAuthenticated
//   }
// }
//const AppRoute   = connect(mapStateToProps)(ConfigRoute)

const Router1 = () => {
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
      <div>
      <ReactNotification />
      {/* <Navbar cartCount={cart.total_items}/> */}
       <Switch>
        
        <Route exact path="/cart">
            <Cart cart={cart}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
            <Products products={products} addToCart={handleCart}/>
        </Route>
      </Switch>
      </div>
    </Router>
  )
}

export default Router1
