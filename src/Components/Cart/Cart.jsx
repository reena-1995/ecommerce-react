import React,{useState,useEffect} from 'react'
import Cartitem from '../Cart/Cartitem/Cartitem';
import { Typography, Button, Card, CardActions, CardContent, CardMedia,Grid } from '@material-ui/core'
const Cart = ({cart}) => {

    return (
        <div className="mt-5" >
            
             {cart.line_items.length > 0 ? cart.line_items.map((value) => (
             <h2>{JSON.stringify(value)}</h2>
           )) :null} 
         
         
            
        </div>
    )
}

export default Cart
