import React from 'react'
import {useParams} from 'react-router-dom'

export default function User() {
    const {userid} = useParams();
    return (
        <div>
            <h1 className='text-3xl p-4 bg-gray-400'>User id:{userid}</h1>
        </div>
    )
}