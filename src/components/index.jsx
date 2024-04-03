import axios from 'axios'
import { useEffect, useState } from "react"
import "./index.css"

const url = 'https://jsonplaceholder.typicode.com/users'

function Counter() {
    const [users, setUsers] = useState([]) //hook use*
    const [isDark, setIsDark] = useState(false) //hook use*

    // []-> dependency list bos olanda mount-dur
    useEffect(() => {
        console.log('men geldim5');
    }, [users])

    useEffect(() => {
        console.log('ozunnen muqayet ol');
    }, [isDark])

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            setUsers(data)

            let fromStronge = localStorage.getItem('isDark')
            setIsDark(fromStronge === "true" ? true : false)
        })
    }, [])


    return (
        <div className={isDark ? "darkContainer" : null}
        >
            <button onClick={() => {
                let newIsDark = !isDark
                setIsDark(newIsDark)
                localStorage.setItem('isDark', newIsDark)
            }}
            >{isDark ? "🌑" : "☀"}</button>
            {

                users.map((user) => {
                    return
                })

            }


        </div>
    )
}

export default Counter;