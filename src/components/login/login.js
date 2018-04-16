import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import {Redirect} from 'react-router-dom'



export default class LoginForm extends React.Component {

  
    constructor(props) {
      super(props)
  
      this.state = {
        authenticated: false
      }
    }
  
    handleLoginClick(e) {
      debugger
      this.setState({
        authenticated: true
      })
    }
  
    render() {
      debugger
      if(this.state.authenticated) {
          return (
            <Redirect to="/app/dashboard"/>
          )
      }
      return (
        <div className='login-form'>
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
          >
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png' />
              {' '}Log-in to your account
              </Header>
            <div size='large'>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button color='teal' fluid size='large' onClick={this.handleLoginClick.bind(this)}>Login</Button>
              </Segment>
            </div>
            <Message>
              {/*New to us? <a href='#'>Sign Up</a>*/}
            </Message>
          </Grid.Column>
        </Grid>
      </div>
      )
  }
}
