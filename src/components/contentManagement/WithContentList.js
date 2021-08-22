import React from 'react'

const WithContentList = (container) => {
    return class ContentListContainer extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                showContentDetail: false,
                path: this.props.match.path,
                data: {},
                listFormData: {},
                filter: {
                    category: 'article'
                }
            }
            this.fetchList = this.fetchList.bind(this)
            this.handleSearch = this.handleSearch.bind(this)
            this.handleView = this.handleView.bind(this)
            this.handleClose = this.handleClose.bind(this)
            this.handleNew = this.handleNew.bind(this)
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }

        componentDidMount() {
            this.fetchList()
        }

        componentDidUpdate(prevProps, prevState) {
            if (prevState.filter !== this.state.filter) {
                this.fetchList()
            }
        }
        async fetchList() {
            const data = await container.contentListDispatcher().getContentListByType(this.state.filter.category)
            this.setState({ data })
        }

        handleSearch(e) {
            const key = e.target.id
            const filter = { ...this.state.filter }
            filter[key] = e.target.value
            this.setState({ filter })
        }

        handleView(e) {
            const cid = e.target.value
            let listFormData = {}
            this.state.data.filter(obj => obj.cid === cid).map(obj => listFormData = { ...obj })
            const showContentDetail = !this.state.showContentDetail
            return this.setState({ listFormData, showContentDetail })
        }

        handleClose() {
            const showContentDetail = false
            this.setState({ showContentDetail })
        }

        handleNew() {
            let listFormData = container.contentListModel().getEmpty()
            const showContentDetail = !this.state.showContentDetail
            this.setState({ listFormData, showContentDetail })
        }

        handleChange(e) {
            const key = e.target.id
            const listFormData = { ...this.state.listFormData }
            listFormData[key] = e.target.value
            this.setState({ listFormData })
        }

        handleSubmit(e) {
            document.getElementById(e.target.id).innerHTML = '...Loading'
            const data = { ...this.state.listFormData }
            if (data.cid === "") {
                container.contentListDispatcher().addNewContentToList(data)
                    .then(() => window.location.reload())
                return
            }
            container.contentListDispatcher().setEntryInContentList(data)
                .then(() => window.location.reload())
        }

        render() {
            const { data, path, listFormData, showContentDetail } = this.state

            //api response catch block
            if (Object.keys(data).length === 0) {
                return (
                    <div className='display2'>
                        <container.HeaderWithNav container={container} />
                        <container.ToolBar handleNew={this.handleNew} handleSearch={this.handleSearch} />
                        <container.Loading />
                    </div>
                )
            }

            //error catch block
            if (data.err !== undefined) {
                return (
                    <div className='display2'>
                        {showContentDetail && <container.ContentListForm
                            data={listFormData}
                            handleChange={this.handleChange}
                            handleClose={this.handleClose}
                            handleSubmit={this.handleSubmit}
                        />}
                        <container.HeaderWithNav container={container} />
                        <container.ToolBar handleNew={this.handleNew} handleSearch={this.handleSearch} />
                        <container.Error err={data.err} />
                    </div>
                )
            }

            //final data render
            return (
                <>
                    <div className='display2'>
                        {showContentDetail && <container.ContentListForm
                            data={listFormData}
                            handleChange={this.handleChange}
                            handleClose={this.handleClose}
                            handleSubmit={this.handleSubmit}
                        />}
                        <container.HeaderWithNav container={container} path={path} />
                        <container.ToolBar handleNew={this.handleNew} handleSearch={this.handleSearch} />
                        <container.ContentListTable container={container} data={data} handleView={this.handleView} />
                    </div>
                </>
            )
        }
    }
}

export default WithContentList