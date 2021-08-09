import React from 'react'

const ContentListTable = ({ data, handleView }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Cid</th>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Posted</th>
                    <th>Url</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map(obj => <tr key={obj.cid}>
                    <td>{obj.cid}</td>
                    <td>{obj.tle}</td>
                    <td>{obj.typ}</td>
                    <td>{obj.cat}</td>
                    <td>{new Date(obj.timestamp * 1000).toDateString()}</td>
                    <td>{obj.post}</td>
                    <td><a href={obj.url} target="_blank">click</a></td>
                    <td><button className='link1' value={obj.cid} onClick={handleView}>View</button></td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default ContentListTable