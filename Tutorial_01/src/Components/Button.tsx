// props type :onClick
type ButtonProps = {
    handleClick : (event:React.MouseEvent<HTMLButtonElement>,id:number) => void;
}

export default function Button(props:ButtonProps) {
  return (
    <div>
        <button onClick={(event) => {props.handleClick(event,1)}}>Click</button>
    </div>
  )
}
