import React from "react"

class HeaderWithNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            website: 'prdNotes',
            showNavMenu: false
        }
        this.handleShowNavMenu = this.handleShowNavMenu.bind(this)
    }

    handleShowNavMenu() {
        const showNavMenu = !this.state.showNavMenu
        this.setState({ showNavMenu })
    }

    render() {
        return (
            <div className='bar1'>
                <button className='menuButton' onClick={this.handleShowNavMenu}><i className="fas fa-bars"></i></button>
                {this.props.path && <h2>{this.props.container.parser().pathToNormal(this.props.path)}</h2>}
                {this.state.showNavMenu && <this.props.container.NavMenu
                    container={this.props.container}
                    handleClose={this.handleShowNavMenu}
                />}
            </div>
        )
    }
}

export default HeaderWithNav