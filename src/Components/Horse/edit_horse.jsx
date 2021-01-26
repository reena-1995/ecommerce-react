import {useEffect,React} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import sideImage from '../../assets/maxresdefault.jpg';
import {Form,Button,FormGroup,Label,Input,FormText} from 'reactstrap'
import { Formik } from "formik";
import {login} from "../../redux/actions/auth";
import {useSelector,useDispatch} from "react-redux"
import { Link } from 'react-router-dom';
const EditHorse = (props) => {
    const dispatch    = useDispatch();
    const editedHorse   = useSelector(state => state.horseReducer.horseDetail)
    console.log(editedHorse);
    return (
      <div>
        <h2>{editedHorse[0].name}</h2>
      </div>
    );
}

export default EditHorse
