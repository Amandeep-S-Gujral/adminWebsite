import React from 'react'

const WithContentBody = (container) => {
    return class ContentBodyContainer extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                cid: this.props.match.params.cid,
                path: this.props.match.url,
                data: null,
                editorState: container.EditorState.createEmpty(),
                section: 'editor',
            }
            this.fetchBody = this.fetchBody.bind(this)
            this.fetchStoreList = this.fetchStoreList.bind(this)
            this.onEditorStateChange = this.onEditorStateChange.bind(this)
            this.handleSection = this.handleSection.bind(this)
            this.handlePost = this.handlePost.bind(this)
            this.handleMetaChange = this.handleMetaChange.bind(this)
            this.handleDetailChange = this.handleDetailChange.bind(this)
            this.handleStoreChange = this.handleStoreChange.bind(this)
            this.handlePreview = this.handlePreview.bind(this)
            this.handleSave = this.handleSave.bind(this)
        }

        async componentDidMount() {
            this.fetchBody()
            this.fetchStoreList()
        }

        //get calls
        async fetchBody() {
            let editorState = this.state.editorState
            let meta = {}
            let detail = {}
            let store = []
            const res = await container.contentBodyDispatcher().getContentBodyByCid(this.state.cid)
            const data = res.pop()
            if (data.body !== undefined) {
                editorState = container.parser().rawToEditorState(data.body)
            }
            if (data.detail !== undefined) {
                detail = JSON.parse(data.detail)
            }
            if (data.store !== undefined) {
                store = JSON.parse(data.store)
            }
            if (data.meta !== undefined) {
                meta = JSON.parse(data.meta)
            }
            return this.setState({ data, editorState, meta, detail, store })
        }

        async fetchStoreList() {
            const data = await container.contentBodyDispatcher().getStoreList()
            const storeList = data.pop().body
            return this.setState({ storeList })
        }

        //state management
        handleSection(e) {
            const section = e.target.value
            this.setState({ section })
            return
        }

        onEditorStateChange(editorState) {
            this.setState({ editorState })
            return
        }

        handleMetaChange(e) {
            const meta = this.state.meta
            Object.assign(meta, { [e.target.id]: e.target.value })
            this.setState({ meta })
            return
        }

        handleDetailChange(e) {
            const detail = this.state.detail
            Object.assign(detail, { [e.target.id]: e.target.value })
            this.setState({ detail })
            return
        }

        handleStoreChange(e) {
            const store = this.state.store
            const storeName = e.target.id
            const url = e.target.value
            const result = store.filter(obj => obj.storeName === storeName)
            if (result.length > 0) {
                store.find((obj, index) => {
                    if (obj.storeName === storeName) {
                        store[index] = { storeName, url }
                        return true
                    }
                })
            }

            if (result.length === 0) {
                store.push({ storeName, url })
            }

            this.setState({ store })
            return
        }

        handlePreview() {
            this.handleSave()

        }

        //post calls
        async handlePost() {
            const data = this.state.data
            data.post = !data.post
            this.setState({ data })
            await container.contentBodyDispatcher().setContentBodyAttribute(this.state.data)
            return
        }

        async handleSave() {
            const data = this.state.data
            const meta = this.state.meta
            meta.url = data.url
            data.body = container.parser().editorStateToRaw(this.state.editorState)
            data.meta = JSON.stringify(meta)
            data.detail = JSON.stringify(this.state.detail)
            data.store = JSON.stringify(this.state.store)
            await container.contentBodyDispatcher().setContentBody(data)
            window.location.reload()
            return
        }

        render() {
            const { data, section, path, editorState, meta, storeList, store } = this.state

            //api response catch block
            if (data === null) {
                return (
                    <div className='display2'>
                        <container.HeaderWithNav container={container} path={path} />
                        <container.Loading />
                    </div>
                )
            }

            //error catch block
            //pending...

            //final data render
            return (
                <>
                    <div className='display2'>
                        <container.HeaderWithNav container={container} path={path} />
                        <container.ContentEditorToolBar
                            handleSave={this.handleSave}
                            handlePost={this.handlePost}
                            handleSection={this.handleSection}
                            post={data.post}
                            type={data.type}
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
                        {section === 'detail' && <container.DetailForm
                            handleChange={this.handleDetailChange}
                        />
                        }
                        {section === 'store' && <container.StoreForm
                            storeList={storeList}
                            store={store}
                            handleChange={this.handleStoreChange}
                        />
                        }
                    </div>
                </>
            )
        }
    }
}

export default WithContentBody