import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export default ({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest} render={
        (props) => {
            return (
                isAuthenticated ? 
                <Component {...props}/> :
                <Redirect to="/signup"/>
            )}
        }/>
)