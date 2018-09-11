import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

class DataForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false
        }
    }
    render() {
        return (
            <Form success = { this.state.success }>
                <Form.Input label='店の名前' fluid placeholder='alife' />
                <Form.Input label='緯度' fluid placeholder='39.775' />
                <Form.Input label='経度' fluid placeholder='１39.333' />
                <Form.Input label='category' fluid placeholder='Dance club' />
                <Message success = { this.state.success } header='Form Completed' content="You're all signed up for the newsletter" />
                <Button>Submit</Button>
          </Form>
        )
    }
}

export default DataForm;
