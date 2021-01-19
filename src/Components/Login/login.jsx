import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import sideImage from '../../assets/maxresdefault.jpg';
import {Form,Button,FormGroup,Label,Input,FormText} from 'reactstrap'
import { Formik } from "formik";
const login = () => {
    const initialValues = {
        email: "",
        password: ""
      };
      const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
          errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
          errors.email = "Invalid Email";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password too short";
        }
        return errors;
      };
      const submitForm = (values) => {
        console.log(values);
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
                      <img src={sideImage} width="250px" height="350px"/>
                  </div>
                  <div className="col-sm-6 p-5">
                      <div>
                         <h2>Sign Up</h2>
                      </div>
                    <Form onSubmit={handleSubmit}>
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
                        <Button className="btn_style">Submit</Button>
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

export default login
