import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import owlImage from '../../assets/IMG-20200404-WA0005.jpg'
const Loginform = () => {
    return (
        <div className="formBlock">
            <div className="leftImage">
            <img src={owlImage}/>
            </div>
            <div className="rightForm">
                <Form>
                    <FormGroup>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}

export default Loginform
