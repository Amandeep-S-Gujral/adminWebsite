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
                    <th>View</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {data.map(obj => <tr key={obj.cid}>
                    <td className="centerAlign">{obj.cid}</td>
                    <td>{obj.tle}</td>
                    <td>{obj.typ}</td>
                    <td>{obj.cat}</td>
                    <td>{new Date(obj.timestamp).toDateString()}</td>
                    <td>{`${obj.post}`}</td>
                    <td className="centerAlign"><a href={obj.url} className="link1" target="_blank" rel="noreferrer">click</a></td>
                    <td className="centerAlign"><button className='button4' value={obj.cid} onClick={handleView}>View</button></td>
                    <td className="centerAlign"><button className='button4'>Edit</button></td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default ContentListTable