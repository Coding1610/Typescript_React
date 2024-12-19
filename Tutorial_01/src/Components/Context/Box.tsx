import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function Box() {

    const theme = useContext(ThemeContext);

  return (
    <>
        <div 
            style={{backgroundColor:theme.primary.main, color:theme.primary.text, padding:theme.primary.padding}}>
            Style Me
        </div>

        <div 
            style={{backgroundColor:theme.secondary.main, color:theme.secondary.text, padding:theme.secondary.padding}}>
            Style Me
        </div>
    </>
  )
}