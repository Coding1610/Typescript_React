import Greet from "./Components/Greet"
import PersonList from "./Components/PersonList"
import Status from "./Components/Status";
import Heading from "./Components/Heading";
import Oscar from "./Components/Oscar";
import Button from "./Components/Button";
import Input from "./Components/Input";
import Container from "./Components/Container";
import ImportTypes from "./Components/ImportTypes";

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
      
      <PersonList names={personList}/>
      
      <Status status="load"/>
      
      <Heading> Hello I'm Heading </Heading>
      
      <Oscar>
        <Heading> Oscar Cartoon </Heading>
      </Oscar>
      
      <Button handleClick={(event,id)=>{console.log("Hello",event,id)}}/>

      <Input value="" handleOnChange={(event) => {console.log("Hello",event)}}/>

      <Container style={{border:'5px solid purple', padding:'2px'}} />

      <ImportTypes fName='F' mName='M' lName='L'/>
      
    </div>
  )
}