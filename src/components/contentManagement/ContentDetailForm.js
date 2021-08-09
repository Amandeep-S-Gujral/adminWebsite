import React from 'react'

const ContentDetailForm = ({ data, handleClose }) => {
    return (
        <div className="formBoxContainer">
            <div className='formBox1'>
                <header>
                    Content Detail
                    <button className='button2' onClick={handleClose}><i className="fas fa-times"></i></button>
                </header>
                <form>
                    <div>
                        <label>Cid</label>
                        <p>{data.cid}</p>
                    </div>
                    <div>
                        <label>Type</label>
                        <select name='type' id='typ' value={data.typ}>
                            <option>Article</option>
                            <option>Book</option>
                        </select>
                    </div>
                    <div>
                        <label>Title</label>
                        <input type='text' id='tle' value={data.tle} />
                    </div>
                    <div>
                        <label>Sub Title</label>
                        <input type='text' id='tle' value={data.subTle} />
                    </div>
                    <div>
                        <label>Image</label>
                        <input type='url' placeholder='https://imageUrl.com' value={data.img} />
                    </div>
                    <div>
                        <label>URL</label>
                        <p>{data.url}</p>
                    </div>
                    <div>
                        <button className='button3' type='submit'>Submit <i className="fas fa-save"></i></button>
                        <button className='button3-cancle' onClick={handleClose}>Cancle</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContentDetailForm