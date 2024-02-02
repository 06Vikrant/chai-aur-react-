import React from 'react';
import UserContext from './UserContext';

// Create a provider 
const UserContextProvider = ({children}) => {
    // to pass the data to the provider we create a state
    //step1: API calls yhi par krlo and jo bhi access h wo 
    const [user, setUser] = React.useState(null)
    return (
        // we wrapped with the provider
        // but konsi value ka access de rhe h which is a prop inside provider
        // step2:yha par throw in krdo
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;