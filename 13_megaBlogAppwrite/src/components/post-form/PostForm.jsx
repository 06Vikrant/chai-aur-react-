import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'
import databaseService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostForm = ({ post }) => {
    // we take info from useForm()
    // watch: continously  monitor any field 
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || '',
        }
    });

    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData);

    // if the user has submitted the form
    // useCases: 
    //          1. if post value ? update : create a new entry
    const submit = async (data) => {
        // case 1: if post value exists, then UPDATE
        if (post) {
            // upload the file
            const file = data.image[0] ? databaseService.uploadFile(data.image[0]) : null

            // delete the prev image/file
            if (data) {
                databaseService.deleteFile(post.featuredImage);
            }

            // update the post
            const dbPost = await databaseService.updatePost(
                post.$id, {
                    featuredImage: file ? file.$id : undefined,
                    // if dbPost successfully updated then navigate the user where he started editing
                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    }
                }
            )
        } else { // case 2: if post is not there, then
            // nothing to update, user want to create a new form
            // upload the file
            // TODO: improve the file upload 
            const file = await databaseService.uploadFile(data.image[0]);

            if (file) {
                // update the fileID
                const fileID = file.$id;
                data.featuredImage = fileID;
                // send the rest of the properties
                const dbPost = databaseService.createPost({
                    ...data, 
                    userID: userData.$id,
                });
                // redirecting the user to dbPost
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    }

    // What it does? we have two input fields
    // 1. title: we need to watch for changes 
    // 2.slug: need to generate values inside the slug
    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string')
            // const slug = value.toLowerCase().replace(/ /g,'-')
            // setValue('slug', slug);
            // return slug;
            //--------------OR-------------//
            return value
                .trim()
                .toLowerCase()
                .replace(/^[a-zA-Z\d\s]+/g, '-') //d: digits, s:spaces
                .replace(/\s/g, '-')

            return ''
    }, [])

    useEffect(() => {
        // subscription is made with watch method as well as other methods to0
        const subscription = watch((value, {name}) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title, 
                    {shouldValidate: true}));
            }
        })

        // to stop looping through again after we use return 
      return () => {
        // memory management/optimisation
        return subscription.unsubscribe();
      }
    }, [])
    
  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
        <div className='w-2/3 px-2'>
            <Input
                label='Title: '
                placeholder='Title'
                className='mb-4'
                {...register('title', { required: true})}
            />
            <Input 
                label='Slug: '
                placeholder='Slug'
                className='mb-4'
                {...register('slug', { required: true})}
                // it fills the value automatically
                // jaise values fill hoti jaegi, we watch title and add values in subscription
                onInput={(e) => {
                    setValue('slug', slugTransform(e.currentTarget.value), {
                        shouldValidate: true
                    })
                }}
            />
            <RTE 
                label='Content: '
                name='content'
                control={control}
                defaultValue={getValues('content')}
            />
        </div>
        <div className='w-1/3 px-2'>
            <Input
                label='Featured Image :'
                type='file'
                className='mb-4'
                accept='image/png, image/jpeg, image/jpg, image/gif'
                {...register('image', {required: !post})}
            />
            {post && (
                <div className='w-full mb-4'>
                    <Image 
                        src={databaseService.getFilePriview(post.featuredImage)}
                        alt={post.title}
                        className='rounded-lg'
                    />
                </div>
            )}
            <Select 
                label='Status'
                options={['active', 'inactive']}
                className='mb-4'
                {...register('status', {required: true})}
            />
            <Button
                type='submit'
                bgColor={post ? 'bg-green-500' : undefined}
                className='w-full'
            >
                {post ? "Update": "Submit"}
            </Button>
        </div>
    </form>
  )
}

export default PostForm
