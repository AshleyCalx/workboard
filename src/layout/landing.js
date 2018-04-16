import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import { Switch, Route } from "react-router-dom";



import HeaderBar from '../components/header/header'
import Footer from '../components/footer/footer'
import Home from '../components/home/home'
import Signup from '../components/signup/signup'
// import Login from '../components/login/login'
//import Auth from '../components/login/auth'

const FixedMenuLayout = () => (
  <div>
    <HeaderBar/>

    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        {/*<Route exact path="/login" component={Login}*/}
        {/*<Route exact path="/signup" component={SignUp} /> 
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/footer" component={Footer} /> */}
    </Switch>;

    <Footer/>
  </div>
)

export default FixedMenuLayout