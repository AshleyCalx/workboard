import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import { Switch, Route } from "react-router-dom";

import HeaderBar from '../components/header/header'
import Footer from '../components/footer/footer'
import Home from '../components/home/home'
import Signup from '../components/signup/signup'
import Login from '../components/login/login'
import Dashboard from '../components/dashboard/dashboard'

const AuthenticatedLayout = () => (
  <div>
    {/* <HeaderBar/> */}
HEADER HERE
    <Switch>
        <Route exact path="/app/dashboard" component={Dashboard} />
        <Route exact path="/signout" component={Signup} />
         <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} /> 
        {/*<Route exact path="/contact" component={Contact} />
        <Route exact path="/footer" component={Footer} /> */}
    </Switch>
    
    <Footer/>
  </div>
)

export default AuthenticatedLayout