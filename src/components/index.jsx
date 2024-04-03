import axios from 'axios'
import { useEffect, useState } from "react"
import "./index.css"

const url = 'https://jsonplaceholder.typicode.com/users'
let componentYrandimi = false
function Counter() {
    const [users, setUsers] = useState([]) //hook use*
    const [isDark, setIsDark] = useState(false) //hook use*

    // []-> dependency list bos olanda mount-dur
    useEffect(() => {
        console.log('men geldim5');
    }, [users])


    
    if (componentYrandimi === false) {
        axios.get(url).then(({ data }) => {
            setUsers(data)
            componentYrandimi = true
            let fromStronge = localStorage.getItem('isDark')
            setIsDark(fromStronge === "true" ? true : false)
        })
    }
    return (
        <>

        </>
    )
}

export default Counter;