import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import sideImage from '../../assets/maxresdefault.jpg';
import {Form,Button,FormGroup,Label,Input,FormText} from 'reactstrap'
import { Formik} from "formik";
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {register} from '../../redux/actions/auth/'
const Register1 = () => {
    const dispatch = useDispatch();
    const initialValues= {
        "name":"",
        "email":"",
        "password":"",
        "password_confirmation":"",
        "vin_number":"",
        "driving_licence":"",
        "insurance":"",
    }
    const submitForm =(values)=>{
     
      dispatch({type:"LOADER",payload:true})
      dispatch(register(values))
    }
    const validationSchema = yup.object().shape({
      name:yup
      .string()
      .label('Name')
      .required(),
      email: yup
        .string()
        .label('Email')
        .email()
        .required(),
      password: yup
        .string()
        .label('Password')
        .required()
        .min(2, 'Seems a bit short...')
        .max(10, 'We prefer insecure system, try a shorter password.'),
        password_confirmation: yup
        .string()
        .required()
        .label('Confirm password')
        .test('passwords-match', 'Passwords must match', function(value) {
          return this.parent.password === value;
        })
    });

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema} 
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
                    id="Password" placeholder="Enter your password " 
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
                        <Button className="btn_style" type="submit">Register</Button>
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

export default Register1
