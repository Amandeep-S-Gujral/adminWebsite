import React from 'react'

const Error = ({ err }) => {
    return (
        <div className='notifier-error'>
            <p><i class="fas fa-exclamation-circle"></i> {err}</p>
        </div>
    )
}

export default Error