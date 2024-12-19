// props type : array of objects
type ListName = {
    names:{
        firstName:string;
        lastName:string;
    }[]
}

export default function PersonList(props:ListName) {
  return (
    <div>
        {props.names.map((name) => {
            return (
            <h1 key={Math.random()}> 
            {name.firstName} {name.lastName}</h1>
            )
        })}
    </div>
  )
}
