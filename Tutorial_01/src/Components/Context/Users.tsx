import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function Users() {

    const userContext = useContext(UserContext);

    const handleLogIn = () => {
        if(userContext){
            userContext.setUser({
                name:'Yash',
                email:'abc123@gamil.com'
            })
        }
    }

    const handleLogOut = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }

  return (
    <div>
        <button onClick={handleLogIn}>Log In</button>
        <button onClick={handleLogOut}>Log Out</button>
        <h2>{userContext?.user?.name}</h2>
        <h2>{userContext?.user?.email}</h2>
    </div>
  )
}
