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
                        <select name='type' id='type' onChange={handleChange} value={data.type}>
                            <option value='article'>Article</option>
                            <option value='book'>Book</option>
                            <option value='page'>Page</option>
                        </select>
                    </div>
                    <div>
                        <label>Category</label>
                        <input type='text' id='category' onChange={handleChange} value={data.category} />
                    </div>
                    <div>
                        <label>Title</label>
                        <input type='text' id='title' onChange={handleChange} value={data.title} />
                    </div>
                    <div>
                        <label>Sub Title</label>
                        <input type='text' id='subTitle' onChange={handleChange} value={data.subTitle} />
                    </div>
                    <div>
                        <label>Image</label>
                        <input type='url' id='image' onChange={handleChange} placeholder='https://imageUrl.com' value={data.image} />
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