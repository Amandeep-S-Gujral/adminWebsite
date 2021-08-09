const contentListDispatcherFactory = (obj) => new ContentListDispatcher(obj)

class ContentListDispatcher {
    constructor(container) {
        this.baseUrl = container.config().getValue('baseUrl')
        this.apiRequestModel = container.apiRequestModel()
        this.container = container
    }

    async getContentListByType(type) {
        let data
        const req = this.apiRequestModel.setHttpMethod('GET').setBodyNull()
        await fetch(`${this.baseUrl}/contentList/?typ=${type}`, { ...req })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(`response failed, code: ${res.status}`)
            })
            .then(obj => data = obj)
            .catch(err => { throw new Error(err) })
        return data
    }
}

export default contentListDispatcherFactory
