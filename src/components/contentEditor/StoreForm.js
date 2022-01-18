import React from "react"

const StoreForm = ({ store, storeList, handleChange }) => {

    if (store.length === 0) {
        return (
            <div className='formBox2'>
                <header>Add affilate links</header>'
                <form>
                    {
                        storeList.map((store, index) => <div key={index}>
                            <label>{store}</label>
                            <input type='url' id={store} onChange={handleChange} />
                        </div>)
                    }
                </form>
            </div>
        )
    }

    if (store.length > 0) {
        return (
            <div className='formBox2'>
                <header>Add affilate links</header>'
                <form>
                    {
                        store.map((obj, index) => <div key={index}>
                            <label>{obj.storeName}</label>
                            <input type='url' id={obj.storeName} onChange={handleChange} value={obj.url} />
                        </div>)
                    }
                </form>
            </div>
        )
    }

}

export default StoreForm