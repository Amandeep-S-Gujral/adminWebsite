import React from 'react'

const TextEditor = ({ container, editorState, onEditorStateChange }) => {
    return (
        <div className='textEditor'>
            <container.Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                toolbar={{
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                }}
            />
        </div>
    )
}

export default TextEditor