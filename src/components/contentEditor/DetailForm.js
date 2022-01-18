import React from 'react'

const DetailForm = ({ detail, handleChange }) => {
    return (
        <div className="formBox2">
            <header>Details</header>
            <form>
                <div>
                    <label>Book author</label>
                    <input id='bookAuthor' onChange={handleChange} />
                </div>
                <div>
                    <label>Language</label>
                    <textarea id='language' onChange={handleChange} />
                </div>
                <div>
                    <label>Publisher</label>
                    <input id='publisher' onChange={handleChange} />
                </div>
                <div>
                    <label>Nos of pages</label>
                    <input type='number' id='NosOfPages' onChange={handleChange} />
                </div>
                <div>
                    <label>ISBN</label>
                    <input id='ISBN' onChange={handleChange} />
                </div>
            </form>
        </div>
    )
}

export default DetailForm