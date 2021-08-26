import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie/es6'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const cookies = new Cookies()
    const idToken = cookies.get('idToken')
    return (
        <>
            {idToken && <Route {...rest} render={props => <Component {...props} {...rest} />} />}
            {!idToken && <Redirect to='/' />}
        </>
    )
}

export default PrivateRoute