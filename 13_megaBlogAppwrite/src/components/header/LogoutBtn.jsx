import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../store/authSlice'
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })
    }
    
  return (
    <Button className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full'>
        Logout
    </Button>
  )
}

export default LogoutBtn
