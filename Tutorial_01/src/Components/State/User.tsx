import { useState } from 'react'

// type with useState()
// future value : type generics

type UserType = {
    name:string;
    email:string;
}

export default function User(){

    const[user,setUser] = useState<UserType|null>(null);  // type assertion :useState<UserType>({} as UserType)

    const handleOut = () => {
        setUser(null);
    }

    const handleIn = () => {
        setUser({
            name:"Yash",
            email:"yash1610@gmail.com"
        })
    }

  return (
    <div>
        <button onClick={handleOut}>LogOut</button>
        <button onClick={handleIn}>LogIn</button>
        <h2>User name {user?.name} </h2>
        <h2>User email {user?.email} </h2>
    </div>
  )
}
