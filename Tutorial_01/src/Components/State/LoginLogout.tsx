import { useState } from "react"

// type infere 

export default function LoginLogout() {

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    return (
        <div>
            <h1>{ isLoggedIn ? "You are Logged In" : "You are Logged Out"}</h1>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)} >Click</button>
        </div>
    )
}
