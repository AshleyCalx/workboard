import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'



const HeaderBar = () => (
  <React.Fragment>
    <Menu fixed='top' inverted>
      <Container>
        {/*} <Menu.Item as='a' header>
          <Image
            size='mini'
            src='/logo.png'
            style={{ marginRight: '1.5em' }}
          />
          Project Name
</Menu.Item>*/} 

        <Menu.Item>
          <NavLink to="/">WORKBE.</NavLink>
        </Menu.Item>
  <div class='right menu'>
        <Menu.Item>
          <NavLink to="/auth">Sign Up</NavLink>
        </Menu.Item>

        <Menu.Item>
          <NavLink to="/auth">Log In</NavLink>
        </Menu.Item>
  </div>
      </Container>
    </Menu>

  </React.Fragment>
)

export default HeaderBar