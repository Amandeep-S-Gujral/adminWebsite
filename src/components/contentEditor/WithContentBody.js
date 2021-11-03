import React from 'react'

const WithContentBody = (container) => {
    return class ContentBodyContainer extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                cid: this.props.match.params.cid,
                path: this.props.match.url,
                data: null,
                meta: undefined,
                editorState: container.EditorState.createEmpty(),
                section: 'editor'
            }
            this.fetchBody = this.fetchBody.bind(this)
            this.onEditorStateChange = this.onEditorStateChange.bind(this)
            this.handleSection = this.handleSection.bind(this)
            this.handlePost = this.handlePost.bind(this)
            this.handleMetaChange = this.handleMetaChange.bind(this)
            this.handlePreview = this.handlePreview.bind(this)
            this.handleSave = this.handleSave.bind(this)
        }

        async componentDidMount() {
            this.fetchBody()
        }

        async fetchBody() {
            let editorState = this.state.editorState
            let meta = container.metaDataModel().getEmpty()
            const res = await container.contentBodyDispatcher().getContentBodyByCid(this.state.cid)
            const data = res.pop()
            if (data.body !== undefined) {
                editorState = container.parser().rawToEditorState(data.body)
            }
            if (data.meta !== undefined) {
                meta = JSON.parse(data.meta)
            }
            return this.setState({ data, editorState, meta })
        }

        onEditorStateChange(editorState) {
            this.setState({ editorState })
            return
        }

        handleSection(e) {
            const section = e.target.value
            this.setState({ section })
            return
        }

        async handlePost() {
            const data = this.state.data
            data.post = !data.post
            this.setState({ data })
            await container.contentBodyDispatcher().setContentBodyAttribute(this.state.data)
            return
        }

        handleMetaChange(e) {
            const key = e.target.id
            const meta = this.state.meta
            meta[key] = e.target.value
            this.setState({ meta })
            return
        }

        handlePreview() {
            this.handleSave()

        }

        async handleSave() {
            const data = this.state.data
            const meta = this.state.meta
            meta.url = data.url
            console.log(meta)
            data.body = container.parser().editorStateToRaw(this.state.editorState)
            data.meta = JSON.stringify(meta)
            await container.contentBodyDispatcher().setContentBody(data)
            window.location.reload()
            return
        }

        render() {
            const { data, section, path, editorState, meta } = this.state
            if (data === null) {
                return (
                    <div className='display2'>
                        <container.HeaderWithNav container={container} path={path} />
                        <container.Loading />
                    </div>
                )
            }
            return (

                <>
                    <div className='display2'>
                        <container.HeaderWithNav container={container} path={path} />
                        <container.ContentEditorToolBar
                            handleSave={this.handleSave}
                            handlePost={this.handlePost}
                            handleSection={this.handleSection}
                            post={data.post}
                        />
                        {section === 'editor' && <container.TextEditor
                            container={container}
                            editorState={editorState}
                            onEditorStateChange={this.onEditorStateChange}
                        />}
                        {section === 'meta' && <container.MetaTagForm
                            url={data.url}
                            meta={meta}
                            handleChange={this.handleMetaChange}
                        />}
                    </div>
                </>
            )
        }
    }
}

export default WithContentBody