
type ListProps<T> = {
    items:T[];
    onClick : (item:T) => void;
}

export default function List<T extends {}>({items,onClick}:ListProps<T>) { // <T extends {}> means apko T ki value kya rakhni hai ..
  return (
    <div>
        {items.map((item,index) => {
            return (
                <div className="cursor-pointer" key={index} onClick = {() => onClick(item)}></div> // children = {item}
            )
        })}
    </div>
  )
}
