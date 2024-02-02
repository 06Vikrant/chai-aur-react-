import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {


    // HOW TO GET THE DATA
    // we are receiving the data so we take user information
    const {user} = useContext(UserContext)

    //--------------- conditional return -----------// 
    // if user is not there
    if (!user) return <div>Please Login</div>

    // if YES, there
    // extacting the user from username
    return <div>Welcome {user.username}</div>

}
