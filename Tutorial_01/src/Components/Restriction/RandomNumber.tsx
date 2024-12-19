type RandomNumber = {
    value:number;
}

type PositiveNumber = RandomNumber & {
    isPositive:boolean;
    isNegative?:never;
    zero?:never;
}

type NegativeNumber = RandomNumber & {
    isNegative:boolean;
    isPositive:never;
    zero?:never;
}

type Zero = {
    zero:number;
    isPositive?:never;
    isNegative?:never;
}

type RandomNumberProps = RandomNumber | PositiveNumber |NegativeNumber |Zero;

export default function RandomNumber({value,isPositive,isNegative,zero}:RandomNumberProps){
  return (
    <div>
        {value}
        {isPositive && 'Positive'}
        {isNegative && 'Negative'}
        {zero && 'Zero'}
    </div>
  )
}