import React from 'react'

const NavMenu = ({ container, handleClose }) => {
    return (
        <div id='navMenu'>
            <ul>
                <li>
                    <button onClick={handleClose} >X</button>
                </li>
                <li>
                    <container.Link className='link1' onClick={handleClose} to='/contentManagement'>Content Management</container.Link>
                </li>
                <li>
                    <container.Link className='link1' onClick={handleClose} to='/commentManagement'>Comment Management</container.Link>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu