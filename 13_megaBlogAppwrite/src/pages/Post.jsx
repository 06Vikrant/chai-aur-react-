import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'
import databaseService from '../appwrite/config'
import { Button, Container } from '../components'

const Post = () => {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector(state => state.auth.userData);

    // author exists => post and userData when post.userID === userData.$id
    // so if author exists => give edit/delete button
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        slug ? 
            databaseService.getPost(slug).then((post) => {
                post ? setPost(post) : navigate('/');
            })
         :  navigate('/')
    }, [slug, navigate])

    // so if author exists => give edit/delete button
    const deletePost = () => {
        databaseService.deletePost(post.$id).then((status) => {
            status ? (databaseService.deleteFile(post.featuredImage), navigate('/')) : null;
        })
    }
  return post ? (
    <div className='py-8'>
        <Container>
            <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
                <img 
                    src={databaseService.getFilePriview(post.featuredImage)}
                    alt={post.title}
                    className='rounded-xl'
                />

                {isAuthor && (
                    <div className='absolute right-6 top-6'>
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button
                                bgColor='bg-green-500'
                                className='mr-3'
                            >
                                Edit
                            </Button>
                        </Link>
                        <Link>
                        <Button
                            bgColor='bg-red-500'
                            onClick={deletePost}
                        >
                            Delete
                        </Button>
                        </Link>
                    </div>
                )}
            </div>
            <div className='w-full mb-6'>
                <h1 className='text-2xl font-bold'>
                    {post.title}
                </h1>
            </div>
            <div className='browser-css'>
                {parse(post.content)}
            </div>
        </Container>
    </div>
  ) : null;
}

export default Post
