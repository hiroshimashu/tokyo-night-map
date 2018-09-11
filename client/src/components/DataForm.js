import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

class DataForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            shopname:'',
            latitude: '',
            longitude: '',
            category: ''
        }
    }

    handleChange = (e, { name, value}) => this.setState({[name]: value })

    handleSubmit = () => {
        console.log(this.state);
    }
    
    render() {
        return (
            <Form success = { this.state.success } onSubmit = { this.handleSubmit }>
                <Form.Input onChange = { this.handleChange } label='店の名前' name="shopname" fluid placeholder='alife' />
                <Form.Input onChange = { this.handleChange } label='緯度' name = "latitude" fluid placeholder='39.775' />
                <Form.Input onChange = { this.handleChange } label='経度' name = "longitude" fluid placeholder='１39.333' />
                <Form.Input onChange = { this.handleChange } label='category' name = "category" fluid placeholder='Dance club' />
                <Message success = { this.state.success } header='Form Completed' content="You're all signed up for the newsletter" />
                <Button>Submit</Button>
            </Form>
        )
    }
}

export default DataForm;
