import React from "react"

const StoreForm = ({ store, handleChange }) => {

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

export default StoreForm