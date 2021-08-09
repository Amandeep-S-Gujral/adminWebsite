import React from 'react'

const Attributes = ({ attributeSelection, attributeList }) => {
    return (
        <div className="flexBox1">
            {attributeList[attributeSelection].map(obj => <div className='card1' key={obj.lab}>
                <img src={obj.img} alt='img' />
                <p>{obj.lab}</p>
            </div>
            )}
        </div>
    )
}

export default Attributes