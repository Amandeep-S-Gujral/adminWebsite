const contentBodyDispacherFactory = (container) => new ContentBodyDispatcher(container)

class ContentBodyDispatcher {
    constructor(container) {
        this.url = new URL(container.config().getValue('baseUrl') + '/contentBody/')
        this.apiRequestModel = container.apiRequestModel()
        this.token = container.cookies.get('idToken')
        this.container = container
    }

    async getContentBodyByCid(cid) {
        const req = this.apiRequestModel.setHttpMethod('GET')
        this.url.search = new URLSearchParams({ cid })
        return await this.fetch(this.url, { ...req })
    }

    async setContentBody(data) {
        await this.container.authDispatcher().getIdToken()
        const req = this.apiRequestModel.setHttpMethod('PATCH').setBody(data).setAuth(this.token)
        return await this.fetch(this.url, { ...req })
    }

    async setContentBodyAttribute(data) {
        await this.container.authDispatcher().getIdToken()
        const req = this.apiRequestModel.setHttpMethod('PATCH').setBody(data).setAuth(this.token)
        const url = new URL('attribute', this.url)
        return await this.fetch(url, req)
    }

    async fetch(url, req) {
        let res
        await fetch(url, req)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(`response failed, code: ${res.status}`)
            })
            .then(obj => res = obj)
            .catch(err => window.alert(err))
        return res
    }
}

export default contentBodyDispacherFactory