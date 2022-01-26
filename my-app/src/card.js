import React, { useState } from 'react'

export default function Card(props) {

    const [upvotes, setUpvotes] = useState(0)
    const [downvotes, setDownvotes] = useState(0)

    function increase() {
        setUpvotes(upvotes+1)
    }
    function decrease() {
        setDownvotes(downvotes-1)
    }
    return (
        <div className='boxes'>
            <div className='leftbox'>
                <h1>{props.name}</h1>
                <p><b>UpVotes : {upvotes}</b></p>
                <p><b>DownVotes : {downvotes}</b></p>
            </div>
            <div className='middlebox'>
                <button className='Card-arrow' onClick={increase}>&#x2B06;</button>
                <button className='Card-arrow' onClick={decrease}>&#x2B07;</button>
            </div>

        </div>
    )
}
