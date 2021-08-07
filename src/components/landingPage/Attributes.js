import React from 'react'
import "../../css/landingPage/landingPage.css"

const Attributes = ({attributes, handleClick }) => {
    return (
        <div id="landingPage">
            <h1>Omni platform for managing websites</h1>
            {
                attributes.map(obj => <button
                    className="button1-large"
                    key={obj.value}
                    value={obj.value}
                    onClick={handleClick}>
                    {obj.name}
                </button>)
            }
        </div>
    )
}

export default Attributes