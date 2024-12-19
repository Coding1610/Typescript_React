// props type
type PropType = {
    name:string;
    age?:number;
    isMarried:boolean;
}

export default function Greet(props:PropType) {
  return (
    <div>
        <h1>Hy, I'm {props.name}, I'm {props.age} years old. You are married ? {props.isMarried}</h1>
    </div>
  )
}