'use client'
import {useEffect, useState} from 'react'

export default function Home() {
    const [message, setMessage] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/hello')
            const {message} = await res.json()
            setMessage(message)
        }
        fetchData()
    }, [])

    const onPost=()=>{

    }

    if (!message) return <p>Loading...</p>

    return (
        <>
            <p>{message}</p>
            <button onClick={onPost}>Postする</button>
        </>
    )
}
