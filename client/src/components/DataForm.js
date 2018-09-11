import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

class DataForm extends Component {
    render() {
        return (
            <Form success>
                <Form.Input label='Email' placeholder='joe@schmoe.com' />
                <Message success header='Form Completed' content="You're all signed up for the newsletter" />
                <Button>Submit</Button>
          </Form>
        )
    }
}

export default DataForm;
