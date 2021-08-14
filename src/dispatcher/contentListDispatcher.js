const contentListDispatcherFactory = (obj) => new ContentListDispatcher(obj)

class ContentListDispatcher {
    constructor(container) {
        this.baseUrl = container.config().getValue('baseUrl')
        this.apiRequestModel = container.apiRequestModel()
        this.container = container
    }

    async getContentListByType(type) {
        let res
        const req = this.apiRequestModel.setHttpMethod('GET').setBodyNull()
        await fetch(`${this.baseUrl}/contentList/?typ=${type}`, { ...req })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(`response failed, code: ${res.status}`)
            })
            .then(obj => res = obj)
            .catch(err => { throw new Error(err) })
        return res
    }

    async addNewContentToList(data) {
        console.log(data)
        let res
        let req = this.apiRequestModel.setHttpMethod('POST').setBody(data)
        await fetch(`${this.baseUrl}/contentList`, { ...req })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(`response failed, code: ${res.status}`)
            })
            .then(obj => res = obj)
            .catch(err => { throw new Error(err) })
        return res
    }

    async setEntryInContentList(data) {
        let res
        let req = this.apiRequestModel.setHttpMethod('PATCH').setBody(data)
        await fetch(`${this.baseUrl}/contentList`, { ...req })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(`response failed, code: ${res.status}`)
            })
            .then(obj => res = obj)
            .catch(err => { throw new Error(err) })
        return res

    }
}

export default contentListDispatcherFactory
