// props type 
type StatusProps = {
    status:string;
    // status:"load" | "error" | "success";   
}

export default function Status(props:StatusProps) {
    
    let msg;

    if(props.status === 'load'){
        msg = "Loading...";
    }
    else if(props.status === "success"){
        msg = "Fteched Sccessfully";
    }
    else if(props.status === "error"){
        msg = "Error while fetching data";
    }
    else{
        msg = "no status";
    }

  return (
    <h1>Status : {msg} </h1>
  )
}