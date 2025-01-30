import React, { createContext } from "react";

const UserContext = createContext();

export default UserContext;

// har context ik provider hota hai 

// All components will be wrapped using the UserContext.
// All the components will have the access to all the context based variables.