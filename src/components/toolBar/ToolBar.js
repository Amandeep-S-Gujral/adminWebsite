import React from 'react'

class ToolBar extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div className="bar2">
                        <select name='type' className='button4' style={{marginRight:'20px'}} id='category' onChange={this.props.handleSearch}>
                            <option value='article'>Article</option>
                            <option value='book'>Book</option>
                            <option value='page'>Page</option>
                        </select>
                <button className='button4' onClick={this.props.handleNew}>New <i className="fas fa-plus-square"></i></button>
            </div>
        )
    }
}

export default ToolBar