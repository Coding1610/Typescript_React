import { Name } from "./Props.types"

export default function ImportTypes(props:Name) {
  return (
    <div>
        <p>{props.fName} {props.mName} {props.lName}</p>
    </div>
  )
}