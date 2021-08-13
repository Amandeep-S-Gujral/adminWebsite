import React from 'react'

const WithContentList = (container) => {
    return class contentListContainer extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                showContentDetail: false,
                path: this.props.match.path
            }
            this.handleView = this.handleView.bind(this)
        }

        async componentDidMount() {
            const data = await container.contentListDispatcher().getContentListByType('article')
            this.setState({ data })
        }

        handleView(e) {
            const cid = e.target.value
            let detailFormData
            if (!this.showContentDetail) {
                this.state.data.filter(obj => obj.cid === cid).map(obj => detailFormData = obj)
            }
            const showContentDetail = !this.state.showContentDetail
            this.setState({ detailFormData, showContentDetail })
        }

        render() {
            if (this.state.data === undefined) {
                return (
                    <div className='display2'>
                    <container.HeaderWithNav container={container} />
                    <div>Loading...</div>
                    </div>
                )
            }
            return (
                <>
                    <div className='display2'>
                        {this.state.showContentDetail && <container.ContentDetailForm data={this.state.detailFormData} handleClose={this.handleView} />}
                        <container.HeaderWithNav container={container} path={this.state.path} />
                        <container.ContentListTable data={this.state.data} handleView={this.handleView} />
                    </div>
                </>
            )
        }
    }
}

export default WithContentList