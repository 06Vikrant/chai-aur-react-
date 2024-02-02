import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContextProvider'

export default function App() {

  

  return (
    <UserContextProvider>
      <h1>chai aur react with new concept of state management</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

