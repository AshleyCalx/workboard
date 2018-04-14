import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

const HeaderBar = () => (
  <React.Fragment>
    <Menu fixed='top' inverted>
      <Container>
        {/* <Menu.Item as='a' header>
          <Image
            size='mini'
            src='/logo.png'
            style={{ marginRight: '1.5em' }}
          />
          Project Name
        </Menu.Item> */}

        <Menu.Item>
          <NavLink to="/">WORKBE.</NavLink>
        </Menu.Item>

        <Menu.Item>
          <NavLink to="/signup">Signup</NavLink>
        </Menu.Item>

        <Menu.Item>
          <NavLink to="/sign" float='left'>Sign In</NavLink>
        </Menu.Item>
       
      </Container>
    </Menu>

  </React.Fragment>
)

export default HeaderBar