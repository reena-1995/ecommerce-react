import React from 'react'
import {Grid} from '@material-ui/core'
import Product from '../Products/Product/Product'
import useStyles from './Style';




const Products = ({products,addToCart}) => {
  const classes = useStyles();
    return (
        <main className={classes.content}>
          <div className={classes.toolbar}/>
        <Grid container justify="center" spacing ={2}>
           {products.map((product) => (
             <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
               <Product product={product} addToCart={addToCart}/>
             </Grid>
           ))}             
        </Grid>
    </main>
)
   
}

export default Products;