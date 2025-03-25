import { createContext } from "react";

// Here we are creating a new context with a default value that can be used in all over the application where we provide by UserContext.Provider
const UserContext = createContext({
    loggedInUser : "Default User",
});

console.log(UserContext)
export default UserContext;