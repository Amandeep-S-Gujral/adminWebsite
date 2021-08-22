const metaDataModelFactory = () => new MetaDataModel()

class MetaDataModel{
    constructor(){
        this.title = ''
        this.description = ''
        this.image = ''
        this.keywords = ''
        this.url = ''
    }

    getEmpty(){
        return this
    }
}

export {
    metaDataModelFactory,
    MetaDataModel
}