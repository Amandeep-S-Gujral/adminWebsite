const contentListModelFactory = () => new ContentListModel()

class ContentListModel{
    constructor(){
        this.cid = ''
        this.tle = 
        this.subTle = ''
        this.img = ''
        this.url = ''
        this.cat = ''
        this.typ='article'
    }

    getEmpty(){
        return this
    }
}

export{
    ContentListModel,
    contentListModelFactory
}