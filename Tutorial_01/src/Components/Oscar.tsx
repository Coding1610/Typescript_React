import React from "react"

// props type : children
type OscarProps = {
    children:React.ReactNode;
}

export default function Oscar(props:OscarProps) {
  return (
    <div>{props.children}</div>
  )
}