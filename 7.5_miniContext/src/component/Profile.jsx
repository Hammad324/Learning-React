import React, {useContext} from 'react';
import UserContext from '../context/userContext';

function Profile() {
    const {user} = useContext(UserContext) // simply destructure user var
    // conditional return
    if (!user) return (<div>Please Login</div>)
    return <div>Welcome, {user.username}</div>
}

export default Profile