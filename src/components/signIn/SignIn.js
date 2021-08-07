import React from 'react'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            password: "",
            referalCode: ""
        }
    }

    async handleSignIn() {

    }

    render() {
        return (
            <this.props.container.SignInBox />
        )
    }
}

export default SignIn