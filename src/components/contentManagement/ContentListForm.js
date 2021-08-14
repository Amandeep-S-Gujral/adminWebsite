import React from 'react'

const ContentListForm = ({ data, handleClose, handleChange, handleSubmit }) => {
    return (
        <div className="formBoxContainer">
            <div className='formBox1'>
                <header>
                    Content List Detail
                    <button className='button2' onClick={handleClose}><i className="fas fa-times"></i></button>
                </header>
                <form>
                    <div>
                        <label>Cid</label>
                        <p>{data.cid}</p>
                    </div>
                    <div>
                        <label>Type</label>
                        <select name='type' id='typ' onChange={handleChange} value={data.typ}>
                            <option value='article'>Article</option>
                            <option value='book'>Book</option>
                            <option value='page'>Page</option>
                        </select>
                    </div>
                    <div>
                        <label>Category</label>
                        <input type='text' id='cat' onChange={handleChange} value={data.cat} />
                    </div>
                    <div>
                        <label>Title</label>
                        <input type='text' id='tle' onChange={handleChange} value={data.tle} />
                    </div>
                    <div>
                        <label>Sub Title</label>
                        <input type='text' id='subTle' onChange={handleChange} value={data.subTle} />
                    </div>
                    <div>
                        <label>Image</label>
                        <input type='url' id='img' onChange={handleChange} placeholder='https://imageUrl.com' value={data.img} />
                    </div>
                    <div>
                        <label>URL</label>
                        <p>{data.url}</p>
                    </div>
                    <div>
                        <button className='button3' id='listFormSubmit' onClick={handleSubmit} type='button'>Submit <i className="fas fa-save"></i></button>
                        <button className='button3-cancle' onClick={handleClose}>Cancle</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContentListForm