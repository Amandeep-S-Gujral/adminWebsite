const contentListDispatcherFactory = (container) => new ContentListDispatcher(container)

class ContentListDispatcher {
    constructor(container) {
        this.url = new URL(container.config().getValue('baseUrl')+'/contentList/')
        this.apiRequestModel = container.apiRequestModel()
        this.token = container.cookies.get('idToken')
        this.container = container
    }

    async getContentListByType(type) {
        const req = this.apiRequestModel.setHttpMethod('GET').setBodyNull().setAuth(this.token)
        this.url.search = new URLSearchParams({ type })
        return await this.fetch(this.url, {...req})
    }

    async addNewContentToList(data) {
        await this.container.authDispatcher().getIdToken()
        let req = this.apiRequestModel.setHttpMethod('POST').setBody(data).setAuth(this.token)
        return await this.fetch(this.url, {...req})
    }

    async setEntryInContentList(data) {
        await this.container.authDispatcher().getIdToken()
        let req = this.apiRequestModel.setHttpMethod('PATCH').setBody(data).setAuth(this.token)
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
