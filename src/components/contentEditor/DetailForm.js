import React from 'react'

const DetailForm = ({ detail, handleChange }) => {
    return (
        <div className="formBox2">
            <header>Details</header>
            <form>
                <div>
                    <label>Book author</label>
                    <input id='bookAuthor' onChange={handleChange} value={detail.bookAuthor} />
                </div>
                <div>
                    <label>Language</label>
                    <textarea id='language' onChange={handleChange} value={detail.language}/>
                </div>
                <div>
                    <label>Publisher</label>
                    <input id='publisher' onChange={handleChange} value={detail.publisher} />
                </div>
                <div>
                    <label>Nos of pages</label>
                    <input type='number' id='noOfPages' onChange={handleChange} value={detail.noOfPages} />
                </div>
                <div>
                    <label>ISBN</label>
                    <input id='isbn' onChange={handleChange} value={detail.isbn} />
                </div>
                <div>
                    <label>Front image</label>
                    <input type='url' id='frontImage' onChange={handleChange} value={detail.frontImage} />
                </div>
                <div>
                    <label>Back image</label>
                    <input tyoe = 'url' id='backImage' onChange={handleChange} value={detail.backImage} />
                </div>
            </form>
        </div>
    )
}

export default DetailForm