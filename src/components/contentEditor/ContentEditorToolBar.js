import React from 'react'

const ContentEditorToolBar = ({handleSection, handlePost, handleSave, handlePerview, post, type }) => {
    return (
        <div className="bar2">
            <div>
                <button className='button1-large' onClick={handleSection} value='editor'>Editor</button>
                <button className='button1-large' onClick={handleSection} value='meta'>Meta Tags</button>
                <button className='button1-large' onClick={handleSection} value='detail'>Detail</button>
                {type === 'book'  && <button className='button1-large' onClick={handleSection} value='store'>Store</button>}
            </div>
            <div>
                <button className='button4' onClick={handlePost}>{post ? <>Remove <i className="fas fa-minus-circle"></i></> : <>Publish <i className="fas fa-globe"></i></>}</button>
                <button className='button4'>Preview <i className="fas fa-eye"></i></button>
                <button className='button4' onClick={handleSave}>Save <i className="fas fa-save"></i></button>
            </div>
        </div>
    )
}

export default ContentEditorToolBar