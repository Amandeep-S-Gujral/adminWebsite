const contentListModelFactory = () => new ContentListModel()

class ContentListModel{
    constructor(){
        this.cid = ''
        this.title = 
        this.subTitle = ''
        this.image = ''
        this.url = ''
        this.category = ''
        this.type='article'
    }

    getEmpty(){
        return this
    }
}

export{
    ContentListModel,
    contentListModelFactory
}