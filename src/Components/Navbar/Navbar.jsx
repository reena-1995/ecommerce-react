import React from 'react';
import {AppBar,Toolbar,IconButton,Badge,MenuIteam,Typography,Menu,Link} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/maxresdefault.jpg'
import useStyles from './Style'
import {useDispatch,useSelector} from 'react-redux';
import {logout} from '../../redux/actions/auth'

const Navbar = ({cartCount,loginButton}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const auth_token      = localStorage.getItem('auth_key');
    const logoutAction = () =>{
            dispatch(logout(auth_token))
    }
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
                        <IconButton aria-label="logout" color="inherit" onClick={logoutAction}>
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
