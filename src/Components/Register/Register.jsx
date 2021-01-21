import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import sideImage from '../../assets/maxresdefault.jpg';
import {Form,Button,FormGroup,Label,Input,FormText} from 'reactstrap'
import { Formik} from "formik";
import { Link } from 'react-router-dom';
import * as Yup from "yup";
const Register = () => {
    const initialValues= {
        "name":"",
        "email":"",
        "password":"",
        "password_confirmation":""
    }
    const validate = (values) => {
        // let errors = {};
        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // if (!values.email) {
        //   errors.email = "Email is required";
        // } else if (!regex.test(values.email)) {
        //   errors.email = "Invalid Email";
        // }
        // if (!values.password) {
        //   errors.password = "Password is required";
        // } else if (values.password.length < 4) {
        //   errors.password = "Password too short";
        // }
        // if(!values.name){
        //     errors.name="Name is required";
        // }

        // if(!values.password_confirmation){
        //     errors.password_confirmation="Confirm password is required"
        // }else if (values.password_confirmation != values.password_confirmation){
        //     errors.password_confirmation = "Password and Confirm Password must be same";
        // }
        // return errors;
        return Yup.object().shape({
            email: Yup.string()
              .email('E-mail is not valid!')
              .required('E-mail is required!'),
            password: Yup.string()
              .min(6, 'Password has to be longer than 6 characters!')
              .required('Password is required!'),
            passwordConfirmation: Yup.string()
              .oneOf([values.password], 'Passwords are not the same!')
              .required('Password confirmation is required!'),
            consent: Yup.bool()
              .test(
                'consent',
                'You have to agree with our Terms and Conditions!',
                value => value === true
              )
              .required(
                'You have to agree with our Terms and Conditions!'
              ),
          })
      };
    const submitForm =(values)=>{

    }

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
                      <img src={sideImage} width="250px" height="350px"/>
                  </div>
                  <div className="col-sm-6 p-5">
                      <div>
                         <h2>Sign In</h2>
                      </div>
                    <Form onSubmit={handleSubmit}>
                       <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="name" name="name" id="name" value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur} placeholder="Enter your name"  className={errors.name && touched.name ? 
                    "input-error" : null}/>
                            {errors.name && touched.name && (
                                <span className="error">{errors.name}</span>
                            )}
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur} placeholder="Enter your email"  className={errors.email && touched.email ? 
                    "input-error" : null}/>
                            {errors.email && touched.email && (
                                <span className="error">{errors.email}</span>
                            )}
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="examplePassword" placeholder="Enter your password " 
                             className={errors.password && touched.password ? 
                                    "input-error" : null}/>
                            {errors.password && touched.password && (
                                <span className="error">{errors.password}</span>
                            )}
                        </FormGroup>
                        <FormGroup>
                            <Label for="password_confirmation">Confirm Password</Label>
                            <Input type="password" name="password_confirmation" value={values.password_confirmation}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="password_confirmation" placeholder="Enter your confirm password " 
                             className={errors.password_confirmation && touched.password_confirmation ? 
                                    "input-error" : null}/>
                            {errors.password_confirmation && touched.password_confirmation && (
                                <span className="error">{errors.password_confirmation}</span>
                            )}
                        </FormGroup>
                        <Button className="btn_style">Submit</Button>
                        <div className="LinkDecor">
                        Already have account?<Link to="/login"> Sign in</Link>
                        </div>
                        
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
        
    
    )
}

export default Register
