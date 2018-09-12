import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import axios from 'axios';

class DataForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onLoad: false,
            success: false,
            error: false,
            shopname:'',
            latitude: '',
            longitude: '',
            category: ''
        }
    }

    handleChange = (e, { name, value}) => this.setState({[name]: value })

    handleSubmit = async (event) => {
        event.preventDefault();
        const { shopname, latitude, longitude, category } = this.state;
        const info = { shopName: shopname, latitude: latitude, longitude: longitude, category: category }
        try {
            this.setState({onLoad: true });
            const response = await axios.post('/api/register', info);
            console.log(response);
            this.setState({
                success: true,
                onLoad: false
            });
        } catch(err) {
            console.log(err);
            this.setState({ 
                onLoad: false,
                error: true 
            });
        }
    }
    
    render() {
        return (
            <Form success = { this.state.success } error = { this.state.error } onSubmit = { this.handleSubmit }>
                <Form.Input onChange = { this.handleChange } label='店の名前' name="shopname" fluid placeholder='alife' />
                <Form.Input onChange = { this.handleChange } label='緯度' name = "latitude" fluid placeholder='39.775' />
                <Form.Input onChange = { this.handleChange } label='経度' name = "longitude" fluid placeholder='１39.333' />
                <Form.Input onChange = { this.handleChange } label='category' name = "category" fluid placeholder='Dance club' />
                { this.state.success &&  <Message success header='登録完了' content="mapに追加されました" /> }
                { this.state.error && <Message error header='Action Forbidden' content='Need to fill in all blanks' /> }
                <Button loading = { this.state.onLoad }>Submit</Button>
            </Form>
        )
    }
}

export default DataForm;
