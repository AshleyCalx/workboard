import React,  { Component }  from 'react'
import PropTypes from 'prop-types'
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment, Sidebar, Visibility,} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import './header.css'

const desk = '/desk.jpg'
const HomepageHeading = ({ mobile }) => (
    
    <Container text style={{}}>
      <Button  primary size='huge' style={{"position":"absolute","bottom":"300px","right":"500px"}}>
        Get Started
        {/*<Icon name='right arrow' />*/}
      </Button>
    </Container>
  )
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }
  class DesktopContainer extends Component {
    state = {}
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
      const { fixed } = this.state
  
      return (
        <Responsive {...Responsive.onlyComputer}>
          <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
            <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em', backgroundImage:"url('http://localhost:3000/desk.jpg')", backgroundSize: 'contain'}} vertical>
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                <Menu.Item as='a'active>
                <NavLink to="/">WORKBE.</NavLink>
                </Menu.Item>
                  {/*<Menu.Item as='a' active>WORKBE.</Menu.Item>*/}
                  <Menu.Item position='right'>
                    <Button as= 'a' to='/signup' inverted={!fixed}>Sign Up</Button>
                    <Button as='a' to='/login' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Log In</Button>
                  </Menu.Item>
                </Container>
              </Menu>
              <HomepageHeading />
            </Segment>
          </Visibility>
  
          {children}
        </Responsive>
      )
    }
  }
  
  DesktopContainer.propTypes = {
    children: PropTypes.node,
  }
  
  class MobileContainer extends Component {
    state = {}
  
    handlePusherClick = () => {
      const { sidebarOpened } = this.state
  
      if (sidebarOpened) this.setState({ sidebarOpened: false })
    }
  
    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })
  
    render() {
      const { children } = this.props
      const { sidebarOpened } = this.state
  
      return (
        <Responsive {...Responsive.onlyMobile}>
          <Sidebar.Pushable>
            <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
              <Menu.Item as='a' active>WORKBE.</Menu.Item>
              <Menu.Item as='a'>Log in</Menu.Item>
              <Menu.Item as='a'>Sign Up</Menu.Item>
            </Sidebar>
  
            <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
              <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }} vertical>
                <Container>
                  <Menu inverted pointing secondary size='large'>
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name='sidebar' />
                    </Menu.Item>
                    <Menu.Item position='right'>
                      <Button as='a' inverted>Log in</Button>
                      <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                    </Menu.Item>
                  </Menu>
                </Container>
                <HomepageHeading mobile />
              </Segment>
  
              {children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
      )
    }
  }
  
  MobileContainer.propTypes = {
    children: PropTypes.node,
  }
  
  const ResponsiveContainer = ({ children }) => (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      {/*<MobileContainer>{children}</MobileContainer>*/}
    </div>
  )
  
  ResponsiveContainer.propTypes = {
    children: PropTypes.node,
  }
  
  export default ResponsiveContainer 