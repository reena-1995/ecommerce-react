import {useEffect,React} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import sideImage from '../../assets/maxresdefault.jpg';
import {Form,Button,FormGroup,Label,Input,FormText} from 'reactstrap'
import { Formik } from "formik";
import {updateHorseBySlug} from "../../redux/actions/auth/horseAction";
import {useSelector,useDispatch} from "react-redux"
import { Link } from 'react-router-dom';
const EditHorse = () => {
    const auth_token      = localStorage.getItem('auth_key');
    const dispatch    = useDispatch();
    const editedHorse   = useSelector(state => state.horseReducer.horseDetail)
    const initialValues = {
      name: editedHorse[0].name,
      owner_name: editedHorse[0].owner_name,
      owner_number:editedHorse[0].owner_number
    };
    const validate = (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Name is required";
      } 
      if (!values.owner_name) {
        errors.name = "Owner name is required";
      } 
      if (!values.owner_number) {
        errors.name = "Owner number is required";
      } 
     
      return errors;
    };

    const submitForm = (values) => {
      let slug=editedHorse[0].slug;
      dispatch(updateHorseBySlug(values,slug,auth_token))
    };
    return (
      <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
       {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty
        } = formik;
        return (
          <div className="marginClass">
          <div className="container">
           <div className="row"> 
            <div className="offset-sm-2 col-sm-8 loginForm mt-5">
              <div className="row formBlock">
                  <div className="col-sm-6 p-5">
                      <div>
                        <span>Edit</span>
                         <h2> {values.name} </h2>
                      </div>
                    <Form onSubmit={handleSubmit} autoComplete="off">
                        <FormGroup>
                            <Label for="exampleEmail">Name</Label>
                            <Input type="text" name="name" id="name" value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur} placeholder="Enter your name"  className={errors.name && touched.name ? 
                    "input-error" : null}/>
                            {errors.name && touched.name && (
                                <span className="error">{errors.name}</span>
                            )}
                        </FormGroup>
                        <FormGroup>
                            <Label for="owner_name">Owner Name</Label>
                            <Input type="text" name="owner_name" value={values.owner_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              id="owner_name" placeholder="Enter your owner name " 
                             className={errors.owner_name && touched.owner_name ? 
                                    "input-error" : null}/>
                            {errors.owner_name && touched.owner_name && (
                                <span className="error">{errors.owner_name}</span>
                            )}
                        </FormGroup>
                        <FormGroup>
                            <Label for="owner_number">Owner Number</Label>
                            <Input type="text" name="owner_number" value={values.owner_number}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              id="owner_number" placeholder="Enter your owner number " 
                             className={errors.owner_number && touched.owner_number ? 
                                    "input-error" : null}/>
                            {errors.owner_number && touched.owner_number && (
                                <span className="error">{errors.owner_number}</span>
                            )}
                        </FormGroup>
                        <Button className="btn_style">Update</Button>    
                    </Form>
                  </div>
                 
              </div>
            </div>
           </div>
           </div>
        </div>
        );
       }}
      </Formik>
    );
}

export default EditHorse
