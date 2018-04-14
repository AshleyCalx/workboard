import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import './footer.css'

const Footer = () => (
  <React.Fragment>
    <Segment fixed='bottom'
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Our Product' />
              <List link inverted>
                <List.Item as='a'>Features</List.Item>
                <List.Item as='a'>Sign Up</List.Item>
                <List.Item as='a'>Sign In</List.Item>
                {/*<List.Item as='a'>Link Four</List.Item>*/}
              </List>
            </Grid.Column>
            {/*<Grid.Column width={3}>
              <Header inverted as='h4' content='Group 2' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
              </Grid.Column>*/}
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Contact' />
              <List link inverted>
                <List.Item as='a'><i class="map marker alternate icon"></i>Hollywood, FL</List.Item>
                <List.Item as='a'><i class="envelope outline icon"></i>Email Me</List.Item>
                <List.Item as='a'><i class="mobile alternate icon"></i>+1(609) 420-1133</List.Item>
                {/*<List.Item as='a'>Link Four</List.Item>*/}
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='WORKBE.' />
              <p>Enhancing and simplifying the way teams work together! Collaborate better with WORKBE.</p>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as='h4' content='Social' />
              <Icon link name='linkedin icon' size='big' color='blue' to='/https://www.linkedin.com/in/acalixte/'/>
              <Icon link name='github icon' size='big' color='grey' />
              <Icon link name='google plus icon' size='big' color='red'/>
              <Icon link name='twitter' size='big' color='dodger blue' />
              {/*<List.Item as='a'><i class="github icon"></i></List.Item>
              <List.Item as='a'><i class="google plus icon"></i></List.Item>
            <List.Item as='a'><i class="twitter icon"></i></List.Item> */}
              
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider inverted section />
        {/*<Image
          centered
          size='mini'
          src='public/img/WBlogo.png'
        />*/}
        <h4>&copy; WORKBE. 2018. All Rights Reserved.</h4>
	        <h5> Created by Ashley Calixte</h5> 
        {/*<List horizontal inverted divided link>
          <List.Item as='a' href='#'>Site Map</List.Item>
          <List.Item as='a' href='#'>Contact Us</List.Item>
          <List.Item as='a' href='#'>Terms and Conditions</List.Item>
        <List.Item as='a' href='#'>Privacy Policy</List.Item>
        </List>*/}
      </Container>
    </Segment>
  </React.Fragment>
)

export default Footer