// type with useContext() : future value

import { useState, createContext } from "react"

// children type
type UserContextProviderProps = {
    children:React.ReactNode;
}

// UserContext type
type UserContextProps = {
    user:AuthUser|null;
    setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

// user type
export type AuthUser = {
    name:string;
    email:string;
}

// Context
export const UserContext = createContext<UserContextProps|null>(null);

// Provider
export const UserContextProvider = ({children}:UserContextProviderProps) => {

    const [user,setUser] = useState<AuthUser|null>(null);

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}