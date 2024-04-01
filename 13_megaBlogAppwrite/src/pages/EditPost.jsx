import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import databaseService from '../appwrite/config';
import { Container, PostForm } from '../components';

const EditPost = () => {
    const [post, setPost] = useState(null);
    // where to get slug
    // when user clicks then it go to the page so we need URL 
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
    //     {slug ? (
    //         databaseService.getPost(slug).then((post) => {
    //             if (post) setPost(post)
    //         })
    //     ) : navigate('/')
    // }
    slug ? 
        databaseService.getPost(slug).then((post) => {
            post && setPost(post);
    }) : 
        navigate('/');
    }, [slug, navigate])


  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null;
}

export default EditPost
