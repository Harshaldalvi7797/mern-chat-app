import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Chatpage() {
  const [chats, setChats] = useState([])

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat")
    // console.log(data)
    setChats(data.data)
  }
  useEffect(() => {
    fetchChats()

  }, [])
  // console.log("chats",chats)
  return (
    <div>{chats.map((item => <p>{item.chatName}</p>
    ))}</div>
  )
}
