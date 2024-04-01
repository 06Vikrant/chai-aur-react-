import React from 'react'
// we are taking this as this is not inside a state
// we need to apply query to use the service from appwrite
import databaseService from '../appwrite/config'
import { Link } from 'react-router-dom'

// $id: syntax in appwrite
const PostCard = ({ $id, title , featuredImage }) => {

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
            <img 
                // we storing id's inside DB
                // featuredImage: Post ID and img: ID is individual id's
                src={databaseService.getFilePriview(featuredImage)} 
                alt={title} 
            />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
