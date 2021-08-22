import React from 'react'

const ContentEditorToolBar = ({handleSection, handlePost, handleSave, handlePerview, checked }) => {
    return (
        <div className="bar2">
            <div>
                <button className='button1-large' onClick={handleSection} value='editor'>Editor</button>
                <button className='button1-large' onClick={handleSection} value='meta'>Meta Tags</button>
            </div>
            <div>
                <label className='checkbox1'>Published <input type='checkbox' name='published' checked={checked} onChange={handlePost} /></label>
                <button className='button4'>Preview <i className="fas fa-eye"></i></button>
                <button className='button4' onClick={handleSave}>Save <i className="fas fa-save"></i></button>
            </div>
        </div>
    )
}

export default ContentEditorToolBar