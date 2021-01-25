import './style.css';
import {useEffect,React} from 'react'
import {horseAction} from './../../redux/actions/auth/horseAction'
import {useDispatch} from 'react-redux';
 const horse = () => {
    const dispatch = useDispatch(); 
    const auth_token      = localStorage.getItem('auth_key');
    useEffect(() => {
        console.log('horse-here');
        dispatch(horseAction(auth_token))
     }, [])
     return (
         <div>
            
         </div>
     )
 }
 
 export default horse
 