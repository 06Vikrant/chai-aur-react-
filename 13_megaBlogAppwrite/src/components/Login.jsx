import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from '../components'
import authService from '../appwrite/auth'



const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');

    const login = async(data) => {
        console.log(data);
        setError('');
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData));
                navigate('/');
            } 
        } catch (error) {
            setError(error.message);
        }
    }

  return (
    <div className='flex items-center justify-center w-full'>
        <div className={` mx-auto w-full max-w-lg
        bg-gray-100 rounded-xl p-10 border border-black/10`}
        >
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width='100%'/>
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>
                Sign in to your account
            </h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Don&apos;t have any account?&nbsp;
                <Link 
                    to='/signup'
                    className='font-medium text-primary transition-all duration-200 hover:underline'
                    >
                    Sign Up
                </Link>
            </p>
            {/* display ERROR! */}
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
            {/* whenever the form gets submitted we use handleSubmit method */}
            {/* handleSubmit: a method where we specify our method that how to handle a form  */}
            {/* handleSubmit: is an event */}
            {/* USE: input field we use register and automatically picks the value from there and handleSubmit will manage */}
            <form className='mt-8' onSubmit={handleSubmit(login)}>
                <div className='space-y-5'>
                    <Input 
                        label='Email: '
                        type='email'
                        // we need to spread the register, WHY?  
                        // if we use register in another input field it overrides those input values
                        placeholder='Enter your email'
                        {...register('email', {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value)
                                || "Email address must be valid address",
                            }
                        })}
                    />
                    <Input 
                        label='Password: '
                        type='password'
                        placeholder='Enter your password'
                        {...register('password', {
                            required: true,
                        })}
                    />
                    <Button 
                    type='submit'
                    className='w-full'
                    // placeholder='Sign In'
                    >
                        Sign in
                    </Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
