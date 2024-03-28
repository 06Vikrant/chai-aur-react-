import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components/index'
import databaseService from '../appwrite/config'

const AllPosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        databaseService.getPosts([])
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            })
    }, [])
    
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/3'>
                    <PostCard  post={post}/>
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
