import React from 'react'

const WithAttributeData = (container) => {
    return class AttributeDataContainer extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                website: container.config().getValue('website'),
                attributes: container.config().getValue('attributes'),
                attributeList: container.config().getValue('attributeList'),
                attributeSelection: 'easyManagement'
            }
            this.handleClick = this.handleClick.bind(this)
        }

        async handleClick(e) {
            const attributeName = e.target.value
            const data = this.state
            data.attributeSelection = attributeName
            this.setState({ ...data })
        }

        render() {
            return (
                <>
                <container.Header container={container} />
                <div className='display-grid1'>
                    <div className="grid1-a">
                        <container.Attributes
                            website={this.state.website}
                            attributes={this.state.attributes}
                            handleClick={this.handleClick} />
                        <container.AttributeList
                            attributeSelection={this.state.attributeSelection}
                            attributeList={this.state.attributeList} />
                    </div>
                    <div className="grid1-b">
                        <container.SignIn container={container} />
                    </div>
                </div>
                </>
            )
        }
    }
}

export default WithAttributeData