import React from 'react'

const WithAttributeData = (container) => {
    return class AttributeDataContainer extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                website: container.config().getValue('website'),
                attributes: container.config().getValue('attributes'),
                attributeList: container.config().getValue('attributeList'),
                attributeSelection: 'easyManagement',
                email: '',
                password: '',
            }
            this.handleClick = this.handleClick.bind(this)
            this.handleChange = this.handleChange.bind(this)
            this.handleSignIn = this.handleSignIn.bind(this)
        }

        async handleClick(e) {
            const attributeName = e.target.value
            const data = this.state
            data.attributeSelection = attributeName
            this.setState({ ...data })
        }

        handleChange(e) {
            const key = e.target.id
            const state = this.state
            state[key] = e.target.value
            this.setState(state)
        }

        async handleSignIn() {
            const idToken = await container.authDispatcher().signIn(this.state.email, this.state.password)
            container.cookies.set('idToken', idToken, { path: '/' })
            window.location.href = '/contentManagement'
        }

        render() {
            const { email, password } = this.state
            return (
                <>
                    <container.Header container={container} />
                    <div className='display-grid1'>
                        <div className="grid1-a">
                            <container.Attributes
                                website={this.state.website}
                                attributes={this.state.attributes}
                                handleClick={this.handleClick} />
                            <container.AttributeList
                                attributeSelection={this.state.attributeSelection}
                                attributeList={this.state.attributeList} />
                        </div>
                        <div className="grid1-b">
                            <container.SignInBox
                                email={email}
                                password={password}
                                handleChange={this.handleChange}
                                handleSignIn={this.handleSignIn}
                            />
                        </div>
                    </div>
                </>
            )
        }
    }
}


export default WithAttributeData