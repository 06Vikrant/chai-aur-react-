import React from 'react'
// it allows us to capture the individual id's of the user that enters
import { useParams } from 'react-router-dom'

export default function User() {
    // creating a custom hook to capture the user id's
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-5xl text-white p-4'>
        User: {userid} 
    </div>
  )
}

