import React from 'react'
import { Header, Modal,Button, Checkbox, Form  } from 'semantic-ui-react'



const SignupModal = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Sign Up</Modal.Header>
    <Modal.Content>
      <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
    </Modal.Content>
  </Modal>
)
export default SignupModal
