export type ProfileProps = {
    name:string;
    pass:string;
}

export default function Profile(props:ProfileProps) {
  return (
    <div>
        <p>Name:{props.name}</p>
        <p>Password:{props.pass}</p>
    </div>
  )
}