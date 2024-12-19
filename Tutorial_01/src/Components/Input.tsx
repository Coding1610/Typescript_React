// props type : onChange
type InputProps = {
    value:string;
    handleOnChange : (event:React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props:InputProps) {
  return (
    <div>
        <input type="text" value={props.value} onChange={(event) => {props.handleOnChange(event)}}/>
    </div>
  )
}