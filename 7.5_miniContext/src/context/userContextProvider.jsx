// as we will be returning jsx 
import React from "react";
import { useState } from "react";
import UserContext from "./userContext";

const userContextProvider = ({children}) => {
    // we will create a state to keep the track of it.
    const [user, setUser] = useState(null)
    // children is meant by the nested components.
    return (
        <UserContext.Provider value={{user, setUser}}> 
        {children} 
        </UserContext.Provider>
    )
}
// passing in an object in the prop so we can give access to multiple data.
// render all the nested components as it is.
export default userContextProvider;