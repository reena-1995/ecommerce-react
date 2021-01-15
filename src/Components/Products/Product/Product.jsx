import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './Style'

const Product = ({product,addToCart}) => {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} title={product.name} image={product.media.source}/>
            <CardContent>
                <div className={classes.content}>
                    <Typography variant="h5" gutterBottom>
                    {product.name}
                    </Typography>
                    <Typography variant="h5">
                      {product.price.formatted_with_symbol}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" dangerouslySetInnerHTML={{__html: product.description}} component="p"/>
        
                </div>
            </CardContent>
            <CardActions>
                <IconButton aria-label="Add to cart" onClick={ () => addToCart(product.id,1)}>
                   <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
