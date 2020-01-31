import React, { Component } from 'react'
// Formda kullanılacak nesneler import edildi.
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import alertify from "alertifyjs";

export default class FormDemo extends Component {

    state = {
        userName: "",
        userEmail: "",
        userPassword: "",
        userDescription: "",
        userGender: "",
        userCity: ""
    }



    handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alertify.success(this.state.userName + " information added to db")
        console.log(this.state)
    }


    render() {

        const testStyle = {
            display: "none",
        }
        return (
            <div >

                <div style={this.props.cart.length <= 0 ? testStyle : null} >
                    <Form className="mt-3 font-weight-bold" onSubmit={this.handleSubmit}>

                        <FormGroup className="text-left">
                            <Label for="userName">User Name</Label>
                            <Input type="text"
                                name="userName"
                                onChange={this.handleChange}
                                placeholder="enter your name" />
                        </FormGroup>

                        <FormGroup className="text-left">
                            <Label for="userEmail">Email</Label>
                            <Input type="email"
                                name="userEmail"
                                onChange={this.handleChange}
                                placeholder="enter your e-mail" />
                        </FormGroup>

                        <FormGroup className="text-left">
                            <Label for="userPassword">Password</Label>
                            <Input type="password"
                                name="userPassword"
                                onChange={this.handleChange}
                                placeholder="enter your password" />
                        </FormGroup>

                        <FormGroup className="text-left">
                            <Label for="userDescription">Descripton</Label>
                            <Input type="textarea"
                                name="userDescription"
                                onChange={this.handleChange}
                                placeholder="enter your descripton" />
                        </FormGroup>

                        <FormGroup className="text-left">
                            <Label for="userCity">City</Label>
                            <Input type="select"
                                defaultValue={''}
                                name="userCity"
                                onChange={this.handleChange}>
                                <option>Choose a city ...</option>
                                <option>Istanbul</option>
                                <option>Izmır</option>
                                <option>Ankara</option>
                                <option>Bursa</option>
                            </Input>
                        </FormGroup>

                        <FormGroup className="text-left" tag="fieldset">
                            Gender
                        <FormGroup check>
                                <Label className="mt-2" check>
                                    <Input type="radio"
                                        onChange={this.handleChange}
                                        name="userGender"
                                        value="male" />Male
                            </Label>
                                <Label className="ml-5" check>
                                    <Input type="radio"
                                        onChange={this.handleChange}
                                        name="userGender"
                                        value="female" />Female
                            </Label>
                            </FormGroup>
                            <FormGroup check>

                            </FormGroup>
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}
