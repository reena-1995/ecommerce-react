import React from 'react';
import {AppBar,Toolbar,IconButton,Badge,MenuIteam,Typography,Menu,Link} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/maxresdefault.jpg'
import useStyles from './Style'

const Navbar = ({cartCount,loginButton}) => {
    const classes = useStyles();
    return (
        <>
           <AppBar position="fixed" className={classes.appBar} color="inherit">
               <Toolbar>
                   <Typography variant="h6" className={classes.title} color="inherit">
                      <img src={logo} alg="dom_reactions" height="25px" className={classes.image} /> 
                      Dom Reactions
                   </Typography>
                   <div className={classes.grow} />
                   <div className={classes.button}>
                        <IconButton aria-label="login" color="inherit" href="/login">
                          Logout
                        </IconButton>
                    </div>
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart" color="inherit">
                            <Badge badgeContent={cartCount} color="secondary">
                               <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
               </Toolbar>
            </AppBar>   
        </>
    )
}

export default Navbar
