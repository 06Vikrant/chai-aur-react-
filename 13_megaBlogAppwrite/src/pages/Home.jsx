import React, { useState, useEffect } from 'react'
import databaseService from '../appwrite/config';
import { Container, PostCard } from '../components'


const Home = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        databaseService.getPosts().then((posts) => {
            if (posts) setPosts(posts.documents);
        })
    }, [])

    // check post whether exists and length of the posts too
    // 1. posts.length > 0
    return (
        posts && posts.length === 0 ? (
        <div className='w-full py-8 mt-4 text-center'>
            <Container>
                <div className='flex flex-wrap'>
                    <div className='p-2 w-full'>
                        <h1 className='text-2xl font-bold hover:text-gray-500'>
                            Login to read posts
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    ) : ( //if posts exists, then
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {/* adding a check to ensure that posts is not null or undefined before attempting to map over it */}
                    {posts && posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            {/* PROBLEM: only one post is sent */}
                            {/* <PostCard post={post} />  */}
                            {/* so to avoid it by giving posts one by one we spread them out */}
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
    )
}

export default Home
