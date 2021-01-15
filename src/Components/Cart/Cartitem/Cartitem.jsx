import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './style'
import productImage from './../../../assets/maxresdefault.jpg'  
const Cartitem = () => {
    const classes = useStyles();
    return (
        <div>
            <Card className="cart-item">
               <CardMedia image = {productImage} alt="cpu" className={classes.media}/>
               <CardContent className={classes.cardContent}>
                    <Typography variant="h4">CPU</Typography>
                    <Typography variant="h5"></Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <div className={classes.buttons}>
                    <Button type="button" size="small">-</Button>
                    <Typography>&nbsp;4&nbsp;</Typography>
                    <Button type="button" size="small">+</Button>
                    </div>
                  <Button variant="contained" type="button" color="secondary">Remove</Button>
                </CardActions>
            </Card>
            
        </div>
    )
}

export default Cartitem
