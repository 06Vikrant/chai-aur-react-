import React, { useContext }from 'react'
import UserContext from '../context/UserContext'


export default function () {

    // for username/password we need an state to update
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    // *******************
     // SENDING THE DATA //
    // ******************* 
    // useContext hook
    // we get the access of setUser from the context passed as the UserContext
    const {setUser} = useContext(UserContext)

    // How to send the data
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        // how to control the useState value
        value={username}
        // to update the state
        // if any events happen call the setUsername and pass this value 
        onChange={(e) => setUsername(e.target.value)}
        type="text" 
        placeholder='username' 
        />
        <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text" 
        placeholder='password' 
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
