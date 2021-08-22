import React from 'react'

const MetaTagForm = ({url, handleChange, meta}) => {
    return(
        <div className='formBox2'>
            <header>Meta Data</header>
            <form>
                <div>
                    <label>Title</label>
                    <textarea id='title' onChange={handleChange} value={meta.title} />   
                </div>
                <div>
                    <label>Description</label>
                    <textarea id='description' onChange={handleChange} value={meta.description} />
                </div>
                <div>
                    <label>Image</label>
                    <input id='image' typ='url' onChange={handleChange} value={meta.image} placeholder='https://imageUrl.com' />
                </div>
                <div>
                    <label>Keywords</label>
                    <textarea id='keyword' onChange={handleChange} value={meta.keyword}/>
                </div>
                <div>
                    <label>URL</label>
                    <p>{url}</p>
                </div>
            </form>
        </div>
    )
}

export default MetaTagForm