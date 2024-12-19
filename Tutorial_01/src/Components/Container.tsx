import { CSSProperties } from "react"

// porps type : CSS
type ContainerProps = {
    style:CSSProperties
}

export default function Container(props:ContainerProps) {
  return (
    <div style={props.style}>
        <h1>Style Me</h1>
    </div>
  )
}
