const contentListDispatcherFactory = (obj) => new ContentListDispatcher(obj)

class ContentListDispatcher {
    constructor(container) {
        this.url = new URL(container.config().getValue('baseUrl')+'/contentList/')
        this.apiRequestModel = container.apiRequestModel()
    }

    async getContentListByType(typ) {
        const req = this.apiRequestModel.setHttpMethod('GET').setBodyNull()
        this.url.search = new URLSearchParams({ typ })
        return await this.fetch(this.url, {...req})
    }

    async addNewContentToList(data) {
        let req = this.apiRequestModel.setHttpMethod('POST').setBody(data)
        return await this.fetch(this.url, {...req})
    }

    async setEntryInContentList(data) {
        let req = this.apiRequestModel.setHttpMethod('PATCH').setBody(data)
        return await this.fetch(this.url, {...req})
    }

    async fetch(url, req) {
        let data
        await fetch(url, req)
            .then(res => res.json())
            .then(obj => data = obj)
            .catch(e => alert(e))
        return data
    }


}

export default contentListDispatcherFactory
