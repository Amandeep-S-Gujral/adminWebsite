const contentBodyDispacherFactory = (container) => new ContentBodyDispatcher(container)

class ContentBodyDispatcher{
    constructor(container){
        this.url = new URL(container.config().getValue('baseUrl')+'/contentBody/')
        this.apiRequestModel = container.apiRequestModel()
    }

    async getContentBodyByCid(cid){
        const req = this.apiRequestModel.setHttpMethod('GET')
        this.url.search = new URLSearchParams({cid})
        return await this.fetch(this.url, {...req})
    }

    async setContentBody(data){
        const req = this.apiRequestModel.setHttpMethod('PATCH').setBody(data)
        return await this.fetch(this.url, {...req})
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
            .catch(err => { throw new Error(err) })
        return res
    }
}

export default contentBodyDispacherFactory