import React from "react"

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            website: this.props.container.config().getValue('website')
        }
    }

    render(){
        return(
            <div className='bar1'>
                <header className='logo'>
                    {this.state.website}
                </header>
            </div>
        )
    }
}

export default Header