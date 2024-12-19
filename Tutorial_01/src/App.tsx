import Greet from "./Components/Greet";
import Oscar from "./Components/Oscar";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Status from "./Components/Status";
import Box from "./Components/Context/Box";
import User from "./Components/State/User";
import Heading from "./Components/Heading";
import DomRef from "./Components/Ref/DomRef";
import List from "./Components/Generics/List";
import Users from "./Components/Context/Users";
import Container from "./Components/Container";
import Profile from "./Components/Auth/Profile";
import Private from "./Components/Auth/Private";
import Counter from "./Components/State/Counter";
import PersonList from "./Components/PersonList";
import Counter2 from "./Components/Class/Counter2";
import ImportTypes from "./Components/ImportTypes";
import LoginLogout from "./Components/State/LoginLogout";
import RandomNumber from "./Components/Restriction/RandomNumber";
import { UserContextProvider } from "./Components/Context/UserContext";
import { ThemeContextProvider } from "./Components/Context/ThemeContext";

export default function App() {

  const personList = [
    {
      firstName:"Yash",
      lastName:"Prajapati"
    },
    {
      firstName:"Jaimin",
      lastName:"Unagar"
    }
  ];

  return (
    <div>

      <Greet name="Yash" age={21} isMarried={false}/>
      <p>-------------------------</p>

      <PersonList names={personList}/>
      <p>-------------------------</p>

      <Status status="load"/>
      <p>-------------------------</p>

      <Heading> Hello I'm Heading </Heading>
      <p>-------------------------</p>

      <Oscar>
        <Heading> Oscar Cartoon </Heading>
      </Oscar>
      <p>-------------------------</p>

      <Button handleClick={(event,id)=>{console.log("Hello",event,id)}}/>
      <p>-------------------------</p>

      <Input value="" handleOnChange={(event) => {console.log("Hello",event)}}/>
      <p>-------------------------</p>

      <Container style={{border:'5px solid purple', padding:'2px'}} />
      <p>-------------------------</p>

      <ImportTypes fName='F' mName='M' lName='L'/>
      <p>-------------------------</p>

      <LoginLogout/>
      <p>-------------------------</p>

      <User/>
      <p>-------------------------</p>

      <Counter/>
      <p>-------------------------</p>

      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <p>-------------------------</p>

      <UserContextProvider>
        <Users/>
      </UserContextProvider>
      <p>-------------------------</p>

      <DomRef/>
      <p>-------------------------</p>

      <Counter2 msg='Count'/>
      <p>-------------------------</p>

      <Private isLoggedIn={true} component={Profile}/>
      <p>-------------------------</p>

      <List items={["apple","orange","banana","mango"]} onClick = {(val) => console.log(val)} />
      <p>-------------------------</p>

      <RandomNumber value={16} isPositive/>

    </div>
  )
}